---
title: Kubernetes på OpenStack — det starka alternativet till hyperscalers
date: 2026-04-29T22:26:00+02:00
excerpt: Hyperscalers känns tryggt — men är de det? Här är varför vi väljer Kubernetes på OpenStack, helt i svensk regi.
author: Fredrik Lack
image: /static/blog-kubernetes-on-openstack.svg
imageAlt: Kubernetes och OpenStack-loggor sida vid sida
---

Hyperscalers dominerar diskussionen om modern molndrift idag, men vi tycker att kombinationen Kubernetes på OpenStack är ett bättre alternativ. Här går vi igenom
vad teknologierna är, vilka alternativ som finns och varför vi ofta landar i just den lösningen.

## Vad är OpenStack?

[OpenStack](https://www.openstack.org/) är en plattform i öppen källkod för att bygga och driva privata och hybrida moln. Det är ett ramverk som gör en samling fysiska servrar till en molntjänst med liknande funktionalitet som AWS, GCP eller Azure.

Vi driftar inte OpenStack själva. Vi samarbetar med en svensk OpenStack‑partner som levererar plattformen som IaaS (Infrastructure as a Service) till oss och våra kunder. Hårdvara, hypervisor och OpenStack‑komponenterna ligger på partnerns ansvar. Vi bygger Kubernetes och allt ovanför.

OpenStack är uppbyggt av modulära komponenter, där de viktigaste är:

- **Nova** – beräkning och virtuella maskiner
- **Neutron** – nätverk, routing och brandväggar
- **Cinder** – blocklagring (persistent diskar)
- **Swift** – objektlagring (motsvarande S3)
- **Keystone** – identitet och åtkomst
- **Barbican** – hantering av nycklar, certifikat och hemligheter
- **Glance** – hantering av maskinavbildningar

Resultatet är en plattform där vi kan provisionera virtuella maskiner, nätverk och lagring via API (OpenTofu/Terraform), på infrastruktur som ägs och drivs i Sverige.

## Vad är Kubernetes?

[Kubernetes](https://kubernetes.io/) är en plattform för att orkestrera containeriserade applikationer. Med deklarativa manifest beskriver du hur dina tjänster ska se ut: antal, resursbehov, nätverksregler. Kubernetes ser sedan kontinuerligt till att verkligheten matchar beskrivningen.

I praktiken hanterar Kubernetes:

- **Utrullning och uppgraderingar** – rolling updates, rollbacks och blue/green‑mönster
- **Skalning** – både horisontellt (fler poddar) och vertikalt (mer resurser)
- **Självläkning** – startar om kraschade containrar och flyttar arbetslaster vid nodfel
- **Tjänsteupptäckt och lastbalansering** – inbyggd DNS och service‑abstraktion
- **Hemligheter och konfiguration** – separerat från applikationskoden

Kubernetes är en abstraktion *ovanpå* infrastrukturen. I grunden fungerar samma manifest oavsett om klustret kör i ett publikt moln, på lokala servrar eller i ett OpenStack‑baserat privat moln. I praktiken förekommer avvikelser, och justeringar kan behöva göras vid en flytt. Det rör typiskt infrastrukturen runt klustret: storage classes, ingress‑controllers, lastbalanserare och autentisering ser olika ut från moln till moln.

## Vilka alternativ finns?

Innan man bestämmer sig för Kubernetes på OpenStack är det värt att titta på vilka andra vägar som finns.

### Managerad Kubernetes hos hyperscalers (GKE, EKS, AKS)

Det vanligaste valet idag. Google Cloud (GKE), Amazon (EKS) och Azure (AKS) erbjuder managerade kontrollplan och djup integration med sina respektive ekosystem.

- **Fördelar:** Snabb start, fullt hanterad kontrollplan, integrerade tjänster (loggning, IAM, serverlöst), bred funktionalitet.
- **Nackdelar:** Kostnaden är timbaserad och svår att förutse, data‑egress kan bli dyrt, jurisdiktionen ligger ofta utanför EU och vendor‑lock‑in smyger sig in via proprietära tjänster.

<aside class="infoBox">
<strong>Passar</strong>
Team som vill komma igång snabbt, redan lever i ett av de stora ekosystemen och inte har starka krav på datalagring i Sverige.
</aside>

### Kubernetes på bare-metal

Att köra Kubernetes direkt på fysiska servrar utan ett underliggande IaaS‑lager.

- **Fördelar:** Maximal prestanda, ingen virtualiseringsoverhead, full kontroll.
- **Nackdelar:** Du måste själv lösa allt som OpenStack annars hanterar: nätverk, lagring, multi‑tenancy, livscykel för noder. Det blir snabbt komplext för team som inte är specialister.

<aside class="infoBox">
<strong>Passar</strong>
Organisationer med specialistkompetens internt, mycket stabila arbetsbelastningar och hårda krav på prestanda eller fysisk kontroll av hårdvaran.
</aside>

## Varför vi föredrar Kubernetes på OpenStack

Givet alternativen ovan landar vi ofta i kombinationen Kubernetes på OpenStack. Det handlar om några konkreta saker.

### Frihet att byta leverantör

En av de största fördelarna är att man inte sitter fast. Kubernetes ser likadant ut överallt: samma manifest, samma verktyg, samma sätt att jobba. OpenStack bygger på öppna gränssnitt för lagring och nätverk, och har motsvarigheter i de flesta andra moln.

Det är viktigt eftersom verkligheten förändras. En leverantör kan höja priserna, bli uppköpt eller ändra sina villkor. Reglerna kring datalagring kan skifta. Verksamheten kan växa och behöva köra delar av lasten närmare användarna eller i ett annat land. När det händer vill man inte vara inlåst i ett ekosystem där en flytt innebär att byta ut halva infrastrukturen runt applikationen.

Med Kubernetes på OpenStack är vägen kort om man en dag vill byta moln, köra hybrid eller flytta hem allt till egen drift.

### Tydlig jurisdiktion och regelefterlevnad

All data, all kontrollplan‑trafik och all metadata hålls inom Sverige och regleras av svensk lag. För verksamheter med krav från GDPR, NIS2 eller branschspecifik reglering är det inte en bonus utan ett krav.

Frågan om digital suveränitet har dessutom blivit allt hetare i svensk debatt de senaste åren, och det av goda skäl. Det finns risker med att lägga svensk samhällsviktig data hos amerikanska molnleverantörer. Den amerikanska [CLOUD Act](https://en.wikipedia.org/wiki/CLOUD_Act) ger amerikanska myndigheter rätt att begära ut data från amerikanska företag oavsett var i världen datan fysiskt lagras. Schrems II‑domen från EU‑domstolen har gjort tydligt att detta står i konflikt med europeisk dataskyddsrätt.

Till det kommer den politiska oförutsägbarheten. Skiftande administrationer i Washington, exportkontroller och plötsliga policyändringar gör att en svensk verksamhet kan hamna i en situation där tillgången till sin egen data eller sina egna verktyg påverkas av beslut tagna på andra sidan Atlanten. För kommuner, sjukvård, försvarsindustri och finans är det inte ett godtagbart risktagande.

Det är inte heller bara en fråga för tungt reglerade branscher. Allt fler företag och utvecklare bryr sig om var deras data lagras, vem som kan komma åt den och under vilka spelregler. Det kan handla om kunddata, källkod, interna dokument eller en sund princip om att svenska företags information ska ligga i Sverige. Med Kubernetes på en svensk OpenStack‑plattform försvinner den exponeringen.

### Mogna operatorer – även stateful workloads hör hemma i Kubernetes

Ett vanligt motargument förr var att Kubernetes "bara" passar för stateless applikationer, och att databaser och annan stateful data hörde hemma i hyperscalers managerade tjänster (RDS, Cloud SQL, Cosmos DB). Så ser det inte ut längre. Operator‑mönstret har mognat de senaste åren och idag finns produktionsklara operatorer för i princip allt vi brukar behöva:

- **PostgreSQL** – [CloudNativePG](https://cloudnative-pg.io/) och [Zalandos Postgres Operator](https://github.com/zalando/postgres-operator) hanterar HA, failover, backup och point‑in‑time‑recovery deklarativt.
- **MySQL/MariaDB** – Percona och Oracle har egna operatorer som ger samma typ av automatisering.
- **Redis, Kafka, RabbitMQ** – officiella eller väletablerade operatorer som tar hand om klustring och rolling upgrades.
- **MongoDB, Elasticsearch/OpenSearch, ClickHouse** – samma sak, drift som kod.

Tillsammans med Kubernetes [`PersistentVolumeClaim`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) och OpenStacks Cinder för persistenta volymer får man en databasdrift som håller måttet jämfört med hyperscalers managerade motsvarigheter, inom svensk jurisdiktion och utan timpremie. Man slipper också situationen där applikationen kör i Kubernetes men databasen är låst till en specifik molnleverantör.

<aside class="infoBox">
<strong>Passar</strong>
Verksamheter som vill ha molnets flexibilitet och Kubernetes ekosystem, men samtidigt svensk jurisdiktion, mer förutsägbar kostnad och frihet från vendor‑lock‑in.
</aside>

## Vad det kräver

Att köra Kubernetes på OpenStack kräver fortfarande en del av teamet. Vi delar upp ansvaret i tre delar där man kan välja hur mycket man själv vill och kan ta på sig:

- **Applikationslagret** – Containeriserade applikationer
- **Plattformslagret** – Kubernetes‑klustret (livscykel, uppgraderingar), OpenStack API:er ([Cloud Provider OpenStack](https://github.com/kubernetes/cloud-provider-openstack)), Operatorer (databaser, meddelandeköer osv)
- **IaaS‑lagret** – Hårdvara, hypervisor och OpenStack‑komponenterna (sköts av vår svenska partner).

<figure class="layerStack">
  <img src="/static/blog-kubernetes-on-openstack-layers.svg" alt="Lagrad arkitektur: IaaS-lagret hos svensk OpenStack-partner längst ner, plattformslagret med Kubernetes och OpenStack-integrationer i mitten, och applikationslagret med Go, Node.js och Rust längst upp." />
</figure>

## Sammanfattning

Kubernetes på OpenStack ger oss modern container‑orkestrering tillsammans med kontroll, förutsägbara kostnader och tydlig juridisk position. Hyperscalers passar fortfarande många. Men för kunder som vill hålla data i Sverige, ha mer förutsägbara kostnader och slippa lock‑in är det här en kombination som fungerar väldigt bra.
