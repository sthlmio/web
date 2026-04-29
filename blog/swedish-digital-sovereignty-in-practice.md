---
title: Svensk digital suveränitet i praktiken
date: 2026-04-29T22:22:00+02:00
author: Fredrik Lack
excerpt: Vad innebär det egentligen att data stannar i Sverige – och vilka val behöver man göra för att det ska bli verklighet i en modern molnplattform?
image: /static/blog-swedish-data-sovereignty.svg
imageAlt: Svensk flagga bredvid amerikansk och europeisk flagga
---

Datasuveränitet är ett ord som används flitigt, men i praktiken kräver det
medvetna val genom hela arkitekturen – från var koden körs och var loggar
sparas, till vilken AI-leverantör som anropas i bakgrunden.

## Var börjar man?

Vi brukar utgå från tre frågor:

1. **Var lagras datan i vila?** Disk, databas, backuper.
2. **Var passerar datan i transit?** Loggar, metrik, observability, AI-anrop.
3. **Vem har juridisk åtkomst?** Leverantörens jurisdiktion spelar roll.

När de tre svaren pekar mot Sverige får man en grund som faktiskt håller.

## Vad "svenskt" egentligen betyder

En leverantör kan ha ett datacenter i Sverige och ändå inte ge svensk
jurisdiktion. Microsoft Azures region "Sweden Central" är fortfarande
Microsoft, och det gör företaget skyldigt att lämna ut data under
[CLOUD Act](https://en.wikipedia.org/wiki/CLOUD_Act) oavsett var den
fysiskt ligger. Samma sak gäller AWS och Google Cloud.

Det vi letar efter är ett svenskt rättssubjekt – svenska ägare, svenskt
huvudkontor och svensk personal med admin-åtkomst. Då gäller svensk lag
fullt ut, och inga andra.

## Vanliga fallgropar

Det är lätt att flytta databasen till Sverige och tro att jobbet är klart.
I praktiken läcker datan ut på andra ställen:

- **CDN och DDoS-skydd** – Cloudflare, Fastly och Akamai ser all trafik
  mot dina sidor.
- **Felrapportering** – Sentry SaaS, Datadog och New Relic skickar stack
  traces, request-data och användar-IP till USA.
- **Källkod och CI/CD** – GitHub.com och GitLab.com lagrar kod, secrets
  och build-artefakter utanför EU.
- **E-postutskick** – SendGrid, Mailgun och Postmark är amerikanska
  tjänster.
- **Inloggning och identitet** – Auth0, Okta, Firebase Authentication.
- **Webbanalys** – Google Analytics, Mixpanel, Amplitude.
- **AI-anrop** – OpenAI, Anthropic och Googles modeller direkt från
  applikationen.

För de flesta sådana tjänster finns alternativ inom EU eller Sverige. Det
handlar om att granska sin stack en bit i taget.

## AI-anropet – den nya stora variabeln

För några år sen handlade digital suveränitet mest om databasen. Idag är det
AI-anropen som flyttar mest data ut ur landet. Varje prompt till en
amerikansk leverantör kan innehålla kunddata, källkod, interna dokument
eller affärshemligheter.

RAG-applikationer förstärker problemet. När du skickar med relevant
kontext från din egen kunskapsbas till modellen är det hela dokumentet
som lämnar landet, inte bara användarens fråga.

Vi försöker använda [Berget AI](https://berget.ai) för LLM-inferens där
det går. De kör öppna modeller på svensk infrastruktur med tydliga villkor
kring lagring och användning av prompts, och för de flesta användningsfall
fungerar de bra.

De öppna modellerna är inte alltid lika starka som de stora proprietära.
För vissa uppgifter – främst kodning – behöver vi fortfarande de bästa
modellerna, och då accepterar vi att den datan lämnar landet.

## Plattform och leverantörer

Vi kör Kubernetes på OpenStack hos [Elastx](https://elastx.se) i tre
tillgänglighetszoner i Stockholm (`sto1`, `sto2`, `sto3`), e-post hos [Glesys](https://glesys.se) och
AI-inferens via [Berget AI](https://berget.ai). Kombinationen ger bra
prestanda och en tydlig juridisk position.

Det går att bygga moderna, snabba tjänster utan att lämna landet – det
kräver bara att man menar allvar med valen.
