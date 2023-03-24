# VLAN

## VLAN står for Virtual Local Area Network

Med VLAN-teknologi kan man dele opp nettverket i separate logiske segmenter som fungerer som separate nettverk. Dette gjøres ved å tilordne hver enhet (som en datamaskin, skriver eller annet nettverksutstyr) en identifikator kalt en VLAN ID.

På denne måten kan man definere forskjellige VLAN-er som har forskjellige tilgangsregler, sikkerhetsinnstillinger og prioriteringer. Dette gjør det mulig å skille trafikk fra forskjellige enheter og applikasjoner fra hverandre, samtidig som man kan benytte samme fysiske infrastruktur.

VLAN-teknologi kan brukes til å isolere trafikk mellom avdelinger eller team i en bedrift, eller mellom forskjellige leietakere i en bygning. VLAN kan også benyttes til å forbedre nettverkssikkerheten, ved å hindre uautorisert tilgang til sensitive data.

Kort oppsummert brukes VLAN-teknologi for å segmentere og isolere trafikk på et større fysisk nettverk, slik at forskjellige grupper eller applikasjoner kan ha egne dedikerte nettverkssegmenter med forskjellige tilgangsregler, sikkerhetsinnstillinger og prioriteringer.

---

## Fordeler og Ulemper med VLAN

Fordeler:

- Bedre ytelse: Ved å segmentere nettverket kan man prioritere trafikk etter behov, og unngå at tung trafikk fra enkelte enheter eller applikasjoner påvirker ytelsen for andre.

- Bedre sikkerhet: Ved å isolere trafikk mellom forskjellige grupper eller applikasjoner kan man forbedre sikkerheten, og hindre at uautorisert tilgang til sensitive data skjer.

- Enklere administrasjon: VLAN-teknologi gjør det enklere å administrere nettverket, fordi man kan tilordne enheter og applikasjoner til separate VLAN-er, og definere forskjellige tilgangsregler, sikkerhetsinnstillinger og prioriteringer for hver enkelt.

- Skalerbarhet: Ved å segmentere nettverket kan man enklere skalere nettverket opp eller ned etter behov.

Ulemper:

- Kompleksitet: VLAN-teknologi kan være kompleks, spesielt hvis man har mange VLAN-er og applikasjoner som krever forskjellige tilgangsregler og sikkerhetsinnstillinger.

- Kostnad: Implementering av VLAN-teknologi kan være kostbart, spesielt hvis man trenger å oppgradere nettverksinfrastrukturen.

- Risiko for feilkonfigurasjon: Feilkonfigurasjon av VLAN-er kan føre til nettverksfeil og potensiell tap av data.

- Begrensninger: VLAN-teknologi har noen begrensninger, som for eksempel at enheter som tilhører forskjellige VLAN-er ikke kan kommunisere direkte med hverandre uten en ruter.

---

## Spørsmål og Svar

### Hvor mange forskjellige VLAN kan et moderne nettverk ha?

Et moderne nettverk kan ha ulikt antall VLAN, avhengig av faktorer som størrelsen på nettverket, infrastrukturen og kapasiteten. VLAN ID-er brukes til å identifisere VLAN-er, og det teoretiske maksimale antallet VLAN-er i et nettverk er 4094. 

I praksis vil imidlertid antall VLAN-er som kan støttes, avhenge av flere faktorer, inkludert tilgjengelig båndbredde og prosesseringskapasitet på nettverksutstyret. De fleste bedrifter og organisasjoner vil ha et begrenset antall VLAN-er, vanligvis fra noen få til noen titalls, avhengig av nettverkets størrelse og kompleksitet.

---

### Hva er "trunk"?

Trunk refererer til en kobling mellom to switcher som lar trafikk fra flere VLAN-er passere over samme kobling. Trunk-koblingen gjør det mulig å skille trafikk fra forskjellige VLAN-er fra hverandre ved å inkludere en VLAN-tag på hver data-pakke.

Trunking-teknologi er viktig for å koble sammen switcher i større nettverk og overføre VLAN-trafikk effektivt mellom forskjellige deler av nettverket.

---

### I mange bedrifter er det vanlig å kjøre IP-telefoner på et eget VLAN. Hvorfor gjøres dette i stedet for å bare ha IP-telefonene på samme VLAN som ansattmaskiner?

Det er flere grunner til at bedrifter kjører IP-telefoner på et eget VLAN i stedet for å ha dem på samme VLAN som ansattmaskiner:

- Bedre sikkerhet: IP-telefoner kan utgjøre en sårbarhet i nettverket dersom de ikke er sikret ordentlig. Ved å plassere IP-telefonene på et eget VLAN kan man begrense tilgangen til telefonene, og dermed hindre at uautoriserte personer får tilgang til nettverket via telefonene.

- Bedre kvalitet: IP-telefoni krever en stabil og høy kvalitet på nettverket for å fungere optimalt. Ved å plassere IP-telefonene på et eget VLAN kan man prioritere trafikken til telefonene og dermed sikre at taletrafikken har tilstrekkelig båndbredde og prioritet.

- Forenkling av administrasjonen: Ved å plassere IP-telefonene på et eget VLAN kan man enklere administrere og konfigurere nettverket, da man kan håndtere telefontrafikken og datatrafikken separat.

---

### Hva kan en trusselaktør gjøre hvis han får fysisk tilgang til en trunk-kabel eller svitsj med trunk-tilgang?

Hvis en trusselaktør får fysisk tilgang til en trunk-kabel eller svitsj med trunk-tilgang, kan han potensielt få tilgang til all trafikk som går gjennom VLAN-ene som går over denne koblingen. Trusselaktøren kan da potensielt utføre følgende angrep:

- VLAN-hopping: Trusselaktøren kan endre VLAN-tags i datapakkene som går gjennom trunk-koblingen for å få tilgang til ressurser som er ment for en annen VLAN.

- Sniffing: Trusselaktøren kan bruke spesialverktøy til å overvåke og fange opp all trafikk som går gjennom trunk-koblingen, inkludert sensitive data som passord og annen konfidensiell informasjon.

For å hindre slike angrep er det viktig å sikre at tilgangen til trunk-koblinger og svitsjer med trunk-tilgang er begrenset til autorisert personell, og at det brukes sikkerhetsmekanismer som VLAN-tagging, sikkerhetsprotokoller og autentisering for å beskytte nettverket.
