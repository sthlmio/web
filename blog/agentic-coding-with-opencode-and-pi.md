---
title: Agentisk kodning med OpenCode och Pi
date: 2026-05-28T21:30:00+02:00
author: Fredrik Lack
excerpt: Agentisk kodning har blivit det nya sättet att arbeta - men det finns alternativ till Claude Code och Codex som är de två som får anses vara de absolut bästa i dag enligt oss.
image: /static/blog-agentic-coding-with-opencode-and-pi.svg
imageAlt: OpenCode och Pi - två öppna agentiska kodklienter
---

Agentiska kodverktyg som [Claude Code](https://claude.com/claude-code) och [Codex](https://chatgpt.com/sv-SE/codex/)
har på kort tid gått från experiment till en självklar del av många
utvecklares vardag. De gör verklig nytta. Samtidigt skickas allt de rör vid
till en amerikansk leverantör för bearbetning: varje prompt och varje fil
agenten öppnar, vilket i praktiken är hela kodbasen.

För den som bryr sig om
[digital suveränitet](/blog/swedish-digital-sovereignty-in-practice)
är det ett problem. För många organisationer är källkoden en av de
känsligaste tillgångarna som finns, och i samma stund som den passerar en
amerikansk molntjänst hamnar den under en annan jurisdiktion, med andra
regler för vem som får begära ut den. Till det kommer beroendet. Priser,
villkor och själva tillgången till verktyget bestäms någon annanstans.

Numera går det att slippa det utan några större uppoffringar. De öppna
verktygen och modellerna har knappat in det senaste året, och idag går det
att jobba i stort sett som förut, fast med koden kvar i Sverige.

## Två öppna agentiska klienter

Nyckeln är att skilja på *klienten* och *modellen*. Klienten (agent harness) är det som
läser filer, redigerar kod och kör kommandon i terminalen; modellen är
intelligensen bakom. Claude Code och Codex är hårt knutna till sin egen
leverantörs modell, så där är det redan avgjort vart koden tar vägen. Det vi
vill ha är en klient som är likgiltig för vem som kör modellen, så att vi
själva bestämmer var prompten och filerna hamnar.

Det finns en handfull projekt som tar sig an det, men två har vi fastnat
för: [OpenCode](https://opencode.ai) och [Pi](https://pi.dev). Båda är öppen
källkod, och i båda byter man modell genom att peka om en rad i konfigen. De
är dessutom små nog att man hinner läsa igenom källkoden på en eftermiddag om
man vill veta exakt vad de gör.

### OpenCode

[OpenCode](https://opencode.ai) är en agentisk kodklient med öppen källkod
som körs i terminalen. Den jobbar ungefär som Claude Code och Codex: läser
och redigerar filer, kör kommandon och arbetar i flera steg. Skillnaden är
att den inte är låst till en leverantör. Den stödjer över 75 modelleverantörer
och kan dessutom prata med lokala modeller, så du pekar den dit du vill.

### Pi

[Pi](https://pi.dev) tar sig an samma problem från andra hållet. Mario
Zechner har byggt den medvetet avskalad: en systemprompt under tusen tokens
och fyra verktyg (`read`, `write`, `edit`, `bash`). Det finns inget dolt
under huven att hålla reda på, varken subagenter med egen kontext, inbyggda
att-göra-listor eller MCP-lager. `pi-ai`-skiktet pratar med Ollama, vLLM,
llama.cpp, LM Studio och vilken OpenAI-kompatibel endpoint som helst.

Av de två ligger OpenCode närmast Claude Code i känsla, medan Pi är råare
och mer hackbar.

## Var ska modellen köras?

### Berget AI

[Berget AI](https://berget.ai) kör öppna modeller som `Kimi-K2.6` och
`Mistral-Medium-3.5-128B` på OpenAI-kompatibla endpoints i Sverige, under
svensk jurisdiktion. För OpenCode och Pi räcker det att lägga till en provider
i konfigurationen. Nedan ser du hur det sätts upp i respektive klient.

```json title="~/.config/opencode/opencode.json"
{
  "provider": {
    "Berget.AI": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Berget.AI",
      "options": {
        "baseURL": "https://api.berget.ai/v1",
        "apiKey": "sk_ber_xxxxx"
      },
      "models": {
        "moonshotai/Kimi-K2.6": {},
        "mistralai/Mistral-Medium-3.5-128B": {}
      }
    }
  }
}
```

```json title="~/.pi/agent/models.json"
{
  "providers": {
    "Berget.AI": {
      "baseUrl": "https://api.berget.ai/v1",
      "api": "openai-completions",
      "apiKey": "sk_ber_xxxxx",
      "models": [
        { "id": "moonshotai/Kimi-K2.6" },
        { "id": "mistralai/Mistral-Medium-3.5-128B" }
      ]
    }
  }
}
```

### Lokalt på egen maskin

På en laptop kommer man bara en bit på vägen. En MacBook Pro med 64 GB minne
kör en mindre modell som `Qwen3-Coder-30B-A3B` via [Ollama](https://ollama.com)
eller [LM Studio](https://lmstudio.ai), och svaren kommer snabbt nog för
interaktivt arbete. Det fungerar på tåget, på flyget eller i ett trögt
nätverk, utan att något alls lämnar maskinen. Men modellen är betydligt mindre
än de Berget kör, och skillnaden märks så fort uppgiften blir det minsta
krävande.

Vill man köra samma klass av modeller lokalt som Berget erbjuder krävs
betydligt mer hårdvara. De stora öppna modellerna behöver hundratals gigabyte
minne, och då räcker det inte med en laptop. Då handlar det om ett kluster av
exempelvis Mac Studios med maximalt unified memory, vilket lätt landar på
flera hundra tusen kronor. Den globala bristen på framför allt minne har inte
direkt gjort saken billigare.

## Så fördelar vi arbetet

Det här har landat i en ganska tydlig arbetsfördelning för oss. Det allra
lättaste körs lokalt på den egna maskinen, där latensen är minimal och inget
lämnar laptopen: autocomplete, förslag på enstaka kodrader och de snabba
frågorna mitt i flödet. Det mesta av det dagliga arbetet går istället till
Berget, som kör modeller i en helt annan klass men håller datan inom Sverige.
Dit hör refaktoreringar, buggfixar, ändringar över flera filer och hela
sessioner i en stor kodbas.

Kvar blir det absolut tyngsta. De största proprietära modellerna, Claude
Opus 4.8 och GPT-5.5, är fortfarande vassare på långa planeringskedjor över
hela kodbasen, riktigt svår debugging och jobb i mindre vanliga språk. Dem
tar vi fram när uppgiften verkligen kräver det, men då gör vi det medvetet och
med vetskapen om att datan lämnar Sverige.

Gränsen har flyttats rejält det senaste året. För ett år sedan var de öppna
modellerna ett kompromissval. Idag är de förstaval för det mesta vi gör, och
det proprietära alternativet plockas fram först när det verkligen behövs.

## Vad det kräver

Själva bytet från Claude Code eller Codex till OpenCode eller Pi går snabbt,
oavsett om modellen ligger hos Berget eller i Ollama. Det som tar längre tid
är att kalibrera om magkänslan för vad som kan lämnas till den lokala modellen,
vad som ska till Berget och vad som ändå hör hemma hos en proprietär modell.
När den känslan väl sitter har man ett flöde som fungerar minst lika bra som
tidigare, med skillnaden att promptar, kostnader och kod för det mesta stannar
i landet.
