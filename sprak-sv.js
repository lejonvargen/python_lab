/* Pytho — svenska texter.
   Laddas med en vanlig <script src>, vilket är det enda sätt som
   fungerar både från file:// och från en webbserver. */
window.PYTHONLAB_SPRAK = window.PYTHONLAB_SPRAK || {};
window.PYTHONLAB_SPRAK.sv = {
  kod: "sv",
  namn: "Svenska",
  html_lang: "sv",
  titel: "Pytho",
  beskrivning: "Pytho är en interaktiv kurs i Python som körs direkt i webbläsaren. 29 kapitel från din första utskrift till 3D-grafik, maskininlärning och transformers.",
  ui: {
    "sok_knapp": "Sök",
    "sok_tips": "Sök och ersätt (Ctrl + F)",
    "oppna_tips": "Öppna en fil (Ctrl + O)",
    "spara_tips": "Spara (Ctrl + S)",
    "spara_som_tips": "Spara som (Ctrl + Shift + S)",
    "kor_tips": "Kör programmet (Ctrl + Enter)",
    "stoppa_tips": "Avbryt programmet",
    "aterstall_tips": "Lägg tillbaka originalkoden",
    "ga_till_raden": "Gå till raden",
    "sok": "Sök",
    "ersatt": "Ersätt med",
    "ersatt_en": "Ersätt",
    "ersatt_alla": "Alla",
    "ingen_traff": "ingen träff",
    "ersatta": "{antal} ersatta",
    "dop_om": "Byt namn",
    "devfiler": "Utvecklarfiler ({antal})",
    "scene_demo": "# scene_demo.py — modulen scene, som bara finns i Pytho.\n#\n# Kör den här filen och dra sedan med musen i fliken 3D-scen.\n# Allt nedan är körbart; kommentera bort det du inte vill se.\n\nimport scene\nimport math\n\n# ===== 1. Starta =====\nscene.start()                       # skapar scenen, alltid först\nscene.background(\"#0e1c33\")\nscene.ground(size=30, color=\"#1b3255\")\nscene.camera(0, 6, 16)              # var kameran står\nscene.look_at(0, 1, 0)              # vad den tittar på\n\n# ===== 2. Grundformer =====\n# Alla returnerar ett objekt du kan styra.\nkub = scene.cube(-6, 1, 0, size=1.4, color=\"#ffc94a\")\nklot = scene.sphere(-3, 1, 0, radius=0.7, color=\"#6ee7b7\")\nlada = scene.box(0, 1, 0, width=2, height=1, depth=1, color=\"#8fb4ff\")\nrulle = scene.cylinder(3, 1, 0, radius=0.5, height=2, color=\"#dfe8fa\")\nstrut = scene.cone(6, 1, 0, radius=0.7, height=2, color=\"#ff7d6b\")\n\n# ===== 3. Metoder på ett objekt =====\nkub.spin(0.004, 0.008, 0)           # hur mycket det snurrar per bildruta\nklot.move(-3, 2, 0)                 # ny position\nlada.rotate(0, 0.4, 0)              # vrid till en vinkel, i radianer\nrulle.scale(1.3)\nstrut.color(\"#e04b4b\")\n\n# ===== 4. Färdiga modeller =====\n# Samma argument för alla: x, y, z, color, size\nbil = scene.car(-8, 0, 6, color=\"#ff7d6b\")\nlastbil = scene.truck(-4, 0, 6)\nflygplan = scene.plane(0, 8, 6)\nraket = scene.rocket(4, 0, 6)\nhund = scene.dog(8, 0, 6, size=0.8)\nfagel = scene.bird(-8, 5, -6)\nfisk = scene.fish(-4, 1, -6)\nhus = scene.house(0, 0, -8)\nskyskrapa = scene.skyscraper(5, 0, -8)\ntorn = scene.tower(9, 0, -8)\ntrad = scene.tree(-11, 0, -3, size=1.2)\n\n# De rörliga modellerna har en egen metod som startar rörelsen.\nbil.drive(6)                        # hjulen snurrar, bilen rullar framåt\nlastbil.drive(3)\nflygplan.fly(9)                     # propellern går\nhund.walk(2)                        # benen rör sig\nfagel.flap(3)\nfisk.swim(2)\nraket.ignite(4)                     # lågan tänds\n\n# Framåt betyder alltid dit modellen pekar. Vill du ha en cirkelbana,\n# vrid modellen lite varje bildruta — se avsnitt 7.\n\n# ===== 5. Data i rummet =====\nstapel = scene.bar(-10, -10, height=3, color=\"#6ee7b7\", width=0.5)\nstapel.set_height(5)                # ändra i efterhand\n\nmarkor = scene.marker(0, 3, 0, color=\"#ffc94a\", size=1)\nlinje = scene.line(-5, 0.1, -5, 5, 0.1, -5, color=\"#8fb4ff\", thickness=0.05)\n\nsol = scene.sun(0, 14, -10, radius=1.2)\nmoln = scene.cloud(-6, 9, -4, size=1.5)\n\n# En kontur ur en lista med (x, z)-punkter\npunkter = [(-2, -2), (2, -2), (2, 2), (-2, 2)]\nscene.outline(punkter, color=\"#8fb4ff\", thickness=0.08, y=0.06, closed=True)\n\n# ===== 6. Matplotlib på en yta =====\n# En figur blir en textur på en panel eller en TV-skärm i rummet.\n#\n# import matplotlib.pyplot as plt\n# fig, ax = plt.subplots(figsize=(5, 3))\n# ax.plot([1, 2, 3], [2, 5, 3])\n# scene.chart_panel(0, 3, -12, width=6, height=3.4, figure=fig)\n# scene.chart_screen(0, 6, -14, width=12, height=6.5, figure=fig,\n#                    light=True, tilt=0.0, turn=0)\n\n# ===== 7. Animation =====\n# Funktionen anropas ungefär 60 gånger i sekunden med tiden i sekunder.\ndef uppdatera(t):\n    klot.move(-3, 1 + math.sin(t * 2) * 0.5, 0)\n    bil.rotate(0, t * 0.7, 0)                     # kör i cirkel\n    fagel.rotate(0, -math.pi / 2 - t, 0)          # peka dit den flyger\n    fagel.move(math.cos(t) * 7, 5 + math.sin(t * 2), math.sin(t) * 7)\n\nscene.every_frame(uppdatera)        # skicka funktionen UTAN parentes\n\n# scene.stop()                      # stoppar animationen\n# scene.reset()                     # tillbaka till startvyn\n# scene.fullscreen()                # helskärm, Escape avslutar\n\n# ===== 8. Sveriges kontur =====\n# scene.sweden tar din egen omräkning från grader till scenkoordinater.\n#\n# def till_scen(lat, lon):\n#     return ((lon - 17.5) * 2.2, (lat - 62.5) * -2.2)\n#\n# scene.sweden(till_scen, color=\"#7fa4dd\", thickness=0.11, y=0.08, islands=True)\n# scene.in_sweden(59.3, 18.1)       # True om punkten ligger i landet\n\nprint(\"Klart. Öppna fliken 3D-scen.\")\nprint(\"Dra med musen för att se dig omkring, rulla för att flyga.\")\nprint(\"Piltangenterna flyger som en drönare: framåt dit du tittar.\")\n",
    "kapitelfiler": "Kapitelfiler ({antal})",
    "huvudfil": "start.py",
    "visa_alla": "Visa alla {antal} filer",
    "visa_farre": "Visa färre",
    "dev": "Utvecklarläge",
    "dev_info": "Döljer kapitlen och gör Pytho till en enkel utvecklingsmiljö. Din kod ligger kvar.",
    "tom_fil": "Rensa fil",
    "filer_rubrik": "Filer i arbetsytan",
    "ny_fil": "+ Ny fil",
    "inga_filer": "Inga filer ännu. Allt du skriver hamnar här och kan importeras.",
    "ta_bort": "Ta bort",
    "repl": "Skriv ett uttryck och tryck Enter …",
    "filtext": "<h3>Egna filer</h3><p>Den här filen ligger i din arbetsyta och sparas i webbläsaren. Kör ett program i vilket kapitel som helst och skriv <code>import {modul}</code> för att använda den.</p><p>Allt du skriver finns kvar när du laddar om sidan.</p>",
    "felsakert_info": "Loopvakt som gör att programmet kan stoppas och inte kan låsa sidan.",
    "fragefalt": "Ställ en fråga om koden eller kapitlet …",
    "anslutning": "Anslutning",
    "rensa_samtal": "Rensa samtalet",
    "skicka": "Skicka",
    "nytt_filnamn": "Filens namn — lämna tomt för ett untitled-namn. Ändelsen .py läggs till, och du importerar filen med import följt av namnet utan ändelse.",
  "aterstall": "Återställ",
  "oppna": "Öppna fil",
  "spara": "Spara",
  "spara_som": "Spara som",
  "kor": "Kör",
  "stoppa": "Stoppa",
  "felsakert": "Felsäkert läge",
  "ai_stod": "AI-stöd",
  "om": "Om Pytho",
  "start": "Start",
  "kapitel_rubrik": "Kapitel",
  "flik_kapitel": "Kapitel",
  "flik_utskrift": "Utskrift",
  "flik_scen": "3D-scen",
  "flik_ai": "AI-hjälp"
},
  steg: {
    "kalla": "Källkod",
    "tolk": "Tolkning",
    "kor": "Exekvering",
    "resultat": "Resultat"
  },
  chip: {
    "kapitel": "Sammanfatta kapitlet",
    "kod": "Förklara koden",
    "markering": "Förklara markeringen",
    "andra": "Ändra koden",
    "nasta": "Nästa steg",
  },
  konsol: {
    "startar": "Python laddas ner till webbläsaren. Det tar några sekunder första gången.",
  },
  scen: {
    "tom": "Ingen scen igång. Kör <code>scene.start()</code> i ett program så dyker den upp här.",
  },
  "chip_dev": {
    "kapitel": "Granska filen",
    "kod": "Förklara koden",
    "markering": "Förklara markeringen",
    "andra": "Föreslå en omskrivning",
    "nasta": "Skriv tester",
  },
  "uppdrag_dev": {
    "kapitel": "Granska den här filen som en kollega hade gjort. Vad är otydligt, vad kan gå sönder, och vad skulle du ändra först?",
    "kod": "Gå igenom koden och förklara vad varje del gör.",
    "markering": "Förklara den markerade delen av koden, och säg om något i den kan bli fel.",
    "andra": "Föreslå en omskrivning av den här koden som blir tydligare eller kortare, utan att beteendet ändras. Visa gärna hur.",
    "nasta": "Skriv tester för koden med unittest. Täck det normala fallet och minst ett gränsfall.",
  },
  ord: {
  "tips": "Tips: ",
    "kapitel_rubrik": "Kapitel {nr} — {titel}",
  "helskarm": "Helskärm",
  "avsluta_helskarm": "Avsluta helskärm",
  "stoppar": "Stoppar …",
  "rensa": "Rensa utskrift",
  "aterstall_vy": "Återställ vy",
  "stopp_loop": "Avbryter programmet vid nästa varv i looparna",
  "stopp_vantan": "Avbryter väntan på svar",
  "stopp_inget": "Koden har inga loopar och väntar inte på något — ladda om sidan om den fastnar"
},
  status: {
    "hamtar_paket": "Hämtar ",
  "startar": "Startar Python …",
  "hamtar": "Hämtar Python från {kalla} …",
  "kontroll": "Hämtar paket …",
  "redo": "Python är redo",
  "misslyckades": "Python kunde inte startas"
},
  ladd: {
  "rubrik": "Startar Python …",
  "text": "Förbereder",
  "not": "Python hämtas till webbläsaren, ungefär 10 MB. Första gången tar det en stund — sedan ligger det i cacheminnet och går snabbt.",
  "hamtar": "Hämtar Python",
  "kontaktar": "Kontaktar {kalla}",
  "laddar_ner": "Laddar ner …",
  "av": "{gjort} av {totalt}",
  "hamtat": "{gjort} hämtat",
  "nedladdning_klar": "Nedladdning klar",
  "startar": "Startar Python",
  "packar": "Packar upp och startar tolken — sidan kan hacka till",
  "nastan": "Nästan klart",
  "forbereder": "Förbereder Pytho",
  "verktyg": "Kopplar in Pythos verktyg",
  "igen": "Försöker igen",
  "byter": "Byter källa",
  "klart": "Klart",
  "redo": "Python är redo",
  "misslyckades": "Python kunde inte startas",
  "ingen_kalla": "Ingen av källorna svarade",
  "ladda_om": "Ladda om sidan och försök igen."
},
  msg: {
    "kor_markering": "Kör markeringen ({rader} rader) i samma namnrymd som programmet.",
    "ingen_webgl": "3D-vyn kan inte visas: webbläsaren gav ingen WebGL-yta. Oftast beror det på att hårdvaruacceleration är avstängd i inställningarna, eller på ett äldre grafikkort. Programmet kör vidare och skriver ut sitt resultat — bara bilden uteblir.",
    "filfel": "Kunde inte lägga ut dina filer: ",
    "arbetsyta_aterstalld": "Din arbetsyta lästes in — {antal} kapitel och {filer} egna filer finns kvar sedan sist.",
    "syntaxfel": "Syntaxfel på rad {rad}, tecken {kolumn}: {text}",
    "hamtning_misslyckades": "kunde inte hämta ",
    "tidsgrans": "tidsgränsen gick ut: ",
  "sparad_hamtade": "Sparad som {namn} i mappen Hämtade filer.",
  "sparad_till": "Sparad till {namn}.",
  "oppnade": "Öppnade {namn} i {plats}.",
  "paketfel": "Kunde inte hämta ett paket: ",
  "matplotlibfel": "Kunde inte förbereda matplotlib: ",
  "ingen_utskrift": "Programmet kördes utan att skriva ut något. Använd print(...) för att se resultatet.",
  "klart": "[klart på {ms} ms]",
  "forsoker_hamta": "Försöker hämta Python från {kalla} …",
  "gick_inte": "Gick inte: ",
  "ingen_kalla": "Ingen av källorna svarade. Ladda om sidan och försök igen. Hjälper det inte är nedladdningen blockerad här — då är det dags att installera Python på datorn i stället.",
  "redo": "Python är redo. Välj ett kapitel till vänster, eller skriv något eget och tryck Kör.",
  "ingen_3d": "3D-motorn kunde inte hämtas. 3D-kapitlen fungerar inte, resten gör det.",
  "felsakert_pa": "Felsäkert läge på. Stoppa-knappen fungerar och programmet avbryts automatiskt efter 45 sekunder.",
  "felsakert_av": "Felsäkert läge av. Koden kör i full fart, men kan inte stoppas — en oändlig loop låser sidan och kräver omladdning."
},
  fraga: {
    "ga_till_rad": "Gå till rad (1–{antal}):",
    "dop_om": "Nytt namn på filen. Ändelsen .py läggs till, och du importerar den sedan med det nya namnet.",
    "namnet_upptaget": "Det finns redan en fil som heter {namn}.",
    "ersatt_fil": "{namn} finns redan i arbetsytan. Ersätta den?",
    "ej_importerbar": "{namn} kan inte importeras — ett modulnamn får inte börja med en siffra. Läsa in den ändå?",
    "tom_fil": "Tömma {namn}? Innehållet försvinner.",
    "nytt_filnamn": "Vad ska filen heta?",
    "ogiltigt_namn": "Filnamnet får bara innehålla bokstäver, siffror, punkt och bindestreck.",
  "aterstall": "Lägga tillbaka originalkoden för {plats}? Det du skrivit eller läst in försvinner.",
  "radera_fil": "Ta bort {namn}?",
  "filnamn": "Vad ska filen heta?"
},
  chatt: {
    "nadde_inte": "Kunde inte nå {url}. Kör du en lokal modell? Ollama måste startas med OLLAMA_ORIGINS=\"*\" för att släppa in webbsidor. En tjänst på internet kan blockera anrop från webbläsare (CORS).",
  "ny_kapitel": "Ny chatt för {plats}. Ställ en fråga, eller använd knapparna ovanför.",
  "ny": "Ny chatt. Ställ en fråga om koden du har framme.",
  "ingen_markering_rubrik": "Ingen markering",
  "ingen_markering": "Markera en bit kod i redigeraren ovanför, så förklaras just den delen.",
  "tanker": "Tänker …",
  "du_fragar": "Du frågar",
  "felrubrik": "Vad betyder felet?",
  "felknapp": "Fråga AI-hjälpen om det här felet",
  "startsidan": "Startsidan (inget kapitel valt)",
  "kapitel": "Kapitel {nr}: {titel}",
  "kontext_markerat": "{plats}  ·  {rader} markerade rader skickas med",
  "kontext_allt": "{plats}  ·  hela koden skickas med",
  "ansluten": "Ansluten",
  "inte_ansluten": "Inte ansluten",
  "testar": "Testar …",
  "aktiv": "Ansluten",
  "kraver_nyckel": "Den här tjänsten kräver en API-nyckel",
  "kunde_inte": "Kunde inte ansluta",
  "andrat": "Inställningarna ändrades — testa igen"
},
  uppdrag: {
    "fel_inledning": "Jag körde programmet och fick det här felet:",
    "fel_rad": "Raden med >> är den felet pekar på:",
    "fel_fraga": "Förklara: 1) vad feltypen betyder i allmänhet, 2) vad som konkret är fel i den här koden, och 3) en ledtråd om hur jag kan rätta det själv. Skriv inte den rättade koden. Om felet beror på en begränsning i Pytho — paket, filåtkomst, nätverk eller något som inte finns i webbläsarens Python — så säg det tydligt och beskriv vad som fungerar i stället.",
  "kapitel": "Sammanfatta det här kapitlet med egna ord. Ta det viktigaste först och lyft fram vad som är själva poängen. Utgå från kapitlets text.",
  "kod": "Gå igenom koden i redigeraren och förklara vad varje del gör och varför den behövs.",
  "markering": "Förklara den markerade delen av koden. Vad gör den, varför ser den ut så, och vad skulle hända om den togs bort?",
  "andra": "Jag vill ändra koden men är osäker på hur. Fråga först vad jag vill att programmet ska göra i stället, och beskriv sedan vilken syntax som behövs — utan att skriva hela lösningen.",
  "nasta": "Vad är ett bra nästa steg för att förstå det här djupare? Föreslå en konkret övning som bygger vidare på koden jag har."
},
  feltips: {
  "KeyboardInterrupt": "Du avbröt programmet med Escape. Tryck Kör för att starta om.",
  "SyntaxError": "Stavfel i själva språket. Kolla att alla parenteser och citattecken har en partner, och att det står kolon (:) efter if, for, while och def.",
  "IndentationError": "Indraget stämmer inte. Rader som hör ihop under en if, for eller def ska ha exakt fyra mellanslag framför sig, och lika många som varandra.",
  "NameError": "Python känner inte igen namnet. Antingen är det stavat olika på två ställen, eller så har variabeln inte skapats än — eller så saknas ett import.",
  "TypeError": "Du blandar två datatyper som inte går ihop, till exempel text och tal. Prova int(...) eller str(...) för att göra om.",
  "ValueError": "Värdet passade inte. Till exempel: int(\"hej\") går inte, för \"hej\" är ingen siffra.",
  "ZeroDivisionError": "Man kan inte dela med noll. Inte ens datorn klarar det.",
  "IndexError": "Du frågar efter en plats i listan som inte finns. Kom ihåg att första platsen heter 0 och den sista är len(lista) - 1.",
  "KeyError": "Nyckeln finns inte i din dictionary. Prova .get(nyckel, reservvärde) om den kan saknas.",
  "AttributeError": "Den typen har ingen sådan metod. Kolla stavningen, och att variabeln innehåller det du tror.",
  "RecursionError": "En funktion anropar sig själv utan att någonsin nå basfallet. Kontrollera att argumentet verkligen krymper mot stoppvillkoret.",
  "ModuleNotFoundError": "Modulen finns inte i webbläsarens Python. Standardbiblioteket fungerar (random, math, time, string, json), men inte pygame eller liknande."
},
  ai_kurs: {
  "rubrik": "KURSENS UPPLÄGG (för att kunna hänvisa bakåt och framåt)",
  "not": "Varje kapitel har sin egen chatt. Användaren kan ha frågat om annat i andra kapitel — du minns bara den här chatten, men du får gärna hänvisa till vad tidigare kapitel handlade om."
},
  ai_nulage: {
    "avkortad": "… (koden är avkortad)",
  "rubrik": "ANVÄNDARENS NULÄGE",
  "oppet": "Öppet just nu: ",
  "kapiteltext": "Kapitlets förklaringstext:",
  "ingen": "(ingen text)",
  "kod": "Koden i redigeraren:",
  "markering": "Användaren har markerat den här delen:"
},
  py: {
  "ingen_3d": "3D-motorn laddas fortfarande — vänta några sekunder och kör igen.",
  "cors": "Kunde inte nå {url}. Antingen är servern nere, eller så tillåter den inte att webbläsare hämtar data från andra sidor (CORS). Ursprungligt fel: {fel}",
  "statuskod": "Servern svarade med statuskod {kod}",
  "avbrot_hamtning": "Hämtningen avbröts.",
  "stopp_svar": "Programmet stoppades medan det väntade på svar.",
  "avbrot_input": "Inmatningen avbröts.",
  "stopp_fil": "Programmet stoppades medan det väntade på en fil.",
  "ingen_fil": "Ingen fil valdes.",
  "stoppades": "Programmet stoppades.",
  "tidsgrans": "Programmet har kört i {sek} sekunder och stoppades automatiskt. Är det en oändlig loop? Stäng av Felsäkert läge om koden ska få ta längre tid.",
  "saknas": "Filen {namn} finns inte. Skapade du den med open() först?",
  "tom_lista": "Listan är tom — det finns inget att spara.",
  "laddade_ner": "Laddade ner {namn} ({tecken} tecken)",
  "laste_in": "Läste in {fran} -> {till} ({tecken} tecken)",
  "inga_filer": "Inga filer än. Skapa en med open(..., \"w\")."
},
  "ai_roll_dev": "Du är en erfaren Python-utvecklare som sitter bredvid och hjälper till.\n\nTon:\n- Skriv på svenska, kort och konkret. Rakt på sak.\n- Tala som till en kollega. Inga uppmuntrande utrop, ingen beröm.\n- Behöver du matematik: skriv den som LaTeX mellan $ … $ eller $$ … $$.\n\nSå här hjälper du:\n- Ge raka svar. Behövs kod, skriv koden — det här är ingen kurs.\n- Peka på verkliga problem: gränsfall, felhantering, namn som vilseleder.\n- Föreslå det enklaste som fungerar, inte det mest generella.\n- Säg till när något är fel, även om det inte var det som frågades om.\n- Är du osäker, säg det i stället för att gissa.\n\n{fakta}",
  ai_roll: "Du är en kunnig och tålmodig handledare i Python. Användaren kan vara nybörjare,\nerfaren programmerare som är ny i Python, eller något däremellan — och kan vara\ni vilken ålder som helst.\n\nTon och nivå:\n- Skriv på svenska, sakligt och rakt på sak. Högst 150 ord om inget annat behövs.\n- Tilltala användaren som en kapabel vuxen. Inga uppmuntrande utrop, inga smeknamn,\n  ingen översvallande beröm. Skriv som till en kollega.\n- Läs av nivån från frågorna och koden, och anpassa dig löpande. Är frågan\n  grundläggande, förklara från grunden utan att göra det barnsligt. Är frågan\n  avancerad, hoppa över det självklara.\n- Använd korrekta facktermer, men förklara dem första gången de dyker upp.\n- Behöver du matematik: skriv den som LaTeX mellan $ … $ för löpande text\n  eller $$ … $$ för egen rad. Chatten renderar exponenter, index, bråk,\n  rötter, grekiska bokstäver och vanliga operatorer. Håll uttrycken enkla —\n  matriser och flerradiga uppställningar renderas inte.\n- Jämförelser och exempel ska vara begripliga oavsett ålder. Undvik liknelser\n  hämtade från skolvärlden eller barns vardag.\n\nSå här handleder du:\n- Ge förklaringar och ledtrådar, inte färdiga lösningar. Skriv inte hela programmet.\n- Vid buggar: peka på VAR felet finns och FÖRKLARA varför, men låt användaren\n  skriva rättelsen själv.\n- Korta kodexempel på en eller två rader är bra för att visa en princip.\n- Ber användaren uttryckligen om en färdig lösning, förklara kort varför du hellre\n  vägleder — och ge sedan så mycket struktur att de kommer vidare på egen hand.\n- Avsluta gärna med en fråga eller ett förslag som leder vidare.\n\n{fakta}",
  ai_fakta: "Användaren arbetar i Pytho, en interaktiv Python-kurs i webbläsaren.\nKoden körs i Pytho: Python via Pyodide inuti en webbläsare.\nDetta gäller i miljön:\n- open() skriver till ett filsystem i minnet, inte till hårddisken. Filer försvinner vid omladdning.\n- Python kan inte läsa filer från datorn. Man använder data.oppna_fil() eller data.oppna_csv() som visar en filväljare.\n- data.download(filnamn) laddar ner en fil till datorn.\n- Nätverk går bara via data.fetch_json/fetch_text/fetch_csv, och bara mot servrar som tillåter CORS.\n- Inget pip install. Paket som finns: numpy, pandas, matplotlib, scikit-learn, xgboost, nltk, sqlite3 och standardbiblioteket.\n- nltk.download() fungerar INTE (inget nätverk från Python). Snowball-stemmern fungerar utan nedladdning.\n- pygame, tkinter, requests och GPU/CUDA fungerar inte.\n- 3D görs med modulen scene (scene.cube, scene.bar, scene.panel, scene.chart_panel med flera).\n- input() fungerar och frågar i utskriftsrutan.\n- En oändlig loop låser sidan; man måste ladda om.\nFöreslå aldrig något av det som inte fungerar.",
  start: "\n          <p class=\"valkomst\">Välkommen till Pytho</p>\n          <p class=\"startversion\" data-version></p>\n          <p class=\"ingress\">En riktig Python-tolk som kör inuti webbläsaren. Ingen installation, inget konto — koden körs på din egen dator. 29 kapitel tar dig från din första utskrift till hur en språkmodell fungerar inuti.</p>\n\n          <div class=\"snabbstart\">\n            <strong>Kom igång på en minut</strong>\n            <ol>\n              <li>Välj <strong>Kapitel 1</strong> i listan till vänster.</li>\n              <li>Läs förklaringen här nere och koden i rutan ovanför.</li>\n              <li>Tryck <kbd>Kör</kbd> eller <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</li>\n              <li>Ändra något i koden och kör igen. Det är så man lär sig.</li>\n            </ol>\n          </div>\n\n          <h3>Vad du kommer att bygga</h3>\n          <div class=\"delar\">\n            <div class=\"del-kort\">\n              <h4>Grunderna</h4>\n              <span class=\"spann\">Kapitel 1–5</span>\n              <p>Utskrift, variabler och datatyper, frågor till användaren, villkor och loopar. Allt annat vilar på det här.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Samlingar</h4>\n              <span class=\"spann\">Kapitel 6–9</span>\n              <p>Listor, text, dictionaries — och till sist filer, CSV och en riktig databas med sqlite3.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Bygga struktur</h4>\n              <span class=\"spann\">Kapitel 10–13</span>\n              <p>Egna funktioner, felhantering som inte kraschar, färdiga moduler, och klasser som håller ihop data och beteende.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Algoritmer</h4>\n              <span class=\"spann\">Kapitel 14–17</span>\n              <p>Sortering, binärsökning och rekursion. Du mäter också varför ett smart recept slår ett rakt igenom-recept tusenfalt.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Projekt</h4>\n              <span class=\"spann\">Kapitel 18–21</span>\n              <p>Ett gissningsspel, och sedan 3D-grafik: snurrande kuber, fordon och djur, en hel liten värld — och en Minecraft-artad voxelvärld av nio tusen kuber.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Maskininlärning</h4>\n              <span class=\"spann\">Kapitel 22–25</span>\n              <p>Träna en modell som lär sig regler själv, göra text till siffror, bygga egna embeddings och hämta öppna data från nätet.</p>\n            </div>\n            <div class=\"del-kort\">\n              <h4>Slutprojekt</h4>\n              <span class=\"spann\">Kapitel 26–29</span>\n              <p>Sveriges väder i 3D med riktig SMHI-data, modeller du kan se, en egen språkmodell — och mekanismen bakom transformers.</p>\n            </div>\n          </div>\n\n          <div class=\"tva\">\n            <div>\n              <h3>Spara ditt arbete</h3>\n              <p><kbd>Spara</kbd> skriver koden till en riktig <code>.py</code>-fil på datorn och <kbd>Öppna fil</kbd> hämtar tillbaka den. Du kan också dra in en fil direkt i kodrutan.</p>\n              <p>I Chrome och Edge sparas den tillbaka till samma ställe varje gång. I Firefox och Safari hamnar den i Hämtade filer — samma resultat, ett extra steg.</p>\n              <h3>AI-hjälp</h3>\n              <p>Strömbrytaren uppe till höger kopplar in en språkmodell som förklarar kod och felmeddelanden, och som du kan chatta med om kapitlet du arbetar i. Den ger ledtrådar och förklaringar snarare än färdiga lösningar — så att du behåller greppet om koden. Ollama och LM Studio fungerar lokalt utan nyckel.</p>\n            </div>\n            <div>\n              <h3>Bra att veta</h3>\n              <p>Filerna du skapar med <code>open()</code> ligger inuti webbläsaren och försvinner när du laddar om sidan. Vill du ut på riktigt använder du <code>data.download()</code>.</p>\n              <p>En loop som snurrar för evigt låser sidan, eftersom Python och webbsidan delar på samma motor. Ladda om om det händer — och spara innan du kör något med <code>while</code> i.</p>\n              <p>Vissa kapitel hämtar paket eller data från nätet första gången. Då syns nedladdningen i Utskrift.</p>\n            </div>\n          </div>\n\n          <h3>När du vuxit ur Pytho</h3>\n          <p>Nästan allt här fungerar oförändrat i ett vanligt Python på datorn. Ladda ner från python.org och skriv i Thonny eller VS Code — då får du riktiga filer, en stoppknapp som fungerar, och alla bibliotek som finns. Det är tio minuters installation, och kapitel 12 berättar vad som inte följer med.</p>\n        </div>",
  om: "\n    <h2 class=\"dialog-rubrik\" id=\"om-rubrik\">Om Pytho</h2>\n    <p class=\"dialog-ingress\" data-version></p>\n    <p class=\"om-text\">Pytho är utvecklat av Gabriel Westman.</p>\n    <p class=\"om-text\">Om du är intresserad av att använda applikationen för\n      utbildning eller undervisning — ta kontakt via\n      <a href=\"https://www.linkedin.com/in/gabriel-westman-08a708206/\"\n         target=\"_blank\" rel=\"noopener\">LinkedIn</a>.</p>\n    <p class=\"om-copyright\">Copyright Gabriel Westman 2026</p>\n    <h3 class=\"om-rubrik\">Kortkommandon</h3>\n    <table class=\"kortkommandon\"><tr><td><kbd>Ctrl + Enter</kbd></td><td>Kör programmet</td></tr><tr><td><kbd>Ctrl + Enter</kbd></td><td>Kör markeringen i samma namnrymd</td></tr><tr><td><kbd>Tab / Shift + Tab</kbd></td><td>Indentera eller minska indenteringen</td></tr><tr><td><kbd>Ctrl + F</kbd></td><td>Sök i filen</td></tr><tr><td><kbd>Ctrl + H</kbd></td><td>Sök och ersätt</td></tr><tr><td><kbd>Ctrl + G</kbd></td><td>Gå till rad</td></tr><tr><td><kbd>Ctrl + S</kbd></td><td>Spara till hårddisken</td></tr><tr><td><kbd>Ctrl + Shift + S</kbd></td><td>Spara som</td></tr><tr><td><kbd>Ctrl + O</kbd></td><td>Öppna en fil</td></tr><tr><td><kbd>R</kbd></td><td>Återställ 3D-vyn</td></tr><tr><td><kbd>Escape</kbd></td><td>Stäng rutan eller avbryt inmatningen</td></tr></table>\n    <div class=\"dialog-fot\">\n      <span class=\"ai-status\">Pytho körs lokalt i din webbläsare</span>\n      <button class=\"knapp kor\" id=\"om-stang\">Stäng</button>\n    </div>",
  ai_dialog: "\n    <h2 class=\"dialog-rubrik\" id=\"ai-dialog-rubrik\">Koppla in AI-hjälpen</h2>\n    <p class=\"dialog-ingress\">Välj en språkmodell att arbeta mot. Anslutningen måste\n      fungera innan hjälpen aktiveras.</p>\n\n    <div class=\"ai-rad\">\n      <label for=\"ai-leverantor\">Tjänst</label>\n      <select id=\"ai-leverantor\">\n        <option value=\"ollama\">Ollama (lokalt på din dator)</option>\n        <option value=\"lmstudio\">LM Studio (lokalt)</option>\n        <option value=\"mistral\">Mistral (Frankrike)</option>\n        <option value=\"openai-kompatibel\">Annan OpenAI-kompatibel</option>\n        <option value=\"anthropic\">Anthropic</option>\n        <option value=\"openai\">OpenAI</option>\n      </select>\n    </div>\n    <div class=\"ai-rad\">\n      <label for=\"ai-url\">Adress</label>\n      <input type=\"text\" id=\"ai-url\" spellcheck=\"false\">\n    </div>\n    <div class=\"ai-rad\">\n      <label for=\"ai-modell\">Modell</label>\n      <input type=\"text\" id=\"ai-modell\" spellcheck=\"false\">\n    </div>\n    <div class=\"ai-rad\" id=\"ai-nyckel-rad\">\n      <label for=\"ai-nyckel\">API-nyckel</label>\n      <input type=\"password\" id=\"ai-nyckel\" spellcheck=\"false\" autocomplete=\"off\"\n             placeholder=\"lagras bara i minnet, aldrig på disk\">\n    </div>\n\n    <p class=\"ai-not\">Nyckeln sparas aldrig — skriv in den igen om du laddar om sidan.\n      Ollama och LM Studio kör lokalt och behöver ingen nyckel.</p>\n\n    <p class=\"dialog-fel\" id=\"ai-dialog-fel\" hidden></p>\n\n    <div class=\"dialog-fot\">\n      <span class=\"ai-status\" id=\"ai-status\">Inte ansluten</span>\n      <button class=\"knapp\" id=\"ai-avbryt\">Avbryt</button>\n      <button class=\"knapp kor\" id=\"ai-testa\">Anslut</button>\n    </div>",
  startkod: [
  "# Välkommen till Pytho!",
  "# Tryck på Kör (eller Ctrl + Enter) och se vad som händer.",
  "",
  "print(\"Hej världen!\")",
  ""
],
  kapitel: [
  {
    del: "Grunderna", titel: "Skriva ut", fil: "kap01_skriva_ut.py",
    kod: [
      "# Allt efter ett #-tecken är en kommentar.",
      "# Python läser den inte — den är till för människor.",
      "",
      "print(\"Hej! Jag heter Python.\")",
      "print(\"Jag gör exakt det du säger åt mig.\")",
      "",
      "print(\"A\", \"B\", \"C\")            # komma ger mellanslag emellan",
      "print(\"A\", \"B\", \"C\", sep=\"\")    # sep bestämmer vad som ligger emellan",
      "print(\"Laddar\", end=\"\")          # end bestämmer vad som kommer sist",
      "print(\"...klart!\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Vad ett program är</h3>
      <p>Ett program är en lista med instruktioner som datorn utför uppifrån och ner, en rad i taget. Den gissar aldrig och hoppar aldrig över något. Det är därför programmering går att lära sig: datorn gör precis vad du skrev, även när det blir fel.</p>
      <h3>Syntaxen i print</h3>
      <p><code>print</code> är namnet på funktionen. Parenteserna efter betyder "kör den här nu", och det som står inuti kallas <em>argument</em> — det du skickar med.</p>
      <ul>
        <li><code>"Hej"</code> med citattecken är en <strong>sträng</strong>, alltså text. Citattecknen är inte en del av texten, de markerar var texten börjar och slutar.</li>
        <li>Du får använda antingen <code>"..."</code> eller <code>'...'</code>, bara du använder samma i båda ändarna.</li>
        <li>Flera argument skiljs åt med komma. <code>print</code> sätter då automatiskt ett mellanslag mellan dem.</li>
      </ul>
      <h3>Namngivna argument</h3>
      <p><code>sep=""</code> och <code>end=""</code> är <em>namngivna argument</em>: extra inställningar som du sätter med ett likhetstecken. <code>sep</code> är vad som hamnar <em>mellan</em> sakerna, <code>end</code> är vad som hamnar <em>efter</em> allt. Normalt är <code>end</code> en radbrytning, och det är därför varje <code>print</code> börjar på en ny rad.</p>
      <div class="fallgrop"><strong>Fallgrop:</strong> glömmer du ett citattecken eller en parentes får du <code>SyntaxError</code>. Python talar bara om var den <em>märkte</em> problemet, vilket ofta är raden efter den som är fel. Titta alltid en rad upp också. Färgerna hjälper: har du glömt ett avslutande citattecken färgas resten av programmet som text, och då ser du var det började.</div>
      <div class="uppgift"><strong>Uppgift:</strong> skriv fyra rader som presenterar dig — namn, ålder, favoritsak och en hälsning. Byt sedan plats på två rader och kör igen. Utskriften byter plats: ordningen i koden <em>är</em> programmet.</div>`
  },
  {
    del: "Grunderna", titel: "Variabler och datatyper", fil: "kap02_variabler.py",
    kod: [
      "# En variabel är en låda med en etikett på.",
      "namn = \"Alex\"          # str   — text",
      "alder = 12             # int   — heltal",
      "langd = 1.55           # float — decimaltal",
      "gillar_pizza = True    # bool  — sant eller falskt",
      "",
      "print(namn, \"är\", alder, \"år och\", langd, \"m lång.\")",
      "",
      "# type() berättar vilken sorts data som ligger i lådan",
      "print(type(namn), type(alder), type(langd), type(gillar_pizza))",
      "",
      "# f-sträng: sätt f före citattecknet och stoppa in variabler i {}",
      "print(f\"{namn} fyller {alder + 1} nästa år.\")",
      "",
      "# Samma tecken, olika betydelse:",
      "print(3 + 4)           # 7   — matematik",
      "print(\"3\" + \"4\")       # 34  — texterna limmas ihop",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Tilldelning</h3>
      <p>Likhetstecknet i <code>alder = 12</code> betyder inte "är lika med" som i matematiken. Det betyder <strong>lägg det som står till höger i lådan till vänster</strong>. Därför fungerar <code>antal = antal + 1</code>, som vore rent nonsens i matematiken.</p>
      <h3>De fyra grundtyperna</h3>
      <ul>
        <li><code>str</code> — text, alltid inom citattecken.</li>
        <li><code>int</code> — heltal, utan decimaler.</li>
        <li><code>float</code> — decimaltal. Python skriver decimalpunkt, inte komma: <code>1.55</code>.</li>
        <li><code>bool</code> — bara två möjliga värden, <code>True</code> och <code>False</code>. Stor bokstav, alltid.</li>
      </ul>
      <p>Typen avgör vad som går att göra. <code>+</code> mellan två tal räknar, <code>+</code> mellan två strängar limmar ihop, och <code>+</code> mellan en sträng och ett tal ger <code>TypeError</code> — Python vägrar gissa vilket du menade.</p>
      <h3>Regler för variabelnamn</h3>
      <p>Bokstäver, siffror och understreck, men aldrig en siffra först. Inga mellanslag: skriv <code>max_poang</code>, inte <code>max poang</code>. Stora och små bokstäver är olika saker — <code>Namn</code> och <code>namn</code> är två skilda lådor, och det är en vanlig orsak till <code>NameError</code>.</p>
      <p>Välj namn som säger vad saken är. <code>x</code> säger ingenting, <code>antal_gissningar</code> säger allt. Du skriver kod som ditt framtida jag ska kunna läsa.</p>
      <h3>Färgerna i redigeraren</h3><p>Ett utvecklingsverktyg färgar koden efter vad delarna <em>är</em>, och det är ingen dekoration utan hjälp med läsningen. Här får variabler, funktionsnamn, nyckelord som <code>if</code> och <code>def</code>, text, tal och kommentarer varsin färg.</p><p>Nyttan märks först när något är fel. Skriver du <code>Print</code> med stor bokstav får det inte den blå färg som inbyggda funktioner har, och då syns felet innan du kört. Färgerna är en egenskap hos verktyget, inte hos Python — VS Code och Thonny färgar samma kod på sina sätt, men efter samma principer.</p><div class="uppgift"><strong>Uppgift:</strong> skapa variabler för en films titel, längd i minuter och ditt betyg (1–5). Skriv ut en snygg rad med en f-sträng. Räkna sedan ut längden i timmar med <code>minuter / 60</code> — vilken typ blir svaret?</div>`
  },
  {
    del: "Grunderna", titel: "Fråga användaren", fil: "kap03_input.py",
    kod: [
      "# input() pausar programmet och väntar på ett svar.",
      "namn = input(\"Vad heter du? \")",
      "print(f\"Hej {namn}!\")",
      "",
      "# Svaret från input är ALLTID en sträng — även när man skriver siffror.",
      "svar = input(\"Hur gammal är du? \")",
      "print(type(svar))          # str",
      "",
      "alder = int(svar)          # gör om texten till ett heltal",
      "print(f\"Om 10 år är du {alder + 10} år.\")",
      "",
      "# Det går att göra i ett steg:",
      "langd = float(input(\"Hur lång är du i meter? \"))",
      "print(f\"Du är {langd * 100} cm lång.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>input pausar programmet</h3>
      <p><code>input()</code> stannar programmet, visar texten du gav den, och väntar tills användaren svarat. Svaret blir funktionens <em>returvärde</em> — det som kommer tillbaka och som du fångar i en variabel.</p>
      <p>I Pytho dyker frågan upp som en liten ruta. I ett riktigt Python på datorn skrivs den i terminalen i stället, men koden är identisk.</p>
      <h3>Typomvandling</h3>
      <p>Eftersom svaret alltid är en <code>str</code> måste du göra om det innan du räknar:</p>
      <ul>
        <li><code>int("42")</code> ger heltalet 42.</li>
        <li><code>float("1.55")</code> ger decimaltalet 1.55.</li>
        <li><code>str(42)</code> går åt andra hållet, till texten <code>"42"</code>.</li>
      </ul>
      <p>Läs <code>int(input("..."))</code> inifrån och ut: först körs <code>input</code>, sedan skickas dess svar vidare in i <code>int</code>. Funktioner får stoppas in i varandra hur många lager som helst.</p>
      <div class="fallgrop"><strong>Fallgrop:</strong> <code>int("hej")</code> ger <code>ValueError</code>, och det gör <code>int("3.5")</code> också — heltal betyder heltal. I kapitlet om felhantering lär du dig fånga det i stället för att programmet kraschar.</div>
      <div class="uppgift"><strong>Uppgift:</strong> bygg en räknare som frågar efter två tal och skriver ut summa, differens och produkt. Testa sedan med bokstäver i stället för siffror och läs felmeddelandet noga.</div>`
  },
  {
    del: "Grunderna", titel: "Villkor", fil: "kap04_villkor.py",
    kod: [
      "temperatur = 17",
      "",
      "if temperatur > 25:",
      "    print(\"Bada!\")",
      "elif temperatur > 15:",
      "    print(\"Ta med tröja.\")",
      "else:",
      "    print(\"Mössa på.\")",
      "",
      "# Jämförelser ger alltid True eller False",
      "print(5 > 3, 5 == 5, 5 != 5, 5 <= 4)",
      "",
      "# and, or och not kombinerar villkor",
      "alder = 12",
      "har_biljett = True",
      "",
      "if alder >= 11 and har_biljett:",
      "    print(\"Välkommen in.\")",
      "",
      "if not har_biljett:",
      "    print(\"Köp biljett först.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Indraget är syntax</h3>
      <p>I de flesta språk används måsvingar för att visa vad som hör ihop. Python använder <strong>indrag</strong>, och det är inte en stilfråga utan en del av språket. Fyra mellanslag in betyder "det här händer bara om raden ovanför var sann".</p>
      <p>Raden som öppnar ett block slutar alltid med kolon. Det gäller <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>try</code> och <code>class</code>.</p><p>Fyra mellanslag är standard i Python. Du behöver inte trycka fyra gånger — <kbd>Tab</kbd> gör indraget åt dig, och <kbd>Shift + Tab</kbd> tar bort det igen. Markerar du flera rader först flyttas alla på en gång.</p>
      <h3>if, elif och else</h3>
      <p>Detta är den viktigaste skillnaden i hela kapitlet: <strong><code>if</code> startar en ny fråga, <code>elif</code> hänger på den föregående.</strong></p>
      <p>I en kedja med <code>if / elif / else</code> testar Python uppifrån och ner och stannar vid det <em>första</em> sanna villkoret. Resten hoppas över, även om de också hade varit sanna. Skriver du två separata <code>if</code>-satser ställs båda frågorna, och båda kan slå till.</p>
      <p>Ordningen avgör därför resultatet. Står <code>&gt; 15</code> före <code>&gt; 25</code> kommer 30 grader att fastna på den första och "Bada!" nås aldrig. Testa alltid det snävaste villkoret först.</p>
      <h3>Jämförelser</h3>
      <p><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code> jämför storlek, <code>==</code> frågar om två saker är lika, <code>!=</code> om de är olika.</p>
      <div class="fallgrop"><strong>Fallgrop:</strong> <code>=</code> och <code>==</code> är helt olika. Ett likhetstecken lägger något i en låda, två frågar en fråga. <code>if x = 5:</code> är ett syntaxfel.</div>
      <div class="uppgift"><strong>Uppgift:</strong> gör ett betygsprogram som frågar efter poäng (0–100) och svarar A, C eller F. Lägg sedan till en gräns för E och kontrollera att villkoren står i rätt ordning.</div>`
  },
  {
    del: "Grunderna", titel: "Loopar", fil: "kap05_loopar.py",
    kod: [
      "# for: när du vet hur många varv",
      "for i in range(5):",
      "    print(\"Varv nummer\", i)",
      "",
      "print(\"---\")",
      "",
      "# range(start, stopp, steg) — stopp räknas INTE med",
      "for tal in range(2, 11, 2):",
      "    print(tal, end=\" \")",
      "print()",
      "",
      "# while: när du inte vet hur många varv",
      "nedrakning = 3",
      "while nedrakning > 0:",
      "    print(nedrakning)",
      "    nedrakning = nedrakning - 1",
      "print(\"Start!\")",
      "",
      "# break hoppar ur, continue hoppar över resten av varvet",
      "for tal in range(10):",
      "    if tal == 3:",
      "        continue",
      "    if tal == 6:",
      "        break",
      "    print(tal, end=\" \")",
      "print()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Två sorters loopar</h3>
      <p><code>for</code> går igenom något som redan finns — ett talintervall, en lista, en text — och slutar av sig själv. <code>while</code> fortsätter så länge ett villkor är sant, och kan i teorin snurra för evigt.</p>
      <p>Tumregel: vet du antalet varv i förväg, använd <code>for</code>. Beror det på vad som händer under tiden, använd <code>while</code>.</p>
      <h3>range</h3>
      <ul>
        <li><code>range(5)</code> ger 0, 1, 2, 3, 4 — fem tal, men de börjar på noll.</li>
        <li><code>range(2, 11)</code> ger 2 till 10. <strong>Slutvärdet räknas aldrig med.</strong></li>
        <li><code>range(2, 11, 2)</code> ger 2, 4, 6, 8, 10 — tredje talet är steglängden.</li>
      </ul>
      <p>Att räkna från noll och att utesluta slutvärdet är två saker som förvirrar alla i början. De blir logiska senare: <code>range(0, 5)</code> innehåller exakt fem tal, vilket gör matematiken enkel.</p>
      <h3>Loopvariabeln</h3>
      <p><code>for i in range(5)</code> skapar en variabel <code>i</code> som får ett nytt värde varje varv. Den kan heta vad som helst — <code>for vecka in range(52)</code> läser mycket bättre än <code>i</code> när det faktiskt handlar om veckor.</p>
      <h3>break och continue</h3>
      <p><code>break</code> avbryter loopen helt och fortsätter efter den. <code>continue</code> hoppar över resten av det här varvet och går direkt till nästa. Båda gäller alltid den <em>innersta</em> loopen de står i.</p>
      <div class="fallgrop"><strong>Oändlig loop:</strong> glömmer du <code>nedrakning = nedrakning - 1</code> blir villkoret sant för evigt och sidan låser sig. Ladda om. Vill du testa något osäkert, bygg in en nödbroms: en räknare som gör <code>break</code> efter 1000 varv.</div>
      <div class="uppgift"><strong>Uppgift:</strong> skriv ut sjuans tabell med en for-loop. Gör sedan en while-loop som fortsätter fråga efter tal tills användaren skriver 0.</div>`
  },
  {
    del: "Samlingar", titel: "Listor", fil: "kap06_listor.py",
    kod: [
      "vanner = [\"Sam\", \"Noor\", \"Elis\"]",
      "",
      "print(vanner[0])        # första — räkningen börjar på 0",
      "print(vanner[-1])       # sista",
      "print(len(vanner))      # hur många",
      "",
      "vanner.append(\"Maja\")   # lägg till sist",
      "vanner.insert(1, \"Kim\") # lägg in på plats 1",
      "vanner.remove(\"Sam\")    # ta bort ett visst värde",
      "print(vanner)",
      "",
      "for van in vanner:      # loopa över innehållet",
      "    print(\"Hej\", van)",
      "",
      "tal = [4, 17, 2, 9]",
      "print(sum(tal), min(tal), max(tal))",
      "tal.sort()",
      "print(tal)",
      "",
      "print(\"Noor\" in vanner)   # finns den? True eller False",
      "print(vanner[1:3])        # en bit ur listan",
      ""
    ].join("\n"),
    forklaring: `
      <h3>En låda med numrerade fack</h3>
      <p>En lista skrivs med hakparenteser och håller flera värden i bestämd ordning. Varje plats har ett <strong>index</strong>, och det första indexet är <code>0</code>. En lista med fyra saker har alltså index 0, 1, 2 och 3 — det finns inget index 4.</p>
      <p>Negativa index räknar bakifrån, så <code>[-1]</code> är alltid sista elementet. Praktiskt när du inte vet hur lång listan är.</p>
      <h3>Metoder</h3>
      <p><code>vanner.append("Maja")</code> är ett nytt sorts anrop: punkten betyder "kör den här funktionen <em>på</em> den här saken". Sådana funktioner kallas <strong>metoder</strong>, och vilka som finns beror på typen. Listor har <code>append</code>, <code>insert</code>, <code>remove</code>, <code>sort</code>, <code>reverse</code>, <code>pop</code> och <code>count</code>.</p>
      <p>Lägg märke till att <code>sort()</code> ändrar listan på plats och returnerar ingenting. Skriver du <code>tal = tal.sort()</code> får du <code>None</code> och tappar hela listan — ett klassiskt misstag.</p>
      <h3>Utsnitt</h3>
      <p><code>vanner[1:3]</code> ger en ny lista med elementen från index 1 fram till <em>men inte med</em> 3. Samma regel som <code>range</code>: slutvärdet är exklusivt. <code>[:2]</code> betyder från början, <code>[2:]</code> betyder till slutet.</p>
      <div class="fallgrop"><strong>Fallgrop:</strong> ta aldrig bort element ur en lista medan du loopar över den. Listan krymper under fötterna på loopen och den hoppar över saker. Bygg en ny lista i stället.</div>
      <div class="uppgift"><strong>Uppgift:</strong> gör en lista med tio slumptal (<code>random.randint</code>), skriv ut medelvärdet, och bygg sedan en ny lista som bara innehåller de tal som är över medelvärdet.</div>`
  },
  {
    del: "Samlingar", titel: "Strängar", fil: "kap07_strangar.py",
    kod: [
      "text = \"Python är kul\"",
      "",
      "print(len(text))          # antal tecken, mellanslag räknas",
      "print(text[0], text[-1])  # strängar har index precis som listor",
      "print(text[0:6])          # ett utsnitt",
      "",
      "print(text.upper())",
      "print(text.lower())",
      "print(text.replace(\"kul\", \"logiskt\"))",
      "print(text.split())       # delar upp i en lista vid mellanslag",
      "",
      "svar = \"  JA  \"",
      "print(svar.strip().lower())   # städa bort mellanslag, sänk versaler",
      "",
      "# Bygg text av delar",
      "ord = [\"aldrig\", \"ge\", \"upp\"]",
      "print(\"-\".join(ord))",
      "",
      "# Gå igenom tecken för tecken",
      "for tecken in \"abc\":",
      "    print(tecken, end=\".\")",
      "print()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Text är också en samling</h3>
      <p>En sträng beter sig på många sätt som en lista av tecken: den har längd, index, utsnitt och går att loopa över. Skillnaden är att strängar är <strong>oföränderliga</strong>. <code>text[0] = "X"</code> går inte. Metoder som <code>upper()</code> ändrar därför inte originalet utan <em>returnerar en ny sträng</em> — vill du behålla resultatet måste du fånga det i en variabel.</p>
      <h3>Metoder du kommer använda ofta</h3>
      <ul>
        <li><code>strip()</code> tar bort mellanslag och radbrytningar i början och slutet. Nästan alltid rätt att köra på det användaren skrivit in.</li>
        <li><code>lower()</code> gör allt till små bokstäver, så att <code>"JA"</code>, <code>"Ja"</code> och <code>"ja"</code> kan jämföras lika.</li>
        <li><code>split()</code> delar en text till en lista. Utan argument delas vid mellanslag, med <code>split(",")</code> vid komma.</li>
        <li><code>join()</code> gör tvärtom: limmar ihop en lista till en sträng, med det du valt emellan.</li>
        <li><code>replace(gammalt, nytt)</code> byter ut alla förekomster.</li>
      </ul>
      <h3>Kedjning</h3>
      <p><code>svar.strip().lower()</code> kör metoderna i tur och ordning: först städas texten, sedan sänks bokstäverna på resultatet. Läs vänster till höger.</p>
      <div class="uppgift"><strong>Uppgift:</strong> skriv ett program som frågar efter en mening och rapporterar antal tecken, antal ord och meningen baklänges. Baklänges får du med utsnittet <code>text[::-1]</code> — steget −1 betyder "gå åt andra hållet".</div>`
  },
  {
    del: "Samlingar", titel: "Dictionary", fil: "kap08_dictionary.py",
    kod: [
      "# En dictionary parar ihop nyckel och värde.",
      "elev = {",
      "    \"namn\": \"Elias\",",
      "    \"alder\": 12,",
      "    \"amnen\": [\"matte\", \"bild\"]",
      "}",
      "",
      "print(elev[\"namn\"])",
      "print(elev.get(\"betyg\", \"okänt\"))   # säkert uppslag med reservsvar",
      "",
      "elev[\"betyg\"] = \"A\"      # lägg till",
      "elev[\"alder\"] = 13       # ändra",
      "",
      "for nyckel, varde in elev.items():",
      "    print(nyckel, \"->\", varde)",
      "",
      "# Räkna förekomster — dictionaryns paradgren",
      "text = \"banan\"",
      "antal = {}",
      "for tecken in text:",
      "    antal[tecken] = antal.get(tecken, 0) + 1",
      "print(antal)",
      ""
    ].join("\n"),
    forklaring: `
      <h3>När numrering inte räcker</h3>
      <p>En lista hittar saker på <em>position</em>. En dictionary hittar dem på <strong>namn</strong>. Skrivs med måsvingar, och varje post är ett par: <code>nyckel: värde</code>.</p>
      <p>Det gör koden läsbar. <code>elev["namn"]</code> säger vad du hämtar, medan <code>elev[0]</code> tvingar dig komma ihåg vad plats noll betydde.</p>
      <h3>Hämta säkert</h3>
      <p><code>elev["betyg"]</code> på en nyckel som inte finns ger <code>KeyError</code> och kraschar programmet. <code>elev.get("betyg", "okänt")</code> ger i stället reservvärdet. Det är därför räknaren längst ner fungerar: <code>antal.get(tecken, 0) + 1</code> betyder "det gamla antalet, eller noll om vi inte sett tecknet förut, plus ett".</p>
      <h3>Loopa</h3>
      <ul>
        <li><code>for n in elev:</code> går över nycklarna.</li>
        <li><code>for v in elev.values():</code> går över värdena.</li>
        <li><code>for n, v in elev.items():</code> ger båda samtidigt — två variabler i loopen, en för vardera.</li>
      </ul>
      <h3>Regler</h3>
      <p>Nycklar måste vara unika och oföränderliga — strängar och tal fungerar, listor gör det inte. Värden får vara vad som helst, även listor och andra dictionaries. Så byggs riktiga datastrukturer: en lista av dictionaries är i praktiken en tabell.</p>
      <div class="uppgift"><strong>Uppgift:</strong> bygg en telefonbok där man kan lägga till namn och nummer, slå upp ett namn, och lista alla poster. Använd en <code>while</code>-loop med en meny.</div>`
  },
  {
    del: "Samlingar", titel: "Filer och databaser", fil: "kap09_filer.py",
    kod: [
      "import csv",
      "import json",
      "import sqlite3",
      "import data",
      "",
      "# ===== 1. Skriva och läsa text =====",
      "# \"w\" = write. Finns filen redan skrivs den över!",
      "with open(\"anteckning.txt\", \"w\") as fil:",
      "    fil.write(\"Första raden\\n\")",
      "    fil.write(\"Andra raden\\n\")",
      "",
      "with open(\"anteckning.txt\", \"a\") as fil:   # \"a\" = lägg till sist",
      "    fil.write(\"Tillagd senare\\n\")",
      "",
      "with open(\"anteckning.txt\") as fil:        # \"r\" = läsa är standard",
      "    for radnummer, rad in enumerate(fil, 1):",
      "        print(radnummer, rad.strip())",
      "print()",
      "",
      "# ===== 2. JSON: spara listor och dictionaries som de är =====",
      "djur = [",
      "    {\"namn\": \"Karo\", \"art\": \"hund\", \"vikt\": 24.5, \"alder\": 3},",
      "    {\"namn\": \"Misse\", \"art\": \"katt\", \"vikt\": 4.2, \"alder\": 7},",
      "    {\"namn\": \"Bamse\", \"art\": \"hund\", \"vikt\": 31.0, \"alder\": 5},",
      "    {\"namn\": \"Sotis\", \"art\": \"katt\", \"vikt\": 5.1, \"alder\": 2},",
      "]",
      "",
      "with open(\"djur.json\", \"w\") as fil:",
      "    json.dump(djur, fil, indent=2, ensure_ascii=False)",
      "",
      "with open(\"djur.json\") as fil:",
      "    tillbaka = json.load(fil)",
      "",
      "print(\"JSON behåller typerna:\", type(tillbaka[0][\"vikt\"]))",
      "print(\"Första posten:\", tillbaka[0])",
      "print()",
      "",
      "# ===== 3. CSV: en rad per post, öppnas i Excel =====",
      "kolumner = [\"namn\", \"art\", \"vikt\", \"alder\"]",
      "with open(\"djur.csv\", \"w\", newline=\"\") as fil:",
      "    skrivare = csv.DictWriter(fil, fieldnames=kolumner)",
      "    skrivare.writeheader()",
      "    skrivare.writerows(djur)",
      "",
      "with open(\"djur.csv\") as fil:",
      "    print(fil.read())",
      "",
      "with open(\"djur.csv\") as fil:",
      "    poster = list(csv.DictReader(fil))",
      "",
      "# OBS: allt som läses från CSV är TEXT — gör om innan du räknar",
      "print(\"CSV ger tillbaka:\", type(poster[0][\"vikt\"]))",
      "vikter = [float(p[\"vikt\"]) for p in poster]",
      "print(f\"Medelvikt: {sum(vikter) / len(vikter):.1f} kg\")",
      "print()",
      "",
      "# ===== 4. sqlite3: en riktig databas =====",
      "koppling = sqlite3.connect(\"djurpark.db\")",
      "markor = koppling.cursor()",
      "",
      "markor.execute(\"DROP TABLE IF EXISTS djur\")",
      "markor.execute(\"\"\"",
      "    CREATE TABLE djur (",
      "        namn  TEXT,",
      "        art   TEXT,",
      "        vikt  REAL,",
      "        alder INTEGER",
      "    )",
      "\"\"\")",
      "",
      "# Frågetecknen fylls i av databasen — skriv aldrig ihop text själv",
      "for d in djur:",
      "    markor.execute(",
      "        \"INSERT INTO djur VALUES (?, ?, ?, ?)\",",
      "        (d[\"namn\"], d[\"art\"], d[\"vikt\"], d[\"alder\"])",
      "    )",
      "koppling.commit()          # utan commit sparas ingenting",
      "",
      "# Låt databasen göra jobbet i stället för en for-loop",
      "markor.execute(\"SELECT namn, vikt FROM djur WHERE art = ? ORDER BY vikt DESC\", (\"hund\",))",
      "print(\"Hundar, tyngst först:\")",
      "for namn, vikt in markor.fetchall():",
      "    print(f\"   {namn:<8} {vikt} kg\")",
      "",
      "markor.execute(\"SELECT art, COUNT(*), AVG(vikt) FROM djur GROUP BY art\")",
      "print(\"Sammanställning per art:\")",
      "for art, antal, medel in markor.fetchall():",
      "    print(f\"   {art:<6} {antal} st, snitt {medel:.1f} kg\")",
      "",
      "koppling.close()",
      "print()",
      "",
      "# ===== 5. Ut ur och in i Pytho =====",
      "print(\"Filer i Pythos filsystem:\")",
      "data.list_files()",
      "print()",
      "",
      "# Skicka ut till din riktiga dator",
      "data.download(\"djur.csv\")       # fungerar för vilken fil som helst",
      "data.download(\"djur.json\")",
      "",
      "# Hämta in igen — filväljaren öppnas, peka ut djur.csv",
      "# (avmarkera raderna nedan när du vill prova)",
      "# poster_igen = data.open_csv()",
      "# print(\"Läste tillbaka\", len(poster_igen), \"poster\")",
      "# print(poster_igen[0])",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Att spara betyder att minnas mellan körningar</h3>
      <p>Allt du gjort hittills försvinner när programmet slutar. Variabler lever i minnet, och minnet töms. En fil ligger kvar — och det är skillnaden mellan en räknare och ett program som håller reda på något.</p>
      <h3>open och with</h3>
      <p><code>open("namn.txt", "läge")</code> öppnar en fil. Lägena är <code>"r"</code> för läsa (standard), <code>"w"</code> för skriva, och <code>"a"</code> för att lägga till sist.</p>
      <div class="fallgrop"><strong>Fallgrop:</strong> <code>"w"</code> raderar allt som fanns i filen innan, utan att fråga. Vill du behålla det gamla ska du använda <code>"a"</code>.</div>
      <p><code>with</code> är en säkerhetsanordning: filen stängs automatiskt när blocket är slut, även om något går fel på vägen. Glömmer man stänga kan det man skrivit bli kvar i en buffert och aldrig nå disken. Använd alltid <code>with</code>.</p>
      <p>Radbrytningar kommer inte automatiskt — därför <code>\\n</code> i slutet av varje <code>write</code>. Och när du läser rader följer radbrytningen med, vilket är varför <code>.strip()</code> används i utskriften.</p>
      <h3>Tre format, tre syften</h3>
      <p>Nu när du kan listor och dictionaries blir valet av format begripligt, för det handlar om vilken struktur du vill bevara.</p>
      <ul>
        <li><strong>Textfil</strong> — bara rader. Enklast, men du måste tolka innehållet själv.</li>
        <li><strong>JSON</strong> — sparar listor och dictionaries precis som de ser ut i Python, med typerna kvar. <code>json.dump</code> skriver, <code>json.load</code> läser tillbaka. Ett tal är fortfarande ett tal efteråt.</li>
        <li><strong>CSV</strong> — en tabell. Öppnas i Excel och av i stort sett alla program som finns, vilket är dess stora styrka.</li>
      </ul>
      <p><code>indent=2</code> gör JSON-filen läsbar för människor, och <code>ensure_ascii=False</code> gör att å, ä och ö skrivs som sig själva i stället för koder.</p>
      <div class="fallgrop"><strong>Viktigt:</strong> allt som läses ur en CSV-fil är <strong>text</strong>, precis som från <code>input()</code>. <code>post["vikt"]</code> är strängen <code>"24.5"</code>, inte talet. Ska du räkna måste du köra <code>float()</code> först. JSON har inte det problemet — det är hela skillnaden mellan formaten.</div>
      <h3>csv.DictReader och dictionaries</h3>
      <p><code>DictReader</code> ger tillbaka en <strong>lista med dictionaries</strong> — en per rad, med kolumnrubrikerna som nycklar. Det är precis de två samlingarna du lärde dig i kapitel 6 och 8, och det är därför det här kapitlet kommer nu: du har redan verktygen för att arbeta med resultatet.</p>
      <h3>sqlite3 — när CSV inte räcker</h3>
      <p>CSV fungerar bra upp till några tusen rader. Blir det mer, eller ska du söka och sortera ofta, behövs en riktig databas. <code>sqlite3</code> följer med Python, kräver ingen installation och lagrar allt i en enda fil.</p>
      <p>Tre begrepp: <strong>kopplingen</strong> är förbindelsen till databasfilen, <strong>markören</strong> är det du skickar frågor genom, och <strong>commit</strong> är det som verkligen sparar. Glömmer du <code>commit()</code> försvinner allt du skrivit.</p>
      <p>Frågespråket heter SQL och är sitt eget lilla språk: <code>CREATE TABLE</code> skapar, <code>INSERT</code> lägger in, <code>SELECT</code> hämtar. Det fina är att databasen gör arbetet åt dig. <code>WHERE art = 'hund' ORDER BY vikt DESC</code> ersätter en loop med en if-sats och en sortering — och på en miljon rader är databasen ofelbart snabbare än din egen kod.</p>
      <p><code>GROUP BY</code> är ännu tydligare: den delar in raderna i grupper och räknar på varje grupp för sig. Att skriva det själv kräver en dictionary, en loop och lite eftertanke.</p>
      <div class="fallgrop"><strong>Frågetecknen är inte kosmetika.</strong> Skriv <code>execute("... WHERE art = ?", (art,))</code> och låt databasen fylla i värdet. Klistrar du ihop texten själv med <code>+</code> öppnar du hålet som kallas SQL-injektion, där någon kan skriva in text som blir till kommandon. Det är en av de vanligaste säkerhetsluckorna som finns, och vanan att alltid använda frågetecken är skyddet.</div>
      <h3>Två filsystem — och det är viktigt att hålla isär dem</h3>
      <p>Det här är det som förvirrar mest, så läs långsamt.</p>
      <p><strong>Pythos filsystem</strong> ligger inuti webbläsaren. Det är hit <code>open()</code> skriver. Från Pythons sida ser det ut precis som en riktig hårddisk — samma kod, samma funktioner — men ingenting av det syns i Utforskaren eller Finder. Filerna finns kvar så länge fliken är öppen, mellan körningar, och försvinner när du laddar om sidan.</p>
      <p><strong>Din riktiga hårddisk</strong> når Python aldrig. En webbsida får inte läsa eller skriva i ditt filsystem hur som helst — det är samma skydd som CORS, och det finns för att en sida du besöker inte ska kunna rota bland dina dokument.</p>
      <p>Därför behövs två broar mellan världarna, och ingen av dem är Python som skriver till disk:</p>
      <ul>
        <li><code>data.download("djur.csv")</code> läser filen ur Pytho och skickar innehållet till webbläsaren, som gör en vanlig nedladdning. Samma sak som att klicka på en nedladdningslänk.</li>
        <li><code>data.open_file()</code> öppnar en filväljare. Den fil <em>du</em> pekar ut kopieras in i Pythos filsystem, och kan sedan läsas med vanlig <code>open()</code>. Det är ditt aktiva val som ger tillåtelsen — programmet kan inte välja åt dig.</li>
      </ul>
      <p>Genvägar finns: <code>data.open_csv()</code> ger direkt en lista med dictionaries, och <code>data.open_json()</code> ger tillbaka det som sparades. <code>data.list_files()</code> visar vad som ligger i Pytho just nu.</p>
      <p>Det betyder också att du kan ta in <strong>vilken CSV som helst</strong> — en export från Excel, nedladdad statistik, en fil från skolan — och analysera den med koden i det här kapitlet.</p>
      <h3>På en riktig dator</h3>
      <p>Där finns bara ett filsystem. <code>open()</code> skriver rakt på hårddisken, filerna ligger kvar för alltid, och databasen finns mellan körningarna. Ingen av <code>data</code>-funktionerna behövs — de är byggda just för att kompensera för webbläsarens spärrar. All annan kod i kapitlet fungerar oförändrad.</p>
      <div class="fallgrop"><strong>Att veta:</strong> eftersom filerna lever kvar mellan körningar kan gammalt innehåll ligga kvar och förvirra. Kör du något med <code>"a"</code> två gånger växer filen. <code>data.list_files()</code> visar vad som faktiskt finns, och en omladdning av sidan börjar om från tomt.</div>
      <div class="uppgift"><strong>Uppgift:</strong> bygg en dagbok i sqlite3. En funktion lägger till datum och text, en annan hämtar alla poster, och en tredje söker efter ett ord med <code>WHERE text LIKE ?</code> och mönstret <code>"%sökord%"</code>. Exportera sedan hela dagboken till CSV och ladda ner den — och nästa gång du öppnar Pytho, läs tillbaka den med <code>data.open_csv()</code> och fyll databasen igen. Då har du en dagbok som faktiskt överlever.</div>`
  },
  {
    del: "Bygga struktur", titel: "Funktioner", fil: "kap10_funktioner.py",
    kod: [
      "def halsa(namn):",
      "    return f\"Tjena {namn}!\"",
      "",
      "print(halsa(\"Kim\"))",
      "print(halsa(\"Robin\"))",
      "",
      "def area(bredd, hojd=10):       # hojd har ett standardvärde",
      "    return bredd * hojd",
      "",
      "print(area(4, 6))",
      "print(area(4))                # hojd blir 10",
      "",
      "def ar_jamnt(tal):",
      "    return tal % 2 == 0       # returnerar True eller False",
      "",
      "for t in range(1, 6):",
      "    if ar_jamnt(t):",
      "        print(t, \"är jämnt\")",
      "",
      "def visa(text):",
      "    print(\">>\", text)         # skriver ut men returnerar inget",
      "",
      "resultat = visa(\"hej\")",
      "print(resultat)               # None",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Din egen kommandoknapp</h3>
      <p><code>def</code> definierar en funktion. Raden slutar med kolon och kroppen är indragen, precis som hos <code>if</code> och <code>for</code>.</p>
      <p>Att definiera är inte att köra. Koden inuti händer först när du <em>anropar</em> funktionen med parenteser: <code>halsa("Kim")</code>. Definitionen måste komma före anropet i filen.</p>
      <h3>Parametrar och argument</h3>
      <p><code>namn</code> i <code>def halsa(namn)</code> är en <strong>parameter</strong> — en tom plats. <code>"Kim"</code> i anropet är ett <strong>argument</strong> — det som fyller platsen. Parametern finns bara inuti funktionen.</p>
      <p><code>hojd=10</code> ger ett standardvärde, så argumentet blir frivilligt. Parametrar med standardvärde måste stå sist.</p>
      <h3>return</h3>
      <p><code>return</code> skickar tillbaka ett värde och avslutar funktionen omedelbart — kod efter <code>return</code> körs aldrig. En funktion utan <code>return</code> returnerar <code>None</code>, vilket är Pythons ord för "ingenting".</p>
      <p>Skilj på att <em>skriva ut</em> och att <em>returnera</em>. <code>print</code> visar något för människan. <code>return</code> lämnar tillbaka ett värde till resten av programmet, som kan räkna vidare med det. Nybörjare använder <code>print</code> där <code>return</code> behövs, och sedan går resultatet inte att använda.</p>
      <h3>Varför funktioner</h3>
      <p>Skriv en gång, använd många gånger. Rätta på ett ställe i stället för sju. Och framför allt: en funktion med ett bra namn gör koden läsbar — <code>if ar_primtal(n):</code> förklarar sig själv.</p>
      <div class="uppgift"><strong>Uppgift:</strong> gör om ditt primtalstest till en funktion <code>ar_primtal(tal)</code> som returnerar <code>True</code> eller <code>False</code>. Använd den sedan i en loop för att lista alla primtal under 100.</div>`
  },
  {
    del: "Bygga struktur", titel: "Fånga fel", fil: "kap11_felhantering.py",
    kod: [
      "# Utan skydd kraschar programmet på fel inmatning.",
      "try:",
      "    alder = int(input(\"Hur gammal är du? \"))",
      "    print(f\"Om 5 år är du {alder + 5}.\")",
      "except ValueError:",
      "    print(\"Det där var inget heltal.\")",
      "",
      "# Fråga om och om igen tills svaret duger",
      "while True:",
      "    try:",
      "        tal = int(input(\"Skriv ett heltal: \"))",
      "        break",
      "    except ValueError:",
      "        print(\"Försök igen.\")",
      "",
      "print(\"Du skrev\", tal)",
      "",
      "# Olika fel kan fångas var för sig",
      "try:",
      "    print(10 / 0)",
      "except ZeroDivisionError:",
      "    print(\"Kan inte dela med noll.\")",
      "",
      "# Kontrollera själv med if — och stoppa med raise",
      "def rotur(tal):",
      "    if tal < 0:",
      "        raise ValueError(\"negativa tal går inte\")",
      "    return tal ** 0.5",
      "",
      "print(rotur(16))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Fel är inte något ovanligt</h3>
      <p>Så fort ett program möter en människa kommer det få skräp i sig. Ett bra program kraschar inte då — det säger till och frågar igen.</p>
      <h3>try och except</h3>
      <p>Koden i <code>try</code>-blocket körs som vanligt. Uppstår ett fel avbryts <code>try</code> direkt och Python hoppar till <code>except</code>. Blir det inget fel hoppas <code>except</code> över helt.</p>
      <p>Skriv alltid ut vilken sorts fel du fångar. <code>except ValueError:</code> fångar just felaktig omvandling. Ett naket <code>except:</code> fångar <em>allt</em>, även dina egna stavfel, och då döljer du buggar för dig själv.</p>
      <h3>Feltyperna du redan mött</h3>
      <ul>
        <li><code>ValueError</code> — rätt typ, fel innehåll: <code>int("hej")</code>.</li>
        <li><code>TypeError</code> — fel typ: <code>"3" + 4</code>.</li>
        <li><code>ZeroDivisionError</code> — division med noll.</li>
        <li><code>IndexError</code> och <code>KeyError</code> — platsen eller nyckeln finns inte.</li>
        <li><code>NameError</code> — namnet finns inte, oftast ett stavfel.</li>
      </ul>
      <h3>raise</h3>
      <p>Du kan också <em>skapa</em> fel själv. <code>raise ValueError("...")</code> stoppar funktionen och signalerar att något var galet. Bättre än att returnera ett hittepå-värde som anroparen kanske missar.</p>
      <div class="uppgift"><strong>Uppgift:</strong> skriv funktionen <code>fraga_tal(text, minsta, storsta)</code> som frågar tills svaret är ett heltal inom intervallet, och returnerar det. Använd den sedan i gissningsspelet.</div>`
  },
  {
    del: "Bygga struktur", titel: "Moduler", fil: "kap12_moduler.py",
    kod: [
      "import random",
      "import math",
      "import time",
      "",
      "print(random.randint(1, 6))              # heltal, båda ändar räknas",
      "print(random.choice([\"sten\", \"sax\", \"påse\"]))",
      "kort = [1, 2, 3, 4, 5]",
      "random.shuffle(kort)                     # blandar listan på plats",
      "print(kort)",
      "",
      "print(math.sqrt(144))                    # kvadratrot",
      "print(math.isqrt(144))                   # heltalsrot, helt exakt",
      "print(math.pi)",
      "print(math.floor(3.7), math.ceil(3.2))   # runda ner respektive upp",
      "",
      "# from ... import hämtar bara en sak",
      "from math import sqrt",
      "print(sqrt(81))",
      "",
      "start = time.time()",
      "summa = sum(range(1000000))",
      "print(\"Tog\", round(time.time() - start, 3), \"sekunder\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Färdiga verktygslådor</h3>
      <p>En modul är en samling färdig kod som någon annan skrivit. Python har hundratals inbyggda — du behöver inte hitta på kvadratroten själv.</p>
      <p><code>import math</code> hämtar hela modulen, och du når innehållet med punkt: <code>math.sqrt(9)</code>. <code>from math import sqrt</code> hämtar bara en funktion, som du sedan använder utan prefix. Det första är tydligare i större program, för man ser var funktionen kommer ifrån.</p>
      <h3>Tre moduler värda att kunna</h3>
      <ul>
        <li><code>random</code> — <code>randint(a, b)</code>, <code>choice(lista)</code>, <code>shuffle(lista)</code>, <code>random()</code> för ett decimaltal mellan 0 och 1.</li>
        <li><code>math</code> — <code>sqrt</code>, <code>isqrt</code>, <code>floor</code>, <code>ceil</code>, <code>pi</code>, <code>gcd</code>.</li>
        <li><code>time</code> — <code>time()</code> ger sekunder sedan 1970, praktiskt för att mäta hur lång tid din kod tar.</li>
      </ul>
      <h3>Vad som fungerar här i Pytho</h3>
      <p>Pytho kör Python inuti webbläsaren. Standardmodulerna finns, men allt som rör omvärlden gör det inte: du kan inte öppna filer på hårddisken från Python-koden, inte surfa på nätet, och inte använda grafikbibliotek som <code>tkinter</code> eller <code>pygame</code>. <code>time.sleep()</code> fungerar men fryser sidan under tiden — håll det kort.</p>
      <p>Vill du dit senare behöver du Python installerat på datorn. Då öppnas hela världen: spel, grafik, filer, internet.</p>
      <div class="uppgift"><strong>Uppgift:</strong> bygg sten–sax–påse mot datorn. Använd <code>random.choice</code>, håll poäng i variabler, och spela bäst av fem.</div>`
  },
  {
    del: "Bygga struktur", titel: "Klasser", fil: "kap13_klasser.py",
    kod: [
      "class Hund:",
      "    def __init__(self, namn, alder):",
      "        self.namn = namn          # egenskaper sparas på objektet",
      "        self.alder = alder",
      "        self.mattgrad = 0",
      "",
      "    def skall(self):",
      "        return f\"{self.namn} säger voff!\"",
      "",
      "    def ata(self, mangd):",
      "        self.mattgrad = self.mattgrad + mangd",
      "        if self.mattgrad > 10:",
      "            return f\"{self.namn} är proppmätt.\"",
      "        return f\"{self.namn} vill ha mer.\"",
      "",
      "# Skapa objekt av klassen",
      "karo = Hund(\"Karo\", 3)",
      "fido = Hund(\"Fido\", 7)",
      "",
      "print(karo.skall())",
      "print(fido.skall())",
      "print(karo.ata(4))",
      "print(karo.ata(8))",
      "print(fido.mattgrad)     # Fido påverkas inte av Karos mat",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Rita en ritning, bygg många exemplar</h3>
      <p>En <strong>klass</strong> är en ritning. Ett <strong>objekt</strong> är en sak byggd efter ritningen. <code>Hund</code> är ritningen; <code>karo</code> och <code>fido</code> är två hundar med varsin uppsättning egenskaper.</p>
      <p>Klassnamn skrivs med stor begynnelsebokstav. Det är bara en konvention, men alla följer den.</p>
      <h3>__init__ och self</h3>
      <p><code>__init__</code> körs automatiskt när du skapar ett objekt med <code>Hund("Karo", 3)</code>. Den fyller det nya objektet med startvärden.</p>
      <p><code>self</code> är objektet självt. Varje metod får det som första parameter, men du skickar det aldrig med i anropet — Python fyller i det åt dig. <code>self.namn</code> betyder "det här objektets namn", till skillnad från en vanlig variabel som försvinner när metoden är klar.</p>
      <p>De dubbla understrecken markerar att namnet har en särskild betydelse för Python. Det finns fler: <code>__str__</code> bestämmer vad <code>print(karo)</code> visar.</p>
      <h3>När det är värt besväret</h3>
      <p>När flera saker hör ihop och beter sig likadant fast med olika data. En spelare med liv, poäng och inventarie. Ett konto med saldo och historik. Du kunde använda dictionaries i stället, men då ligger data och funktioner på skilda ställen — klassen håller ihop dem.</p>
      <div class="uppgift"><strong>Uppgift:</strong> skriv en klass <code>Konto</code> med metoderna <code>satt_in</code>, <code>ta_ut</code> och <code>saldo</code>. Låt <code>ta_ut</code> vägra om pengarna inte räcker. Skapa två konton och kontrollera att de inte påverkar varandra.</div>`
  },
  {
    del: "Algoritmer", titel: "Sortera och söka", fil: "kap14_sortera_soka.py",
    kod: [
      "# Bubbelsortering — enkel att förstå, långsam i praktiken",
      "def bubbelsortera(lista):",
      "    tal = lista.copy()",
      "    for varv in range(len(tal)):",
      "        for i in range(len(tal) - 1 - varv):",
      "            if tal[i] > tal[i + 1]:",
      "                tal[i], tal[i + 1] = tal[i + 1], tal[i]   # byt plats",
      "    return tal",
      "",
      "print(bubbelsortera([5, 1, 4, 2, 8]))",
      "",
      "# Linjär sökning — kolla allt tills du hittar",
      "def sok_rakt_igenom(lista, mal):",
      "    for i in range(len(lista)):",
      "        if lista[i] == mal:",
      "            return i",
      "    return -1",
      "",
      "# Binärsökning — kräver sorterad lista, halverar varje gång",
      "def binarsok(lista, mal):",
      "    lag = 0",
      "    hog = len(lista) - 1",
      "    while lag <= hog:",
      "        mitt = (lag + hog) // 2",
      "        if lista[mitt] == mal:",
      "            return mitt",
      "        elif lista[mitt] < mal:",
      "            lag = mitt + 1",
      "        else:",
      "            hog = mitt - 1",
      "    return -1",
      "",
      "sorterad = list(range(0, 200, 2))",
      "print(binarsok(sorterad, 144))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Algoritm = recept</h3>
      <p>Nu skriver du inte bara kod som fungerar, utan kod som fungerar <em>bra</em>. Samma uppgift kan lösas på flera sätt, och skillnaden i hastighet kan vara tusenfaldig.</p>
      <h3>Bubbelsortering</h3>
      <p>Gå igenom listan, jämför granne med granne, byt plats om de står fel. Upprepa tills inget mer behöver bytas. Det största talet "bubblar" till slutet första varvet, det näst största andra varvet — därför <code>- varv</code> i den inre loopen, den delen är redan klar.</p>
      <p><code>tal[i], tal[i+1] = tal[i+1], tal[i]</code> byter plats på två värden i ett svep. I de flesta språk behövs en tredje variabel; Python löser det med en rad.</p>
      <h3>Binärsökning</h3>
      <p>Tänk på hur du slår upp ett ord i en ordbok: du öppnar i mitten, ser om ordet ligger före eller efter, och glömmer omedelbart bort halva boken. Sedan gör du om det.</p>
      <p><code>//</code> är heltalsdivision — <code>7 // 2</code> blir 3, inte 3.5. Index måste vara heltal, så det är precis vad vi vill.</p>
      <h3>Hur mycket snabbare?</h3>
      <p>Att söka rakt igenom en miljon poster kräver i värsta fall en miljon kontroller. Binärsökning klarar det på tjugo, för varje steg halverar mängden kvar. Det är därför sortering är värt besväret: sorterad data går att söka i på ett helt annat sätt.</p>
      <p>Priset är att listan måste vara sorterad först — och Pythons inbyggda <code>sorted()</code> är alltid snabbare än din egen bubbelsortering. Poängen med att skriva den själv är att förstå vad som händer inuti.</p>
      <div class="uppgift"><strong>Uppgift:</strong> lägg en räknare i båda sökfunktionerna som räknar antal jämförelser. Sök efter samma tal i en lista med 10 000 element och jämför siffrorna.</div>`
  },
  {
    del: "Algoritmer", titel: "Rekursion", fil: "kap15_rekursion.py",
    kod: [
      "# En funktion som anropar sig själv",
      "def fakultet(n):",
      "    if n <= 1:          # basfall — här stannar det",
      "        return 1",
      "    return n * fakultet(n - 1)",
      "",
      "print(fakultet(5))      # 5*4*3*2*1 = 120",
      "",
      "def nedrakning(n):",
      "    if n == 0:",
      "        print(\"Start!\")",
      "        return",
      "    print(n)",
      "    nedrakning(n - 1)",
      "",
      "nedrakning(3)",
      "",
      "# Fibonacci — elegant men långsam",
      "def fib(n):",
      "    if n < 2:",
      "        return n",
      "    return fib(n - 1) + fib(n - 2)",
      "",
      "for i in range(10):",
      "    print(fib(i), end=\" \")",
      "print()",
      "",
      "# Samma sak med loop — mycket snabbare",
      "def fib_snabb(n):",
      "    a, b = 0, 1",
      "    for _ in range(n):",
      "        a, b = b, a + b",
      "    return a",
      "",
      "print(fib_snabb(40))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>En funktion som ringer sig själv</h3>
      <p>Rekursion löser ett problem genom att lösa en mindre version av samma problem. Fakulteten av 5 är 5 gånger fakulteten av 4, som är 4 gånger fakulteten av 3, och så vidare.</p>
      <h3>Två delar krävs alltid</h3>
      <ul>
        <li><strong>Basfallet</strong> — situationen där funktionen svarar direkt utan att anropa sig själv. Utan det tar det aldrig slut.</li>
        <li><strong>Det rekursiva steget</strong> — anropet med ett <em>mindre</em> problem, som garanterat närmar sig basfallet.</li>
      </ul>
      <p>Glömmer du basfallet får du <code>RecursionError: maximum recursion depth exceeded</code>. Python räknar hur djupt du gått och avbryter vid cirka tusen nivåer. Det är faktiskt vänligare än en oändlig loop, som bara låser sig.</p>
      <h3>Vad som händer i minnet</h3>
      <p>Varje anrop får sin egen uppsättning variabler och läggs på en <em>stack</em>. <code>fakultet(5)</code> kan inte svara förrän <code>fakultet(4)</code> svarat, som väntar på <code>fakultet(3)</code>… När basfallet nås rullas allt tillbaka och multipliceras ihop på vägen upp.</p>
      <h3>Vackert är inte alltid snabbt</h3>
      <p>Den rekursiva Fibonacci räknar om samma värden om och om igen — <code>fib(30)</code> kräver över en miljon anrop. Loopvarianten klarar <code>fib(40)</code> på ett ögonblick. Rekursion är rätt verktyg för trädformade problem, som mappstrukturer eller att söka igenom alla drag i ett spel. För enkla upprepningar är en loop bättre.</p>
      <p>Lägg också märke till <code>a, b = b, a + b</code>. Högersidan räknas ut helt först, sedan tilldelas båda samtidigt — ingen risk att <code>a</code> hinner ändras för tidigt.</p>
      <div class="uppgift"><strong>Uppgift:</strong> skriv en rekursiv funktion som vänder en sträng baklänges, och en som räknar hur många gånger ett tecken finns i en text. Använd inga loopar.</div>`
  },
  {
    del: "Algoritmer", titel: "Snabba algoritmer", fil: "kap16_snabba_algoritmer.py",
    kod: [
      "import time",
      "import math",
      "",
      "def ar_primtal(n):",
      "    if n < 2:",
      "        return False",
      "    for c in range(2, math.isqrt(n) + 1):",
      "        if n % c == 0:",
      "            return False",
      "    return True",
      "",
      "def eratosthenes(grans):",
      "    ar_prim = [True] * (grans + 1)",
      "    ar_prim[0] = False",
      "    ar_prim[1] = False",
      "    for tal in range(2, math.isqrt(grans) + 1):",
      "        if ar_prim[tal]:",
      "            for multipel in range(tal * tal, grans + 1, tal):",
      "                ar_prim[multipel] = False",
      "    return [i for i in range(grans + 1) if ar_prim[i]]",
      "",
      "GRANS = 50000",
      "",
      "start = time.time()",
      "a = [n for n in range(GRANS) if ar_primtal(n)]",
      "tid_a = time.time() - start",
      "",
      "start = time.time()",
      "b = eratosthenes(GRANS)",
      "tid_b = time.time() - start",
      "",
      "print(\"Antal primtal:\", len(a), len(b))",
      "print(f\"Testa varje tal: {tid_a:.3f} s\")",
      "print(f\"Eratosthenes såll: {tid_b:.3f} s\")",
      "print(f\"Sållet är {tid_a / tid_b:.1f} gånger snabbare\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Två sätt att tänka</h3>
      <p>Den första metoden frågar om varje enskilt tal: har du någon delare? Sållet vänder på det — i stället för att leta delare <em>stryker</em> det alla multiplar. Alla som blir kvar måste vara primtal.</p>
      <h3>Så fungerar sållet</h3>
      <p>Börja med en lista där alla tal antas vara primtal. Ta första otsrukna talet, 2, och stryk 4, 6, 8, 10… Gå till 3, stryk 9, 12, 15… Fortsätt. Det som aldrig ströks är primtal.</p>
      <p><code>[True] * (grans + 1)</code> skapar en lista full av <code>True</code>. Den inre loopen börjar på <code>tal * tal</code>, inte <code>tal * 2</code> — alla mindre multiplar är redan strukna av ett mindre primtal. Yttre loopen behöver bara gå till kvadratroten, av samma skäl som i primtalstestet.</p>
      <h3>Att mäta i stället för att gissa</h3>
      <p><code>time.time()</code> före och efter, och subtrahera. Det är så man svarar på "är det här snabbt?" — inte med magkänsla.</p>
      <p><code>f"{tid_a:.3f}"</code> är formatering inuti en f-sträng: kolon följt av <code>.3f</code> betyder tre decimaler. Det finns fler: <code>{x:>8}</code> högerjusterar i åtta tecken, <code>{x:,}</code> sätter tusentalsavgränsare.</p>
      <h3>Varför skillnaden växer</h3>
      <p>Att testa varje tal kostar ungefär roten ur n arbete per tal. Sållet gör en liten fast mängd arbete per struket tal. Vid gränsen 1000 är skillnaden knappt märkbar, vid 50 000 tydlig, vid en miljon dramatisk. Det är kärnan i algoritmanalys: det viktiga är inte hur snabbt något går <em>nu</em>, utan hur det <em>växer</em>.</p>
      <div class="uppgift"><strong>Uppgift:</strong> kör mätningen med gränsen 5000, 20000 och 100000. Skriv upp kvoten varje gång. Vad händer med den när gränsen växer?</div>`
  },
  {
    del: "Algoritmer", titel: "Listuttryck", fil: "kap17_listuttryck.py",
    kod: [
      "tal = [4, 17, 2, 9, 30, 11]",
      "",
      "# Långa vägen",
      "dubbla = []",
      "for t in tal:",
      "    dubbla.append(t * 2)",
      "print(dubbla)",
      "",
      "# Samma sak på en rad",
      "print([t * 2 for t in tal])",
      "",
      "# Med filter",
      "print([t for t in tal if t > 10])",
      "",
      "# enumerate ger både plats och värde",
      "for i, t in enumerate(tal):",
      "    print(i, \"->\", t)",
      "",
      "# zip går igenom två listor parallellt",
      "namn = [\"Ada\", \"Linus\", \"Grace\"]",
      "poang = [12, 7, 19]",
      "for n, p in zip(namn, poang):",
      "    print(f\"{n}: {p}\")",
      "",
      "# sorted med nyckel",
      "elever = list(zip(namn, poang))",
      "print(sorted(elever, key=lambda par: par[1], reverse=True))",
      "",
      "# any och all",
      "print(any(t > 25 for t in tal))",
      "print(all(t > 0 for t in tal))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Listuttryck</h3>
      <p><code>[t * 2 for t in tal]</code> gör exakt samma sak som fyra rader med <code>append</code>, men på en. Läs den utifrån och in: hakparenteserna säger "bygg en lista", <code>for t in tal</code> säger vad du går igenom, och <code>t * 2</code> säger vad som ska hamna i den nya listan.</p>
      <p>Med <code>if</code> på slutet filtrerar du: bara element där villkoret är sant kommer med. Du kan kombinera båda.</p>
      <p>Använd dem när de gör koden <em>tydligare</em>. Ett listuttryck med två loopar och tre villkor är svårare att läsa än den vanliga varianten — då är den vanliga bättre.</p>
      <h3>enumerate</h3>
      <p>När du behöver både position och värde. Alternativet <code>for i in range(len(lista))</code> fungerar men är klumpigare, och kallas ofta ett tecken på att man inte kan enumerate än.</p>
      <h3>zip</h3>
      <p>Går igenom flera listor samtidigt och parar ihop dem element för element. Slutar när den kortaste tar slut.</p>
      <h3>key och lambda</h3>
      <p><code>sorted(lista, key=...)</code> sorterar efter något annat än värdet självt. <code>key</code> vill ha en funktion som tar ett element och returnerar det som ska jämföras.</p>
      <p><code>lambda par: par[1]</code> är en namnlös miniatyrfunktion: "ta emot <code>par</code>, lämna tillbaka <code>par[1]</code>". Samma sak som en <code>def</code> på två rader, men när funktionen bara ska användas här är det onödigt att döpa den. <code>reverse=True</code> vänder ordningen.</p>
      <h3>any och all</h3>
      <p><code>any</code> är sant om minst ett element uppfyller villkoret, <code>all</code> om alla gör det. Läser nästan som svenska och ersätter ofta en hel loop med en flaggvariabel.</p>
      <div class="uppgift"><strong>Uppgift:</strong> skriv om ditt primtalstest med <code>all(...)</code> i stället för loop med flagga. Sortera sedan en lista med namn efter längd i stället för bokstavsordning.</div>`
  },
  {
    del: "Projekt", titel: "Bygg ett spel", fil: "kap18_projekt.py",
    kod: [
      "import random",
      "",
      "def fraga_tal(text, minsta, storsta):",
      "    while True:",
      "        try:",
      "            svar = int(input(text))",
      "        except ValueError:",
      "            print(\"Skriv ett heltal.\")",
      "            continue",
      "        if minsta <= svar <= storsta:",
      "            return svar",
      "        print(f\"Måste vara mellan {minsta} och {storsta}.\")",
      "",
      "def spela(grans, max_gissningar):",
      "    hemligt = random.randint(1, grans)",
      "    for omgang in range(1, max_gissningar + 1):",
      "        kvar = max_gissningar - omgang + 1",
      "        gissning = fraga_tal(f\"Gissning ({kvar} kvar): \", 1, grans)",
      "        if gissning == hemligt:",
      "            return omgang",
      "        if gissning < hemligt:",
      "            print(\"För lågt!\")",
      "        else:",
      "            print(\"För högt!\")",
      "    print(\"Slut. Talet var\", hemligt)",
      "    return None",
      "",
      "resultat = []",
      "while True:",
      "    poang = spela(100, 7)",
      "    if poang:",
      "        print(f\"Rätt på {poang} gissningar!\")",
      "        resultat.append(poang)",
      "    if input(\"Spela igen? (j/n) \").strip().lower() != \"j\":",
      "        break",
      "",
      "if resultat:",
      "    print(f\"Du klarade {len(resultat)} omgångar, bäst: {min(resultat)}\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Allt på en gång</h3>
      <p>Det här programmet använder varenda sak från kapitlen innan: funktioner med returvärde, felhantering, loopar, listor, f-strängar, villkor och slump. Så ser riktig kod ut — inte en teknik i taget utan alla samtidigt.</p>
      <h3>Läs det uppifrån</h3>
      <p><code>fraga_tal</code> har ett enda jobb: aldrig lämna tillbaka något annat än ett giltigt tal. <code>continue</code> hoppar tillbaka till loopens början när svaret inte gick att tolka.</p>
      <p><code>spela</code> returnerar antingen antalet gissningar eller <code>None</code>. Anroparen kan då skilja på vinst och förlust med ett enkelt <code>if poang:</code> — <code>None</code> räknas som falskt.</p>
      <p>Lägg märke till <code>minsta &lt;= svar &lt;= storsta</code>. Python tillåter kedjade jämförelser precis som matematiken, vilket få språk gör.</p>
      <h3>Varför sju gissningar räcker</h3>
      <p>Gissa alltid mitt i det som är kvar, så halveras intervallet varje gång: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. Det är binärsökning, samma algoritm som i kapitel 14, men nu är det du som är algoritmen.</p>
      <h3>Härifrån</h3>
      <p>Bygg vidare: highscore i en dictionary, svårighetsgrader, ett tvåspelarläge. Eller något helt annat — kalkylator, quiz, textäventyr, sifferspel.</p>
      <p>När du vill ha grafik, spara filer från själva Python-koden, eller använda bibliotek som pygame, är det dags att installera Python på datorn. Ladda ner från python.org och använd Thonny eller VS Code. Allt du lärt dig här fungerar oförändrat där.</p>
      <div class="uppgift"><strong>Uppgift:</strong> lägg till svårighetsgrader — lätt är 1–50 med 8 gissningar, svår är 1–500 med 9. Låt spelaren välja i en meny, och spara bästa resultatet per nivå i en dictionary.</div>`
  },
  {
    del: "Projekt", titel: "3D-grafik", fil: "kap19_tre_dimensioner.py",
    kod: [
      "import scene",
      "import math",
      "",
      "scene.start()",
      "scene.background(\"#0e1c33\")",
      "scene.camera(0, 3, 9)",
      "",
      "# Varje form returnerar ett objekt du kan styra",
      "mitten = scene.cube(0, 0, 0, size=1.4, color=\"#ffc94a\")",
      "mitten.spin(0.004, 0.008, 0)",
      "",
      "golv = scene.box(0, -2, 0, width=14, height=0.2, depth=14, color=\"#1b3255\")",
      "",
      "# Bygg en ring av klot med hjälp av matematik",
      "planeter = []",
      "for i in range(8):",
      "    vinkel = i * 2 * math.pi / 8",
      "    x = math.cos(vinkel) * 4",
      "    z = math.sin(vinkel) * 4",
      "    klot = scene.sphere(x, 0, z, radius=0.45, color=\"#6ee7b7\")",
      "    planeter.append((klot, vinkel))",
      "",
      "# Den här funktionen körs 60 gånger i sekunden",
      "def uppdatera(t):",
      "    for klot, start in planeter:",
      "        vinkel = start + t",
      "        klot.move(math.cos(vinkel) * 4, math.sin(t * 2 + start) * 0.8, math.sin(vinkel) * 4)",
      "",
      "scene.every_frame(uppdatera)",
      "",
      "print(\"Dra med musen för att se dig omkring, rulla för att flyga fram och tillbaka.\")",
      "print(\"Piltangenterna flyger som en drönare: framåt dit du tittar.\")",
      "print(\"Page Up och Page Down höjer och sänker. R återställer vyn.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Python som styr JavaScript</h3>
      <p>Pytho kör Python inuti en webbsida, och på samma sida finns <strong>three.js</strong> — ett JavaScript-bibliotek för 3D-grafik. Modulen <code>scene</code> är en bro mellan de två: du skriver Python, och 3D-motorn ritar.</p>
      <p>Det här är inte en leksaksvariant. Det är samma three.js som används på riktiga webbplatser, och det är samma Python som körde primtalssållet. Två språk som pratar med varandra.</p>
      <h3>Koordinatsystemet</h3>
      <p>Tre axlar: <code>x</code> går åt höger, <code>y</code> uppåt, <code>z</code> mot dig. Punkten <code>(0, 0, 0)</code> är mitten. Kameran står i <code>(0, 3, 9)</code>, alltså lite upphöjd och en bit bakåt, och tittar mot mitten.</p>
      <h3>Formerna och deras metoder</h3>
      <p><code>scenee.cube</code>, <code>scenee.sphere</code>, <code>scenee.box</code>, <code>scenee.cylinder</code> och <code>scenee.kon</code> skapar varsin form och <em>returnerar ett objekt</em>. Precis som med klasser i kapitel 13 använder du punkt för att styra det:</p>
      <ul>
        <li><code>.move(x, y, z)</code> — ny position.</li>
        <li><code>.rotate(x, y, z)</code> — vrid till en viss vinkel, i radianer.</li>
        <li><code>.spin(x, y, z)</code> — hur mycket den ska vridas varje bildruta, alltså en hastighet.</li>
        <li><code>.scale(s)</code> och <code>.color("#ff0000")</code>.</li>
      </ul>
      <h3>Animationsloopen</h3>
      <p><code>scenee.every_frame(uppdatera)</code> lämnar över din funktion till 3D-motorn, som anropar den ungefär 60 gånger i sekunden med tiden i sekunder som argument. Lägg märke till att du skickar <code>uppdatera</code> <strong>utan parenteser</strong> — du lämnar över funktionen själv, inte dess resultat. Med parenteser hade den körts en enda gång och skickat vidare <code>None</code>.</p>
      <p>Det är ett viktigt mönster i all programmering: en funktion är också ett värde som kan skickas runt.</p>
      <h3>Varför sinus och cosinus</h3>
      <p>För att placera saker i en ring: <code>cos(vinkel)</code> ger x-läget och <code>sin(vinkel)</code> ger z-läget på en cirkel med radie 1. Multiplicera med 4 så blir cirkeln fyra enheter bred. Ökar du vinkeln lite varje bildruta får du en bana.</p>
      <p><code>sin(t * 2 + start)</code> för höjden ger en mjuk gungning upp och ner, eftersom sinus pendlar mellan −1 och 1. Det är standardknepet för allt som ska sväva, studsa eller vaja.</p>
      <div class="fallgrop"><strong>Att veta:</strong> scenen fortsätter snurra även efter att programmet är slut — animationen lever i webbläsaren, inte i Python. Kör om koden eller anropa <code>scenee.stop()</code> för att rensa.</div>
      <div class="uppgift"><strong>Uppgift:</strong> bygg ett solsystem. En stor gul sol i mitten, tre planeter i olika avstånd, och låt de yttre gå långsammare än de inre — dela vinkelhastigheten med avståndet. Lägg sedan en måne som cirklar runt en av planeterna.</div>`
  },
  {
    del: "Projekt", titel: "Bygg en värld", fil: "kap20_varlden.py",
    kod: [
      "import scene",
      "import math",
      "import random",
      "",
      "scene.start()",
      "scene.background(\"#0e1c33\")",
      "scene.camera(0, 9, 22)",
      "scene.ground(44, \"#243d63\")",
      "",
      "# --- byggnader ---",
      "scene.house(-8, 0, 2, color=\"#ffc94a\")",
      "scene.house(-13, 0, -3, color=\"#dfe8fa\")",
      "scene.skyscraper(9, 0, -9, color=\"#3d5a8a\")",
      "scene.tower(14, 0, 3)",
      "",
      "# --- skog med slumpade träd ---",
      "for i in range(12):",
      "    x = random.uniform(-20, 20)",
      "    z = random.uniform(-18, 12)",
      "    scene.tree(x, 0, z, size=random.uniform(0.6, 1.2))",
      "",
      "# --- fordon och djur ---",
      "bil = scene.car(0, 0, 8, color=\"#ff7d6b\")",
      "bil.drive(6)",
      "",
      "lastbil = scene.truck(-6, 0, 12)",
      "lastbil.drive(3)",
      "",
      "hund = scene.dog(4, 0, 6, size=0.8)",
      "hund.walk(2)",
      "",
      "plan = scene.plane(0, 9, 0)",
      "plan.fly(9)",
      "",
      "fagel = scene.bird(0, 6, 0, size=1.2)",
      "fagel.flap(3)",
      "",
      "# --- styr banorna varje bildruta ---",
      "def uppdatera(t):",
      "    bil.rotate(0, t * 0.7, 0)          # kör i en cirkel",
      "    lastbil.rotate(0, -t * 0.3, 0)",
      "    hund.rotate(0, t * 1.1, 0)",
      "    plan.rotate(0, t * 0.5, 0)",
      "    # fågeln ska peka dit den flyger, inte bakåt",
      "    fagel.rotate(0, -math.pi / 2 - t, 0)",
      "    fagel.move(math.cos(t) * 7, 6 + math.sin(t * 2), math.sin(t) * 7)",
      "",
      "scene.every_frame(uppdatera)",
      "",
      "print(\"Dra med musen för att se dig omkring, rulla för att flyga fram och tillbaka.\")",
      "print(\"Piltangenterna flyger som en drönare: framåt dit du tittar.\")",
      "print(\"Page Up och Page Down höjer och sänker. R återställer vyn.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Sammansatta modeller</h3>
      <p>En bil är ingen grundform. Den är en <strong>grupp</strong> av former: en kaross, en kupé, fyra hjul, en strålkastare. Grupperingen är hela idén — flyttar du gruppen följer alla delar med, men hjulen kan ändå snurra för sig själva inuti.</p>
      <p>Det är samma tänk som en klass i kapitel 13: ett hölje runt flera delar som hör ihop, med metoder utanpå som styr det hela.</p>
      <h3>Vad som finns</h3>
      <ul>
        <li><strong>Fordon:</strong> <code>car</code>, <code>lastbil</code>, <code>flygplan</code>, <code>raket</code></li>
        <li><strong>Djur:</strong> <code>dog</code>, <code>bird</code>, <code>fish</code></li>
        <li><strong>Byggnader och natur:</strong> <code>house</code>, <code>skyskrapa</code>, <code>tower</code>, <code>tree</code>, <code>ground</code></li>
      </ul>
      <p>Alla tar samma argument: <code>x, y, z, farg, storlek</code>. Alla har <code>move</code>, <code>rotate</code>, <code>spin</code>, <code>scale</code> och <code>color</code>.</p>
      <h3>Egna rörelser</h3>
      <p>De rörliga modellerna har dessutom en egen metod som sätter farten och startar rätt animation:</p>
      <ul>
        <li><code>car.drive(6)</code> och <code>lastcar.drive(3)</code> — hjulen snurrar i takt med farten och fordonet rullar framåt.</li>
        <li><code>plan.fly(9)</code> — propellern går och planet flyger framåt.</li>
        <li><code>dog.walk(2)</code> — benen rör sig och svansen viftar.</li>
        <li><code>bird.flap(3)</code> och <code>fish.swim(2)</code>.</li>
        <li><code>raket.ignite(4)</code> — lågan tänds och raketen stiger.</li>
      </ul>
      <p>Framåt betyder alltid <em>i den riktning modellen är vänd</em>. Därför räcker det att ändra rotationen varje bildruta för att få en cirkelbana: <code>car.rotate(0, t * 0.7, 0)</code> vrider bilen sakta medan den rullar, och resultatet blir en cirkel. Vill du ha en större cirkel — sänk siffran eller höj farten.</p>
      <h3>Att blanda slump och grafik</h3>
      <p><code>random.uniform(-20, 20)</code> ger ett decimaltal i intervallet, till skillnad från <code>randint</code> som ger heltal. Perfekt för utplacering: tolv träd på slumpade platser med slumpad storlek ser genast ut som en skog i stället för ett schackbräde. Kör om programmet så blir skogen ny varje gång.</p>
      <div class="fallgrop"><strong>Att veta:</strong> varje form kostar arbete för grafikkortet. Några hundra objekt går bra, tiotusen gör det trögt. Ökar du antalet träd till 500 kommer du märka det — och då har du hittat den övre gränsen själv, vilket är precis så man lär sig var gränserna går.</div>
      <div class="uppgift"><strong>Uppgift:</strong> bygg din egen stad. En rad med skyskrapor längs ena kanten, hus på andra, och trafik emellan. Låt sedan två bilar köra i cirklar med olika radie — och se om du kan få dem att mötas i mitten utan att krocka.</div>`
  },
  {
    del: "Projekt", titel: "Allt är kuber", fil: "kap21_allt_ar_kuber.py",
    kod: [
      "import scene",
      "",
      "scene.start()",
      "scene.background(\"#0e1c33\")",
      "scene.camera(500, 500, 900)",
      "",
      "# En liten Minecraft-värld av kuber.",
      "#",
      "# Allt som finns i världen ligger färdigt som data längst ner:",
      "#",
      "#     MARK       en karta över hur hög marken är, ett tecken per ruta",
      "#     OBJEKT     vilka hus, träd, klippor och blommor som står var",
      "#     RITNINGAR  hur varje sak är byggd, kub för kub",
      "#",
      "# Programmet här uppe gör tre saker:",
      "#",
      "#     1. lägger ut marken",
      "#     2. ställer objekten ovanpå marken",
      "#     3. räknar ut varje kubs färg och ritar den",
      "#",
      "# Vill du ändra något? Flytta ett hus i OBJEKT, eller höj marken genom att",
      "# byta en siffra i MARK, och kör sedan om programmet.",
      "",
      "BREDD = 72          # hur många rutor världen är i sidled",
      "DJUP = 72           # ... och i djupled",
      "VATTENNIVA = 3      # allt under den här höjden ligger under vatten",
      "NIVAER = \"0123456789abcdefg\"     # tecknen i kartan, \"0\" är lägst",
      "",
      "FARG = {\"gras\": \"#4f9b34\", \"jord\": \"#7a4f2a\", \"sten\": \"#7d7d7d\",",
      "        \"berg\": \"#5f5f5f\", \"sno\": \"#f2f4f7\", \"sand\": \"#e2d3a2\",",
      "        \"vatten\": \"#3f86d8\", \"djupt\": \"#2a5fae\", \"stam\": \"#5a3a1e\",",
      "        \"lov\": \"#2f7a2a\", \"morklov\": \"#256b28\", \"planka\": \"#b9834b\",",
      "        \"tak\": \"#a63a2b\", \"fonster\": \"#9fd8e8\", \"lykta\": \"#ffc94a\",",
      "        \"tegel\": \"#8d8d92\", \"vallmo\": \"#e04b4b\", \"smorblomma\": \"#ffc94a\",",
      "        \"blaklocka\": \"#7d8ce0\", \"prastkrage\": \"#f2f4f7\"}",
      "BLOMMOR = [\"vallmo\", \"smorblomma\", \"blaklocka\", \"prastkrage\"]",
      "",
      "",
      "# ========================================================= 1. LÄGG UT MARKEN",
      "def marknivan(x, z):",
      "    \"\"\"Hur högt marken ligger i rutan (x, z). Utanför kartan gäller kanten.\"\"\"",
      "    if x < 0:",
      "        x = 0",
      "    if z < 0:",
      "        z = 0",
      "    if x > BREDD - 1:",
      "        x = BREDD - 1",
      "    if z > DJUP - 1:",
      "        z = DJUP - 1",
      "    tecken = MARK[z][x]",
      "    return NIVAER.index(tecken)",
      "",
      "",
      "def grannarnas_nivaer(x, z):",
      "    \"\"\"Hur högt marken ligger i de fyra rutorna runt omkring.\"\"\"",
      "    return [marknivan(x + 1, z), marknivan(x - 1, z),",
      "            marknivan(x, z + 1), marknivan(x, z - 1)]",
      "",
      "",
      "def material_pa_ytan(x, z, niva):",
      "    \"\"\"Vad som ligger överst i en ruta.\"\"\"",
      "    if niva <= VATTENNIVA or min(grannarnas_nivaer(x, z)) <= VATTENNIVA:",
      "        return \"sand\"            # nere vid vattnet är det strand",
      "    if niva >= 13:",
      "        return \"sno\"             # högst upp på berget ligger snö",
      "    if niva >= 10:",
      "        return \"sten\"",
      "    return \"gras\"",
      "",
      "",
      "def bygg_marken(kuber):",
      "    \"\"\"Lägger ut marken. Bara det som syns: ytan, och kanterna ner mot",
      "    grannen där marken sluttar. Kuber som ändå är gömda hoppar vi över.\"\"\"",
      "    for z in range(DJUP):",
      "        for x in range(BREDD):",
      "            niva = marknivan(x, z)",
      "            kuber[(x, niva, z)] = material_pa_ytan(x, z, niva)",
      "            for y in range(min(grannarnas_nivaer(x, z)), niva):",
      "                if y > niva - 3:",
      "                    kuber[(x, y, z)] = \"jord\"",
      "                else:",
      "                    kuber[(x, y, z)] = \"sten\"",
      "            if niva < VATTENNIVA:",
      "                kuber[(x, VATTENNIVA, z)] = \"djupt\"     # längre ut i sjön",
      "            elif niva == VATTENNIVA:",
      "                kuber[(x, VATTENNIVA, z)] = \"vatten\"    # grunt vatten",
      "",
      "",
      "# ====================================================== 2. STÄLL UT OBJEKTEN",
      "def bygg_objekten(kuber):",
      "    \"\"\"Ställer ut alla hus, träd, klippor och blommor på sina rutor.",
      "    Ritningen räknas från foten: (0, 0, 0) är objektets nedersta kub.\"\"\"",
      "    for namn, platser in OBJEKT.items():",
      "        for x, z in platser:",
      "            niva = marknivan(x, z)",
      "            for material, punkter in RITNINGAR[namn].items():",
      "                for dx, dy, dz in punkter:",
      "                    ruta = (x + dx, niva + 1 + dy, z + dz)",
      "                    if ruta not in kuber:",
      "                        kuber[ruta] = material      # första kuben vinner rutan",
      "",
      "",
      "# ============================================================== 3. LJUSET",
      "def hogsta_kuben(kuber):",
      "    \"\"\"Höjden på den översta kuben i varje ruta. Behövs för skuggorna.\"\"\"",
      "    hogsta = {}",
      "    for (x, y, z) in kuber:",
      "        if (x, z) not in hogsta or y > hogsta[(x, z)]:",
      "            hogsta[(x, z)] = y",
      "    return hogsta",
      "",
      "",
      "def star_i_skugga(hogsta, x, y, z):",
      "    \"\"\"Solen står i nordväst. Skymmer något högre solen för den här kuben?\"\"\"",
      "    for steg in range(1, 7):",
      "        if hogsta.get((x - steg, z - steg), -9) >= y + steg:",
      "            return True",
      "    return False",
      "",
      "",
      "def antal_kuber_ovanfor(kuber, x, y, z):",
      "    \"\"\"Hur många kuber som ligger rakt ovanför. Många = mörk vrå.\"\"\"",
      "    antal = 0",
      "    for dx in (-1, 0, 1):",
      "        for dz in (-1, 0, 1):",
      "            if (x + dx, y + 1, z + dz) in kuber:",
      "                antal = antal + 1",
      "    return antal",
      "",
      "",
      "def rakna_ut_farg(kuber, hogsta, x, y, z, material):",
      "    \"\"\"Materialets färg, mörkare i skugga och vrår, plus lite textur.\"\"\"",
      "    ljus = 1.0 + 0.015 * (y - 6)                  # högre upp = lite ljusare",
      "    if star_i_skugga(hogsta, x, y, z):",
      "        ljus = ljus - 0.2",
      "    ljus = ljus - 0.045 * antal_kuber_ovanfor(kuber, x, y, z)",
      "    if material in (\"lykta\", \"fonster\"):",
      "        ljus = 1.05                               # de här lyser själva",
      "    textur = (x * 7 + y * 13 + z * 29) % 15 - 7   # samma ruta, samma textur",
      "    hexfarg = FARG[material]",
      "    delar = []",
      "    for start in (1, 3, 5):                       # röd, grön och blå del",
      "        del_av_fargen = int(hexfarg[start:start + 2], 16)",
      "        delar.append(max(0, min(255, int(del_av_fargen * ljus) + textur)))",
      "    return \"#{:02x}{:02x}{:02x}\".format(delar[0], delar[1], delar[2])",
      "",
      "",
      "# ================================================================ 4. RITA",
      "def rita_varlden(size=10):",
      "    \"\"\"Bygger hela världen och ritar den, en kub i taget.\"\"\"",
      "    kuber = {}",
      "    bygg_marken(kuber)",
      "    bygg_objekten(kuber)",
      "    hogsta = hogsta_kuben(kuber)",
      "    for (x, y, z), material in kuber.items():",
      "        farg = rakna_ut_farg(kuber, hogsta, x, y, z, material)",
      "        scene.cube(x * size, y * size, z * size,",
      "                 size=size, color=farg)",
      "    return len(kuber)",
      "",
      "",
      "# ##########################################################################",
      "# Härifrån och ner är det bara data: kartan, listan över vad som står var och",
      "# ritningarna. Du behöver inte läsa allt - men du får gärna ändra i det.",
      "# ##########################################################################",
      "",
      "# Höjdkartan, en rad per ruta i djupled. Ett tecken per ruta: \"0\" är lägst",
      "# och \"g\" högst. Uppe till vänster ligger berget och i mitten sjön.",
      "MARK = \"\"\"",
      "9abbccddddddccbbaaaaaaaa999999999888888777777666666666666666666666666777",
      "abbcddeeeeeddccbbaaaaaaaa99999999888887777777666666666666666666666666777",
      "abcddeefffeeedccbaaaaaaa999999998888887777776666666666666666666666666677",
      "bcddeffggfffeedcbbaaaaaa999999998888887777776666666666655566666666666677",
      "bcdefggggggffeddcbaaaaaa999999998888877777766666666665555555666666666677",
      "bcdefgggggggfeedcbaaaaa9999999988888877777766666666555555555566666666667",
      "cdefgggggggggeedcbaaaaa9999999988888877777666666665555555555556666666667",
      "cdefgggggggggfedcbaaaa99999999988888777777666666655555555555555666666666",
      "cdefgggggggggeedcbaaa999999999888888777776666666555555555555555566666666",
      "bcdefggggggggeddcba99999999998888887777766666665555555555555555556666666",
      "bcdeffgggggggaaaaaaa9999999998888877777766666655555555555555555555666666",
      "bcddefgggggggaaaaaaa9999999988888877777666666555555555555555555555666666",
      "abcddegggggggaaaaaaa9999999888888777776666665555555555555555555555566666",
      "aabcdddeeedddaaaaaaa9999998888887777776666655555555555445555555555556666",
      "9abbcccdddcccaaaaaaa9999998888887777766666555555555444444445555555556666",
      "89aabbcccccbbaaaaaaa9999988888877777666666555555544444444444455555555666",
      "889aaabbbbbbaaaaaaaa9998888888777776666665555555444444444444445555555666",
      "788999aaaaaa999999999988888887777776666655555544444444444444444444444466",
      "777889999999999999999888888887777766666555555444444444444444444444444466",
      "777788888888889999888888888877777666665555554444444444444444444444444456",
      "777778888888888888888888888777776666665555544444444444444444444444444456",
      "777778888888888888888888887777776666655555444444444444444444444444444456",
      "777777888888888888888888877777766666555554444444443333333444444444444455",
      "777777788888888888888888777777666665555554444444333333333334444444444455",
      "777777778888888888888877777776666655555544444443333333333333444444444455",
      "677777777888888888888777777766666655555444444433333333333333444444444455",
      "677777777778888888877777777666666555554444444333333333333333344444445555",
      "667777777777777777777777777666665555544444443333333333333333334444445555",
      "666777777777777777777777776666665555544444433333333333333333334444445555",
      "666677777777777777777777766666655555444444333333333333333333334444445555",
      "666677777777777777777777666666555554444443333333333333333333333444445555",
      "666667777777777777777776666665555554444443333333333333333333333444444555",
      "666666777777777777777766666665555544444433333333333333333333333444444555",
      "666666677777777777777666666655555544444433333333322222333333333444444555",
      "666666666777777777766666666655555444444333333333222222333333333444444555",
      "666666666677777777666666666555555444444333333332222222233333333444444555",
      "666666666666676666666666665555554444443333333332222222233333333444444555",
      "566666666666666666666666665555554444443333333322222222233333333444444555",
      "566666666666666666666666655555554444444433333322222222233333333444445555",
      "556666666666666666666666655555544444444433333322222222233333333444445555",
      "556666666666666666666655555555544444444433322222222222333333333444445555",
      "556666666666666666666655555555544444444433211111112222333333334444445555",
      "555666666666666666666655555555544444444432110000001123333333333333444455",
      "555666666666666666666655555555544444444421100000000112333322211111222233",
      "555666666666666666666655555555544444444411000000000012221100000000000111",
      "555566666666666666666655555555544444444410000000000000000000001112222222",
      "555566666666666666666655555555544444443210000000000000000011223334444444",
      "555566666666666666666655555555544444443210000000000000011233444445555556",
      "555566666666666666666666666665554444443210000000000000133334444445555566",
      "555566666666666666666666666665554444443210000000000001233344444455555566",
      "555566666666666666666666666665554444443210000000000012333444444455555666",
      "555566666666666666666666666665555444443221000000000012334444444555556666",
      "555566666666666666666666666665555544444321100000000123344444445555556666",
      "555666666666666666666666666665555544444432110000011223444444455555566666",
      "555666666666666666666666666665555554444433221111122334444444555555566666",
      "555666666666666666666666666665555555444444332222223344444444555555666666",
      "556666666666666666666666666665555555544444443333334444444455555556666667",
      "556666666666666666666666666666555555555444444444444444444555555566666677",
      "566666666666666666666666666666655555555544444444444444445555555566666677",
      "566666666666666666666666666666665555555555444444444444555555555666666777",
      "666666666666666666666666666666666555555555555444444455555555556666667777",
      "666666666666666666666666666666666655555555555555555555555555566666677777",
      "666666666676666666666667766666666666555555555555555555555555666666677777",
      "666666666777777777777777777666666666655555555555555555555556666666777777",
      "666666667777777777777777777766666666666555555555555555555666666667777777",
      "666666677777777777777777777777666666666665555555555555556666666677777778",
      "666666677777777777777777777777766666666666655555555555666666666677777778",
      "666666777777777777777777777777777666666666666655555666666666666777777788",
      "666667777777777777777777777777777766666666666666666666666666667777777888",
      "666667777777777777788777777777777777666666666666666666666666677777777888",
      "666677777777777888888888877777777777766666666666666666666666777777778888",
      "666677777777778888888888888777777777777666666666666666666666777777778888",
      "\"\"\".split()",
      "",
      "# Var varje sak står, som (x, z).",
      "OBJEKT = {",
      "    \"stuga\": [(12, 44), (21, 49), (62, 19)],",
      "    \"lada\": [(13, 55)],",
      "    \"skjul\": [(24, 42), (34, 40)],",
      "    \"torn\": [(9, 9), (16, 13)],",
      "    \"hog_klippa\": [(5, 15), (44, 6)],",
      "    \"klippa\": [(60, 8), (66, 62), (30, 67), (52, 18)],",
      "    \"gran\": [(27, 14), (13, 30), (34, 26), (7, 26), (12, 21)],",
      "    \"liten_gran\": [(23, 31), (28, 22), (20, 23), (31, 33)],",
      "    \"ek\": [(8, 60), (21, 68), (36, 58), (62, 29), (67, 11), (68, 33)],",
      "    \"litet_trad\": [(40, 65), (10, 67), (49, 58), (41, 22), (33, 48), (4, 53)],",
      "    \"bjork\": [(20, 61), (67, 40), (52, 8), (61, 68), (57, 58)],",
      "    \"buske\": [(5, 46), (42, 15), (66, 55)],",
      "    \"vallmo\": [(50, 16), (44, 69), (29, 39), (34, 25), (35, 34), (23, 25),",
      "               (52, 68), (37, 7)],",
      "    \"smorblomma\": [(16, 53), (57, 69), (68, 33), (54, 8), (68, 39), (70, 57),",
      "                   (6, 37), (21, 29)],",
      "    \"blaklocka\": [(43, 12), (36, 44), (47, 68), (32, 27), (26, 46), (28, 67),",
      "                  (57, 12), (67, 29)],",
      "    \"prastkrage\": [(65, 10), (28, 49), (3, 25), (42, 11), (36, 23), (6, 38),",
      "                   (69, 60)],",
      "}",
      "",
      "# Hur varje sak är byggd: material -> lista med (sidled, höjd, djupled)",
      "# räknat från objektets fot.",
      "RITNINGAR = {",
      "    \"ek\": {",
      "        \"stam\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0)],",
      "        \"lov\": [(-2,3,-1), (-2,3,0), (-2,3,1), (-1,3,-2), (-1,3,-1), (-1,3,0),",
      "            (-1,3,1), (-1,3,2), (0,3,-2), (0,3,-1), (0,3,1), (0,3,2), (1,3,-2),",
      "            (1,3,-1), (1,3,0), (1,3,1), (1,3,2), (2,3,-1), (2,3,0), (2,3,1),",
      "            (-2,4,-1), (-2,4,0), (-2,4,1), (-1,4,-2), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (-1,4,2), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-2),",
      "            (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (2,4,-1), (2,4,0), (2,4,1),",
      "            (-1,5,-1), (-1,5,0), (-1,5,1), (0,5,-1), (0,5,0), (0,5,1), (1,5,-1),",
      "            (1,5,0), (1,5,1), (0,6,0)],",
      "    },",
      "    \"bjork\": {",
      "        \"stam\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0)],",
      "        \"lov\": [(-2,4,-1), (-2,4,0), (-2,4,1), (-1,4,-2), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (-1,4,2), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-2),",
      "            (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (2,4,-1), (2,4,0), (2,4,1),",
      "            (-2,5,-1), (-2,5,0), (-2,5,1), (-1,5,-2), (-1,5,-1), (-1,5,0),",
      "            (-1,5,1), (-1,5,2), (0,5,-2), (0,5,-1), (0,5,1), (0,5,2), (1,5,-2),",
      "            (1,5,-1), (1,5,0), (1,5,1), (1,5,2), (2,5,-1), (2,5,0), (2,5,1),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-1), (0,6,0), (0,6,1), (1,6,-1),",
      "            (1,6,0), (1,6,1), (0,7,0)],",
      "    },",
      "    \"gran\": {",
      "        \"stam\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0), (0,6,0),",
      "            (0,7,0), (0,8,0)],",
      "        \"morklov\": [(-2,2,0), (-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-2),",
      "            (0,2,-1), (0,2,1), (0,2,2), (1,2,-1), (1,2,0), (1,2,1), (2,2,0),",
      "            (-1,3,0), (0,3,-1), (0,3,1), (1,3,0), (-2,4,0), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-1), (1,4,0),",
      "            (1,4,1), (2,4,0), (-1,5,0), (0,5,-1), (0,5,1), (1,5,0), (-2,6,0),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-2), (0,6,-1), (0,6,1), (0,6,2),",
      "            (1,6,-1), (1,6,0), (1,6,1), (2,6,0), (-1,7,0), (0,7,-1), (0,7,1),",
      "            (1,7,0), (-2,8,0), (-1,8,-1), (-1,8,0), (-1,8,1), (0,8,-2), (0,8,-1),",
      "            (0,8,1), (0,8,2), (1,8,-1), (1,8,0), (1,8,1), (2,8,0), (0,9,0)],",
      "    },",
      "    \"litet_trad\": {",
      "        \"stam\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0)],",
      "        \"lov\": [(-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-1), (0,2,1), (1,2,-1),",
      "            (1,2,0), (1,2,1), (-1,3,-1), (-1,3,0), (-1,3,1), (0,3,-1), (0,3,1),",
      "            (1,3,-1), (1,3,0), (1,3,1), (0,4,0), (0,5,0)],",
      "    },",
      "    \"liten_gran\": {",
      "        \"stam\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0), (0,6,0)],",
      "        \"morklov\": [(-2,2,0), (-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-2),",
      "            (0,2,-1), (0,2,1), (0,2,2), (1,2,-1), (1,2,0), (1,2,1), (2,2,0),",
      "            (-1,3,0), (0,3,-1), (0,3,1), (1,3,0), (-2,4,0), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-1), (1,4,0),",
      "            (1,4,1), (2,4,0), (-1,5,0), (0,5,-1), (0,5,1), (1,5,0), (-2,6,0),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-2), (0,6,-1), (0,6,1), (0,6,2),",
      "            (1,6,-1), (1,6,0), (1,6,1), (2,6,0), (0,7,0)],",
      "    },",
      "    \"buske\": {",
      "        \"stam\": [(0,0,0), (0,1,0)],",
      "        \"lov\": [(-1,0,-1), (-1,0,0), (-1,0,1), (0,0,-1), (0,0,1), (1,0,-1),",
      "            (1,0,0), (1,0,1), (-1,1,-1), (-1,1,0), (-1,1,1), (0,1,-1), (0,1,1),",
      "            (1,1,-1), (1,1,0), (1,1,1), (0,2,0), (0,3,0)],",
      "    },",
      "    \"stuga\": {",
      "        \"planka\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,0,4), (1,0,0),",
      "            (1,0,1), (1,0,2), (1,0,3), (1,0,4), (2,0,0), (2,0,1), (2,0,2), (2,0,3),",
      "            (2,0,4), (3,0,0), (3,0,1), (3,0,2), (3,0,3), (3,0,4), (4,0,0), (4,0,1),",
      "            (4,0,2), (4,0,3), (4,0,4), (5,0,0), (5,0,1), (5,0,2), (5,0,3), (5,0,4),",
      "            (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,1,4), (1,1,0), (1,1,4), (2,1,0),",
      "            (2,1,4), (3,1,4), (4,1,0), (4,1,4), (5,1,0), (5,1,1), (5,1,2), (5,1,3),",
      "            (5,1,4), (0,2,1), (0,2,2), (0,2,4), (1,2,0), (1,2,4), (2,2,0), (3,2,4),",
      "            (4,2,0), (4,2,4), (5,2,0), (5,2,2), (5,2,3), (0,3,0), (0,3,1), (0,3,2),",
      "            (0,3,3), (0,3,4), (1,3,0), (1,3,4), (2,3,0), (2,3,4), (3,3,0), (3,3,4),",
      "            (4,3,0), (4,3,4), (5,3,0), (5,3,1), (5,3,2), (5,3,3), (5,3,4)],",
      "        \"fonster\": [(0,2,0), (0,2,3), (2,2,4), (5,2,1), (5,2,4)],",
      "        \"tak\": [(-1,4,-1), (-1,4,0), (-1,4,1), (-1,4,2), (-1,4,3), (-1,4,4),",
      "            (-1,4,5), (0,4,-1), (0,4,0), (0,4,1), (0,4,2), (0,4,3), (0,4,4),",
      "            (0,4,5), (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (1,4,3), (1,4,4),",
      "            (1,4,5), (2,4,-1), (2,4,0), (2,4,1), (2,4,2), (2,4,3), (2,4,4),",
      "            (2,4,5), (3,4,-1), (3,4,0), (3,4,1), (3,4,2), (3,4,3), (3,4,4),",
      "            (3,4,5), (4,4,-1), (4,4,0), (4,4,1), (4,4,2), (4,4,3), (4,4,4),",
      "            (4,4,5), (5,4,-1), (5,4,0), (5,4,1), (5,4,2), (5,4,3), (5,4,4),",
      "            (5,4,5), (6,4,-1), (6,4,0), (6,4,1), (6,4,2), (6,4,3), (6,4,4),",
      "            (6,4,5), (1,5,1), (1,5,2), (1,5,3), (2,5,1), (2,5,2), (2,5,3), (3,5,1),",
      "            (3,5,2), (3,5,3), (4,5,1), (4,5,2), (4,5,3)],",
      "        \"lykta\": [(2,2,-1), (4,2,-1)],",
      "    },",
      "    \"torn\": {",
      "        \"tegel\": [(-2,0,-1), (-2,0,0), (-2,0,1), (-1,0,-2), (-1,0,-1),",
      "            (-1,0,1), (-1,0,2), (0,0,-2), (0,0,2), (1,0,-2), (1,0,-1), (1,0,1),",
      "            (1,0,2), (2,0,-1), (2,0,0), (2,0,1), (-2,1,-1), (-2,1,0), (-2,1,1),",
      "            (-1,1,-2), (-1,1,-1), (-1,1,1), (-1,1,2), (0,1,-2), (0,1,2), (1,1,-2),",
      "            (1,1,-1), (1,1,1), (1,1,2), (2,1,-1), (2,1,0), (2,1,1), (-2,2,-1),",
      "            (-2,2,0), (-2,2,1), (-1,2,-2), (-1,2,-1), (-1,2,1), (-1,2,2), (0,2,-2),",
      "            (0,2,2), (1,2,-2), (1,2,-1), (1,2,1), (1,2,2), (2,2,-1), (2,2,0),",
      "            (2,2,1), (-2,3,-1), (-2,3,0), (-2,3,1), (-1,3,-2), (-1,3,-1), (-1,3,1),",
      "            (-1,3,2), (0,3,2), (1,3,-2), (1,3,-1), (1,3,1), (1,3,2), (2,3,-1),",
      "            (2,3,0), (2,3,1), (-2,4,-1), (-2,4,0), (-2,4,1), (-1,4,-2), (-1,4,-1),",
      "            (-1,4,1), (-1,4,2), (0,4,-2), (0,4,2), (1,4,-2), (1,4,-1), (1,4,1),",
      "            (1,4,2), (2,4,-1), (2,4,0), (2,4,1), (-2,5,-1), (-2,5,0), (-2,5,1),",
      "            (-1,5,-2), (-1,5,-1), (-1,5,1), (-1,5,2), (0,5,-2), (0,5,2), (1,5,-2),",
      "            (1,5,-1), (1,5,1), (1,5,2), (2,5,-1), (2,5,0), (2,5,1), (-2,6,-1),",
      "            (-2,6,0), (-2,6,1), (-1,6,-2), (-1,6,-1), (-1,6,1), (-1,6,2), (0,6,2),",
      "            (1,6,-2), (1,6,-1), (1,6,1), (1,6,2), (2,6,-1), (2,6,0), (2,6,1),",
      "            (-2,7,-1), (-2,7,0), (-2,7,1), (-1,7,-2), (-1,7,-1), (-1,7,1),",
      "            (-1,7,2), (0,7,-2), (0,7,2), (1,7,-2), (1,7,-1), (1,7,1), (1,7,2),",
      "            (2,7,-1), (2,7,0), (2,7,1), (-2,8,-1), (-2,8,0), (-2,8,1), (-1,8,-2),",
      "            (-1,8,-1), (-1,8,1), (-1,8,2), (0,8,-2), (0,8,2), (1,8,-2), (1,8,-1),",
      "            (1,8,1), (1,8,2), (2,8,-1), (2,8,0), (2,8,1), (-2,9,-1), (-2,9,0),",
      "            (-2,9,1), (-1,9,-2), (-1,9,-1), (-1,9,0), (-1,9,1), (-1,9,2), (0,9,-2),",
      "            (0,9,-1), (0,9,0), (0,9,1), (0,9,2), (1,9,-2), (1,9,-1), (1,9,0),",
      "            (1,9,1), (1,9,2), (2,9,-1), (2,9,0), (2,9,1), (-2,10,0), (-1,10,-2),",
      "            (-1,10,1), (0,10,-2), (1,10,-2), (1,10,1), (2,10,-1), (2,10,1)],",
      "        \"fonster\": [(0,3,-2), (0,6,-2)],",
      "        \"lykta\": [(0,10,0)],",
      "    },",
      "    \"lada\": {",
      "        \"planka\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,0,4), (0,0,5),",
      "            (1,0,0), (1,0,1), (1,0,2), (1,0,3), (1,0,4), (1,0,5), (2,0,0), (2,0,1),",
      "            (2,0,2), (2,0,3), (2,0,4), (2,0,5), (3,0,0), (3,0,1), (3,0,2), (3,0,3),",
      "            (3,0,4), (3,0,5), (4,0,0), (4,0,1), (4,0,2), (4,0,3), (4,0,4), (4,0,5),",
      "            (5,0,0), (5,0,1), (5,0,2), (5,0,3), (5,0,4), (5,0,5), (6,0,0), (6,0,1),",
      "            (6,0,2), (6,0,3), (6,0,4), (6,0,5), (7,0,0), (7,0,1), (7,0,2), (7,0,3),",
      "            (7,0,4), (7,0,5), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,1,4), (0,1,5),",
      "            (1,1,0), (1,1,5), (2,1,0), (2,1,5), (3,1,0), (3,1,5), (4,1,5), (5,1,0),",
      "            (5,1,5), (6,1,0), (6,1,5), (7,1,0), (7,1,1), (7,1,2), (7,1,3), (7,1,4),",
      "            (7,1,5), (0,2,1), (0,2,2), (0,2,4), (0,2,5), (1,2,0), (2,2,0), (2,2,5),",
      "            (3,2,5), (5,2,0), (5,2,5), (6,2,5), (7,2,0), (7,2,1), (7,2,3), (7,2,4),",
      "            (0,3,0), (0,3,1), (0,3,2), (0,3,3), (0,3,4), (0,3,5), (1,3,0), (1,3,5),",
      "            (2,3,0), (2,3,5), (3,3,0), (3,3,5), (4,3,0), (4,3,5), (5,3,0), (5,3,5),",
      "            (6,3,0), (6,3,5), (7,3,0), (7,3,1), (7,3,2), (7,3,3), (7,3,4), (7,3,5),",
      "            (0,4,0), (0,4,1), (0,4,2), (0,4,3), (0,4,4), (0,4,5), (1,4,0), (1,4,5),",
      "            (2,4,0), (2,4,5), (3,4,0), (3,4,5), (4,4,0), (4,4,5), (5,4,0), (5,4,5),",
      "            (6,4,0), (6,4,5), (7,4,0), (7,4,1), (7,4,2), (7,4,3), (7,4,4), (7,4,5)],",
      "        \"fonster\": [(0,2,0), (0,2,3), (1,2,5), (3,2,0), (4,2,5), (6,2,0),",
      "            (7,2,2), (7,2,5)],",
      "        \"tak\": [(-1,5,-1), (-1,5,0), (-1,5,1), (-1,5,2), (-1,5,3), (-1,5,4),",
      "            (-1,5,5), (-1,5,6), (0,5,-1), (0,5,0), (0,5,1), (0,5,2), (0,5,3),",
      "            (0,5,4), (0,5,5), (0,5,6), (1,5,-1), (1,5,0), (1,5,1), (1,5,2),",
      "            (1,5,3), (1,5,4), (1,5,5), (1,5,6), (2,5,-1), (2,5,0), (2,5,1),",
      "            (2,5,2), (2,5,3), (2,5,4), (2,5,5), (2,5,6), (3,5,-1), (3,5,0),",
      "            (3,5,1), (3,5,2), (3,5,3), (3,5,4), (3,5,5), (3,5,6), (4,5,-1),",
      "            (4,5,0), (4,5,1), (4,5,2), (4,5,3), (4,5,4), (4,5,5), (4,5,6),",
      "            (5,5,-1), (5,5,0), (5,5,1), (5,5,2), (5,5,3), (5,5,4), (5,5,5),",
      "            (5,5,6), (6,5,-1), (6,5,0), (6,5,1), (6,5,2), (6,5,3), (6,5,4),",
      "            (6,5,5), (6,5,6), (7,5,-1), (7,5,0), (7,5,1), (7,5,2), (7,5,3),",
      "            (7,5,4), (7,5,5), (7,5,6), (8,5,-1), (8,5,0), (8,5,1), (8,5,2),",
      "            (8,5,3), (8,5,4), (8,5,5), (8,5,6), (1,6,1), (1,6,2), (1,6,3), (1,6,4),",
      "            (2,6,1), (2,6,2), (2,6,3), (2,6,4), (3,6,1), (3,6,2), (3,6,3), (3,6,4),",
      "            (4,6,1), (4,6,2), (4,6,3), (4,6,4), (5,6,1), (5,6,2), (5,6,3), (5,6,4),",
      "            (6,6,1), (6,6,2), (6,6,3), (6,6,4)],",
      "        \"lykta\": [(3,2,-1), (5,2,-1)],",
      "    },",
      "    \"skjul\": {",
      "        \"planka\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (1,0,0), (1,0,1),",
      "            (1,0,2), (1,0,3), (2,0,0), (2,0,1), (2,0,2), (2,0,3), (3,0,0), (3,0,1),",
      "            (3,0,2), (3,0,3), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (1,1,0), (1,1,3),",
      "            (2,1,3), (3,1,0), (3,1,1), (3,1,2), (3,1,3), (0,2,1), (0,2,2), (1,2,0),",
      "            (1,2,3), (2,2,3), (3,2,1), (3,2,2)],",
      "        \"fonster\": [(0,2,0), (0,2,3), (3,2,0), (3,2,3)],",
      "        \"tak\": [(-1,3,-1), (-1,3,0), (-1,3,1), (-1,3,2), (-1,3,3), (-1,3,4),",
      "            (0,3,-1), (0,3,0), (0,3,1), (0,3,2), (0,3,3), (0,3,4), (1,3,-1),",
      "            (1,3,0), (1,3,1), (1,3,2), (1,3,3), (1,3,4), (2,3,-1), (2,3,0),",
      "            (2,3,1), (2,3,2), (2,3,3), (2,3,4), (3,3,-1), (3,3,0), (3,3,1),",
      "            (3,3,2), (3,3,3), (3,3,4), (4,3,-1), (4,3,0), (4,3,1), (4,3,2),",
      "            (4,3,3), (4,3,4), (1,4,1), (1,4,2), (2,4,1), (2,4,2)],",
      "        \"lykta\": [(1,2,-1), (3,2,-1)],",
      "    },",
      "    \"klippa\": {",
      "        \"berg\": [(-2,0,-1), (-2,0,0), (-2,0,1), (-1,0,-2), (-1,0,2), (0,0,-2),",
      "            (0,0,2), (1,0,-2), (1,0,2), (2,0,-1), (2,0,0), (2,0,1), (-1,1,-1),",
      "            (-1,1,0), (-1,1,1), (0,1,-1), (0,1,1), (1,1,-1), (1,1,0), (1,1,1),",
      "            (0,2,0)],",
      "    },",
      "    \"hog_klippa\": {",
      "        \"berg\": [(-3,0,-1), (-3,0,0), (-3,0,1), (-1,0,-3), (-1,0,3), (0,0,-3),",
      "            (0,0,3), (1,0,-3), (1,0,3), (3,0,-1), (3,0,0), (3,0,1), (-2,1,-1),",
      "            (-2,1,0), (-2,1,1), (-1,1,-2), (-1,1,2), (0,1,-2), (0,1,2), (1,1,-2),",
      "            (1,1,2), (2,1,-1), (2,1,0), (2,1,1), (-1,2,-1), (-1,2,0), (-1,2,1),",
      "            (0,2,-1), (0,2,1), (1,2,-1), (1,2,0), (1,2,1), (0,3,0)],",
      "        \"sno\": [(0,4,0)],",
      "    },",
      "}",
      "for blomma in BLOMMOR:                      # en blomma är bara en enda kub",
      "    RITNINGAR[blomma] = {blomma: [(0, 0, 0)]}",
      "",
      "",
      "antal = rita_varlden()",
      "print(\"Klart! Världen består av\", antal, \"kuber.\")",
      "print()",
      "print(\"Dra med musen för att se dig omkring, rulla för att flyga.\")",
      "print(\"Piltangenterna flyger som en drönare: framåt dit du tittar.\")",
      "print(\"R eller Återställ vy tar dig tillbaka. Helskärm finns uppe till höger.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Allt är kuber</h3>
      <p>Minecraft ser komplicerat ut, men bakom allt ligger en enda idé: världen är ett rutnät, och varje ruta innehåller antingen ingenting eller en kub av ett visst material. Träd, hus, berg och vatten är inte olika sorters saker — de är samma sorts kub i olika färger, staplade på olika sätt.</p>
      <p>Sådana kuber kallas <strong>voxlar</strong>, av "volume" och "pixel". En pixel är en färgad punkt i en platt bild; en voxel är en färgad punkt i ett rum. Den här världen består av drygt nio tusen av dem.</p>
      <h3>Världen är en dictionary</h3>
      <p>Hela världen ryms i en enda variabel: <code>kuber</code>, en dictionary från kapitel 8 där nyckeln är positionen <code>(x, y, z)</code> och värdet är materialet.</p>
      <p>Det gör svåra frågor triviala. Finns det något här? <code>(x, y, z) in kuber</code>. Vad ligger ovanför? Slå upp <code>(x, y + 1, z)</code>. Ingen sökning, inga listor att gå igenom — dictionaryn svarar direkt oavsett hur stor världen är.</p>
      <p>Lägg också märke till raden <code>if ruta not in kuber</code> när objekten placeras ut: den första kuben vinner rutan. Det är en regel på en rad som gör att ett träd aldrig kan växa rakt igenom ett hustak.</p>
      <h3>Data och kod hålls isär</h3>
      <p>Programmet är uppdelat i två halvor, och skiljelinjen är den viktigaste strukturen i hela kapitlet.</p>
      <ul>
        <li><strong>MARK</strong> är en höjdkarta ritad som text. Ett tecken per ruta, där <code>0</code> är lägst och <code>g</code> högst. Du kan läsa landskapet direkt i källkoden: berget uppe till vänster, sjön i mitten.</li>
        <li><strong>OBJEKT</strong> säger bara vad som står var — <code>"stuga": [(12, 44), ...]</code>. Ingen höjd behövs; den hämtas från marken.</li>
        <li><strong>RITNINGAR</strong> beskriver hur varje sak är byggd, som listor av <code>(sidled, höjd, djupled)</code> räknat från objektets fot.</li>
      </ul>
      <p>Koden ovanför känner inte till en enda stuga eller ett enda träd. Den läser bara data och lägger ut kuber. Därför kan du flytta ett hus, höja ett berg eller uppfinna ett helt nytt objekt utan att röra en rad av programmet — och det är precis vad som menas med att skilja data från logik.</p>
      <h3>Bara det som syns byggs</h3>
      <p><code>bygg_marken</code> lägger inte ut en solid klump jord. Den lägger ytan, och sedan bara ner till den lägsta grannen — för väggen mot en granne som ligger högre skulle ändå aldrig synas.</p>
      <p>Det är samma tanke som gör Minecraft möjligt överhuvudtaget. En kub som är helt omsluten av andra kuber kan inte ses, och då finns det ingen anledning att rita den. Här sparar det ungefär två tredjedelar av arbetet.</p>
      <h3>Ljuset räknas ut, inte mätas</h3>
      <p>Scenen har ingen riktig ljussättning per kub — i stället räknar <code>rakna_ut_farg</code> fram varje kubs färg innan den ritas, med tre enkla regler:</p>
      <ul>
        <li><strong>Skugga:</strong> solen står i nordväst, så <code>star_i_skugga</code> tittar snett uppåt åt det hållet. Finns något högre där, blir kuben mörkare.</li>
        <li><strong>Vrår:</strong> ju fler kuber som ligger ovanför, desto mindre ljus når ner. Det är därför det blir mörkt under trädkronor och innanför hustak.</li>
        <li><strong>Textur:</strong> <code>(x * 7 + y * 13 + z * 29) % 15 - 7</code> ger varje ruta en liten, alltid likadan variation. Utan den ser gräsmattan ut som en plastmatta.</li>
      </ul>
      <p>Den sista raden är värd att stanna vid. Det ser ut som slump, men det är det inte: samma ruta ger alltid samma tal. Det kallas <em>deterministisk brus</em> och används överallt i grafik — man vill ha oregelbundenhet som inte flimrar när man tittar bort och tillbaka.</p>
      <div class="fallgrop"><strong>Att veta:</strong> nio tusen kuber tar en stund att bygga och en del kraft att rita. Blir det trögt, minska <code>BREDD</code> och <code>DJUP</code> — kartan läses ändå bara så långt som siffrorna räcker.</div>
      <div class="uppgift"><strong>Uppgift:</strong> börja smått — flytta en stuga genom att ändra ett talpar i <code>OBJEKT</code>, och gräv sedan en damm genom att byta några siffror i <code>MARK</code> mot <code>2</code>. Rita därefter ett eget objekt: lägg till en post i <code>RITNINGAR</code> med några koordinater, sätt ut den i <code>OBJEKT</code>, och kör. Vill du utmana dig — ändra <code>star_i_skugga</code> så att solen står i sydost i stället.</div>`
  },
  {
    del: "Maskininlärning", titel: "Träna en modell", fil: "kap22_maskininlarning.py",
    kod: [
      "# Första gången tar det en stund — paketen laddas ner.",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "import xgboost as xgb",
      "from sklearn.model_selection import train_test_split",
      "from sklearn.metrics import accuracy_score",
      "",
      "slump = np.random.default_rng(42)",
      "ANTAL_HUNDAR = 300",
      "ANTAL_KATTER = 300",
      "",
      "# ===== 1. Hitta på hundar =====",
      "# normal(medelvärde, spridning, hur många)",
      "hund_vikt = slump.normal(25, 7, ANTAL_HUNDAR)     # kg, oftast runt 25",
      "hund_oron = slump.normal(9, 2.5, ANTAL_HUNDAR)    # cm, oftast runt 9",
      "hund_ljud = slump.normal(20, 7, ANTAL_HUNDAR)     # skall per timme",
      "",
      "# ===== 2. Hitta på katter =====",
      "katt_vikt = slump.normal(4.5, 1.2, ANTAL_KATTER)",
      "katt_oron = slump.normal(6, 1.0, ANTAL_KATTER)",
      "katt_ljud = slump.normal(3, 2.0, ANTAL_KATTER)",
      "",
      "# ===== 3. Sätt ihop till tabeller: en rad per djur =====",
      "# column_stack lägger de tre listorna bredvid varandra som kolumner",
      "hundar = np.column_stack([hund_vikt, hund_oron, hund_ljud])",
      "katter = np.column_stack([katt_vikt, katt_oron, katt_ljud])",
      "",
      "print(\"En hund ser ut så här:\", hundar[0].round(1))",
      "print(\"En katt ser ut så här: \", katter[0].round(1))",
      "print()",
      "",
      "# ===== 4. Annotering: sätt facit på varje rad =====",
      "# X = egenskaperna. Hundarna först, katterna under.",
      "X = np.vstack([hundar, katter])",
      "",
      "# y = etiketten, alltså rätt svar. 1 = hund, 0 = katt.",
      "# Ordningen måste matcha X exakt: rad 0 i X hör ihop med y[0].",
      "y = np.array([1] * ANTAL_HUNDAR + [0] * ANTAL_KATTER)",
      "",
      "print(\"X har\", X.shape[0], \"rader och\", X.shape[1], \"kolumner\")",
      "print(\"Rad 0:   \", X[0].round(1), \"-> etikett\", y[0], \"(hund)\")",
      "print(\"Sista rad:\", X[-1].round(1), \"-> etikett\", y[-1], \"(katt)\")",
      "print()",
      "",
      "# ===== 5. Titta på datan INNAN vi tränar =====",
      "namn = [\"vikt (kg)\", \"öronlängd (cm)\", \"läten per timme\"]",
      "figur, rutor = plt.subplots(1, 3, figsize=(9, 2.8))",
      "",
      "for i in range(3):",
      "    rutor[i].hist(hundar[:, i], bins=25, alpha=0.75,",
      "                  color=\"#ffc94a\", label=\"hund\")",
      "    rutor[i].hist(katter[:, i], bins=25, alpha=0.75,",
      "                  color=\"#6ee7b7\", label=\"katt\")",
      "    rutor[i].set_title(namn[i])",
      "    rutor[i].legend()",
      "",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "# ===== 6. Dela upp och träna =====",
      "X_tran, X_test, y_tran, y_test = train_test_split(",
      "    X, y, test_size=0.25, random_state=0)",
      "",
      "modell = xgb.XGBClassifier(",
      "    n_estimators=60,        # antal träd",
      "    max_depth=3,            # hur djupa träden får bli",
      "    learning_rate=0.3,      # hur mycket varje träd får rätta till",
      "    tree_method=\"hist\"      # \"hist\" på CPU, device=\"cuda\" på grafikkort",
      ")",
      "modell.fit(X_tran, y_tran)",
      "",
      "# ===== 7. Utvärdera =====",
      "gissningar = modell.predict(X_test)",
      "traff = accuracy_score(y_test, gissningar) * 100",
      "print(f\"Träffsäkerhet på osedd data: {traff:.1f} %\")",
      "print()",
      "",
      "for etikett, andel in zip(namn, modell.feature_importances_):",
      "    print(f\"{etikett:<18} {'#' * int(andel * 40)} {andel:.2f}\")",
      "print()",
      "",
      "# Ett nytt okänt djur: 6 kg, 6.5 cm öron, 4 läten i timmen",
      "okant = np.array([[6.0, 6.5, 4.0]])",
      "sannolikhet = modell.predict_proba(okant)[0]",
      "print(f\"Hund: {sannolikhet[1] * 100:.1f} %   Katt: {sannolikhet[0] * 100:.1f} %\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Skillnaden mot allt du gjort hittills</h3>
      <p>I alla tidigare kapitel har <em>du</em> bestämt reglerna. <code>if temperatur &gt; 25</code> — du valde gränsen 25. I maskininlärning skriver du inga regler alls. Du ger programmet exempel med facit, och det hittar reglerna själv.</p>
      <p>Här är exemplen 600 påhittade djur. Varje djur har tre <strong>egenskaper</strong> (vikt, öronlängd, hur ofta det låter) och en <strong>etikett</strong> (hund eller katt). Modellen letar upp de gränser som skiljer grupperna åt bäst.</p>
      <h3>Hur datan hittas på</h3>
      <p><code>slump.normal(25, 7, 300)</code> ger 300 slumptal som samlas runt 25 med en spridning på 7. Det är <em>normalfördelning</em> — samma mönster som riktiga kroppsvikter, längder och provresultat följer: många nära mitten, allt färre ju längre ut man kommer.</p>
      <p>Hundar och katter byggs var för sig, tre listor vardera. Sedan lägger <code>np.column_stack</code> de tre listorna bredvid varandra som kolumner, så att varje <em>rad</em> blir ett djur och varje <em>kolumn</em> en egenskap. <code>np.vstack</code> staplar hundtabellen ovanpå katttabellen till en enda stor tabell.</p>
      <h3>Annotering — att sätta facit</h3>
      <p><code>X</code> är egenskaperna, <code>y</code> är rätt svar. Att märka data med facit kallas att <strong>annotera</strong>, och i verkligheten är det ofta det dyraste momentet i hela projektet: någon måste sitta och märka tusentals bilder, texter eller journaler för hand.</p>
      <p>Här går det på en rad, eftersom vi vet vilka rader som är vilka: <code>[1] * 300 + [0] * 300</code> ger 300 ettor följt av 300 nollor. <strong>Ordningen är allt.</strong> Rad 0 i <code>X</code> hör ihop med <code>y[0]</code>, rad 1 med <code>y[1]</code>, och så vidare. Blandar du ordningen i den ena men inte den andra får varje djur fel facit, och modellen lär sig rent nonsens — utan att något felmeddelande visas.</p>
      <p>Att 1 betyder hund och 0 katt är bara en överenskommelse. Modellen förstår inte orden; den ser två grupper som ska hållas isär.</p>
      <h3>Att titta på datan först</h3>
      <p>Steg 5 ritar tre histogram, ett per egenskap. Ett histogram delar in värdena i staplar och visar hur många djur som hamnar i varje stapel. Gult är hund, grönt är katt.</p>
      <p>Läs dem så här: <strong>ju mindre färgerna överlappar, desto lättare är egenskapen att skilja djuren på.</strong> Vikt separerar nästan perfekt — staplarna ligger på var sitt håll. Öronlängden överlappar rejält, för en liten hund och en stor katt har ungefär lika stora öron. Den egenskapen hjälper alltså inte modellen särskilt mycket, och det syns senare i listan över viktighet.</p>
      <p>Att titta på data innan man tränar är inte ett extrasteg utan det första riktiga arbetsmomentet. Ofta upptäcker man här att en egenskap är oanvändbar, att värden saknas, eller att något är uppenbart fel — som en katt som väger 40 kg.</p>
      <h3>Träning och test</h3>
      <p><code>train_test_split</code> lägger undan en fjärdedel av djuren som modellen aldrig får se under träningen. Det är hela grunden för att kunna lita på siffran i slutet.</p>
      <p>Att mäta träffsäkerhet på data modellen redan tränat på vore som att låta någon rätta ett prov med facit framför sig. En modell kan lära sig svaren utantill utan att förstå något — det heter <strong>överanpassning</strong>, och testdatan är det enda som avslöjar det.</p>
      <h3>Vad XGBoost faktiskt gör</h3>
      <p>Modellen bygger 60 små beslutsträd, ett i taget. Första trädet gissar grovt. Andra trädet tränas på att rätta första trädets misstag. Tredje rättar det som återstår. Så fortsätter det, och alla träden röstar tillsammans i slutet.</p>
      <p>Det är därför den heter <em>boosting</em>: många svaga gissare som lyfter varandra. <code>learning_rate</code> styr hur stor korrigering varje träd får göra — lågt värde ger försiktigare men stabilare inlärning, och kräver fler träd.</p>
      <h3>Om GPU</h3>
      <p><code>tree_method="hist"</code> räknar på processorn. På en riktig dator med ett Nvidia-kort byter man till <code>device="cuda"</code> och får tiofalt snabbare träning, för ett grafikkort kan göra tusentals uträkningar samtidigt.</p>
      <p>Det går <strong>inte</strong> här. Pytho kör Python kompilerad till WebAssembly, och den har av säkerhetsskäl ingen väg fram till grafikkortets beräkningsdel. Webbläsaren släpper igenom grafik (det är så three.js ritar) men inte generella beräkningar. På 600 djur märks det inte — på 60 miljoner rader gör det hela skillnaden.</p>
      <div class="fallgrop"><strong>Att veta:</strong> datan här är påhittad och därför lite för lätt. Verkliga data är rörigare, har luckor och innehåller fällor. Att en modell får 99 % på övningsdata betyder mycket lite.</div>
      <div class="uppgift"><strong>Uppgift:</strong> ändra <code>hund_vikt</code> till <code>slump.normal(8, 7, ANTAL_HUNDAR)</code> så att hundarna väger nästan lika mycket som katterna. Titta först på histogrammet: färgerna överlappar nu nästan helt. Kör sedan träningen — hur mycket faller träffsäkerheten, och vilken egenskap tar över som viktigast? Testa också att ta bort <code>hund_ljud</code> och <code>katt_ljud</code> helt.</div>`
  },
  {
    del: "Maskininlärning", titel: "Språkbehandling", fil: "kap23_sprak.py",
    kod: [
      "import nltk",
      "from nltk.tokenize import RegexpTokenizer",
      "from nltk.stem.snowball import SnowballStemmer",
      "from nltk import FreqDist, bigrams",
      "",
      "text = \"\"\"Katten sover på soffan. Katten drömmer om fisk.",
      "Hunden springer i parken och hunden skäller på katten.",
      "Fisken simmar i akvariet och bryr sig inte om katten.\"\"\"",
      "",
      "# 1. Tokenisering — dela texten i ord",
      "delare = RegexpTokenizer(r\"\\w+\")",
      "orden = delare.tokenize(text.lower())",
      "print(\"Antal ord:\", len(orden))",
      "print(orden[:8])",
      "print()",
      "",
      "# 2. Stoppord — ta bort de vanliga småorden som inte bär betydelse",
      "stoppord = {\"på\", \"i\", \"om\", \"och\", \"inte\", \"sig\", \"den\", \"det\", \"en\", \"ett\"}",
      "rensade = [o for o in orden if o not in stoppord]",
      "print(\"Kvar efter rensning:\", len(rensade))",
      "print()",
      "",
      "# 3. Stamning — för ihop böjningsformer till samma stam",
      "stemmer = SnowballStemmer(\"swedish\")",
      "stammar = [stemmer.stem(o) for o in rensade]",
      "print(\"katten ->\", stemmer.stem(\"katten\"))",
      "print(\"katter ->\", stemmer.stem(\"katter\"))",
      "print(\"springer ->\", stemmer.stem(\"springer\"))",
      "print()",
      "",
      "# 4. Frekvens — vad handlar texten om?",
      "frekvens = FreqDist(stammar)",
      "for stam, antal in frekvens.most_common(6):",
      "    print(f\"{stam:<10} {'#' * antal * 3} {antal}\")",
      "print()",
      "",
      "# 5. Bigram — vilka ord står bredvid varandra?",
      "par = list(bigrams(rensade))",
      "print(\"Första ordparen:\", par[:4])",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Text är svårare än siffror</h3>
      <p>En modell kan bara räkna. Ska den förstå språk måste texten först göras om till siffror, och vägen dit är det som kallas <strong>naturlig språkbehandling</strong> — NLP. NLTK är verktygslådan för det, och den fungerar faktiskt här i webbläsaren.</p>
      <h3>Tokenisering</h3>
      <p>Första steget: dela texten i enheter. Låter enkelt, men <code>text.split()</code> räcker inte — då blir <code>"soffan."</code> ett annat ord än <code>"soffan"</code>, bara för att en punkt hängde med. <code>RegexpTokenizer(r"\\w+")</code> plockar ut bokstavsföljder och slänger skiljetecken.</p>
      <p><code>r"\\w+"</code> är ett <em>reguljärt uttryck</em>: <code>\\w</code> betyder bokstav eller siffra, <code>+</code> betyder en eller flera i rad. Ett eget litet mönsterspråk som är värt att lära sig senare.</p>
      <h3>Stoppord</h3>
      <p>Ord som "och", "på", "i" finns i varenda text och säger därför nästan ingenting om vad just den här texten handlar om. Att rensa bort dem gör resten tydligare.</p>
      <p>NLTK har färdiga stoppordslistor för många språk, men de måste laddas ner med <code>nltk.download("stopwords")</code>, vilket kräver internetåtkomst som Python i webbläsaren inte har. Därför skriver vi listan själva här. På en riktig dator hade nedladdningen fungerat.</p>
      <h3>Stamning</h3>
      <p>För en dator är "katt", "katten" och "katter" tre helt olika teckensträngar. En <strong>stemmer</strong> kapar ändelserna så att alla tre blir samma stam, och plötsligt kan programmet se att texten handlar mycket om katter.</p>
      <p><code>SnowballStemmer("swedish")</code> är regelbaserad — den följer en lista med svenska ändelseregler och behöver inga nedladdade data. Den är trubbig och blir ibland fel, men den är snabb och förvånansvärt användbar.</p>
      <h3>Frekvens och bigram</h3>
      <p><code>FreqDist</code> är NLTK:s räknare — i praktiken samma dictionary-räknare som du byggde själv i kapitel 8, fast färdig.</p>
      <p><code>bigrams</code> ger alla par av intilliggande ord. Ordpar bär information som enskilda ord tappar: "inte bra" betyder något helt annat än "bra". Det är första steget mot att en dator ska fatta sammanhang — och samma grundidé, fast enormt uppskalad, är det som ligger under moderna språkmodeller.</p>
      <div class="uppgift"><strong>Uppgift:</strong> klistra in en längre text — en nyhetsartikel eller några sidor ur en bok — och kör samma pipeline. Vilka sex stammar toppar listan? Bygg sedan ihop kapitel 22 och 23: räkna hur ofta positiva och negativa ord förekommer i filmrecensioner och låt XGBoost gissa betyget.</div>`
  },
  {
    del: "Maskininlärning", titel: "Ord som siffror", fil: "kap24_ord_som_siffror.py",
    kod: [
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer",
      "",
      "meningar = [",
      "    \"katten sover på soffan\",",
      "    \"katten jagar en mus\",",
      "    \"hunden jagar katten i parken\",",
      "    \"hunden sover i korgen\",",
      "    \"musen springer från katten\",",
      "    \"musen gömmer sig i parken\",",
      "]",
      "",
      "# ===== 1. CountVectorizer: räkna ord =====",
      "raknare = CountVectorizer()",
      "X = raknare.fit_transform(meningar)",
      "ordlista = raknare.get_feature_names_out()",
      "",
      "print(\"Ordförråd:\", list(ordlista))",
      "print(\"Matrisen är\", X.shape[0], \"meningar x\", X.shape[1], \"ord\")",
      "print()",
      "",
      "tabell = X.toarray()",
      "print(\"Mening 0 som siffror:\", tabell[0])",
      "for ord, antal in zip(ordlista, tabell[0]):",
      "    if antal:",
      "        print(f\"   {ord} = {antal}\")",
      "print()",
      "",
      "# ===== 2. TF-IDF: vikta ner ord som finns överallt =====",
      "tfidf = TfidfVectorizer()",
      "V = tfidf.fit_transform(meningar).toarray()",
      "",
      "print(\"Viktigaste ordet i varje mening enligt TF-IDF:\")",
      "for i, mening in enumerate(meningar):",
      "    basta = tfidf.get_feature_names_out()[V[i].argmax()]",
      "    print(f\"   {mening:<32} -> {basta}\")",
      "print()",
      "",
      "# ===== 3. Egna embeddings: ord som sällskap =====",
      "# Idén: ord som förekommer i samma sällskap betyder något liknande.",
      "index = {ord: i for i, ord in enumerate(ordlista)}",
      "N = len(ordlista)",
      "samforekomst = np.zeros((N, N))",
      "FONSTER = 2",
      "",
      "for mening in meningar:",
      "    orden = [o for o in mening.split() if o in index]",
      "    for i, ord in enumerate(orden):",
      "        for j in range(max(0, i - FONSTER), min(len(orden), i + FONSTER + 1)):",
      "            if i != j:",
      "                samforekomst[index[ord], index[orden[j]]] += 1",
      "",
      "print(\"Grannar till 'katten':\")",
      "rad = samforekomst[index[\"katten\"]]",
      "for i in np.argsort(rad)[::-1][:4]:",
      "    if rad[i]:",
      "        print(f\"   {ordlista[i]:<10} {int(rad[i])} gånger\")",
      "print()",
      "",
      "# ===== 4. Pressa ihop till få dimensioner =====",
      "# SVD hittar de riktningar som bär mest information.",
      "loggad = np.log1p(samforekomst)",
      "U, S, Vt = np.linalg.svd(loggad)",
      "embedding = U[:, :2] * S[:2]      # två tal per ord",
      "",
      "print(\"Embedding för 'katten':\", embedding[index[\"katten\"]].round(2))",
      "print()",
      "",
      "# ===== 5. Vilka ord ligger nära varandra? =====",
      "def likhet(a, b):",
      "    va, vb = embedding[index[a]], embedding[index[b]]",
      "    return float(va @ vb / (np.linalg.norm(va) * np.linalg.norm(vb) + 1e-9))",
      "",
      "for par in [(\"katten\", \"hunden\"), (\"katten\", \"musen\"), (\"sover\", \"jagar\")]:",
      "    print(f\"{par[0]} ~ {par[1]}: {likhet(*par):+.2f}\")",
      "print()",
      "",
      "# ===== 6. Rita ordkartan =====",
      "plt.figure(figsize=(7, 4.5))",
      "plt.scatter(embedding[:, 0], embedding[:, 1], color=\"#ffc94a\", s=30)",
      "for ord in ordlista:",
      "    x, y = embedding[index[ord]]",
      "    plt.annotate(ord, (x, y), fontsize=8, color=\"#e8f0ff\")",
      "plt.title(\"Ordkarta — närhet betyder liknande sällskap\")",
      "plt.tight_layout()",
      "plt.show()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Problemet</h3>
      <p>En modell kan bara räkna. Ordet "katt" måste därför bli siffror innan XGBoost eller något annat kan arbeta med det. Det här kapitlet visar tre sätt, från det trubbigaste till det som moderna språkmodeller bygger på.</p>
      <h3>1. Bag of words</h3>
      <p><code>CountVectorizer</code> gör en lista över alla ord som förekommer — <em>ordförrådet</em> — och beskriver sedan varje mening som en rad siffror: hur många gånger vart och ett av orden finns i den.</p>
      <p>Har ordförrådet 20 ord blir varje mening 20 siffror, mestadels nollor. Namnet betyder "påse med ord", för ordningen försvinner helt: "hunden jagar katten" och "katten jagar hunden" blir exakt samma siffror. Trubbigt — men förvånansvärt användbart för att avgöra vad en text <em>handlar om</em>.</p>
      <h3>2. TF-IDF</h3>
      <p>Ett problem med ren räkning: ord som finns i nästan varje mening får höga tal utan att säga något. TF-IDF viktar ner sådana ord och lyfter fram de som är ovanliga i samlingen men vanliga i just den här meningen.</p>
      <p>Namnet betyder <em>term frequency – inverse document frequency</em>: hur ofta ordet finns här, delat med hur många texter det finns i överhuvudtaget. Det är standardmetoden bakom sökmotorer i decennier.</p>
      <h3>3. Embeddings</h3>
      <p>Både metoderna ovan behandlar varje ord som helt orelaterat till alla andra. "hund" och "katt" är lika olika som "hund" och "cykel".</p>
      <p>Embeddings löser det med en idé som är enkel att formulera: <strong>ord som förekommer i samma sällskap betyder något liknande.</strong> Ser du "hunden ___ i parken" gissar du ett verb, och sannolikt ett som också passar efter "katten".</p>
      <p>Steg 3 bygger en <em>samförekomstmatris</em>: för varje ord räknas vilka andra ord som står inom två platser från det. Rader i den matrisen är redan en sorts beskrivning av ordet — fast alldeles för lång, en siffra per ord i ordförrådet.</p>
      <h3>SVD — att pressa ihop</h3>
      <p><code>np.linalg.svd</code> hittar de riktningar i datan som bär mest information, och låter oss kasta resten. Från en matris med tjugo tal per ord får vi två, med det mesta av mönstret kvar.</p>
      <p><code>np.log1p</code> före SVD dämpar de allra vanligaste orden, som annars dominerar helt. Riktiga metoder som word2vec och GloVe gör något besläktat fast mer förfinat, och använder 100–300 tal per ord i stället för 2. Vi tar två för att kunna rita dem.</p>
      <h3>Att mäta likhet</h3>
      <p><code>va @ vb</code> är skalärprodukten, och delat med längderna ger det <strong>cosinuslikhet</strong> — vinkeln mellan två ordvektorer. 1 betyder samma riktning, 0 obesläktade, −1 motsatta. Det är så gott som alltid det man mäter med när man jämför embeddings.</p>
      <p>Ordkartan i steg 6 visar resultatet: ord med liknande sällskap hamnar nära varandra. Med bara sex meningar blir det grovt — kör gärna om med tjugo eller femtio meningar och se hur mycket tydligare grupperna blir.</p>
      <div class="fallgrop"><strong>Att veta:</strong> embeddings ärver allt som finns i texten de tränats på, inklusive fördomar. Tränar man på texter där vissa yrken alltid nämns ihop med ett visst kön hamnar de nära varandra i kartan, och modellen för det vidare. Det är ett verkligt och välkänt problem i fältet.</div>
      <div class="uppgift"><strong>Uppgift:</strong> skriv tjugo egna meningar om två tydligt skilda ämnen — säg fotboll och matlagning — och kör om. Hamnar orden i två grupper på kartan? Testa sedan att ändra <code>FONSTER</code> från 2 till 1 och till 5, och se hur mycket fönsterstorleken påverkar resultatet.</div>`
  },
  {
    del: "Maskininlärning", titel: "Hämta data från nätet", fil: "kap25_oppna_data.py",
    kod: [
      "import data",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "",
      "# SMHI:s öppna data: lufttemperatur från alla mätstationer, senaste timmen",
      "URL = (\"https://opendata-download-metobs.smhi.se/api/version/1.0\"",
      "       \"/parameter/1/station-set/all/period/latest-hour/data.json\")",
      "",
      "try:",
      "    svar = data.fetch_json(URL)",
      "    stationer = svar[\"station\"]",
      "    print(f\"Hämtade {len(stationer)} mätstationer från SMHI.\")",
      "except Exception as fel:",
      "    print(\"Kunde inte hämta från SMHI:\", fel)",
      "    print(\"Använder inbyggd reservdata i stället.\")",
      "    stationer = data.backup_data()",
      "",
      "# ===== 1. Packa upp: JSON in, listor ut =====",
      "namn, grader, latitud = [], [], []",
      "",
      "for station in stationer:",
      "    matningar = station.get(\"value\")",
      "    if not matningar:            # vissa stationer rapporterar inget",
      "        continue",
      "    try:",
      "        temp = float(matningar[0][\"value\"])",
      "    except (TypeError, ValueError):",
      "        continue                 # hoppa över trasiga värden",
      "    namn.append(station[\"name\"])",
      "    grader.append(temp)",
      "    latitud.append(station[\"latitude\"])",
      "",
      "grader = np.array(grader)",
      "latitud = np.array(latitud)",
      "print(f\"{len(grader)} stationer med giltig mätning.\")",
      "print()",
      "",
      "# ===== 2. Enkel statistik =====",
      "print(f\"Kallast:  {grader.min():.1f} °C\")",
      "print(f\"Varmast:  {grader.max():.1f} °C\")",
      "print(f\"Medel:    {grader.mean():.1f} °C\")",
      "print(f\"Median:   {np.median(grader):.1f} °C\")",
      "print()",
      "",
      "# ===== 3. Topplistor =====",
      "ordning = np.argsort(grader)      # ger indexen i storleksordning",
      "print(\"Kallaste platserna:\")",
      "for i in ordning[:5]:",
      "    print(f\"  {namn[i]:<28} {grader[i]:6.1f} °C\")",
      "print(\"Varmaste platserna:\")",
      "for i in ordning[-5:][::-1]:",
      "    print(f\"  {namn[i]:<28} {grader[i]:6.1f} °C\")",
      "print()",
      "",
      "# ===== 4. Rita =====",
      "figur, rutor = plt.subplots(1, 2, figsize=(9, 3.2))",
      "",
      "rutor[0].hist(grader, bins=20, color=\"#ffc94a\")",
      "rutor[0].set_title(\"Fördelning av temperaturer\")",
      "rutor[0].set_xlabel(\"°C\")",
      "",
      "rutor[1].scatter(latitud, grader, s=12, color=\"#6ee7b7\")",
      "rutor[1].set_title(\"Temperatur mot latitud\")",
      "rutor[1].set_xlabel(\"latitud (nordligare ->)\")",
      "rutor[1].set_ylabel(\"°C\")",
      "",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "# ===== 5. Finns ett samband? =====",
      "samband = np.corrcoef(latitud, grader)[0, 1]",
      "print(f\"Korrelation latitud/temperatur: {samband:.2f}\")",
      "if samband < -0.5:",
      "    print(\"Tydligt: ju längre norrut, desto kallare.\")",
      "elif samband > 0.5:",
      "    print(\"Ovanligt: det är varmare i norr just nu.\")",
      "else:",
      "    print(\"Svagt samband — vädret styrs av mer än latitud i dag.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Riktig data i stället för påhittad</h3>
      <p>I kapitel 22 hittade vi på hundarna. Här hämtas mätvärden från SMHI:s öppna API, insamlade från flera hundra riktiga väderstationer den senaste timmen. Kör programmet igen om en timme och du får nya siffror.</p>
      <p>Modulen <code>data</code> finns bara i Pytho. Den har tre funktioner: <code>fetch_json(url)</code>, <code>fetch_text(url)</code> och <code>fetch_csv(url)</code>. På en riktig dator använder man biblioteket <code>requests</code> i stället, men principen är densamma.</p>
      <h3>JSON</h3>
      <p>API:er svarar nästan alltid med <strong>JSON</strong> — ett textformat som ser ut precis som Pythons dictionaries och listor, och som blir just det när det packas upp. SMHI:s svar är en dictionary med nyckeln <code>"station"</code>, som innehåller en lista med en dictionary per mätstation, som i sin tur har en lista med mätvärden. Att gräva sig igenom sådana lager är en stor del av arbetet med riktig data.</p>
      <h3>Verklig data är trasig</h3>
      <p>Lägg märke till hur mycket kod som handlar om att hantera skräp. Vissa stationer rapporterar ingenting. Vissa har värdet <code>null</code>. Vissa har text där det borde vara ett tal. Därför <code>continue</code> på två ställen — hoppa över raden och gå vidare.</p>
      <p>Det här är normalt, inte undantag. En stor del av allt dataarbete är städning, och den som hoppar över det får en modell som lärt sig av trasiga värden.</p>
      <h3>Korrelation</h3>
      <p><code>np.corrcoef</code> mäter hur starkt två serier hänger ihop, på en skala från −1 till 1. Nära −1 betyder att när det ena ökar minskar det andra, vilket är precis vad man väntar sig av latitud och temperatur i Sverige.</p>
      <p>Men kom ihåg den viktigaste regeln i hela statistiken: <strong>samband är inte samma sak som orsak.</strong> Latituden i sig gör ingenting — det är solvinkeln, havsströmmarna och luftmassorna som ligger bakom. Två saker kan följas åt utan att den ena orsakar den andra.</p>
      <h3>Varför de flesta adresser inte fungerar</h3>
      <p>Du kan inte hämta vad som helst. En webbsida får av säkerhetsskäl bara hämta data från servrar som uttryckligen tillåter det, genom en regel som heter <strong>CORS</strong>. Saknas tillåtelsen blockerar webbläsaren hämtningen, och det är därför programmet har en reservlista inbyggd.</p>
      <p>Det är inget fel i din kod och går inte att koda sig runt — det är ett skydd som hindrar en sida från att i smyg läsa data ur dina inloggade tjänster. På en riktig dator med Python installerat gäller inte regeln, för då är det inte en webbsida som frågar.</p>
      <h3>Svenska datakällor att prova</h3>
      <ul>
        <li><strong>SMHI</strong> — väder, temperatur, nederbörd, vind. Byt <code>parameter/1</code> mot <code>parameter/7</code> för nederbörd eller <code>parameter/4</code> för vindhastighet.</li>
        <li><strong>SCB</strong> — befolkning, löner, boende, priser. Sveriges officiella statistik.</li>
        <li><strong>Trafikverket</strong> — tågförseningar och vägarbeten. Kräver en gratis API-nyckel.</li>
        <li><strong>Naturvårdsverket och Sveriges dataportal</strong> — luftkvalitet, miljö, kommunal statistik.</li>
      </ul>
      <div class="uppgift"><strong>Uppgift:</strong> byt parameter i adressen till 7 (nederbörd) eller 4 (vind) och kör om — vilken storhet varierar mest över landet? Slå sedan ihop två hämtningar: läs både temperatur och vind, para ihop stationerna på namn, och undersök om det är kallare där det blåser mer.</div>`
  },
  {
    del: "Slutprojekt", titel: "Väderkarta i 3D", fil: "kap26_vaderkarta.py",
    kod: [
      "import data",
      "import scene",
      "import math",
      "",
      "BAS = \"https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/\"",
      "SLUT = \"/station-set/all/period/latest-hour/data.json\"",
      "",
      "def las_parameter(nummer):",
      "    \"\"\"Hämtar en parameter och returnerar {stationsnamn: (varde, lat, lon)}.\"\"\"",
      "    svar = data.fetch_json(BAS + str(nummer) + SLUT)",
      "    resultat = {}",
      "    for st in svar[\"station\"]:",
      "        matning = st.get(\"value\")",
      "        if not matning:",
      "            continue",
      "        ravarde = matning[0].get(\"value\")",
      "        if ravarde in (None, \"\"):",
      "            continue",
      "        resultat[st[\"name\"]] = (ravarde, st[\"latitude\"], st[\"longitude\"])",
      "    return resultat",
      "",
      "try:",
      "    temp = las_parameter(1)      # lufttemperatur",
      "    print(f\"Hämtade {len(temp)} stationer från SMHI.\")",
      "except Exception as fel:",
      "    print(\"Kunde inte nå SMHI:\", fel)",
      "    temp = {s[\"name\"]: (s[\"value\"][0][\"value\"], s[\"latitude\"], 15.0)",
      "            for s in data.backup_data()}",
      "",
      "# ===== 1. Städa och gör om till tal =====",
      "stationer = []",
      "for namn, (varde, lat, lon) in temp.items():",
      "    try:",
      "        stationer.append((namn, float(varde), lat, lon))",
      "    except (TypeError, ValueError):",
      "        pass",
      "",
      "grader = [s[1] for s in stationer]",
      "print(f\"{len(stationer)} giltiga mätningar, {min(grader):.1f} till {max(grader):.1f} °C\")",
      "print()",
      "",
      "# ===== 2. Räkna om Sverige till scenkoordinater =====",
      "# Latitud 55-69 grader nord, longitud 11-24 grader ost.",
      "SKALA = 1.8",
      "",
      "def till_scen(lat, lon):",
      "    x = (lon - 17.5) * SKALA",
      "    z = -(lat - 62.0) * SKALA        # minus: norr ska hamna bakåt i bilden",
      "    return x, z",
      "",
      "# ===== 3. Färgskala från blått till rött =====",
      "kallast, varmast = min(grader), max(grader)",
      "",
      "def farg_for(temp_c):",
      "    andel = (temp_c - kallast) / max(0.1, varmast - kallast)   # 0 till 1",
      "    rod = int(60 + andel * 195)",
      "    gron = int(90 + (1 - abs(andel - 0.5) * 2) * 100)",
      "    bla = int(255 - andel * 200)",
      "    return f\"#{rod:02x}{gron:02x}{bla:02x}\"",
      "",
      "# ===== 4. Bygg scenen =====",
      "scene.start()",
      "scene.background(\"#0a1526\")",
      "scene.ground(46, \"#16294a\")",
      "scene.camera(0, 16, 26)",
      "",
      "# Sveriges kontur — scene.sverige tar din egen omräkningsfunktion",
      "scene.sweden(till_scen, color=\"#7fa4dd\")",
      "",
      "staplar = []",
      "for namn, grad, lat, lon in stationer:",
      "    x, z = till_scen(lat, lon)",
      "    hojd = (grad - kallast) * 0.35 + 0.3",
      "    staplar.append(scene.bar(x, z, hojd, color=farg_for(grad), width=0.34))",
      "",
      "# Markera extremvärdena",
      "kallaste = min(stationer, key=lambda s: s[1])",
      "varmaste = max(stationer, key=lambda s: s[1])",
      "for st, farg in [(kallaste, \"#8fb4ff\"), (varmaste, \"#ff7d6b\")]:",
      "    x, z = till_scen(st[2], st[3])",
      "    scene.marker(x, (st[1] - kallast) * 0.35 + 1.2, z, color=farg, size=1.4)",
      "",
      "print(f\"Kallast: {kallaste[0]} {kallaste[1]:.1f} °C\")",
      "print(f\"Varmast: {varmaste[0]} {varmaste[1]:.1f} °C\")",
      "",
      "# ===== 5. Lite väder i luften =====",
      "scene.sun(-16, 13, -8, radius=1.4)",
      "for i in range(6):",
      "    scene.cloud(-14 + i * 5.5, 9 + (i % 3) * 1.2, -6 + (i % 2) * 8,",
      "              size=1.1).drift(0.35)",
      "",
      "# ===== 6. Låt staplarna växa fram =====",
      "malhojder = [(s - kallast) * 0.35 + 0.3 for s in grader]",
      "",
      "def animera(t):",
      "    andel = min(1.0, t / 2.5)",
      "    mjuk = andel * andel * (3 - 2 * andel)     # mjuk start och stopp",
      "    for stapel, mal in zip(staplar, malhojder):",
      "        stapel.set_height(mal * mjuk)",
      "",
      "scene.every_frame(animera)",
      "print()",
      "print(\"Dra med musen för att se dig omkring, rulla för att flyga fram och tillbaka.\")",
      "print(\"Piltangenterna flyger som en drönare: framåt dit du tittar.\")",
      "print(\"R eller Återställ vy tar dig tillbaka. Helskärm finns uppe till höger.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Allt du kan, i ett program</h3>
      <p>Det här kapitlet använder nästan varje teknik från kursen: funktioner, dictionaries, felhantering, listuttryck, matematik och 3D. Skillnaden mot tidigare är att datan är verklig och att du inte vet i förväg hur den ser ut.</p>
      <h3>Från jordklot till scen</h3>
      <p>SMHI ger latitud och longitud i grader. Scenen har koordinater runt origo. <code>till_scene</code> gör om mellan systemen: dra bort mitten av Sverige och multiplicera med en skala.</p>
      <p>Minustecknet på <code>z</code> är inte godtyckligt. I three.js pekar positiv z <em>mot</em> betraktaren, så utan minus hamnar norra Sverige längst fram och kartan blir spegelvänd. Sådana teckenfel är bland det vanligaste när man kopplar ihop data med grafik — och de syns direkt, vilket är tur.</p>
      <h3>Höjd och färg bär samma information</h3>
      <p>Varje stapel får både en höjd och en färg ur temperaturen. Det kallas <em>redundant kodning</em> och är medvetet: höjd läses bra från sidan, färg bra uppifrån. Vrider du kartan fungerar alltid minst en av dem.</p>
      <p><code>farg_for</code> räknar först om temperaturen till en andel mellan 0 och 1, och blandar sedan färgen ur den. <code>f"#{rod:02x}"</code> skriver talet som hexadecimal med två siffror — det format färger anges i på webben.</p>
      <h3>Mjuk animation</h3>
      <p><code>andel * andel * (3 - 2 * andel)</code> ser ut som trolleri men är en välkänd kurva som kallas <em>smoothstep</em>. Den går från 0 till 1 precis som <code>andel</code>, men startar och slutar mjukt i stället för att rycka till. Nästan all rörelse i spel och gränssnitt går genom någon sådan kurva — rak linjär rörelse ser mekanisk ut för ögat.</p>
      <h3>Kameran</h3>
      <p>Nu går det att dra med musen för att snurra runt scenen och rulla för att flyga fram och tillbaka. Kameran rör sig på en sfär runt en punkt: <code>theta</code> är varvet runt, <code>phi</code> är höjden över horisonten, och radien är avståndet. Det är samma sfäriska koordinater som används i astronomi.</p>
      <p>Piltangenterna flyger som en drönare: framåt går i den riktning du tittar, så pekar du nedåt sjunker du. Vänster och höger håller alltid höjden, och Page Up och Page Down går rakt upp och ner. R eller knappen Återställ vy tar dig tillbaka till utgångsläget.</p>
      <p><code>scenee.fullscreen()</code> eller knappen i 3D-fliken fyller hela skärmen. Escape tar dig tillbaka.</p>
      <div class="uppgift"><strong>Uppgift:</strong> byt parameter 1 mot 4 (vindhastighet) eller 6 (luftfuktighet) och se hur kartan ändrar karaktär. Bygg sedan om så att <em>höjden</em> visar temperatur och <em>färgen</em> vind — två storheter i samma bild.</div>`
  },
  {
    del: "Slutprojekt", titel: "Modellen i rummet", fil: "kap27_modell_i_rummet.py",
    kod: [
      "import data",
      "import scene",
      "import math",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "from sklearn.linear_model import LinearRegression",
      "from sklearn.ensemble import GradientBoostingRegressor",
      "from sklearn.metrics import mean_absolute_error",
      "",
      "BAS = \"https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/\"",
      "SLUT = \"/station-set/all/period/latest-hour/data.json\"",
      "",
      "def las_parameter(nummer):",
      "    svar = data.fetch_json(BAS + str(nummer) + SLUT)",
      "    ut = {}",
      "    for st in svar[\"station\"]:",
      "        m = st.get(\"value\")",
      "        if m and m[0].get(\"value\") not in (None, \"\"):",
      "            ut[st[\"name\"]] = (m[0][\"value\"], st[\"latitude\"], st[\"longitude\"])",
      "    return ut",
      "",
      "try:",
      "    temp = las_parameter(1)",
      "except Exception as fel:",
      "    print(\"Använder reservdata:\", fel)",
      "    temp = {s[\"name\"]: (s[\"value\"][0][\"value\"], s[\"latitude\"], 15.0)",
      "            for s in data.backup_data()}",
      "",
      "# ===== 1. Bygg X och y =====",
      "X, y, namn = [], [], []",
      "for n, (v, lat, lon) in temp.items():",
      "    try:",
      "        y.append(float(v))",
      "        X.append([lat, lon])",
      "        namn.append(n)",
      "    except (TypeError, ValueError):",
      "        pass",
      "",
      "X = np.array(X)",
      "y = np.array(y)",
      "print(f\"{len(y)} stationer. Egenskaper: latitud och longitud.\")",
      "print()",
      "",
      "# ===== 2. Två modeller på samma data =====",
      "linjar = LinearRegression().fit(X, y)",
      "trad = GradientBoostingRegressor(n_estimators=120, max_depth=3,",
      "                                 random_state=0).fit(X, y)",
      "",
      "for etikett, modell in [(\"Linjär regression\", linjar), (\"Boostade träd\", trad)]:",
      "    gissning = modell.predict(X)",
      "    print(f\"{etikett:<20} medelfel {mean_absolute_error(y, gissning):.2f} °C\")",
      "",
      "lutning = linjar.coef_[0]",
      "print(f\"\\nLinjära modellen säger: {lutning:.2f} °C per breddgrad norrut.\")",
      "print()",
      "",
      "# ===== 3. Rita tre diagram, ett per skärm =====",
      "gissning_linjar = linjar.predict(X)",
      "gissning_trad = trad.predict(X)",
      "rest = y - gissning_linjar",
      "",
      "def stada(ruta):",
      "    ruta.grid(alpha=0.25, linewidth=0.7)",
      "    ruta.set_axisbelow(True)",
      "    for kant in (\"top\", \"right\"):",
      "        ruta.spines[kant].set_visible(False)",
      "",
      "# (a) mätningar och modellens linje",
      "fig_a, ruta = plt.subplots(figsize=(7.2, 5.4))",
      "ruta.scatter(X[:, 0], y, s=34, color=\"#1f9d55\", alpha=0.8,",
      "             edgecolors=\"white\", linewidths=0.6, label=\"mätstation\")",
      "linje_lat = np.linspace(X[:, 0].min(), X[:, 0].max(), 60)",
      "linje_punkter = np.column_stack([linje_lat, np.full(60, X[:, 1].mean())])",
      "ruta.plot(linje_lat, linjar.predict(linje_punkter),",
      "          color=\"#e0a21a\", lw=3.5, label=\"linjär modell\")",
      "ruta.set_xlabel(\"latitud (nordligare ->)\")",
      "ruta.set_ylabel(\"temperatur (°C)\")",
      "ruta.set_title(f\"Mätning mot modell\\n{lutning:.2f} °C per breddgrad\", fontsize=13)",
      "ruta.legend(fontsize=10, frameon=False)",
      "stada(ruta)",
      "fig_a.tight_layout()",
      "",
      "# (b) träffbild för båda modellerna",
      "fig_b, ruta = plt.subplots(figsize=(7.2, 5.4))",
      "grans = [min(y.min(), gissning_trad.min()), max(y.max(), gissning_trad.max())]",
      "ruta.plot(grans, grans, \"--\", color=\"#9aa7bd\", lw=1.8, zorder=1)",
      "ruta.scatter(y, gissning_linjar, s=30, color=\"#e0a21a\", alpha=0.7,",
      "             label=\"linjär\", zorder=2)",
      "ruta.scatter(y, gissning_trad, s=30, color=\"#c74a38\", alpha=0.7,",
      "             label=\"boostade träd\", zorder=3)",
      "ruta.set_xlabel(\"verklig temperatur (°C)\")",
      "ruta.set_ylabel(\"modellens gissning (°C)\")",
      "ruta.set_title(\"Ju närmare linjen, desto bättre\", fontsize=13)",
      "ruta.legend(fontsize=10, frameon=False)",
      "stada(ruta)",
      "fig_b.tight_layout()",
      "",
      "# (c) hur felen fördelar sig",
      "fig_c, ruta = plt.subplots(figsize=(7.2, 5.4))",
      "ruta.hist(rest, bins=24, color=\"#4a7fd4\", alpha=0.85)",
      "ruta.axvline(0, color=\"#c74a38\", lw=2.5)",
      "ruta.set_xlabel(\"fel i grader (verklig - gissad)\")",
      "ruta.set_ylabel(\"antal stationer\")",
      "ruta.set_title(\"Den linjära modellens fel\", fontsize=13)",
      "stada(ruta)",
      "fig_c.tight_layout()",
      "",
      "# ===== 4. Bygg scenen med modellytan =====",
      "# Samma färger som i diagrammen: grönt = mätt, gult = modellens gissning.",
      "MATT = \"#3ddc84\"",
      "MODELL = \"#ffc94a\"",
      "KONTUR = \"#7c8ba5\"",
      "",
      "scene.start()",
      "scene.background(\"#0a1526\")",
      "scene.camera(0, 14, 38)",
      "scene.ground(46, \"#16294a\")",
      "",
      "SKALA = 1.8",
      "def till_scen(lat, lon):",
      "    return (lon - 17.5) * SKALA, -(lat - 62.0) * SKALA",
      "",
      "scene.sweden(till_scen, color=KONTUR)",
      "",
      "kallast, varmast = y.min(), y.max()",
      "def hojd_for(t):",
      "    return (t - kallast) * 0.35 + 0.3",
      "",
      "# Mätningarna som breda gröna staplar",
      "for i in range(len(y)):",
      "    x, z = till_scen(X[i, 0], X[i, 1])",
      "    scene.bar(x, z, hojd_for(y[i]), color=MATT, width=0.34)",
      "",
      "# Modellens gissning som ett rutnät av smala gula staplar.",
      "# scene.in_sweden() sållar bort punkter i havet och hos grannländerna.",
      "for lat in np.arange(55.5, 69.5, 1.0):",
      "    for lon in np.arange(11.5, 24.5, 1.2):",
      "        if not scene.in_sweden(lat, lon):",
      "            continue",
      "        gissad = float(linjar.predict([[lat, lon]])[0])",
      "        x, z = till_scen(lat, lon)",
      "        scene.bar(x, z, hojd_for(gissad), color=MODELL, width=0.13)",
      "",
      "# ===== 5. Teckenförklaring infälld i golvet bredvid kartan =====",
      "fig_tf, ruta = plt.subplots(figsize=(6.0, 3.2))",
      "poster = [",
      "    (MATT, \"Uppmätt temperatur\", \"breda staplar, en per mätstation\"),",
      "    (MODELL, \"Modellens gissning\", \"smala staplar i ett jämnt rutnät\"),",
      "    (KONTUR, \"Sveriges kontur\", \"tunn linje längs marken\"),",
      "]",
      "for i, (farg, rubrik, under) in enumerate(poster):",
      "    hojd = 0.74 - i * 0.26",
      "    ruta.add_patch(plt.Rectangle((0.05, hojd - 0.045), 0.09, 0.12,",
      "                                 color=farg, transform=ruta.transAxes))",
      "    ruta.text(0.20, hojd + 0.055, rubrik, transform=ruta.transAxes,",
      "              fontsize=14, va=\"center\", fontweight=\"bold\")",
      "    ruta.text(0.20, hojd - 0.02, under, transform=ruta.transAxes,",
      "              fontsize=11, va=\"center\", color=\"#5b6b85\")",
      "ruta.set_title(\"Vad staplarna betyder\", fontsize=15, loc=\"left\")",
      "ruta.axis(\"off\")",
      "fig_tf.tight_layout()",
      "",
      "# Platt panel som ligger ner: -90 grader runt x-axeln lägger den i golvet.",
      "# Golvet är 46 x 46, alltså -23 till +23. Panelen ritas med en ram runt",
      "# bilden, så vi räknar med den när vi lägger den kant i kant i hörnet.",
      "GOLV = 23",
      "TF_BREDD, TF_DJUP = 19.0, 10.1",
      "RAM = 1.16                     # ramen är 16 % större än bilden",
      "",
      "tf_x = GOLV - TF_BREDD * RAM / 2",
      "tf_z = GOLV - TF_DJUP * RAM / 2",
      "",
      "legend = scene.panel(tf_x, 0.05, tf_z, width=TF_BREDD, height=TF_DJUP,",
      "                    image=scene.chart_to_image(fig_tf))",
      "legend.rotate(-math.pi / 2, 0, 0)",
      "plt.close(fig_tf)",
      "",
      "# ===== 6. Tre skärmar bredvid varandra =====",
      "# Sidoskärmarna vinklas 20 grader in mot mitten.",
      "scene.chart_screen(-15.5, 15, -19, width=11, height=8.2,",
      "                  figure=fig_a, turn=20)",
      "scene.chart_screen(0, 15, -23, width=11, height=8.2, figure=fig_b)",
      "scene.chart_screen(15.5, 15, -19, width=11, height=8.2,",
      "                  figure=fig_c, turn=-20)",
      "",
      "scene.look_at(0, 6, -6)      # rikta blicken mellan karta och skärmar",
      "",
      "print(\"Breda gröna staplar = uppmätt. Smala gula = modellens gissning.\")",
      "print(\"Teckenförklaringen ligger infälld i golvet, nere till höger.\")",
      "print()",
      "print(\"Styr vyn: dra med musen för att se dig omkring, rulla för att flyga.\")",
      "print(\"Piltangenter flyger som en drönare: framåt dit du tittar.\")",
      "print(\"Tryck R eller Återställ vy för att komma tillbaka hit.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Att se en modell i stället för att läsa om den</h3>
      <p>Ett medelfel på 2,1 °C säger nästan ingenting förrän man ser vad det betyder. Här står modellens gissningar bredvid verkligheten i samma rum: gröna staplar är uppmätta temperaturer, gula är vad den linjära modellen tror om varje plats.</p>
      <p>Titta på formen. De gula bildar ett perfekt plan som lutar jämnt från söder till norr — det är precis vad linjär regression <em>kan</em> göra, och inget annat. De gröna hoppar upp och ner: kusten är mildare än inlandet, fjällen kallare än allt annat. Skillnaden mellan de två mönstren <strong>är</strong> modellens fel, synligt som avstånd.</p>
      <h3>Två modeller, olika sorters fel</h3>
      <p><code>LinearRegression</code> anpassar ett plan: temperaturen = a·latitud + b·longitud + c. Tre tal, det är hela modellen. Den blir aldrig särskilt exakt, men den går att förstå — <code>coef_[0]</code> säger rakt ut hur många grader kallare det blir per breddgrad norrut.</p>
      <p><code>GradientBoostingRegressor</code> bygger 120 träd som rättar varandra, precis som XGBoost i kapitel 22. Den får mycket lägre fel, men du kan inte längre peka på ett tal och säga vad den lärt sig.</p>
      <p>Det där är en verklig avvägning i fältet, inte en övning: <strong>enkel och förklarbar, eller träffsäker och ogenomskinlig.</strong> I sjukvård och juridik väljer man ofta det första även när det andra är bättre på papperet.</p>
      <div class="fallgrop"><strong>Observera:</strong> båda modellerna mäts här på samma data de tränats på, vilket kapitel 22 varnade för. Trädmodellen ser därför bättre ut än den är. Ett ärligt mått kräver <code>train_test_split</code> — prova att lägga till det.</div>
      <h3>Diagram som textur</h3>
      <p><code>scenee.chart_panel(...)</code> tar den matplotlib-figur du just ritat, gör om den till en bild, och klistrar den på en yta i 3D-rummet.</p>
      <p>Tekniskt går den vägen: matplotlib renderar figuren till PNG i minnet, bilden kodas som text med base64, texten skickas över till JavaScript, three.js laddar den som en <em>textur</em> och lägger den på ett plan. Textur betyder just det — en bild som kläs på en yta, samma teknik som ger en spelkaraktär ansikte.</p>
      <p>Poängen är att kartan och diagrammet hör ihop. I stället för att växla mellan två flikar hänger analysen som en skylt bakom landskapet den beskriver, och du kan vrida på båda samtidigt.</p>
      <div class="uppgift"><strong>Uppgift:</strong> lägg till longitud i diagrammet — ser du att kusten avviker? Byt sedan den gula ytan till trädmodellens gissningar i stället för den linjära. Följer den de gröna staplarna bättre? Och lägg till en tredje egenskap, till exempel stationens höjd över havet om du hittar den i SMHI:s data.</div>`
  },
  {
    del: "Slutprojekt", titel: "En liten språkmodell", fil: "kap28_spraakmodell.py",
    kod: [
      "import data",
      "import random",
      "import re",
      "from collections import defaultdict, Counter",
      "",
      "# SMHI:s vädervarningar innehåller text skriven av meteorologer.",
      "SKARPA = \"https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json\"",
      "EXEMPEL = \"https://opendata-download-warnings.smhi.se/ibww/test/test_{}.json\"",
      "",
      "# ===== 1. Gräv fram all svensk text ur okänd JSON =====",
      "# Vi vet inte exakt hur svaret är uppbyggt, så vi går igenom",
      "# hela strukturen och plockar ut varje textbit vi hittar.",
      "def samla_text(nod, hittat):",
      "    if isinstance(nod, dict):",
      "        for nyckel, varde in nod.items():",
      "            if nyckel == \"en\":          # hoppa över engelska versioner",
      "                continue",
      "            samla_text(varde, hittat)",
      "    elif isinstance(nod, list):",
      "        for post in nod:",
      "            samla_text(post, hittat)",
      "    elif isinstance(nod, str):",
      "        if len(nod) > 40 and \" \" in nod:   # bara riktiga meningar",
      "            hittat.append(nod)",
      "    return hittat",
      "",
      "# ===== 2. Hämta — skarpa varningar först, annars SMHI:s exempel =====",
      "raatext = []",
      "try:",
      "    raatext = samla_text(data.fetch_json(SKARPA), [])",
      "    print(f\"Skarpa varningar just nu: {len(raatext)} textstycken.\")",
      "except Exception as fel:",
      "    print(\"Kunde inte hämta skarpa varningar:\", fel)",
      "",
      "if len(raatext) < 5:",
      "    print(\"För lite text. Hämtar SMHI:s exempelvarningar i stället.\")",
      "    for nummer in range(1, 6):",
      "        try:",
      "            raatext += samla_text(data.fetch_json(EXEMPEL.format(nummer)), [])",
      "        except Exception:",
      "            pass",
      "",
      "if not raatext:",
      "    print(\"Ingen text kunde hämtas — använder inbyggd reservtext.\")",
      "    raatext = [",
      "        \"Vindbyar på cirka 25 meter per sekund väntas under natten mot onsdag.\",",
      "        \"Vindbyar på cirka 20 meter per sekund väntas under eftermiddagen.\",",
      "        \"Kraftiga vindbyar väntas i samband med att lågtrycket passerar.\",",
      "        \"Snöfall som ger 15 till 25 centimeter nysnö under dygnet.\",",
      "        \"Snöfall som ger 5 till 10 centimeter nysnö under morgonen.\",",
      "        \"Snöfallet väntas avta under kvällen och natten mot torsdag.\",",
      "        \"Kraftigt regn med lokalt stora regnmängder under eftermiddagen.\",",
      "        \"Kraftigt regn väntas i södra Sverige under natten mot fredag.\",",
      "        \"Regnet övergår i snöfall under kvällen i de norra delarna.\",",
      "        \"Nederbörden övergår i regn under morgondagen i södra Sverige.\",",
      "        \"Höga vattenflöden i mindre vattendrag under de närmaste dygnen.\",",
      "        \"Höga vattenflöden väntas i de större älvarna under helgen.\",",
      "        \"Vattenflödena väntas kulminera under natten mot söndag.\",",
      "        \"Blixthalka kan uppstå när regnet faller på kalla vägbanor.\",",
      "        \"Halka kan uppstå under morgonen i samband med lätt snöfall.\",",
      "        \"Kraftiga vindbyar i kombination med snöfall ger begränsad sikt.\",",
      "        \"Snöfall i kombination med vind ger snödrev över öppna ytor.\",",
      "        \"Risk för snödrev över öppna ytor under kvällen och natten.\",",
      "        \"Risk för översvämning i mindre vattendrag under eftermiddagen.\",",
      "        \"Risk för besvärligt väder i de västra delarna under helgen.\",",
      "        \"Vinden väntas avta under morgondagen i samband med att lågtrycket drar bort.\",",
      "        \"Temperaturen sjunker under natten och vägbanorna blir hala.\",",
      "        \"Kraftig blåst väntas längs kusten under eftermiddagen och kvällen.\",",
      "        \"Lokalt stora regnmängder kan ge problem i de södra delarna.\",",
      "        \"Situationen väntas förbättras under morgondagen i hela landet.\",",
      "        \"Var uppmärksam på fallande grenar i samband med kraftiga vindbyar.\",",
      "    ]",
      "",
      "print(f\"Totalt {len(raatext)} textstycken att träna på.\")",
      "print()",
      "print(\"Ett smakprov ur SMHI:s text:\")",
      "print(\" \", raatext[0][:150])",
      "print()",
      "",
      "# ===== 3. Städa texten och dela i meningar =====",
      "meningar = []",
      "for stycke in raatext:",
      "    stycke = re.sub(r\"<[^>]+>\", \" \", stycke)      # ta bort ev. HTML",
      "    stycke = re.sub(r\"\\s+\", \" \", stycke)",
      "    for mening in re.split(r\"(?<=[.!?])\\s+\", stycke):",
      "        orden = re.findall(r\"[\\wåäöÅÄÖ-]+\", mening.lower())",
      "        if len(orden) >= 4:",
      "            meningar.append(orden)",
      "",
      "print(f\"{len(meningar)} meningar efter städningen.\")",
      "alla_ord = [o for m in meningar for o in m]",
      "print(f\"{len(alla_ord)} ord, varav {len(set(alla_ord))} olika.\")",
      "print()",
      "",
      "vanligast = Counter(alla_ord).most_common(8)",
      "print(\"Vanligaste orden i SMHI:s varningsspråk:\")",
      "for ord, antal in vanligast:",
      "    print(f\"   {ord:<14} {antal}\")",
      "print()",
      "",
      "# ===== 4. Träna modellen =====",
      "# Trigram: två ord bakåt ger bättre meningsbyggnad än ett.",
      "START = (\"<start>\", \"<start>\")",
      "efterfoljare = defaultdict(Counter)",
      "",
      "for orden in meningar:",
      "    foregaende = START",
      "    for ord in orden + [\"<slut>\"]:",
      "        efterfoljare[foregaende][ord] += 1",
      "        foregaende = (foregaende[1], ord)",
      "",
      "print(f\"Modellen känner {len(efterfoljare)} ordpar.\")",
      "prov = [n for n in efterfoljare if n[0] != \"<start>\"][:1]",
      "if prov:",
      "    print(f\"Efter {prov[0]} kommer:\", efterfoljare[prov[0]].most_common(3))",
      "print()",
      "",
      "# ===== 5. Låt modellen skriva =====",
      "def generera(max_ord=26, temperatur=1.0, fro=None):",
      "    slump = random.Random(fro)",
      "    foregaende = START",
      "    ut = []",
      "    for _ in range(max_ord):",
      "        val = efterfoljare.get(foregaende)",
      "        if not val:",
      "            break",
      "        kandidater = list(val.keys())",
      "        vikter = [antal ** (1.0 / temperatur) for antal in val.values()]",
      "        ord = slump.choices(kandidater, weights=vikter)[0]",
      "        if ord == \"<slut>\":",
      "            break",
      "        ut.append(ord)",
      "        foregaende = (foregaende[1], ord)",
      "    if not ut:",
      "        return \"(modellen hittade ingen fortsättning)\"",
      "    return ut[0].capitalize() + \" \" + \" \".join(ut[1:]) + \".\"",
      "",
      "print(\"=\" * 58)",
      "print(\"FÖRSIKTIG MODELL  (temperatur 0.4 — tar inga risker)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generera(temperatur=0.4, fro=i))",
      "print()",
      "",
      "print(\"=\" * 58)",
      "print(\"LAGOM MODELL  (temperatur 1.0 — följer sannolikheterna)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generera(temperatur=1.0, fro=i + 10))",
      "print()",
      "",
      "print(\"=\" * 58)",
      "print(\"VILD MODELL  (temperatur 2.5 — chansar ofta)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generera(temperatur=2.5, fro=i + 20))",
      "print()",
      "",
      "# ===== 6. Hur mycket är avskrivet? =====",
      "# En trigram-modell kan ALDRIG hitta på en ny följd av tre ord — den väljer",
      "# ju alltid nästa ord bland dem som följt just det paret i texten.",
      "# Vi mäter därför längre sträckor: fem ord i rad.",
      "FONSTER = 5",
      "",
      "originaltext = set()",
      "for orden in meningar:",
      "    for i in range(len(orden) - FONSTER + 1):",
      "        originaltext.add(tuple(orden[i:i + FONSTER]))",
      "",
      "nytt, totalt = 0, 0",
      "for i in range(60):",
      "    orden = generera(temperatur=1.0, fro=100 + i).lower().rstrip(\".\").split()",
      "    for j in range(len(orden) - FONSTER + 1):",
      "        totalt += 1",
      "        if tuple(orden[j:j + FONSTER]) not in originaltext:",
      "            nytt += 1",
      "",
      "if totalt:",
      "    print(f\"Av {totalt} sträckor på {FONSTER} ord var {nytt} nya \"",
      "          f\"({nytt / totalt * 100:.0f} %).\")",
      "    print(\"Resten är ordföljder modellen sett i träningstexten.\")",
      "    print()",
      "    print(\"Ju längre sträcka du mäter, desto mer avskrivet ser det ut.\")",
      "    print(\"Prova att ändra FONSTER till 4, 6 och 8.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Riktigt språk den här gången</h3>
      <p>I kapitel 22 hittade vi på datan. Här tränas modellen på text som meteorologer på SMHI faktiskt har skrivit — varningar om storm, snöfall och höga flöden, hämtade från deras öppna varnings-API.</p>
      <p>Finns inga skarpa varningar just nu hämtas SMHI:s exempelvarningar i stället. Det är samma sorts text, publicerad för att utvecklare ska kunna testa. Går inget av det finns en liten reservtext inbyggd, så kapitlet fungerar även offline.</p>
      <h3>Att gräva i okänd JSON</h3>
      <p>Vi vet inte exakt hur SMHI har byggt sitt svar, och det kan ändras. Därför letar <code>samla_text</code> igenom hela strukturen rekursivt: är noden en dictionary, gå in i varje värde; är den en lista, gå in i varje post; är den en sträng som är lång nog att vara en mening, spara den.</p>
      <p>Det är rekursion från kapitel 15 använd på riktigt. Funktionen behöver inte veta hur djupt strukturen går eller vad fälten heter — den letar tills den hittar text. Nyckeln <code>"en"</code> hoppas över, annars kommer engelska översättningar med och blandar ihop språken.</p>
      <h3>Städning med reguljära uttryck</h3>
      <p><code>re.sub(r"&lt;[^&gt;]+&gt;", " ", text)</code> tar bort HTML-taggar som kan följa med. <code>re.split(r"(?&lt;=[.!?])\\s+", text)</code> delar i meningar efter punkt, utropstecken eller frågetecken. <code>re.findall(r"[\\wåäöÅÄÖ-]+", ...)</code> plockar ut orden och behåller de svenska bokstäverna, som annars lätt försvinner.</p>
      <h3>Trigram i stället för bigram</h3>
      <p>Kapitel 21 tittade ett ord bakåt. Här är nyckeln ett <strong>par</strong> av ord, alltså två ords sammanhang. Meningarna blir omedelbart mer grammatiska — modellen vet skillnad på vad som kan följa efter "risk för" och efter "övergår i".</p>
      <p>Priset syns i steg 6: ju mer sammanhang modellen har, desto mer liknar resultatet träningstexten. Med tillräckligt långt minne skriver den bara av. Det är avvägningen som all språkmodellering brottas med.</p>
      <h3>Mät hur mycket som är nytt</h3>
      <p>Sista steget jämför modellens meningar mot träningstexten. En detalj gör mätningen klurig: en trigram-modell kan <em>aldrig</em> hitta på en ny följd av tre ord, eftersom den alltid väljer nästa ord bland dem som faktiskt följt just det ordparet. Mäter man tripletter blir svaret garanterat noll procent, oavsett hur bra modellen är.</p>
      <p>Därför mäter vi längre sträckor, fem ord i rad. Där kan modellen kombinera ihop bitar från olika meningar till något som inte stod någonstans. Ändra <code>FONSTER</code> till 4, 6 och 8 och se hur siffran faller — ju längre sträcka du kräver, desto mer avskrivet ser resultatet ut.</p>
      <p>Samma fråga ställs om de riktiga stora modellerna, och det är där diskussionen om upphovsrätt och plagiat börjar. Nu kan du mäta det själv på trettio rader kod — och du har också sett hur mycket svaret beror på hur man väljer att mäta.</p>
      <h3>Temperatur</h3>
      <p>Tre körningar med samma modell men olika temperatur. Låg temperatur förstärker de vanligaste orden — resultatet blir förutsägbart men välformat. Hög temperatur jämnar ut sannolikheterna och modellen tar chanser som ofta spårar ur. Det är samma reglage som finns i alla chattmodeller.</p>
      <div class="fallgrop"><strong>Källa:</strong> texten kommer från SMHI:s öppna data, som får användas fritt under Creative Commons Erkännande. Villkoret är att SMHI anges som källa — värt att veta att öppna data nästan alltid har villkor, även när de är gratis.</div>
      <div class="uppgift"><strong>Uppgift:</strong> byt tillbaka till bigram genom att använda bara ett ord som nyckel, och jämför både språkkvaliteten och hur stor andel som blir nytt. Bygg sedan ut korpusen — hämta fler exempelvarningar eller klistra in en egen text — och se om modellen blir bättre av mer data.</div>`
  },
  {
    del: "Slutprojekt", titel: "Transformers", fil: "kap29_attention.py",
    kod: [
      "import data",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "import re",
      "",
      "# Samma text som i kapitel 28: SMHI:s vädervarningar.",
      "SKARPA = \"https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json\"",
      "EXEMPEL = \"https://opendata-download-warnings.smhi.se/ibww/test/test_{}.json\"",
      "",
      "def samla_text(nod, hittat):",
      "    if isinstance(nod, dict):",
      "        for nyckel, varde in nod.items():",
      "            if nyckel != \"en\":",
      "                samla_text(varde, hittat)",
      "    elif isinstance(nod, list):",
      "        for post in nod:",
      "            samla_text(post, hittat)",
      "    elif isinstance(nod, str) and len(nod) > 40 and \" \" in nod:",
      "        hittat.append(nod)",
      "    return hittat",
      "",
      "raatext = []",
      "try:",
      "    raatext = samla_text(data.fetch_json(SKARPA), [])",
      "except Exception:",
      "    pass",
      "if len(raatext) < 5:",
      "    for nummer in range(1, 6):",
      "        try:",
      "            raatext += samla_text(data.fetch_json(EXEMPEL.format(nummer)), [])",
      "        except Exception:",
      "            pass",
      "if not raatext:",
      "    raatext = [",
      "        \"Kraftiga vindbyar väntas under natten mot onsdag i södra Sverige.\",",
      "        \"Snöfall som ger 15 centimeter nysnö väntas under dygnet.\",",
      "        \"Kraftigt regn med lokalt stora regnmängder väntas under eftermiddagen.\",",
      "        \"Höga vattenflöden i mindre vattendrag väntas under de närmaste dygnen.\",",
      "        \"Regnet övergår i snöfall under kvällen i de norra delarna.\",",
      "        \"Vinden väntas avta under morgondagen när lågtrycket drar bort.\",",
      "        \"Risk för snödrev över öppna ytor under kvällen och natten.\",",
      "        \"Halka kan uppstå under morgonen när regnet faller på kalla vägbanor.\",",
      "        \"Snöfallet väntas avta under kvällen i de västra delarna.\",",
      "        \"Lokalt stora regnmängder kan ge översvämning i mindre vattendrag.\",",
      "        \"Kraftigt snöfall väntas i de norra delarna under natten mot torsdag.\",",
      "        \"Regnet väntas avta under eftermiddagen i de södra delarna.\",",
      "    ]",
      "",
      "# ===== 1. Dela texten i meningar och ord =====",
      "meningar = []",
      "for stycke in raatext:",
      "    stycke = re.sub(r\"<[^>]+>\", \" \", stycke)",
      "    for mening in re.split(r\"(?<=[.!?])\\s+\", stycke):",
      "        orden = re.findall(r\"[\\wåäöÅÄÖ-]+\", mening.lower())",
      "        if 4 <= len(orden) <= 20:",
      "            meningar.append(orden)",
      "",
      "ordlista = sorted({o for m in meningar for o in m})",
      "index = {o: i for i, o in enumerate(ordlista)}",
      "print(f\"{len(meningar)} meningar, {len(ordlista)} olika ord.\")",
      "print()",
      "",
      "# ===== 2. Embeddings ur texten — samma metod som i kapitel 24 =====",
      "N = len(ordlista)",
      "samforekomst = np.zeros((N, N))",
      "for orden in meningar:",
      "    for i, ord in enumerate(orden):",
      "        for j in range(max(0, i - 3), min(len(orden), i + 4)):",
      "            if i != j:",
      "                samforekomst[index[ord], index[orden[j]]] += 1",
      "",
      "U, S, _ = np.linalg.svd(np.log1p(samforekomst))",
      "E = U[:, :16] * S[:16]",
      "E = E / (np.linalg.norm(E, axis=1, keepdims=True) + 1e-9)",
      "print(\"Varje ord är nu 16 tal, uträknade ur texten.\")",
      "print()",
      "",
      "# ===== 3. Attention: kärnan i en transformer =====",
      "# Varje ord frågar: vilka av de tidigare orden är relevanta för mig?",
      "# Svaret är likheten mellan ordens vektorer.",
      "def softmax(x):",
      "    e = np.exp(x - x.max(axis=-1, keepdims=True))",
      "    return e / e.sum(axis=-1, keepdims=True)",
      "",
      "def attention(orden, maskera=True):",
      "    X = np.array([E[index[o]] for o in orden])",
      "    poang = X @ X.T * 4                      # likhet mellan alla ordpar",
      "    np.fill_diagonal(poang, -1e9)             # ordet självt räknas inte",
      "    if maskera:                               # ord får bara titta bakåt",
      "        poang = np.where(np.triu(np.ones_like(poang), 0) > 0, -1e9, poang)",
      "    forbjudet = poang < -1e8",
      "    vikter = softmax(poang)",
      "    vikter[forbjudet] = np.nan                # markera det som är avstängt",
      "    return vikter",
      "",
      "mening = max(meningar, key=len)[:11]",
      "vikter = attention(mening)",
      "",
      "print(\"Mening:\", \" \".join(mening))",
      "print()",
      "print(\"Vilket tidigare ord tittar varje ord mest på?\")",
      "for i in range(1, len(mening)):",
      "    andra = vikter[i, :i].copy()             # bortse från ordet självt",
      "    basta = int(np.argmax(andra))",
      "    print(f\"   {mening[i]:<12} -> {mening[basta]:<12} ({andra[basta] * 100:.0f} %)\")",
      "print()",
      "",
      "# ===== 4. Rita uppmärksamheten =====",
      "figur, rutor = plt.subplots(1, 2, figsize=(13, 5.4))",
      "",
      "for ruta, mask, rubrik in [",
      "    (rutor[0], True, \"Med mask\\nvarje ord ser bara bakåt\"),",
      "    (rutor[1], False, \"Utan mask\\nvarje ord ser hela meningen\"),",
      "]:",
      "    m = attention(mening, maskera=mask)",
      "    farger = plt.get_cmap(\"YlGnBu\").copy()",
      "    farger.set_bad(\"#d8dee9\")               # grått där inget får ses",
      "    bild = ruta.imshow(m, cmap=farger, vmin=0)",
      "    ruta.set_xticks(range(len(mening)))",
      "    ruta.set_xticklabels(mening, rotation=55, ha=\"right\", fontsize=9)",
      "    ruta.set_yticks(range(len(mening)))",
      "    ruta.set_yticklabels(mening, fontsize=9)",
      "    ruta.set_title(rubrik, fontsize=12)",
      "    figur.colorbar(bild, ax=ruta, fraction=0.046)",
      "",
      "rutor[0].set_ylabel(\"ordet som frågar\")",
      "rutor[0].set_xlabel(\"tittar på\")",
      "rutor[1].set_xlabel(\"tittar på\")",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "print(\"Ljus ruta = låg uppmärksamhet. Mörk = hög.\")",
      "print(\"Det grå fältet är maskerat — dit får orden inte titta.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Vad kapitel 28 inte gjorde</h3>
      <p>Trigram-modellen var en uppslagstabell: räkna hur ofta varje ord följt på varje ordpar, slå upp, välj. Den minns exakt två ord bakåt och vet ingenting om att ord kan likna varandra.</p>
      <p><em>Attention</em> — uppmärksamhet — löser båda problemen på en gång, och är mekanismen som moderna språkmodeller bygger på. Samma text, helt annan idé.</p>
      <h3>Grundtanken</h3>
      <p>Varje ord ställer en fråga: <strong>vilka av de tidigare orden är relevanta för mig?</strong> Sedan hämtar det information därifrån, mest från de mest relevanta.</p>
      <p>Det är hela principen. Ingen fast minneslängd, ingen bestämd ordning — ordet avgör själv vad det behöver titta på, och kan lika gärna nå tio ord bakåt som ett.</p>
      <h3>Hur relevansen räknas ut</h3>
      <p>Varje ord är redan 16 tal, uträknade ur SMHI-texten med samma samförekomstmetod som i kapitel 24. Ord som förekommer i samma sällskap får liknande vektorer.</p>
      <p><code>X @ X.T</code> jämför alla ord med alla andra på en gång och ger en tabell av likheter. Multiplikationen med 4 gör skillnaderna tydligare innan nästa steg. <code>softmax</code> gör sedan om varje rad till andelar som summerar till 1 — så "hur lika är de" blir "hur stor del av min uppmärksamhet får var och en".</p>
      <p>Två rader kod. Det är samma uträkning som sitter i en riktig transformer.</p>
      <h3>Masken</h3>
      <p><code>np.triu</code> ger den övre triangeln av en matris. Genom att sätta den till ett stort negativt tal före <code>softmax</code> blir vikterna där noll — orden kan inte se framåt.</p>
      <p>Det är nödvändigt för en modell som ska <em>skriva</em>: den får inte se svaret innan den gissar nästa ord. Ska den i stället <em>förstå</em> en färdig text är masken onödig, och båda varianterna finns i verkliga modeller. Bilden visar dem sida vid sida.</p>
      <h3>Vad som saknas jämfört med en riktig modell</h3>
      <p>Här jämförs orden direkt med varandra. I en tränad transformer går varje ord först genom tre inlärda matriser och blir tre olika saker: en fråga, en nyckel och ett innehåll. Då kan modellen leta efter något mer specifikt än ren likhet — till exempel "vilket verb hör till mig" i stället för "vilket ord liknar mig".</p>
      <p>De matriserna kan inte tränas här. Det kräver bakåtpropagering, som behöver PyTorch eller liknande, och betydligt mer text än SMHI:s varningar. Det du ser är därför uppmärksamhet <strong>före träning</strong> — och träningens hela uppgift är att göra frågorna vassare än "vad liknar mig".</p>
      <p>Ingenting i uträkningen är påhittat. Vektorerna kommer ur texten, likheten är riktig, och softmax och masken är exakt som i en riktig modell.</p>
      <div class="uppgift"><strong>Uppgift:</strong> ändra <code>* 4</code> till <code>* 1</code> och sedan <code>* 20</code>. Låg skala ger nästan jämn uppmärksamhet, hög gör att varje ord tittar på ett enda annat — samma sorts reglage som temperaturen i kapitel 28. Byt sedan <code>E[:, :16]</code> mot 4 tal per ord och se hur mycket grövre mönstret blir.</div>`
  }
  ]
};
