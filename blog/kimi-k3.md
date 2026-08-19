---
title: Kimi K3 – en "öppen" utmanare på allvar
date: 2026-08-19T18:45:00+02:00
author: Fredrik Lack
excerpt: I maj skrev vi att gränsen för vad öppna modeller klarar har flyttats rejält. Med Kimi K3 har den flyttats igen. Men helt öppen är den inte...
image: /static/blog-kimi-k3.svg
imageAlt: Kimi-K3 – Moonshot AI:s öppna modell som konkurrerar med de proprietära toppmodellerna
---

## Kimi K3 i korthet

I slutet av juli släppte Moonshot AI [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3).
Det är deras nya flaggskepp: öppna vikter, 2,8 biljoner parametrar totalt i en
MoE-arkitektur med 104 miljarder aktiva per token, och en kontext på en miljon
tokens.

Licensen är en något modifierad MIT-licens.<sup><a href="#fn1" id="ref1">1</a></sup> Driver du en modell-tjänst med över 20
miljoner dollar i årlig intäkt, eller en produkt med över 100 miljoner
månadsanvändare, behöver du ett separat avtal med Moonshot. För intern användning och för oss som kör via Berget (i dagsläget, då de inte har över 20 miljoner dollar i intäkter) gäller
undantag – men det är värt att veta att det inte är exakt samma frihet som Kimi K2.6 hade när man jämför deras licenser.

## Där den matchar de proprietära

Moonshot är ärliga med att Kimi K3 fortfarande ligger efter Claude Fable 5
och GPT-5.6 Sol, de allra största proprietära modellerna. Det är värt att ha med
i åtanke innan man tittar på siffrorna.

På [Hugging Face-modellkortet](https://huggingface.co/moonshotai/Kimi-K3)
publicerar Moonshot en benchmark-tabell där Kimi K3 jämförs direkt med de
proprietära toppmodellerna. Ta en titt där om du är intresserad av siffror, annars rekommenderar vi att du provar själv.

Det är värt att notera att siffrorna är Moonshots egna: Kimi K3 körs
med deras eget Kimi Code-harness medan konkurrenterna körs med annan harness, och de rapporterar inte SWE-bench Verified för Kimi K3. Men även
med de förbehållen är bilden tydlig: De öppna modellerna knappar in.

## Så kör vi den

Setupen är densamma som tidigare. Kimi K3 finns redan hos
[Berget AI](https://berget.ai) som `moonshotai/Kimi-K3`, än så länge i
eval-läge. Konfigurationen i OpenCode eller Pi är identisk med den vi visade
i tidigare post – det enda som ändras är modellnamnet i provider-blocket. Ingen ny
leverantör, inget nytt API, inga nya nycklar.

Det som däremot skiljer är priset. Kimi K3 är Bergets dyraste modell: €3 per miljon
input-tokens och €15 per miljon output, mot K2.6:s €0,75 respektive €3,50.
En rätt stor skillnad i pris, det ska man komma ihåg.

Några fler egenskaper är värda att känna till innan man sätter igång. Thinking är
alltid på och kan inte stängas av.<sup><a href="#fn2" id="ref2">2</a></sup> Temperaturen är låst på 1,0.<sup><a href="#fn2" id="ref2b">2</a></sup> Harnessen måste
skicka tillbaka hela `reasoning_content` i varje tur – gör den inte det, eller
byter man modell mitt i en session, blir kvaliteten ostabil enligt Moonshot
själva.<sup><a href="#fn3" id="ref3">3</a></sup> De varnar också för att K3 kan vara väl proaktiv: vid otydliga
instruktioner fattar den ibland egna beslut å användarens vägnar.<sup><a href="#fn3" id="ref3b">3</a></sup> Explicita
instruktioner i systemprompten eller i `AGENTS.md` hjälper så klart till här.

## Gränsen har flyttats igen

Det proprietära lagret har inte försvunnit helt. Fable 5 och GPT-5.6 Sol är
fortfarande vassare. Men det är inte längre dit vi
går som standard ens för det tyngsta jobbet, och skillnaden är tillräckligt
liten för att det sällan ska vara värt att skicka koden utanför landet.

Gränsen har flyttats igen. För ett år sedan var öppna modeller ett
kompromissval. I maj var de förstaval för det mesta. Nu är de förstaval även
för det tyngsta.

---

<ol class="footnotes">
<li id="fn1">Moonshot AI, <a href="https://github.com/MoonshotAI/Kimi-K3/blob/main/LICENSE" target="_blank" rel="noopener noreferrer nofollow">Kimi K3 License</a>: kommersiell användning kräver separat avtal vid över 20 miljoner dollar i intäkter eller över 100 miljoner månadsanvändare. <a href="#ref1">↩</a></li>
<li id="fn2">Moonshot AI, <a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart" target="_blank" rel="noopener noreferrer nofollow">Kimi K3 Quickstart – Important limits</a>: "K3 always has thinking mode enabled" samt "<code>temperature=1.0</code>, <code>top_p=0.95</code> … are fixed". <a href="#ref2">↩</a></li>
<li id="fn3">Moonshot AI, <a href="https://www.kimi.com/blog/kimi-k3" target="_blank" rel="noopener noreferrer nofollow">Kimi K3 Tech Blog – Limitations</a>: "If the agent harness fails to pass back all the historical thinking content as required … generation quality may become highly unstable" samt "when it encounters minor issues or ambiguous user intent during task execution, it may make unexpected decisions on the user's behalf". <a href="#ref3">↩</a></li>
</ol>
