/* Pytho — English texts.
   Loaded with a plain <script src>, which is the only method that works
   both from file:// and from a web server.

   Missing keys fall back to the Swedish base file, so this file can grow
   one section at a time without leaving anything blank. */
window.PYTHONLAB_SPRAK = window.PYTHONLAB_SPRAK || {};
window.PYTHONLAB_SPRAK.en = {
  kod: "en",
  namn: "English",
  html_lang: "en",
  titel: "Pytho",
  beskrivning: "Pytho is an interactive Python course that runs entirely in your browser. 29 chapters, from your first print statement to 3D graphics, machine learning and transformers.",

  ui: {
    flik_kod: "Code",
    flik_filer: "Files",
    visa_uppgift: "Show the exercise",
    sok_knapp: "Find/Replace",
    sok_tips: "Find and replace (Ctrl + F)",
    oppna_tips: "Open a file (Ctrl + O)",
    spara_tips: "Save (Ctrl + S)",
    spara_som_tips: "Save as (Ctrl + Shift + S)",
    kor_tips: "Run the program (Ctrl + Enter)",
    stoppa_tips: "Stop the program",
    aterstall_tips: "Restore the original code",
    ga_till_raden: "Go to this line",
    sok: "Find",
    ersatt: "Replace with",
    ersatt_en: "Replace",
    ersatt_alla: "All",
    ingen_traff: "no match",
    ersatta: "{antal} replaced",
    dop_om: "Rename",
    devfiler: "Developer files ({antal})",
    scene_demo: "# scene_demo.py — the scene module, which only exists in Pytho.\n#\n# Run this file, then drag with the mouse in the 3D scene tab.\n# Everything below runs; comment out what you do not want to see.\n\nimport scene\nimport math\n\n# ===== 1. Start =====\nscene.start()                       # creates the scene, always first\nscene.background(\"#0e1c33\")\nscene.ground(size=30, color=\"#1b3255\")\nscene.camera(0, 6, 16)              # where the camera stands\nscene.look_at(0, 1, 0)              # what it looks at\n\n# ===== 2. Basic shapes =====\n# Each one returns an object you can control.\ncube = scene.cube(-6, 1, 0, size=1.4, color=\"#ffc94a\")\nball = scene.sphere(-3, 1, 0, radius=0.7, color=\"#6ee7b7\")\ncrate = scene.box(0, 1, 0, width=2, height=1, depth=1, color=\"#8fb4ff\")\nroll = scene.cylinder(3, 1, 0, radius=0.5, height=2, color=\"#dfe8fa\")\nspike = scene.cone(6, 1, 0, radius=0.7, height=2, color=\"#ff7d6b\")\n\n# ===== 3. Methods on an object =====\ncube.spin(0.004, 0.008, 0)          # how much it turns per frame\nball.move(-3, 2, 0)                 # a new position\ncrate.rotate(0, 0.4, 0)             # turn to an angle, in radians\nroll.scale(1.3)\nspike.color(\"#e04b4b\")\n\n# ===== 4. Ready-made models =====\n# Same arguments for all of them: x, y, z, color, size\ncar = scene.car(-8, 0, 6, color=\"#ff7d6b\")\ntruck = scene.truck(-4, 0, 6)\nplane = scene.plane(0, 8, 6)\nrocket = scene.rocket(4, 0, 6)\ndog = scene.dog(8, 0, 6, size=0.8)\nbird = scene.bird(-8, 5, -6)\nfish = scene.fish(-4, 1, -6)\nhouse = scene.house(0, 0, -8)\nskyscraper = scene.skyscraper(5, 0, -8)\ntower = scene.tower(9, 0, -8)\ntree = scene.tree(-11, 0, -3, size=1.2)\n\n# The moving models each have a method that starts the motion.\ncar.drive(6)                        # the wheels turn, the car rolls forward\ntruck.drive(3)\nplane.fly(9)                        # the propeller spins\ndog.walk(2)                         # the legs move\nbird.flap(3)\nfish.swim(2)\nrocket.ignite(4)                    # the flame lights\n\n# Forward always means where the model is facing. For a circular path,\n# turn the model a little every frame — see section 7.\n\n# ===== 5. Data in the room =====\nbar = scene.bar(-10, -10, height=3, color=\"#6ee7b7\", width=0.5)\nbar.set_height(5)                   # change it afterwards\n\nmarker = scene.marker(0, 3, 0, color=\"#ffc94a\", size=1)\nline = scene.line(-5, 0.1, -5, 5, 0.1, -5, color=\"#8fb4ff\", thickness=0.05)\n\nsun = scene.sun(0, 14, -10, radius=1.2)\ncloud = scene.cloud(-6, 9, -4, size=1.5)\n\n# An outline from a list of (x, z) points\npoints = [(-2, -2), (2, -2), (2, 2), (-2, 2)]\nscene.outline(points, color=\"#8fb4ff\", thickness=0.08, y=0.06, closed=True)\n\n# ===== 6. Matplotlib on a surface =====\n# A figure becomes a texture on a panel or a screen in the room.\n#\n# import matplotlib.pyplot as plt\n# fig, ax = plt.subplots(figsize=(5, 3))\n# ax.plot([1, 2, 3], [2, 5, 3])\n# scene.chart_panel(0, 3, -12, width=6, height=3.4, figure=fig)\n# scene.chart_screen(0, 6, -14, width=12, height=6.5, figure=fig,\n#                    light=True, tilt=0.0, turn=0)\n\n# ===== 7. Animation =====\n# The function is called about 60 times a second with the time in seconds.\ndef update(t):\n    ball.move(-3, 1 + math.sin(t * 2) * 0.5, 0)\n    car.rotate(0, t * 0.7, 0)                     # drives in a circle\n    bird.rotate(0, -math.pi / 2 - t, 0)           # face where it is flying\n    bird.move(math.cos(t) * 7, 5 + math.sin(t * 2), math.sin(t) * 7)\n\nscene.every_frame(update)           # pass the function WITHOUT parentheses\n\n# scene.stop()                      # stops the animation\n# scene.reset()                     # back to the starting view\n# scene.fullscreen()                # fullscreen, Escape leaves it\n\n# ===== 8. The outline of Sweden =====\n# scene.sweden takes your own conversion from degrees to scene coordinates.\n#\n# def to_scene(lat, lon):\n#     return ((lon - 17.5) * 2.2, (lat - 62.5) * -2.2)\n#\n# scene.sweden(to_scene, color=\"#7fa4dd\", thickness=0.11, y=0.08, islands=True)\n# scene.in_sweden(59.3, 18.1)       # True if the point is inside the country\n\nprint(\"Done. Open the 3D scene tab.\")\nprint(\"Drag with the mouse to look around, scroll to fly.\")\nprint(\"The arrow keys fly like a drone: forward is wherever you are looking.\")\n",
    kapitelfiler: "Chapter files ({antal})",
    huvudfil: "start.py",
    visa_alla: "Show all {antal} files",
    visa_farre: "Show fewer",
    dev: "Developer mode",
    dev_info: "Hides the chapters and turns Pytho into a small development environment. Your code stays put.",
    tom_fil: "Clear file",
    filer_rubrik: "Files in your workspace",
    ny_fil: "+ New file",
    inga_filer: "No files yet. Everything you write lands here and can be imported.",
    ta_bort: "Delete",
    repl: "Type an expression and press Enter …",
    filtext: "<h3>Your files</h3><p>This file lives in your workspace and is saved in the browser. Run a program in any chapter and write <code>import {modul}</code> to use it.</p><p>Everything you write here survives a reload.</p>",
    felsakert_info: "A loop guard that lets the program be stopped and keeps it from freezing the page.",
    fragefalt: "Ask a question about the code or the chapter …",
    anslutning: "Connection",
    rensa_samtal: "Clear the chat",
    skicka: "Send",
    nytt_filnamn: "File name — leave it empty for an untitled name. The .py extension is added, and you import the file with import followed by the name without the extension.",
    aterstall: "Reset",
    oppna: "Open file",
    spara: "Save",
    spara_som: "Save as",
    kor: "Run",
    stoppa: "Stop",
    felsakert: "Failsafe mode",
    ai_stod: "AI assistant",
    om: "About Pytho",
    start: "Start",
    kapitel_rubrik: "Chapters",
    flik_kapitel: "Chapter",
    flik_utskrift: "Output",
    flik_scen: "3D scene",
    flik_ai: "AI assistant"
  },

  steg: {
    kalla: "Source code",
    tolk: "Parsing",
    kor: "Execution",
    resultat: "Result"
  },

  chip: {
    kapitel: "Summarise the chapter",
    kod: "Explain the code",
    markering: "Explain the selection",
    andra: "Change the code",
    nasta: "Next step",
  },
  konsol: {
    startar: "Python is being downloaded to your browser. The first time takes a few seconds.",
  },
  scen: {
    tom: "No scene running. Call <code>scene.start()</code> in a program and it will appear here.",
  },
  chip_dev: {
    kapitel: "Review this file",
    kod: "Explain the code",
    markering: "Explain the selection",
    andra: "Suggest a rewrite",
    nasta: "Write tests",
  },
  uppdrag_dev: {
    kapitel: "Review this file the way a colleague would. What is unclear, what could break, and what would you change first?",
    kod: "Go through the code and explain what each part does.",
    markering: "Explain the selected part of the code, and say whether anything in it could go wrong.",
    andra: "Suggest a rewrite of this code that is clearer or shorter without changing the behaviour. Show it.",
    nasta: "Write tests for this code using unittest. Cover the normal case and at least one edge case.",
  },
  ord: {
    tips: "Hint: ",
    kapitel_rubrik: "Chapter {nr} — {titel}",
    helskarm: "Fullscreen",
    avsluta_helskarm: "Exit fullscreen",
    stoppar: "Stopping …",
    rensa: "Clear output",
    aterstall_vy: "Reset view",
    stopp_loop: "Stops the program at the next pass through the loops",
    stopp_vantan: "Cancels waiting for an answer",
    stopp_inget: "This code has no loops and is not waiting for anything — reload the page if it hangs"
  },

  status: {
    hamtar_paket: "Fetching ",
    startar: "Starting Python …",
    hamtar: "Fetching Python from {kalla} …",
    kontroll: "Fetching packages …",
    redo: "Python is ready",
    misslyckades: "Python could not start"
  },

  ladd: {
    rubrik: "Starting Python …",
    text: "Preparing",
    not: "Python is being downloaded to your browser, about 10 MB. The first time takes a moment — after that it is cached and starts quickly.",
    hamtar: "Fetching Python",
    kontaktar: "Contacting {kalla}",
    laddar_ner: "Downloading …",
    av: "{gjort} of {totalt}",
    hamtat: "{gjort} downloaded",
    nedladdning_klar: "Download complete",
    startar: "Starting Python",
    packar: "Unpacking and starting the interpreter — the page may freeze briefly",
    nastan: "Almost done",
    forbereder: "Preparing Pytho",
    verktyg: "Connecting Pytho's tools",
    igen: "Trying again",
    byter: "Switching source",
    klart: "Done",
    redo: "Python is ready",
    misslyckades: "Python could not start",
    ingen_kalla: "None of the sources responded",
    ladda_om: "Reload the page and try again."
  },

  msg: {
    kor_markering: "Running the selection ({rader} lines) in the same namespace as the program.",
    ingen_webgl: "The 3D view cannot be shown: the browser gave no WebGL surface. This usually means hardware acceleration is switched off in the settings, or the graphics card is too old. The program keeps running and prints its result — only the picture is missing.",
    filfel: "Could not write out your files: ",
    arbetsyta_aterstalld: "Your workspace was restored — {antal} chapters and {filer} files of your own are still here.",
    syntaxfel: "Syntax error on line {rad}, character {kolumn}: {text}",
    hamtning_misslyckades: "could not fetch ",
    tidsgrans: "timed out: ",
    sparad_hamtade: "Saved as {namn} in your Downloads folder.",
    sparad_till: "Saved to {namn}.",
    oppnade: "Opened {namn} in {plats}.",
    paketfel: "Could not fetch a package: ",
    matplotlibfel: "Could not set up matplotlib: ",
    ingen_utskrift: "The program ran without printing anything. Use print(...) to see the result.",
    klart: "[finished in {ms} ms]",
    forsoker_hamta: "Trying to fetch Python from {kalla} …",
    gick_inte: "Failed: ",
    ingen_kalla: "None of the sources responded. Reload the page and try again. If that does not help, the download is blocked here — then it is time to install Python on your computer instead.",
    redo: "Python is ready. Pick a chapter on the left, or write something of your own and press Run.",
    ingen_3d: "The 3D engine could not be fetched. The 3D chapters will not work; everything else will.",
    felsakert_pa: "Failsafe mode on. The Stop button works and the program is halted automatically after 45 seconds.",
    felsakert_av: "Failsafe mode off. Code runs at full speed but cannot be stopped — an infinite loop will freeze the page and force a reload."
  },

  fraga: {
    ga_till_rad: "Go to line (1–{antal}):",
    dop_om: "New name for the file. The .py extension is added, and you import it with the new name.",
    namnet_upptaget: "There is already a file called {namn}.",
    ersatt_fil: "{namn} is already in your workspace. Replace it?",
    ej_importerbar: "{namn} cannot be imported — a module name may not start with a digit. Load it anyway?",
    tom_fil: "Clear {namn}? The contents will be lost.",
    nytt_filnamn: "What should the file be called?",
    ogiltigt_namn: "File names may only contain letters, digits, dots and hyphens.",
    aterstall: "Restore the original code for {plats}? Anything you wrote or loaded will be lost.",
    radera_fil: "Delete {namn}?",
    filnamn: "What should the file be called?"
  },

  chatt: {
    ny: "New chat. Ask a question about the code you have open.",
    nadde_inte: "Could not reach {url}. Are you running a local model? Ollama has to be started with OLLAMA_ORIGINS=\"*\" to let web pages in. A service on the internet may block calls from browsers (CORS).",
    ny_kapitel: "New chat for {plats}. Ask a question, or use the buttons above.",
    ingen_markering_rubrik: "Nothing selected",
    ingen_markering: "Select a piece of code in the editor above and that part will be explained.",
    tanker: "Thinking …",
    du_fragar: "You asked",
    felrubrik: "What does this error mean?",
    felknapp: "Ask the AI assistant about this error",
    startsidan: "Start page (no chapter selected)",
    kapitel: "Chapter {nr}: {titel}",
    kontext_markerat: "{plats}  ·  {rader} selected lines are included",
    kontext_allt: "{plats}  ·  the whole file is included",
    ansluten: "Connected",
    inte_ansluten: "Not connected",
    testar: "Testing …",
    aktiv: "Connected",
    kraver_nyckel: "This service requires an API key",
    kunde_inte: "Could not connect",
    andrat: "Settings changed — test again"
  },

  uppdrag: {
    fel_inledning: "I ran the program and got this error:",
    fel_rad: "The line marked >> is the one the error points at:",
    fel_fraga: "Explain: 1) what this kind of error means in general, 2) what is concretely wrong in this code, and 3) a hint about how I can fix it myself. Do not write the corrected code. If the error is due to a limitation of Pytho — packages, file access, networking or something absent from the browser’s Python — say so plainly and describe what does work instead.",
    kapitel: "Summarise this chapter in your own words. Put the most important thing first and bring out what the actual point is. Base it on the chapter text.",
    kod: "Go through the code in the editor and explain what each part does and why it is needed.",
    markering: "Explain the selected part of the code. What does it do, why does it look like that, and what would happen if it were removed?",
    andra: "I want to change the code but I am not sure how. First ask me what I want the program to do instead, then describe which syntax I need — without writing the whole solution.",
    nasta: "What is a good next step for understanding this more deeply? Suggest a concrete exercise that builds on the code I have."
  },

  feltips: {
    KeyboardInterrupt: "You stopped the program. Press Run to start it again.",
    SyntaxError: "A spelling mistake in the language itself. Check that every bracket and quote has a partner, and that there is a colon (:) after if, for, while and def.",
    IndentationError: "The indentation does not line up. Lines that belong together under an if, for or def need exactly four spaces in front of them, and the same number as each other.",
    NameError: "Python does not recognise the name. Either it is spelled differently in two places, or the variable has not been created yet — or an import is missing.",
    TypeError: "You are mixing two data types that do not go together, for example text and numbers. Try int(...) or str(...) to convert.",
    ValueError: "The value did not fit. For example: int(\"hello\") does not work, because \"hello\" is not a number.",
    ZeroDivisionError: "You cannot divide by zero. Not even a computer can.",
    IndexError: "You are asking for a position in the list that does not exist. Remember that the first position is 0 and the last is len(list) - 1.",
    KeyError: "That key is not in your dictionary. Try .get(key, fallback) if it might be missing.",
    AttributeError: "That type has no such method. Check the spelling, and that the variable contains what you think it does.",
    RecursionError: "A function is calling itself without ever reaching the base case. Check that the argument really shrinks towards the stop condition.",
    ModuleNotFoundError: "That module is not available in the browser's Python. The standard library works (random, math, time, string, json), but pygame and similar do not."
  },

  ai_kurs: {
    rubrik: "COURSE STRUCTURE (so you can refer backwards and forwards)",
    not: "Each chapter has its own chat. The user may have asked about other things in other chapters — you only remember this conversation, but you are welcome to refer to what earlier chapters covered."
  },

  ai_nulage: {
    avkortad: "… (the code is truncated)",
    rubrik: "THE USER'S CURRENT STATE",
    oppet: "Currently open: ",
    kapiteltext: "The chapter's explanatory text:",
    ingen: "(no text)",
    kod: "The code in the editor:",
    markering: "The user has selected this part:"
  },

  py: {
    ingen_3d: "The 3D engine is still loading — wait a few seconds and run again.",
    cors: "Could not reach {url}. Either the server is down, or it does not allow browsers to fetch data from other sites (CORS). Original error: {fel}",
    statuskod: "The server responded with status code {kod}",
    avbrot_hamtning: "The download was cancelled.",
    stopp_svar: "The program was stopped while waiting for an answer.",
    avbrot_input: "Input was cancelled.",
    stopp_fil: "The program was stopped while waiting for a file.",
    ingen_fil: "No file was selected.",
    stoppades: "The program was stopped.",
    tidsgrans: "The program has run for {sek} seconds and was stopped automatically. Is it an infinite loop? Turn off Failsafe mode if the code is meant to take longer.",
    saknas: "The file {namn} does not exist. Did you create it with open() first?",
    tom_lista: "The list is empty — there is nothing to save.",
    laddade_ner: "Downloaded {namn} ({tecken} characters)",
    laste_in: "Read {fran} -> {till} ({tecken} characters)",
    inga_filer: "No files yet. Create one with open(..., \"w\")."
  },

  ai_roll_dev: "You are an experienced Python developer sitting alongside and helping out.\n\nTone:\n- Write in English, briefly and concretely. Straight to the point.\n- Talk as you would to a colleague. No cheering, no praise.\n- If you need mathematics, write it as LaTeX between $ … $ or $$ … $$.\n\nHow you help:\n- Give direct answers. If code is needed, write the code — this is not a course.\n- Point out real problems: edge cases, error handling, names that mislead.\n- Suggest the simplest thing that works, not the most general.\n- Say when something is wrong, even if that was not what was asked.\n- If you are unsure, say so rather than guessing.\n\n{fakta}",
  ai_roll: "You are a knowledgeable and patient Python tutor. The user may be a complete beginner, an experienced programmer who is new to Python, or somewhere in between — and may be any age.\n\nTone and level:\n- Write in English, plainly and to the point. No more than 150 words unless more is needed.\n- Address the user as a capable adult. No cheering, no pet names, no lavish praise. Write as you would to a colleague.\n- Read the level from the questions and the code, and adjust as you go. If the question is basic, explain from the ground up without being childish. If it is advanced, skip the obvious.\n- Use correct technical terms, but explain them the first time they appear.\n- If you need mathematics: write it as LaTeX between $ … $ inline or $$ … $$ on its own line. The chat renders exponents, subscripts, fractions, roots, Greek letters and common operators. Keep expressions simple — matrices and multi-line layouts are not rendered.\n- Comparisons and examples should make sense at any age. Avoid analogies drawn from school or from a child's daily life.\n\nHow you tutor:\n- Give explanations and hints, not finished solutions. Do not write the whole program.\n- When there is a bug: point out WHERE the fault is and EXPLAIN why, but let the user write the correction.\n- Short code examples of one or two lines are good for showing a principle.\n- If the user explicitly asks for a finished solution, briefly explain why you would rather guide them — then give enough structure that they can get there themselves.\n- Feel free to end with a question or a suggestion that leads onwards.\n\n{fakta}",

  ai_fakta: "The user is working in Pytho, an interactive Python course in the browser.\nThe code runs in Pytho: Python via Pyodide inside a web browser.\nThis is what applies in this environment:\n- open() writes to an in-memory file system, not to the hard drive. Files disappear on reload.\n- Python cannot read files from the computer. Use data.open_file() or data.open_csv(), which show a file picker.\n- data.download(filename) downloads a file to the computer.\n- Networking only works through data.fetch_json/fetch_text/fetch_csv, and only against servers that allow CORS.\n- No pip install. Available packages: numpy, pandas, matplotlib, scikit-learn, xgboost, nltk, sqlite3 and the standard library.\n- nltk.download() does NOT work (no network from Python). The Snowball stemmer works without downloads.\n- pygame, tkinter, requests and GPU/CUDA do not work.\n- 3D is done with the scene module (scene.cube, scene.bar, scene.panel, scene.chart_panel and others).\n- input() works and asks in the output pane.\n- An infinite loop freezes the page; you have to reload.\nNever suggest anything from the list of things that do not work.",

  startkod: [
    "# Welcome to Pytho!",
    "# Press Run (or Ctrl + Enter) and see what happens.",
    "",
    "print(\"Hello world!\")",
    ""
  ]
};

/* Del 2 av den engelska språkfilen: startsida, dialoger, kapitel 1-8. */
window.PYTHONLAB_SPRAK.en.start = `
          <p class="valkomst">Welcome to Pytho</p>
          <p class="ingress">A real Python interpreter running inside your browser. No installation, no account — the code runs on your own computer. 29 chapters take you from your first print statement to how a language model works on the inside.</p>

          <div class="snabbstart">
            <strong>Get going in a minute</strong>
            <ol>
              <li>Pick <strong>Chapter 1</strong> from the list on the left.</li>
              <li>Read the explanation down here and the code in the editor above.</li>
              <li>Press <kbd>Run</kbd> or <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</li>
              <li>Change something in the code and run it again. That is how you learn.</li>
            </ol>
          </div>

          <h3>What you will build</h3>
          <div class="delar">
            <div class="del-kort">
              <h4>Foundations</h4>
              <span class="spann">Chapters 1–5</span>
              <p>Printing, variables and data types, asking the user, conditions and loops. Everything else rests on this.</p>
            </div>
            <div class="del-kort">
              <h4>Collections</h4>
              <span class="spann">Chapters 6–9</span>
              <p>Lists, text, dictionaries — and finally files, CSV and a real database with sqlite3.</p>
            </div>
            <div class="del-kort">
              <h4>Building structure</h4>
              <span class="spann">Chapters 10–13</span>
              <p>Your own functions, error handling that does not crash, ready-made modules, and classes that keep data and behaviour together.</p>
            </div>
            <div class="del-kort">
              <h4>Algorithms</h4>
              <span class="spann">Chapters 14–17</span>
              <p>Sorting, binary search and recursion. You also measure why a clever recipe beats a brute-force one a thousand times over.</p>
            </div>
            <div class="del-kort">
              <h4>Projects</h4>
              <span class="spann">Chapters 18–21</span>
              <p>A guessing game, then 3D graphics: spinning cubes, vehicles and animals, a small world — and a Minecraft-style voxel landscape of nine thousand cubes.</p>
            </div>
            <div class="del-kort">
              <h4>Machine learning</h4>
              <span class="spann">Chapters 22–25</span>
              <p>Train a model that finds the rules itself, turn text into numbers, build your own embeddings and fetch open data from the web.</p>
            </div>
            <div class="del-kort">
              <h4>Final project</h4>
              <span class="spann">Chapters 26–29</span>
              <p>Sweden's weather in 3D from live SMHI data, models you can see, your own language model — and the mechanism behind transformers.</p>
            </div>
          </div>

          <div class="tva">
            <div>
              <h3>Saving your work</h3>
              <p><kbd>Save</kbd> writes the code to a real <code>.py</code> file on your computer and <kbd>Open file</kbd> brings it back. You can also drag a file straight into the editor.</p>
              <p>In Chrome and Edge it saves back to the same place every time. In Firefox and Safari it lands in Downloads — same result, one extra step.</p>
              <h3>AI assistant</h3>
              <p>The switch at the top right connects a language model that explains code and error messages, and that you can chat with about the chapter you are working on. It gives hints and explanations rather than finished solutions — so you keep hold of your own code. Ollama and LM Studio run locally without a key.</p>
            </div>
            <div>
              <h3>Worth knowing</h3>
              <p>Files you create with <code>open()</code> live inside the browser and disappear when you reload. To get something out for real, use <code>data.download()</code>.</p>
              <p>A loop that spins forever freezes the page, because Python and the web page share one engine. Reload if that happens — and save before running anything with <code>while</code> in it.</p>
              <p>Some chapters fetch packages or data from the web the first time. The download then shows up in Output.</p>
            </div>
          </div>

          <h3>When you outgrow Pytho</h3>
          <p>Almost everything here works unchanged in a normal Python on your computer. Download it from python.org and write in Thonny or VS Code — then you get real files, a stop button that works, and every library there is. It is a ten-minute install, and chapter 12 tells you what does not come along.</p>
`;

window.PYTHONLAB_SPRAK.en.om = `
    <h2 class="dialog-rubrik" id="om-rubrik">About Pytho</h2>
    <p class="dialog-ingress" data-version></p>
    <p class="om-text">Pytho is developed by Gabriel Westman.</p>
    <p class="om-text">If you are interested in using the application for education or teaching — get in touch via
      <a href="https://www.linkedin.com/in/gabriel-westman-08a708206/"
         target="_blank" rel="noopener">LinkedIn</a>.</p>
    <p class="om-copyright">Copyright Gabriel Westman 2026</p>
    <h3 class="om-rubrik">Keyboard shortcuts</h3>
    <table class="kortkommandon"><tr><td><kbd>Ctrl + Enter</kbd></td><td>Run the program</td></tr><tr><td><kbd>Ctrl + Enter</kbd></td><td>Run the selection in the same namespace</td></tr><tr><td><kbd>Tab / Shift + Tab</kbd></td><td>Indent or remove indentation</td></tr><tr><td><kbd>Ctrl + F</kbd> / <kbd>Ctrl + H</kbd></td><td>Find and replace</td></tr><tr><td><kbd>Ctrl + G</kbd></td><td>Go to line</td></tr><tr><td><kbd>Ctrl + S</kbd></td><td>Save to disk</td></tr><tr><td><kbd>Ctrl + Shift + S</kbd></td><td>Save as</td></tr><tr><td><kbd>Ctrl + O</kbd></td><td>Open a file</td></tr><tr><td><kbd>R</kbd></td><td>Reset the 3D view</td></tr><tr><td><kbd>Escape</kbd></td><td>Close the dialog or cancel input</td></tr></table>
    <div class="dialog-fot">
      <span class="ai-status">Pytho runs locally in your browser</span>
      <button class="knapp kor" id="om-stang">Close</button>
    </div>
`;

window.PYTHONLAB_SPRAK.en.ai_dialog = `
    <h2 class="dialog-rubrik" id="ai-dialog-rubrik">Connect the AI helper</h2>
    <p class="dialog-ingress">Pick a language model to work against. The connection has to work before the helper is switched on.</p>

    <div class="ai-rad">
      <label for="ai-leverantor">Service</label>
      <select id="ai-leverantor">
        <option value="ollama">Ollama (local, on your computer)</option>
        <option value="lmstudio">LM Studio (local)</option>
        <option value="mistral">Mistral (France)</option>
        <option value="openai-kompatibel">Other OpenAI-compatible</option>
        <option value="anthropic">Anthropic</option>
        <option value="openai">OpenAI</option>
      </select>
    </div>
    <div class="ai-rad">
      <label for="ai-url">Address</label>
      <input type="text" id="ai-url" spellcheck="false">
    </div>
    <div class="ai-rad">
      <label for="ai-modell">Model</label>
      <input type="text" id="ai-modell" spellcheck="false">
    </div>
    <div class="ai-rad" id="ai-nyckel-rad">
      <label for="ai-nyckel">API key</label>
      <input type="password" id="ai-nyckel" spellcheck="false" autocomplete="off"
             placeholder="kept in memory only, never on disk">
    </div>

    <p class="ai-not">The key is never saved — type it again if you reload the page.
      Ollama and LM Studio run locally and need no key.</p>

    <p class="dialog-fel" id="ai-dialog-fel" hidden></p>

    <div class="dialog-fot">
      <span class="ai-status" id="ai-status">Not connected</span>
      <button class="knapp" id="ai-avbryt">Cancel</button>
      <button class="knapp kor" id="ai-testa">Connect</button>
    </div>
`;

/* Engelska kapitel 1-4. */
window.PYTHONLAB_SPRAK.en.kapitel = [
  {
    del: "Foundations", titel: "Printing", fil: "ch01_printing.py",
    kod: [
      "# Everything after a # is a comment.",
      "# Python does not read it — it is there for humans.",
      "",
      "print(\"Hi! My name is Python.\")",
      "print(\"I do exactly what you tell me to.\")",
      "",
      "print(\"A\", \"B\", \"C\")            # commas put a space between",
      "print(\"A\", \"B\", \"C\", sep=\"\")    # sep decides what goes between",
      "print(\"Loading\", end=\"\")         # end decides what comes last",
      "print(\"...done!\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>What a program is</h3>
      <p>A program is a list of instructions the computer carries out from top to bottom, one line at a time. It never guesses and never skips anything. That is why programming can be learned: the computer does precisely what you wrote, even when it is wrong.</p>
      <h3>The syntax of print</h3>
      <p><code>print</code> is the name of the function. The parentheses after it mean "run this now", and what goes inside is called an <em>argument</em> — what you pass along.</p>
      <ul>
        <li><code>"Hi"</code> in quotes is a <strong>string</strong>, that is, text. The quotes are not part of the text; they mark where it starts and ends.</li>
        <li>You may use either <code>"..."</code> or <code>'...'</code>, as long as you use the same at both ends.</li>
        <li>Several arguments are separated by commas. <code>print</code> then puts a space between them automatically.</li>
      </ul>
      <h3>Named arguments</h3>
      <p><code>sep=""</code> and <code>end=""</code> are <em>named arguments</em>: extra settings you give with an equals sign. <code>sep</code> is what ends up <em>between</em> the items, <code>end</code> is what comes <em>after</em> everything. Normally <code>end</code> is a line break, which is why each <code>print</code> starts on a new line.</p>
      <div class="fallgrop"><strong>Pitfall:</strong> forget a quote or a parenthesis and you get <code>SyntaxError</code>. Python then only tells you where it <em>noticed</em> the problem, which is often the line after the one that is actually wrong. Always look one line up as well. The colours help: if you have left a closing quote out, the rest of the program is coloured as text, and that shows you where it began.</div>
      <div class="uppgift"><strong>Exercise:</strong> write four lines introducing yourself — name, age, favourite thing and a greeting. Then swap two lines around and run it again. The output swaps too: the order in the code <em>is</em> the program.</div>`
  },
  {
    del: "Foundations", titel: "Variables and data types", fil: "ch02_variables.py",
    kod: [
      "# A variable is a box with a label on it.",
      "name = \"Alex\"          # str   — text",
      "age = 12               # int   — whole number",
      "height = 1.55          # float — decimal number",
      "likes_pizza = True     # bool  — true or false",
      "",
      "print(name, \"is\", age, \"years old and\", height, \"m tall.\")",
      "",
      "# type() tells you what kind of data is in the box",
      "print(type(name), type(age), type(height), type(likes_pizza))",
      "",
      "# f-string: put f before the quote and drop variables into {}",
      "print(f\"{name} turns {age + 1} next year.\")",
      "",
      "# Same symbol, different meaning:",
      "print(3 + 4)           # 7   — arithmetic",
      "print(\"3\" + \"4\")       # 34  — the texts are glued together",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Assignment</h3>
      <p>The equals sign in <code>age = 12</code> does not mean "is equal to" as in mathematics. It means <strong>put what is on the right into the box on the left</strong>. That is why <code>count = count + 1</code> works, which would be nonsense in maths.</p>
      <h3>The four basic types</h3>
      <ul>
        <li><code>str</code> — text, always in quotes.</li>
        <li><code>int</code> — whole numbers, no decimals.</li>
        <li><code>float</code> — decimal numbers. Python writes a decimal point, not a comma: <code>1.55</code>.</li>
        <li><code>bool</code> — only two possible values, <code>True</code> and <code>False</code>. Capital letter, always.</li>
      </ul>
      <p>The type decides what you can do. <code>+</code> between two numbers adds, <code>+</code> between two strings glues, and <code>+</code> between a string and a number gives <code>TypeError</code> — Python refuses to guess which one you meant.</p>
      <h3>Rules for variable names</h3>
      <p>Letters, digits and underscores, but never a digit first. No spaces: write <code>max_score</code>, not <code>max score</code>. Upper and lower case are different things — <code>Name</code> and <code>name</code> are two separate boxes, and that is a common source of <code>NameError</code>.</p>
      <p>Choose names that say what the thing is. <code>x</code> says nothing, <code>number_of_guesses</code> says everything. You are writing code that your future self has to be able to read.</p>
      <h3>The colours in the editor</h3><p>A development tool colours code by what the parts <em>are</em>, and that is not decoration but help with reading. Here variables, function names, keywords such as <code>if</code> and <code>def</code>, text, numbers and comments each get their own colour.</p><p>You notice the value when something is wrong. Write <code>Print</code> with a capital letter and it does not get the blue colour that built-in functions have, so the mistake shows before you run anything. The colours belong to the tool, not to Python — VS Code and Thonny colour the same code in their own ways, but on the same principles.</p><div class="uppgift"><strong>Exercise:</strong> create variables for a film's title, length in minutes and your rating (1–5). Print a tidy line with an f-string. Then work out the length in hours with <code>minutes / 60</code> — what type is the answer?</div>`
  },
  {
    del: "Foundations", titel: "Asking the user", fil: "ch03_input.py",
    kod: [
      "# input() pauses the program and waits for an answer.",
      "name = input(\"What is your name? \")",
      "print(f\"Hi {name}!\")",
      "",
      "# The answer from input is ALWAYS a string — even when you type digits.",
      "answer = input(\"How old are you? \")",
      "print(type(answer))        # str",
      "",
      "age = int(answer)          # turn the text into a whole number",
      "print(f\"In 10 years you will be {age + 10}.\")",
      "",
      "# It can be done in one step:",
      "height = float(input(\"How tall are you in metres? \"))",
      "print(f\"You are {height * 100} cm tall.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>input pauses the program</h3>
      <p><code>input()</code> stops the program, shows the text you gave it, and waits until the user answers. The answer becomes the function's <em>return value</em> — what comes back and what you catch in a variable.</p>
      <p>In Pytho the question appears as a small field in the output pane. In a normal Python on your computer it is written in the terminal instead, but the code is identical.</p>
      <h3>Type conversion</h3>
      <p>Since the answer is always a <code>str</code>, you have to convert it before you can calculate:</p>
      <ul>
        <li><code>int("42")</code> gives the whole number 42.</li>
        <li><code>float("1.55")</code> gives the decimal number 1.55.</li>
        <li><code>str(42)</code> goes the other way, to the text <code>"42"</code>.</li>
      </ul>
      <p>Read <code>int(input("..."))</code> from the inside out: first <code>input</code> runs, then its answer is passed on into <code>int</code>. Functions may be nested inside each other as deeply as you like.</p>
      <div class="fallgrop"><strong>Pitfall:</strong> <code>int("hello")</code> gives <code>ValueError</code>, and so does <code>int("3.5")</code> — a whole number means a whole number. In the chapter on error handling you will learn to catch that instead of letting the program crash.</div>
      <div class="uppgift"><strong>Exercise:</strong> build a calculator that asks for two numbers and prints the sum, difference and product. Then try it with letters instead of digits and read the error message carefully.</div>`
  },
  {
    del: "Foundations", titel: "Conditions", fil: "ch04_conditions.py",
    kod: [
      "temperature = 17",
      "",
      "if temperature > 25:",
      "    print(\"Go for a swim!\")",
      "elif temperature > 15:",
      "    print(\"Bring a jumper.\")",
      "else:",
      "    print(\"Hat on.\")",
      "",
      "# Comparisons always give True or False",
      "print(5 > 3, 5 == 5, 5 != 5, 5 <= 4)",
      "",
      "# and, or and not combine conditions",
      "age = 12",
      "has_ticket = True",
      "",
      "if age >= 11 and has_ticket:",
      "    print(\"Come on in.\")",
      "",
      "if not has_ticket:",
      "    print(\"Buy a ticket first.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Indentation is syntax</h3>
      <p>In most languages curly braces show what belongs together. Python uses <strong>indentation</strong>, and it is not a matter of style but part of the language. Four spaces in means "this only happens if the line above was true".</p>
      <p>The line that opens a block always ends with a colon. That goes for <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>try</code> and <code>class</code>.</p><p>Four spaces is the Python standard. You do not have to press the space bar four times — <kbd>Tab</kbd> makes the indent for you, and <kbd>Shift + Tab</kbd> removes it again. Select several lines first and they all move together.</p>
      <h3>if, elif and else</h3>
      <p>This is the most important distinction in the whole chapter: <strong><code>if</code> starts a new question, <code>elif</code> hangs on to the previous one.</strong></p>
      <p>In a chain of <code>if / elif / else</code>, Python tests from the top down and stops at the <em>first</em> true condition. The rest are skipped, even if they would also have been true. Write two separate <code>if</code> statements and both questions get asked, and both can fire.</p>
      <p>The order therefore decides the result. Put <code>&gt; 15</code> before <code>&gt; 25</code> and 30 degrees gets caught by the first one, so "Go for a swim!" is never reached. Always test the narrowest condition first.</p>
      <h3>Comparisons</h3>
      <p><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code> compare size, <code>==</code> asks whether two things are equal, <code>!=</code> whether they differ.</p>
      <div class="fallgrop"><strong>Pitfall:</strong> <code>=</code> and <code>==</code> are entirely different. One equals sign puts something in a box, two ask a question. <code>if x = 5:</code> is a syntax error.</div>
      <div class="uppgift"><strong>Exercise:</strong> make a grading program that asks for a score (0–100) and answers A, C or F. Then add a threshold for E and check that the conditions are in the right order.</div>`
  }
];

/* Engelska kapitel 5-8. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Foundations", titel: "Loops", fil: "ch05_loops.py",
    kod: [
      "# for: when you know how many rounds",
      "for i in range(5):",
      "    print(\"Round number\", i)",
      "",
      "print(\"---\")",
      "",
      "# range(start, stop, step) — stop is NOT included",
      "for number in range(2, 11, 2):",
      "    print(number, end=\" \")",
      "print()",
      "",
      "# while: when you do not know how many rounds",
      "countdown = 3",
      "while countdown > 0:",
      "    print(countdown)",
      "    countdown = countdown - 1",
      "print(\"Go!\")",
      "",
      "# break jumps out, continue skips the rest of this round",
      "for number in range(10):",
      "    if number == 3:",
      "        continue",
      "    if number == 6:",
      "        break",
      "    print(number, end=\" \")",
      "print()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Two kinds of loop</h3>
      <p><code>for</code> walks through something that already exists — a range of numbers, a list, a piece of text — and stops by itself. <code>while</code> keeps going as long as a condition is true, and could in theory spin forever.</p>
      <p>Rule of thumb: if you know the number of rounds in advance, use <code>for</code>. If it depends on what happens along the way, use <code>while</code>.</p>
      <h3>range</h3>
      <ul>
        <li><code>range(5)</code> gives 0, 1, 2, 3, 4 — five numbers, but they start at zero.</li>
        <li><code>range(2, 11)</code> gives 2 to 10. <strong>The end value is never included.</strong></li>
        <li><code>range(2, 11, 2)</code> gives 2, 4, 6, 8, 10 — the third number is the step size.</li>
      </ul>
      <p>Counting from zero and excluding the end value are two things that confuse everybody at first. They become logical later: <code>range(0, 5)</code> contains exactly five numbers, which keeps the arithmetic simple.</p>
      <h3>The loop variable</h3>
      <p><code>for i in range(5)</code> creates a variable <code>i</code> that gets a new value each round. It can be called anything — <code>for week in range(52)</code> reads far better than <code>i</code> when the thing really is weeks.</p>
      <h3>break and continue</h3>
      <p><code>break</code> abandons the loop entirely and carries on after it. <code>continue</code> skips the rest of this round and goes straight to the next. Both always apply to the <em>innermost</em> loop they sit in.</p>
      <div class="fallgrop"><strong>Infinite loop:</strong> forget <code>countdown = countdown - 1</code> and the condition stays true forever, freezing the page. Reload. If you want to try something risky, build in a safety brake: a counter that does <code>break</code> after 1000 rounds.</div>
      <div class="uppgift"><strong>Exercise:</strong> print the seven times table with a for loop. Then write a while loop that keeps asking for numbers until the user types 0.</div>`
  },
  {
    del: "Collections", titel: "Lists", fil: "ch06_lists.py",
    kod: [
      "friends = [\"Sam\", \"Noor\", \"Elis\"]",
      "",
      "print(friends[0])         # the first — counting starts at 0",
      "print(friends[-1])        # the last",
      "print(len(friends))       # how many",
      "",
      "friends.append(\"Maya\")    # add at the end",
      "friends.insert(1, \"Kim\")  # insert at position 1",
      "friends.remove(\"Sam\")     # remove a particular value",
      "print(friends)",
      "",
      "for friend in friends:    # loop over the contents",
      "    print(\"Hi\", friend)",
      "",
      "numbers = [4, 17, 2, 9]",
      "print(sum(numbers), min(numbers), max(numbers))",
      "numbers.sort()",
      "print(numbers)",
      "",
      "print(\"Noor\" in friends)  # is it there? True or False",
      "print(friends[1:3])       # a slice of the list",
      ""
    ].join("\n"),
    forklaring: `
      <h3>A box with numbered compartments</h3>
      <p>A list is written with square brackets and holds several values in a fixed order. Every position has an <strong>index</strong>, and the first index is <code>0</code>. A list of four things therefore has indices 0, 1, 2 and 3 — there is no index 4.</p>
      <p>Negative indices count from the end, so <code>[-1]</code> is always the last element. Handy when you do not know how long the list is.</p>
      <h3>Methods</h3>
      <p><code>friends.append("Maya")</code> is a new kind of call: the dot means "run this function <em>on</em> this thing". Such functions are called <strong>methods</strong>, and which ones exist depends on the type. Lists have <code>append</code>, <code>insert</code>, <code>remove</code>, <code>sort</code>, <code>reverse</code>, <code>pop</code> and <code>count</code>.</p>
      <p>Note that <code>sort()</code> changes the list in place and returns nothing. Write <code>numbers = numbers.sort()</code> and you get <code>None</code> and lose the whole list — a classic mistake.</p>
      <h3>Slices</h3>
      <p><code>friends[1:3]</code> gives a new list with the elements from index 1 up to <em>but not including</em> 3. Same rule as <code>range</code>: the end value is exclusive. <code>[:2]</code> means from the start, <code>[2:]</code> means to the end.</p>
      <div class="fallgrop"><strong>Pitfall:</strong> never remove elements from a list while looping over it. The list shrinks under the loop's feet and it skips things. Build a new list instead.</div>
      <div class="uppgift"><strong>Exercise:</strong> make a list of ten random numbers (<code>random.randint</code>), print the average, then build a new list containing only the numbers above that average.</div>`
  },
  {
    del: "Collections", titel: "Strings", fil: "ch07_strings.py",
    kod: [
      "text = \"Python is fun\"",
      "",
      "print(len(text))          # number of characters, spaces count",
      "print(text[0], text[-1])  # strings have indices just like lists",
      "print(text[0:6])          # a slice",
      "",
      "print(text.upper())",
      "print(text.lower())",
      "print(text.replace(\"fun\", \"logical\"))",
      "print(text.split())       # splits into a list at the spaces",
      "",
      "answer = \"  YES  \"",
      "print(answer.strip().lower())   # trim spaces, lower the capitals",
      "",
      "# Build text from parts",
      "words = [\"never\", \"give\", \"up\"]",
      "print(\"-\".join(words))",
      "",
      "# Go through it character by character",
      "for character in \"abc\":",
      "    print(character, end=\".\")",
      "print()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Text is a collection too</h3>
      <p>A string behaves in many ways like a list of characters: it has a length, indices, slices and can be looped over. The difference is that strings are <strong>immutable</strong>. <code>text[0] = "X"</code> does not work. Methods like <code>upper()</code> therefore do not change the original but <em>return a new string</em> — if you want to keep the result you have to catch it in a variable.</p>
      <h3>Methods you will use often</h3>
      <ul>
        <li><code>strip()</code> removes spaces and line breaks at the start and end. Almost always the right thing to run on whatever the user typed.</li>
        <li><code>lower()</code> makes everything lower case, so <code>"YES"</code>, <code>"Yes"</code> and <code>"yes"</code> can be compared as equal.</li>
        <li><code>split()</code> divides a text into a list. With no argument it splits at spaces, with <code>split(",")</code> at commas.</li>
        <li><code>join()</code> does the opposite: glues a list into a string, with whatever you chose in between.</li>
        <li><code>replace(old, new)</code> swaps every occurrence.</li>
      </ul>
      <h3>Chaining</h3>
      <p><code>answer.strip().lower()</code> runs the methods in turn: first the text is trimmed, then the letters are lowered on the result. Read left to right.</p>
      <div class="uppgift"><strong>Exercise:</strong> write a program that asks for a sentence and reports the number of characters, the number of words, and the sentence backwards. You get backwards with the slice <code>text[::-1]</code> — the step of −1 means "go the other way".</div>`
  },
  {
    del: "Collections", titel: "Dictionary", fil: "ch08_dictionary.py",
    kod: [
      "# A dictionary pairs a key with a value.",
      "student = {",
      "    \"name\": \"Elias\",",
      "    \"age\": 12,",
      "    \"subjects\": [\"maths\", \"art\"]",
      "}",
      "",
      "print(student[\"name\"])",
      "print(student.get(\"grade\", \"unknown\"))   # safe lookup with a fallback",
      "",
      "student[\"grade\"] = \"A\"     # add",
      "student[\"age\"] = 13        # change",
      "",
      "for key, value in student.items():",
      "    print(key, \"->\", value)",
      "",
      "# Counting occurrences — the dictionary's speciality",
      "text = \"banana\"",
      "counts = {}",
      "for character in text:",
      "    counts[character] = counts.get(character, 0) + 1",
      "print(counts)",
      ""
    ].join("\n"),
    forklaring: `
      <h3>When numbering is not enough</h3>
      <p>A list finds things by <em>position</em>. A dictionary finds them by <strong>name</strong>. It is written with curly braces, and each entry is a pair: <code>key: value</code>.</p>
      <p>That makes the code readable. <code>student["name"]</code> says what you are fetching, whereas <code>student[0]</code> forces you to remember what position zero meant.</p>
      <h3>Fetching safely</h3>
      <p><code>student["grade"]</code> on a key that does not exist gives <code>KeyError</code> and crashes the program. <code>student.get("grade", "unknown")</code> gives the fallback value instead. That is why the counter at the bottom works: <code>counts.get(character, 0) + 1</code> means "the old count, or zero if we have not seen this character before, plus one".</p>
      <h3>Looping</h3>
      <ul>
        <li><code>for k in student:</code> goes over the keys.</li>
        <li><code>for v in student.values():</code> goes over the values.</li>
        <li><code>for k, v in student.items():</code> gives both at once — two variables in the loop, one for each.</li>
      </ul>
      <h3>Rules</h3>
      <p>Keys must be unique and immutable — strings and numbers work, lists do not. Values can be anything, including lists and other dictionaries. That is how real data structures are built: a list of dictionaries is in practice a table.</p>
      <div class="uppgift"><strong>Exercise:</strong> build a phone book where you can add names and numbers, look up a name, and list every entry. Use a <code>while</code> loop with a menu.</div>`
  }
);

/* Engelska kapitel 9-12. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Collections", titel: "Files and databases", fil: "ch09_files.py",
    kod: [
      "import csv",
      "import json",
      "import sqlite3",
      "import data",
      "",
      "# ===== 1. Writing and reading text =====",
      "# \"w\" = write. If the file already exists it is overwritten!",
      "with open(\"note.txt\", \"w\") as file:",
      "    file.write(\"First line\\n\")",
      "    file.write(\"Second line\\n\")",
      "",
      "with open(\"note.txt\", \"a\") as file:     # \"a\" = append at the end",
      "    file.write(\"Added later\\n\")",
      "",
      "with open(\"note.txt\") as file:          # \"r\" = read is the default",
      "    for line_number, line in enumerate(file, 1):",
      "        print(line_number, line.strip())",
      "print()",
      "",
      "# ===== 2. JSON: save lists and dictionaries as they are =====",
      "animals = [",
      "    {\"name\": \"Karo\", \"species\": \"dog\", \"weight\": 24.5, \"age\": 3},",
      "    {\"name\": \"Misty\", \"species\": \"cat\", \"weight\": 4.2, \"age\": 7},",
      "    {\"name\": \"Bruno\", \"species\": \"dog\", \"weight\": 31.0, \"age\": 5},",
      "    {\"name\": \"Sooty\", \"species\": \"cat\", \"weight\": 5.1, \"age\": 2},",
      "]",
      "",
      "with open(\"animals.json\", \"w\") as file:",
      "    json.dump(animals, file, indent=2, ensure_ascii=False)",
      "",
      "with open(\"animals.json\") as file:",
      "    back = json.load(file)",
      "",
      "print(\"JSON keeps the types:\", type(back[0][\"weight\"]))",
      "print(\"First entry:\", back[0])",
      "print()",
      "",
      "# ===== 3. CSV: one row per record, opens in Excel =====",
      "columns = [\"name\", \"species\", \"weight\", \"age\"]",
      "with open(\"animals.csv\", \"w\", newline=\"\") as file:",
      "    writer = csv.DictWriter(file, fieldnames=columns)",
      "    writer.writeheader()",
      "    writer.writerows(animals)",
      "",
      "with open(\"animals.csv\") as file:",
      "    print(file.read())",
      "",
      "with open(\"animals.csv\") as file:",
      "    records = list(csv.DictReader(file))",
      "",
      "# NOTE: everything read from a CSV is TEXT — convert before you calculate",
      "print(\"CSV gives back:\", type(records[0][\"weight\"]))",
      "weights = [float(r[\"weight\"]) for r in records]",
      "print(f\"Average weight: {sum(weights) / len(weights):.1f} kg\")",
      "print()",
      "",
      "# ===== 4. sqlite3: a real database =====",
      "connection = sqlite3.connect(\"zoo.db\")",
      "cursor = connection.cursor()",
      "",
      "cursor.execute(\"DROP TABLE IF EXISTS animals\")",
      "cursor.execute(\"\"\"",
      "    CREATE TABLE animals (",
      "        name    TEXT,",
      "        species TEXT,",
      "        weight  REAL,",
      "        age     INTEGER",
      "    )",
      "\"\"\")",
      "",
      "# The question marks are filled in by the database — never glue text yourself",
      "for a in animals:",
      "    cursor.execute(",
      "        \"INSERT INTO animals VALUES (?, ?, ?, ?)\",",
      "        (a[\"name\"], a[\"species\"], a[\"weight\"], a[\"age\"])",
      "    )",
      "connection.commit()        # without commit nothing is saved",
      "",
      "# Let the database do the work instead of a for loop",
      "cursor.execute(\"SELECT name, weight FROM animals WHERE species = ? ORDER BY weight DESC\", (\"dog\",))",
      "print(\"Dogs, heaviest first:\")",
      "for name, weight in cursor.fetchall():",
      "    print(f\"   {name:<8} {weight} kg\")",
      "",
      "cursor.execute(\"SELECT species, COUNT(*), AVG(weight) FROM animals GROUP BY species\")",
      "print(\"Summary per species:\")",
      "for species, count, average in cursor.fetchall():",
      "    print(f\"   {species:<6} {count} of them, average {average:.1f} kg\")",
      "",
      "connection.close()",
      "print()",
      "",
      "# ===== 5. Out of and into Pytho =====",
      "print(\"Files in Pytho's file system:\")",
      "data.list_files()",
      "print()",
      "",
      "# Send them out to your real computer",
      "data.download(\"animals.csv\")    # works for any file",
      "data.download(\"animals.json\")",
      "",
      "# Bring one back — the file picker opens, point at animals.csv",
      "# (uncomment the lines below when you want to try it)",
      "# records_again = data.open_csv()",
      "# print(\"Read back\", len(records_again), \"records\")",
      "# print(records_again[0])",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Saving means remembering between runs</h3>
      <p>Everything you have done so far disappears when the program ends. Variables live in memory, and memory is emptied. A file stays — and that is the difference between a calculator and a program that keeps track of something.</p>
      <h3>open and with</h3>
      <p><code>open("name.txt", "mode")</code> opens a file. The modes are <code>"r"</code> to read (the default), <code>"w"</code> to write, and <code>"a"</code> to append at the end.</p>
      <div class="fallgrop"><strong>Pitfall:</strong> <code>"w"</code> erases everything that was in the file, without asking. If you want to keep the old contents, use <code>"a"</code>.</div>
      <p><code>with</code> is a safety device: the file is closed automatically when the block ends, even if something goes wrong on the way. Forget to close and what you wrote may stay in a buffer and never reach the disk. Always use <code>with</code>.</p>
      <p>Line breaks do not appear on their own — hence <code>\\n</code> at the end of each <code>write</code>. And when you read lines the line break comes along, which is why <code>.strip()</code> is used when printing.</p>
      <h3>Three formats, three purposes</h3>
      <p>Now that you know lists and dictionaries, the choice of format makes sense, because it comes down to which structure you want to preserve.</p>
      <ul>
        <li><strong>Text file</strong> — just lines. Simplest, but you have to interpret the contents yourself.</li>
        <li><strong>JSON</strong> — saves lists and dictionaries exactly as they look in Python, with the types intact. <code>json.dump</code> writes, <code>json.load</code> reads back. A number is still a number afterwards.</li>
        <li><strong>CSV</strong> — a table. Opens in Excel and in practically every program there is, which is its great strength.</li>
      </ul>
      <p><code>indent=2</code> makes the JSON file readable for humans, and <code>ensure_ascii=False</code> means accented characters are written as themselves rather than as codes.</p>
      <div class="fallgrop"><strong>Important:</strong> everything read from a CSV file is <strong>text</strong>, just as from <code>input()</code>. <code>record["weight"]</code> is the string <code>"24.5"</code>, not the number. To calculate you must run <code>float()</code> first. JSON does not have that problem — that is the whole difference between the formats.</div>
      <h3>csv.DictReader and dictionaries</h3>
      <p><code>DictReader</code> gives back a <strong>list of dictionaries</strong> — one per row, with the column headers as keys. Those are exactly the two collections you learned in chapters 6 and 8, and that is why this chapter comes now: you already have the tools to work with the result.</p>
      <h3>sqlite3 — when CSV is not enough</h3>
      <p>CSV works well up to a few thousand rows. Beyond that, or if you search and sort often, you need a real database. <code>sqlite3</code> ships with Python, needs no installation, and stores everything in a single file.</p>
      <p>Three concepts: the <strong>connection</strong> is the link to the database file, the <strong>cursor</strong> is what you send queries through, and <strong>commit</strong> is what actually saves. Forget <code>commit()</code> and everything you wrote is gone.</p>
      <p>The query language is called SQL and is a small language of its own: <code>CREATE TABLE</code> creates, <code>INSERT</code> puts in, <code>SELECT</code> fetches. The good part is that the database does the work for you. <code>WHERE species = 'dog' ORDER BY weight DESC</code> replaces a loop with an if statement and a sort — and on a million rows the database is invariably faster than your own code.</p>
      <p><code>GROUP BY</code> is even clearer: it divides the rows into groups and calculates on each group separately. Writing that yourself takes a dictionary, a loop and some thought.</p>
      <div class="fallgrop"><strong>The question marks are not decoration.</strong> Write <code>execute("... WHERE species = ?", (species,))</code> and let the database fill in the value. Glue the text together yourself with <code>+</code> and you open the hole known as SQL injection, where someone can type text that turns into commands. It is one of the most common security flaws there is, and the habit of always using question marks is the protection.</div>
      <h3>Two file systems — and it matters that you keep them apart</h3>
      <p>This is what confuses people most, so read slowly.</p>
      <p><strong>The lab's file system</strong> lives inside the browser. This is where <code>open()</code> writes. From Python's point of view it looks exactly like a real hard drive — same code, same functions — but none of it shows up in Explorer or Finder. The files stay as long as the tab is open, between runs, and disappear when you reload the page.</p>
      <p><strong>Your actual hard drive</strong> is never reached by Python. A web page is not allowed to read or write in your file system at will — the same protection as CORS, and it exists so that a page you visit cannot rummage through your documents.</p>
      <p>Two bridges are therefore needed between the worlds, and neither of them is Python writing to disk:</p>
      <ul>
        <li><code>data.download("animals.csv")</code> reads the file out of Pytho and hands the contents to the browser, which performs an ordinary download. The same as clicking a download link.</li>
        <li><code>data.open_file()</code> opens a file picker. The file <em>you</em> point at is copied into Pytho's file system and can then be read with ordinary <code>open()</code>. Your active choice is what grants permission — the program cannot choose for you.</li>
      </ul>
      <p>There are shortcuts: <code>data.open_csv()</code> gives you a list of dictionaries directly, and <code>data.open_json()</code> gives back what was saved. <code>data.list_files()</code> shows what is in Pytho right now.</p>
      <p>It also means you can take in <strong>any CSV at all</strong> — an export from Excel, downloaded statistics, a file from school — and analyse it with the code in this chapter.</p>
      <h3>On a real computer</h3>
      <p>There is only one file system there. <code>open()</code> writes straight to the hard drive, files stay forever, and the database survives between runs. None of the <code>data</code> functions are needed — they exist precisely to compensate for the browser's restrictions. All the other code in this chapter works unchanged.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> because files live on between runs, old contents can linger and confuse you. Run something with <code>"a"</code> twice and the file grows. <code>data.list_files()</code> shows what is actually there, and reloading the page starts from empty.</div>
      <div class="uppgift"><strong>Exercise:</strong> build a diary in sqlite3. One function adds a date and a piece of text, another fetches every entry, and a third searches for a word with <code>WHERE text LIKE ?</code> and the pattern <code>"%word%"</code>. Then export the whole diary to CSV and download it — and next time you open Pytho, read it back with <code>data.open_csv()</code> and refill the database. Then you have a diary that actually survives.</div>`
  },
  {
    del: "Building structure", titel: "Functions", fil: "ch10_functions.py",
    kod: [
      "def greet(name):",
      "    return f\"Hey {name}!\"",
      "",
      "print(greet(\"Kim\"))",
      "print(greet(\"Robin\"))",
      "",
      "def area(width, height=10):    # height has a default value",
      "    return width * height",
      "",
      "print(area(4, 6))",
      "print(area(4))                 # height becomes 10",
      "",
      "def is_even(number):",
      "    return number % 2 == 0     # returns True or False",
      "",
      "for n in range(1, 6):",
      "    if is_even(n):",
      "        print(n, \"is even\")",
      "",
      "def show(text):",
      "    print(\">>\", text)          # prints but returns nothing",
      "",
      "result = show(\"hello\")",
      "print(result)                  # None",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Your own command button</h3>
      <p><code>def</code> defines a function. The line ends with a colon and the body is indented, exactly as with <code>if</code> and <code>for</code>.</p>
      <p>Defining is not running. The code inside only happens when you <em>call</em> the function with parentheses: <code>greet("Kim")</code>. The definition must come before the call in the file.</p>
      <h3>Parameters and arguments</h3>
      <p><code>name</code> in <code>def greet(name)</code> is a <strong>parameter</strong> — an empty slot. <code>"Kim"</code> in the call is an <strong>argument</strong> — what fills the slot. The parameter only exists inside the function.</p>
      <p><code>height=10</code> gives a default value, which makes the argument optional. Parameters with defaults must come last.</p>
      <h3>return</h3>
      <p><code>return</code> sends a value back and ends the function immediately — code after <code>return</code> never runs. A function without <code>return</code> returns <code>None</code>, which is Python's word for "nothing".</p>
      <p>Keep <em>printing</em> and <em>returning</em> apart. <code>print</code> shows something to a human. <code>return</code> hands a value back to the rest of the program, which can then compute with it. Beginners use <code>print</code> where <code>return</code> is needed, and then the result cannot be used.</p>
      <h3>Why functions</h3>
      <p>Write once, use many times. Fix in one place instead of seven. And above all: a function with a good name makes the code readable — <code>if is_prime(n):</code> explains itself.</p>
      <div class="uppgift"><strong>Exercise:</strong> turn your prime test into a function <code>is_prime(number)</code> that returns <code>True</code> or <code>False</code>. Then use it in a loop to list every prime below 100.</div>`
  },
  {
    del: "Building structure", titel: "Catching errors", fil: "ch11_errors.py",
    kod: [
      "# Without protection the program crashes on bad input.",
      "try:",
      "    age = int(input(\"How old are you? \"))",
      "    print(f\"In 5 years you will be {age + 5}.\")",
      "except ValueError:",
      "    print(\"That was not a whole number.\")",
      "",
      "# Ask again and again until the answer is good enough",
      "while True:",
      "    try:",
      "        number = int(input(\"Type a whole number: \"))",
      "        break",
      "    except ValueError:",
      "        print(\"Try again.\")",
      "",
      "print(\"You typed\", number)",
      "",
      "# Different errors can be caught separately",
      "try:",
      "    print(10 / 0)",
      "except ZeroDivisionError:",
      "    print(\"Cannot divide by zero.\")",
      "",
      "# Check it yourself with if — and stop with raise",
      "def square_root(number):",
      "    if number < 0:",
      "        raise ValueError(\"negative numbers do not work\")",
      "    return number ** 0.5",
      "",
      "print(square_root(16))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Errors are not unusual</h3>
      <p>As soon as a program meets a human it will get rubbish in it. A good program does not crash then — it says so and asks again.</p>
      <h3>try and except</h3>
      <p>The code in the <code>try</code> block runs as normal. If an error occurs, <code>try</code> is abandoned immediately and Python jumps to <code>except</code>. If nothing goes wrong, <code>except</code> is skipped entirely.</p>
      <p>Always write out which kind of error you are catching. <code>except ValueError:</code> catches exactly a failed conversion. A bare <code>except:</code> catches <em>everything</em>, including your own typos, and then you are hiding bugs from yourself.</p>
      <h3>The error types you have already met</h3>
      <ul>
        <li><code>ValueError</code> — right type, wrong contents: <code>int("hello")</code>.</li>
        <li><code>TypeError</code> — wrong type: <code>"3" + 4</code>.</li>
        <li><code>ZeroDivisionError</code> — division by zero.</li>
        <li><code>IndexError</code> and <code>KeyError</code> — the position or the key does not exist.</li>
        <li><code>NameError</code> — the name does not exist, usually a typo.</li>
      </ul>
      <h3>raise</h3>
      <p>You can also <em>create</em> errors yourself. <code>raise ValueError("...")</code> stops the function and signals that something was wrong. Better than returning a made-up value that the caller might miss.</p>
      <div class="uppgift"><strong>Exercise:</strong> write the function <code>ask_number(text, lowest, highest)</code> that keeps asking until the answer is a whole number inside the range, and returns it. Then use it in the guessing game.</div>`
  },
  {
    del: "Building structure", titel: "Modules", fil: "ch12_modules.py",
    kod: [
      "import random",
      "import math",
      "import time",
      "",
      "print(random.randint(1, 6))              # whole number, both ends included",
      "print(random.choice([\"rock\", \"paper\", \"scissors\"]))",
      "cards = [1, 2, 3, 4, 5]",
      "random.shuffle(cards)                    # shuffles the list in place",
      "print(cards)",
      "",
      "print(math.sqrt(144))                    # square root",
      "print(math.isqrt(144))                   # integer root, exact",
      "print(math.pi)",
      "print(math.floor(3.7), math.ceil(3.2))   # round down and up",
      "",
      "# from ... import fetches just one thing",
      "from math import sqrt",
      "print(sqrt(81))",
      "",
      "start = time.time()",
      "total = sum(range(1000000))",
      "print(\"Took\", round(time.time() - start, 3), \"seconds\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Ready-made toolboxes</h3>
      <p>A module is a collection of finished code someone else wrote. Python has hundreds built in — you do not have to invent the square root yourself.</p>
      <p><code>import math</code> fetches the whole module, and you reach the contents with a dot: <code>math.sqrt(9)</code>. <code>from math import sqrt</code> fetches just one function, which you then use without the prefix. The first is clearer in larger programs, because you can see where the function came from.</p>
      <h3>Three modules worth knowing</h3>
      <ul>
        <li><code>random</code> — <code>randint(a, b)</code>, <code>choice(list)</code>, <code>shuffle(list)</code>, <code>random()</code> for a decimal between 0 and 1.</li>
        <li><code>math</code> — <code>sqrt</code>, <code>isqrt</code>, <code>floor</code>, <code>ceil</code>, <code>pi</code>, <code>gcd</code>.</li>
        <li><code>time</code> — <code>time()</code> gives seconds since 1970, handy for measuring how long your code takes.</li>
      </ul>
      <h3>What works here in Pytho</h3>
      <p>Pytho runs Python inside the browser. The standard modules are there, but anything that touches the outside world is not: you cannot open files on the hard drive from Python code, cannot browse the web, and cannot use graphics libraries such as <code>tkinter</code> or <code>pygame</code>. <code>time.sleep()</code> works but freezes the page while it runs — keep it short.</p>
      <p>If you want to go there later you need Python installed on your computer. Then the whole world opens up: games, graphics, files, the internet.</p>
      <div class="uppgift"><strong>Exercise:</strong> build rock–paper–scissors against the computer. Use <code>random.choice</code>, keep the score in variables, and play best of five.</div>`
  }
);

/* Engelska kapitel 13-16. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Building structure", titel: "Classes", fil: "ch13_classes.py",
    kod: [
      "class Dog:",
      "    def __init__(self, name, age):",
      "        self.name = name          # properties are stored on the object",
      "        self.age = age",
      "        self.fullness = 0",
      "",
      "    def bark(self):",
      "        return f\"{self.name} says woof!\"",
      "",
      "    def eat(self, amount):",
      "        self.fullness = self.fullness + amount",
      "        if self.fullness > 10:",
      "            return f\"{self.name} is stuffed.\"",
      "        return f\"{self.name} wants more.\"",
      "",
      "# Create objects from the class",
      "karo = Dog(\"Karo\", 3)",
      "fido = Dog(\"Fido\", 7)",
      "",
      "print(karo.bark())",
      "print(fido.bark())",
      "print(karo.eat(4))",
      "print(karo.eat(8))",
      "print(fido.fullness)     # Fido is unaffected by Karo's meal",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Draw one blueprint, build many copies</h3>
      <p>A <strong>class</strong> is a blueprint. An <strong>object</strong> is a thing built from that blueprint. <code>Dog</code> is the blueprint; <code>karo</code> and <code>fido</code> are two dogs with their own separate set of properties.</p>
      <p>Class names are written with a capital letter. It is only a convention, but everybody follows it.</p>
      <h3>__init__ and self</h3>
      <p><code>__init__</code> runs automatically when you create an object with <code>Dog("Karo", 3)</code>. It fills the new object with its starting values.</p>
      <p><code>self</code> is the object itself. Every method gets it as its first parameter, but you never pass it in the call — Python fills it in for you. <code>self.name</code> means "this object's name", as opposed to an ordinary variable that disappears when the method finishes.</p>
      <p>The double underscores mark a name that has a special meaning to Python. There are others: <code>__str__</code> decides what <code>print(karo)</code> shows.</p>
      <h3>When it is worth the trouble</h3>
      <p>When several things belong together and behave the same way but with different data. A player with health, score and inventory. An account with a balance and a history. You could use dictionaries instead, but then the data and the functions live in separate places — the class holds them together.</p>
      <div class="uppgift"><strong>Exercise:</strong> write a class <code>Account</code> with the methods <code>deposit</code>, <code>withdraw</code> and <code>balance</code>. Make <code>withdraw</code> refuse if there is not enough money. Create two accounts and check that they do not affect each other.</div>`
  },
  {
    del: "Algorithms", titel: "Sorting and searching", fil: "ch14_sort_search.py",
    kod: [
      "# Bubble sort — easy to understand, slow in practice",
      "def bubble_sort(values):",
      "    numbers = values.copy()",
      "    for round_number in range(len(numbers)):",
      "        for i in range(len(numbers) - 1 - round_number):",
      "            if numbers[i] > numbers[i + 1]:",
      "                numbers[i], numbers[i + 1] = numbers[i + 1], numbers[i]   # swap",
      "    return numbers",
      "",
      "print(bubble_sort([5, 1, 4, 2, 8]))",
      "",
      "# Linear search — check everything until you find it",
      "def search_straight_through(values, target):",
      "    for i in range(len(values)):",
      "        if values[i] == target:",
      "            return i",
      "    return -1",
      "",
      "# Binary search — needs a sorted list, halves every time",
      "def binary_search(values, target):",
      "    low = 0",
      "    high = len(values) - 1",
      "    while low <= high:",
      "        middle = (low + high) // 2",
      "        if values[middle] == target:",
      "            return middle",
      "        elif values[middle] < target:",
      "            low = middle + 1",
      "        else:",
      "            high = middle - 1",
      "    return -1",
      "",
      "sorted_values = list(range(0, 200, 2))",
      "print(binary_search(sorted_values, 144))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Algorithm = recipe</h3>
      <p>From here on you are not just writing code that works, but code that works <em>well</em>. The same task can be solved in several ways, and the difference in speed can be a thousandfold.</p>
      <h3>Bubble sort</h3>
      <p>Walk through the list, compare neighbour with neighbour, swap them if they are in the wrong order. Repeat until nothing needs swapping. The largest number "bubbles" to the end on the first pass, the second largest on the second — hence <code>- round_number</code> in the inner loop, that part is already done.</p>
      <p><code>numbers[i], numbers[i+1] = numbers[i+1], numbers[i]</code> swaps two values in one go. Most languages need a third variable; Python does it in one line.</p>
      <h3>Binary search</h3>
      <p>Think of how you look up a word in a dictionary: you open it in the middle, see whether the word is before or after, and immediately forget half the book. Then you do it again.</p>
      <p><code>//</code> is integer division — <code>7 // 2</code> is 3, not 3.5. Indices have to be whole numbers, so that is exactly what we want.</p>
      <h3>How much faster?</h3>
      <p>Searching straight through a million records takes, at worst, a million checks. Binary search manages it in twenty, because every step halves what remains. That is why sorting is worth the trouble: sorted data can be searched in an entirely different way.</p>
      <p>The price is that the list must be sorted first — and Python's built-in <code>sorted()</code> is always faster than your own bubble sort. The point of writing it yourself is to understand what happens inside.</p>
      <div class="uppgift"><strong>Exercise:</strong> put a counter in both search functions that counts the comparisons. Search for the same number in a list of 10,000 elements and compare the figures.</div>`
  },
  {
    del: "Algorithms", titel: "Recursion", fil: "ch15_recursion.py",
    kod: [
      "# A function that calls itself",
      "def factorial(n):",
      "    if n <= 1:          # base case — this is where it stops",
      "        return 1",
      "    return n * factorial(n - 1)",
      "",
      "print(factorial(5))     # 5*4*3*2*1 = 120",
      "",
      "def countdown(n):",
      "    if n == 0:",
      "        print(\"Go!\")",
      "        return",
      "    print(n)",
      "    countdown(n - 1)",
      "",
      "countdown(3)",
      "",
      "# Fibonacci — elegant but slow",
      "def fib(n):",
      "    if n < 2:",
      "        return n",
      "    return fib(n - 1) + fib(n - 2)",
      "",
      "for i in range(10):",
      "    print(fib(i), end=\" \")",
      "print()",
      "",
      "# The same thing with a loop — far faster",
      "def fib_fast(n):",
      "    a, b = 0, 1",
      "    for _ in range(n):",
      "        a, b = b, a + b",
      "    return a",
      "",
      "print(fib_fast(40))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>A function that calls itself</h3>
      <p>Recursion solves a problem by solving a smaller version of the same problem. The factorial of 5 is 5 times the factorial of 4, which is 4 times the factorial of 3, and so on.</p>
      <h3>Two parts are always required</h3>
      <ul>
        <li><strong>The base case</strong> — the situation where the function answers directly without calling itself. Without it, it never ends.</li>
        <li><strong>The recursive step</strong> — the call with a <em>smaller</em> problem, one that is guaranteed to approach the base case.</li>
      </ul>
      <p>Forget the base case and you get <code>RecursionError: maximum recursion depth exceeded</code>. Python counts how deep you have gone and stops at around a thousand levels. That is actually kinder than an infinite loop, which just freezes.</p>
      <h3>What happens in memory</h3>
      <p>Every call gets its own set of variables and is placed on a <em>stack</em>. <code>factorial(5)</code> cannot answer until <code>factorial(4)</code> has answered, which is waiting for <code>factorial(3)</code>… When the base case is reached everything unwinds and is multiplied together on the way back up.</p>
      <h3>Beautiful is not always fast</h3>
      <p>The recursive Fibonacci recomputes the same values over and over — <code>fib(30)</code> takes more than a million calls. The loop version handles <code>fib(40)</code> in an instant. Recursion is the right tool for tree-shaped problems, such as folder structures or searching through every move in a game. For simple repetition a loop is better.</p>
      <p>Note also <code>a, b = b, a + b</code>. The right-hand side is evaluated completely first, then both are assigned at once — no risk of <code>a</code> changing too early.</p>
      <div class="uppgift"><strong>Exercise:</strong> write a recursive function that reverses a string, and one that counts how many times a character appears in a text. Use no loops.</div>`
  },
  {
    del: "Algorithms", titel: "Fast algorithms", fil: "ch16_fast_algorithms.py",
    kod: [
      "import time",
      "import math",
      "",
      "def is_prime(n):",
      "    if n < 2:",
      "        return False",
      "    for c in range(2, math.isqrt(n) + 1):",
      "        if n % c == 0:",
      "            return False",
      "    return True",
      "",
      "def sieve(limit):",
      "    prime = [True] * (limit + 1)",
      "    prime[0] = False",
      "    prime[1] = False",
      "    for number in range(2, math.isqrt(limit) + 1):",
      "        if prime[number]:",
      "            for multiple in range(number * number, limit + 1, number):",
      "                prime[multiple] = False",
      "    return [i for i in range(limit + 1) if prime[i]]",
      "",
      "LIMIT = 50000",
      "",
      "start = time.time()",
      "a = [n for n in range(LIMIT) if is_prime(n)]",
      "time_a = time.time() - start",
      "",
      "start = time.time()",
      "b = sieve(LIMIT)",
      "time_b = time.time() - start",
      "",
      "print(\"Number of primes:\", len(a), len(b))",
      "print(f\"Testing every number: {time_a:.3f} s\")",
      "print(f\"Sieve of Eratosthenes: {time_b:.3f} s\")",
      "print(f\"The sieve is {time_a / time_b:.1f} times faster\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Two ways of thinking</h3>
      <p>The first method asks about every individual number: do you have a divisor? The sieve turns it around — instead of hunting for divisors it <em>strikes out</em> all the multiples. Whatever is left must be prime.</p>
      <h3>How the sieve works</h3>
      <p>Start with a list where every number is assumed to be prime. Take the first unstruck number, 2, and strike out 4, 6, 8, 10… Move to 3, strike out 9, 12, 15… Carry on. What was never struck out is prime.</p>
      <p><code>[True] * (limit + 1)</code> creates a list full of <code>True</code>. The inner loop starts at <code>number * number</code>, not <code>number * 2</code> — every smaller multiple has already been struck out by a smaller prime. The outer loop only has to go up to the square root, for the same reason as in the prime test.</p>
      <h3>Measuring instead of guessing</h3>
      <p><code>time.time()</code> before and after, then subtract. That is how you answer "is this fast?" — not with a gut feeling.</p>
      <p><code>f"{time_a:.3f}"</code> is formatting inside an f-string: a colon followed by <code>.3f</code> means three decimals. There are more: <code>{x:>8}</code> right-aligns in eight characters, <code>{x:,}</code> adds thousands separators.</p>
      <h3>Why the gap grows</h3>
      <p>Testing every number costs roughly the square root of n of work per number. The sieve does a small fixed amount of work per struck-out number. At a limit of 1000 the difference is barely noticeable, at 50,000 it is obvious, at a million it is dramatic. That is the heart of algorithm analysis: what matters is not how fast something is <em>now</em>, but how it <em>grows</em>.</p>
      <div class="uppgift"><strong>Exercise:</strong> run the measurement with limits of 5000, 20000 and 100000. Write down the ratio each time. What happens to it as the limit grows?</div>`
  }
);

/* Engelska kapitel 17-19. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Algorithms", titel: "List comprehensions", fil: "ch17_comprehensions.py",
    kod: [
      "numbers = [4, 17, 2, 9, 30, 11]",
      "",
      "# The long way",
      "doubled = []",
      "for n in numbers:",
      "    doubled.append(n * 2)",
      "print(doubled)",
      "",
      "# The same thing on one line",
      "print([n * 2 for n in numbers])",
      "",
      "# With a filter",
      "print([n for n in numbers if n > 10])",
      "",
      "# enumerate gives both the position and the value",
      "for i, n in enumerate(numbers):",
      "    print(i, \"->\", n)",
      "",
      "# zip walks through two lists side by side",
      "names = [\"Ada\", \"Linus\", \"Grace\"]",
      "scores = [12, 7, 19]",
      "for name, score in zip(names, scores):",
      "    print(f\"{name}: {score}\")",
      "",
      "# sorted with a key",
      "students = list(zip(names, scores))",
      "print(sorted(students, key=lambda pair: pair[1], reverse=True))",
      "",
      "# any and all",
      "print(any(n > 25 for n in numbers))",
      "print(all(n > 0 for n in numbers))",
      ""
    ].join("\n"),
    forklaring: `
      <h3>List comprehensions</h3>
      <p><code>[n * 2 for n in numbers]</code> does exactly the same as four lines with <code>append</code>, but on one. Read it from the outside in: the square brackets say "build a list", <code>for n in numbers</code> says what you are going through, and <code>n * 2</code> says what goes into the new list.</p>
      <p>With an <code>if</code> at the end you filter: only elements where the condition is true come along. You can combine both.</p>
      <p>Use them when they make the code <em>clearer</em>. A comprehension with two loops and three conditions is harder to read than the ordinary version — and then the ordinary version is better.</p>
      <h3>enumerate</h3>
      <p>For when you need both the position and the value. The alternative <code>for i in range(len(list))</code> works but is clumsier, and is often taken as a sign that you have not met enumerate yet.</p>
      <h3>zip</h3>
      <p>Walks through several lists at once and pairs them up element by element. It stops when the shortest one runs out.</p>
      <h3>key and lambda</h3>
      <p><code>sorted(list, key=...)</code> sorts by something other than the value itself. <code>key</code> wants a function that takes an element and returns the thing to compare.</p>
      <p><code>lambda pair: pair[1]</code> is a nameless miniature function: "take <code>pair</code>, hand back <code>pair[1]</code>". The same as a two-line <code>def</code>, but when the function is only used right here there is no point naming it. <code>reverse=True</code> flips the order.</p>
      <h3>any and all</h3>
      <p><code>any</code> is true if at least one element satisfies the condition, <code>all</code> if every one does. They read almost like English and often replace a whole loop with a flag variable.</p>
      <div class="uppgift"><strong>Exercise:</strong> rewrite your prime test using <code>all(...)</code> instead of a loop with a flag. Then sort a list of names by length rather than alphabetically.</div>`
  },
  {
    del: "Projects", titel: "Build a game", fil: "ch18_game.py",
    kod: [
      "import random",
      "",
      "def ask_number(text, lowest, highest):",
      "    while True:",
      "        try:",
      "            answer = int(input(text))",
      "        except ValueError:",
      "            print(\"Type a whole number.\")",
      "            continue",
      "        if lowest <= answer <= highest:",
      "            return answer",
      "        print(f\"Must be between {lowest} and {highest}.\")",
      "",
      "def play(limit, max_guesses):",
      "    secret = random.randint(1, limit)",
      "    for round_number in range(1, max_guesses + 1):",
      "        left = max_guesses - round_number + 1",
      "        guess = ask_number(f\"Guess ({left} left): \", 1, limit)",
      "        if guess == secret:",
      "            return round_number",
      "        if guess < secret:",
      "            print(\"Too low!\")",
      "        else:",
      "            print(\"Too high!\")",
      "    print(\"Out of guesses. The number was\", secret)",
      "    return None",
      "",
      "results = []",
      "while True:",
      "    score = play(100, 7)",
      "    if score:",
      "        print(f\"Correct in {score} guesses!\")",
      "        results.append(score)",
      "    if input(\"Play again? (y/n) \").strip().lower() != \"y\":",
      "        break",
      "",
      "if results:",
      "    print(f\"You won {len(results)} rounds, best: {min(results)}\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Everything at once</h3>
      <p>This program uses every single thing from the earlier chapters: functions with return values, error handling, loops, lists, f-strings, conditions and randomness. That is what real code looks like — not one technique at a time but all of them together.</p>
      <h3>Read it from the top</h3>
      <p><code>ask_number</code> has one job: never hand back anything other than a valid number. <code>continue</code> jumps back to the start of the loop when the answer could not be interpreted.</p>
      <p><code>play</code> returns either the number of guesses or <code>None</code>. The caller can then tell a win from a loss with a simple <code>if score:</code> — <code>None</code> counts as false.</p>
      <p>Note <code>lowest &lt;= answer &lt;= highest</code>. Python allows chained comparisons just like mathematics, which few languages do.</p>
      <h3>Why seven guesses are enough</h3>
      <p>Always guess in the middle of what remains, and the range halves every time: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. That is binary search, the same algorithm as in chapter 14, except that now you are the algorithm.</p>
      <h3>From here</h3>
      <p>Build on it: a high score in a dictionary, difficulty levels, a two-player mode. Or something else entirely — a calculator, a quiz, a text adventure, a number game.</p>
      <p>When you want graphics, saving files from the Python code itself, or libraries such as pygame, it is time to install Python on your computer. Download it from python.org and use Thonny or VS Code. Everything you have learned here works unchanged there.</p>
      <div class="uppgift"><strong>Exercise:</strong> add difficulty levels — easy is 1–50 with 8 guesses, hard is 1–500 with 9. Let the player choose from a menu, and store the best result per level in a dictionary.</div>`
  },
  {
    del: "Projects", titel: "3D graphics", fil: "ch19_three_dimensions.py",
    kod: [
      "import scene",
      "import math",
      "",
      "scene.start()",
      "scene.background(\"#0e1c33\")",
      "scene.camera(0, 3, 9)",
      "",
      "# Every shape returns an object you can control",
      "middle = scene.cube(0, 0, 0, size=1.4, color=\"#ffc94a\")",
      "middle.spin(0.004, 0.008, 0)",
      "",
      "floor = scene.box(0, -2, 0, width=14, height=0.2, depth=14, color=\"#1b3255\")",
      "",
      "# Build a ring of spheres using mathematics",
      "planets = []",
      "for i in range(8):",
      "    angle = i * 2 * math.pi / 8",
      "    x = math.cos(angle) * 4",
      "    z = math.sin(angle) * 4",
      "    sphere = scene.sphere(x, 0, z, radius=0.45, color=\"#6ee7b7\")",
      "    planets.append((sphere, angle))",
      "",
      "# This function runs 60 times a second",
      "def update(t):",
      "    for sphere, start in planets:",
      "        angle = start + t",
      "        sphere.move(math.cos(angle) * 4, math.sin(t * 2 + start) * 0.8, math.sin(angle) * 4)",
      "",
      "scene.every_frame(update)",
      "",
      "print(\"Drag with the mouse to look around, scroll to fly back and forth.\")",
      "print(\"The arrow keys fly like a drone: forward is wherever you are looking.\")",
      "print(\"Page Up and Page Down raise and lower you. R resets the view.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Python driving JavaScript</h3>
      <p>Pytho runs Python inside a web page, and on that same page sits <strong>three.js</strong> — a JavaScript library for 3D graphics. The <code>scene</code> module is a bridge between the two: you write Python, and the 3D engine draws.</p>
      <p>This is not a toy version. It is the same three.js used on real websites, and the same Python that ran the prime sieve. Two languages talking to each other.</p>
      <h3>The coordinate system</h3>
      <p>Three axes: <code>x</code> goes right, <code>y</code> goes up, <code>z</code> comes towards you. The point <code>(0, 0, 0)</code> is the middle. The camera sits at <code>(0, 3, 9)</code>, slightly raised and a little back, looking at the centre.</p>
      <h3>The shapes and their methods</h3>
      <p><code>scene.cube</code>, <code>scene.sphere</code>, <code>scene.box</code>, <code>scene.cylinder</code> and <code>scene.cone</code> each create a shape and <em>return an object</em>. Just as with classes in chapter 13, you use a dot to control it:</p>
      <ul>
        <li><code>.move(x, y, z)</code> — a new position.</li>
        <li><code>.rotate(x, y, z)</code> — turn to a particular angle, in radians.</li>
        <li><code>.spin(x, y, z)</code> — how much it should turn each frame, that is, a speed.</li>
        <li><code>.scale(s)</code> and <code>.color("#ff0000")</code>.</li>
      </ul>
      <h3>The animation loop</h3>
      <p><code>scene.every_frame(update)</code> hands your function over to the 3D engine, which calls it about 60 times a second with the time in seconds as the argument. Note that you pass <code>update</code> <strong>without parentheses</strong> — you are handing over the function itself, not its result. With parentheses it would have run once and passed on <code>None</code>.</p>
      <p>That is an important pattern in all programming: a function is also a value that can be passed around.</p>
      <h3>Why sine and cosine</h3>
      <p>To place things in a ring: <code>cos(angle)</code> gives the x position and <code>sin(angle)</code> the z position on a circle of radius 1. Multiply by 4 and the circle becomes four units wide. Increase the angle a little each frame and you get an orbit.</p>
      <p><code>sin(t * 2 + start)</code> for the height gives a gentle bobbing up and down, since sine swings between −1 and 1. That is the standard trick for anything that should hover, bounce or sway.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> the scene keeps spinning even after the program has finished — the animation lives in the browser, not in Python. Run the code again or call <code>scene.stop()</code> to clear it.</div>
      <div class="uppgift"><strong>Exercise:</strong> build a solar system. A big yellow sun in the middle, three planets at different distances, and make the outer ones move more slowly — divide the angular speed by the distance. Then add a moon orbiting one of the planets.</div>`
  }
);

/* Engelska kapitel 20-21. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Projects", titel: "Build a world", fil: "ch20_world.py",
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
      "# --- buildings ---",
      "scene.house(-8, 0, 2, color=\"#ffc94a\")",
      "scene.house(-13, 0, -3, color=\"#dfe8fa\")",
      "scene.skyscraper(9, 0, -9, color=\"#3d5a8a\")",
      "scene.tower(14, 0, 3)",
      "",
      "# --- a forest of randomly placed trees ---",
      "for i in range(12):",
      "    x = random.uniform(-20, 20)",
      "    z = random.uniform(-18, 12)",
      "    scene.tree(x, 0, z, size=random.uniform(0.6, 1.2))",
      "",
      "# --- vehicles and animals ---",
      "car = scene.car(0, 0, 8, color=\"#ff7d6b\")",
      "car.drive(6)",
      "",
      "truck = scene.truck(-6, 0, 12)",
      "truck.drive(3)",
      "",
      "dog = scene.dog(4, 0, 6, size=0.8)",
      "dog.walk(2)",
      "",
      "plane = scene.plane(0, 9, 0)",
      "plane.fly(9)",
      "",
      "bird = scene.bird(0, 6, 0, size=1.2)",
      "bird.flap(3)",
      "",
      "# --- steer the paths every frame ---",
      "def update(t):",
      "    car.rotate(0, t * 0.7, 0)          # drives in a circle",
      "    truck.rotate(0, -t * 0.3, 0)",
      "    dog.rotate(0, t * 1.1, 0)",
      "    plane.rotate(0, t * 0.5, 0)",
      "    # the bird should face where it is flying, not backwards",
      "    bird.rotate(0, -math.pi / 2 - t, 0)",
      "    bird.move(math.cos(t) * 7, 6 + math.sin(t * 2), math.sin(t) * 7)",
      "",
      "scene.every_frame(update)",
      "",
      "print(\"Drag with the mouse to look around, scroll to fly back and forth.\")",
      "print(\"The arrow keys fly like a drone: forward is wherever you are looking.\")",
      "print(\"Page Up and Page Down raise and lower you. R resets the view.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Composite models</h3>
      <p>A car is not a basic shape. It is a <strong>group</strong> of shapes: a body, a cabin, four wheels, a headlight. The grouping is the whole idea — move the group and every part follows, yet the wheels can still spin on their own inside it.</p>
      <p>It is the same thinking as a class in chapter 13: a shell around several parts that belong together, with methods on the outside that control the whole thing.</p>
      <h3>What is available</h3>
      <ul>
        <li><strong>Vehicles:</strong> <code>car</code>, <code>truck</code>, <code>plane</code>, <code>rocket</code></li>
        <li><strong>Animals:</strong> <code>dog</code>, <code>bird</code>, <code>fish</code></li>
        <li><strong>Buildings and nature:</strong> <code>house</code>, <code>skyscraper</code>, <code>tower</code>, <code>tree</code>, <code>ground</code></li>
      </ul>
      <p>They all take the same arguments: <code>x, y, z, color, size</code>. They all have <code>move</code>, <code>rotate</code>, <code>spin</code>, <code>scale</code> and <code>color</code>.</p>
      <h3>Movements of their own</h3>
      <p>The moving models also have a method that sets the speed and starts the right animation:</p>
      <ul>
        <li><code>car.drive(6)</code> and <code>truck.drive(3)</code> — the wheels turn in step with the speed and the vehicle rolls forward.</li>
        <li><code>plane.fly(9)</code> — the propeller turns and the plane flies forward.</li>
        <li><code>dog.walk(2)</code> — the legs move and the tail wags.</li>
        <li><code>bird.flap(3)</code> and <code>fish.swim(2)</code>.</li>
        <li><code>rocket.ignite(4)</code> — the flame lights and the rocket climbs.</li>
      </ul>
      <p>Forward always means <em>in the direction the model is facing</em>. That is why changing the rotation each frame is enough to produce a circular path: <code>car.rotate(0, t * 0.7, 0)</code> turns the car slowly while it rolls, and the result is a circle. If you want a wider circle, lower the number or raise the speed.</p>
      <h3>Mixing randomness with graphics</h3>
      <p><code>random.uniform(-20, 20)</code> gives a decimal number in the range, unlike <code>randint</code> which gives whole numbers. Perfect for placing things: twelve trees at random positions with random sizes immediately look like a forest rather than a chessboard. Run the program again and the forest is new every time.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> every shape costs the graphics card work. A few hundred objects is fine, ten thousand makes it sluggish. Raise the number of trees to 500 and you will notice — and then you will have found the upper limit yourself, which is exactly how you learn where the limits lie.</div>
      <div class="uppgift"><strong>Exercise:</strong> build your own city. A row of skyscrapers along one edge, houses along the other, and traffic in between. Then make two cars drive in circles of different radius — and see if you can get them to meet in the middle without colliding.</div>`
  },
  {
    del: "Projects", titel: "Everything is cubes", fil: "ch21_everything_is_cubes.py",
    kod: [
      "import scene",
      "",
      "scene.start()",
      "scene.background(\"#0e1c33\")",
      "scene.camera(500, 500, 900)",
      "",
      "# A small Minecraft-style world made of cubes.",
      "#",
      "# Everything in the world sits ready as data further down:",
      "#",
      "#     MAP         a map of how high the ground is, one character per cell",
      "#     OBJECTS     which houses, trees, crags and flowers stand where",
      "#     BLUEPRINTS  how each thing is built, cube by cube",
      "#",
      "# The program up here does three things:",
      "#",
      "#     1. lays out the ground",
      "#     2. places the objects on top of the ground",
      "#     3. works out each cube's colour and draws it",
      "#",
      "# Want to change something? Move a house in OBJECTS, or raise the ground by",
      "# changing a digit in MAP, then run the program again.",
      "",
      "WIDTH = 72          # how many cells the world is across",
      "DEPTH = 72           # ... and in depth",
      "WATER_LEVEL = 3      # anything below this height is under water",
      "LEVELS = \"0123456789abcdefg\"     # the characters in the map, \"0\" is lowest",
      "",
      "COLOUR = {\"grass\": \"#4f9b34\", \"soil\": \"#7a4f2a\", \"stone\": \"#7d7d7d\",",
      "        \"rock\": \"#5f5f5f\", \"snow\": \"#f2f4f7\", \"sand\": \"#e2d3a2\",",
      "        \"water\": \"#3f86d8\", \"deep\": \"#2a5fae\", \"trunk\": \"#5a3a1e\",",
      "        \"leaves\": \"#2f7a2a\", \"darkleaves\": \"#256b28\", \"plank\": \"#b9834b\",",
      "        \"roof\": \"#a63a2b\", \"window\": \"#9fd8e8\", \"lantern\": \"#ffc94a\",",
      "        \"brick\": \"#8d8d92\", \"poppy\": \"#e04b4b\", \"buttercup\": \"#ffc94a\",",
      "        \"bluebell\": \"#7d8ce0\", \"daisy\": \"#f2f4f7\"}",
      "FLOWERS = [\"poppy\", \"buttercup\", \"bluebell\", \"daisy\"]",
      "",
      "",
      "# ======================================================== 1. LAY OUT THE GROUND",
      "def ground_level(x, z):",
      "    \"\"\"How high the ground is at cell (x, z). Outside the map the edge applies.\"\"\"",
      "    if x < 0:",
      "        x = 0",
      "    if z < 0:",
      "        z = 0",
      "    if x > WIDTH - 1:",
      "        x = WIDTH - 1",
      "    if z > DEPTH - 1:",
      "        z = DEPTH - 1",
      "    character = MAP[z][x]",
      "    return LEVELS.index(character)",
      "",
      "",
      "def neighbour_levels(x, z):",
      "    \"\"\"How high the ground is in the four cells around it.\"\"\"",
      "    return [ground_level(x + 1, z), ground_level(x - 1, z),",
      "            ground_level(x, z + 1), ground_level(x, z - 1)]",
      "",
      "",
      "def surface_material(x, z, level):",
      "    \"\"\"What lies on top in a cell.\"\"\"",
      "    if level <= WATER_LEVEL or min(neighbour_levels(x, z)) <= WATER_LEVEL:",
      "        return \"sand\"            # down by the water it is beach",
      "    if level >= 13:",
      "        return \"snow\"             # at the very top of the mountain lies snow",
      "    if level >= 10:",
      "        return \"stone\"",
      "    return \"grass\"",
      "",
      "",
      "def build_ground(cubes):",
      "    \"\"\"Lays out the ground. Only what shows: the surface, and the edges down",
      "    towards the neighbour where the ground slopes. Hidden cubes are skipped.\"\"\"",
      "    for z in range(DEPTH):",
      "        for x in range(WIDTH):",
      "            level = ground_level(x, z)",
      "            cubes[(x, level, z)] = surface_material(x, z, level)",
      "            for y in range(min(neighbour_levels(x, z)), level):",
      "                if y > level - 3:",
      "                    cubes[(x, y, z)] = \"soil\"",
      "                else:",
      "                    cubes[(x, y, z)] = \"stone\"",
      "            if level < WATER_LEVEL:",
      "                cubes[(x, WATER_LEVEL, z)] = \"deep\"     # further out in the lake",
      "            elif level == WATER_LEVEL:",
      "                cubes[(x, WATER_LEVEL, z)] = \"water\"    # shallow water",
      "",
      "",
      "# ==================================================== 2. PLACE THE OBJECTS",
      "def build_objects(cubes):",
      "    \"\"\"Places every house, tree, crag and flower on its cell.",
      "    The blueprint counts from the foot: (0, 0, 0) is the object's lowest cube.\"\"\"",
      "    for name, places in OBJECTS.items():",
      "        for x, z in places:",
      "            level = ground_level(x, z)",
      "            for material, points in BLUEPRINTS[name].items():",
      "                for dx, dy, dz in points:",
      "                    cell = (x + dx, level + 1 + dy, z + dz)",
      "                    if cell not in cubes:",
      "                        cubes[cell] = material      # the first cube wins the cell",
      "",
      "",
      "# ============================================================= 3. THE LIGHT",
      "def highest_cube(cubes):",
      "    \"\"\"The height of the topmost cube in each cell. Needed for the shadows.\"\"\"",
      "    highest = {}",
      "    for (x, y, z) in cubes:",
      "        if (x, z) not in highest or y > highest[(x, z)]:",
      "            highest[(x, z)] = y",
      "    return highest",
      "",
      "",
      "def in_shadow(highest, x, y, z):",
      "    \"\"\"The sun is in the north-west. Does anything taller block it for this cube?\"\"\"",
      "    for step in range(1, 7):",
      "        if highest.get((x - step, z - step), -9) >= y + step:",
      "            return True",
      "    return False",
      "",
      "",
      "def cubes_above(cubes, x, y, z):",
      "    \"\"\"How many cubes lie straight above. Many = a dark nook.\"\"\"",
      "    count = 0",
      "    for dx in (-1, 0, 1):",
      "        for dz in (-1, 0, 1):",
      "            if (x + dx, y + 1, z + dz) in cubes:",
      "                count = count + 1",
      "    return count",
      "",
      "",
      "def work_out_colour(cubes, highest, x, y, z, material):",
      "    \"\"\"The material's colour, darker in shadow and nooks, plus a little texture.\"\"\"",
      "    light = 1.0 + 0.015 * (y - 6)                  # higher up = slightly brighter",
      "    if in_shadow(highest, x, y, z):",
      "        light = light - 0.2",
      "    light = light - 0.045 * cubes_above(cubes, x, y, z)",
      "    if material in (\"lantern\", \"window\"):",
      "        light = 1.05                               # these give off light themselves",
      "    texture = (x * 7 + y * 13 + z * 29) % 15 - 7   # the same cell always gets the same texture",
      "    hexcolour = COLOUR[material]",
      "    parts = []",
      "    for start in (1, 3, 5):                       # the red, green and blue parts",
      "        part_of_colour = int(hexcolour[start:start + 2], 16)",
      "        parts.append(max(0, min(255, int(part_of_colour * light) + texture)))",
      "    return \"#{:02x}{:02x}{:02x}\".format(parts[0], parts[1], parts[2])",
      "",
      "",
      "# ================================================================ 4. DRAW",
      "def draw_world(size=10):",
      "    \"\"\"Builds the whole world and draws it, one cube at a time.\"\"\"",
      "    cubes = {}",
      "    build_ground(cubes)",
      "    build_objects(cubes)",
      "    highest = highest_cube(cubes)",
      "    for (x, y, z), material in cubes.items():",
      "        colour = work_out_colour(cubes, highest, x, y, z, material)",
      "        scene.cube(x * size, y * size, z * size,",
      "                 size=size, color=colour)",
      "    return len(cubes)",
      "",
      "",
      "# ##########################################################################",
      "# From here down it is nothing but data: the map, the list of what stands where,",
      "# and the blueprints. You do not have to read it all - but do change it.",
      "# ##########################################################################",
      "",
      "# The height map, one line per cell in depth. One character per cell: \"0\" is lowest",
      "# and \"g\" highest. The mountain is top left and the lake in the middle.",
      "MAP = \"\"\"",
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
      "# Where each thing stands, as (x, z).",
      "OBJECTS = {",
      "    \"cottage\": [(12, 44), (21, 49), (62, 19)],",
      "    \"barn\": [(13, 55)],",
      "    \"shed\": [(24, 42), (34, 40)],",
      "    \"tower\": [(9, 9), (16, 13)],",
      "    \"tall_crag\": [(5, 15), (44, 6)],",
      "    \"crag\": [(60, 8), (66, 62), (30, 67), (52, 18)],",
      "    \"spruce\": [(27, 14), (13, 30), (34, 26), (7, 26), (12, 21)],",
      "    \"small_spruce\": [(23, 31), (28, 22), (20, 23), (31, 33)],",
      "    \"oak\": [(8, 60), (21, 68), (36, 58), (62, 29), (67, 11), (68, 33)],",
      "    \"small_tree\": [(40, 65), (10, 67), (49, 58), (41, 22), (33, 48), (4, 53)],",
      "    \"birch\": [(20, 61), (67, 40), (52, 8), (61, 68), (57, 58)],",
      "    \"bush\": [(5, 46), (42, 15), (66, 55)],",
      "    \"poppy\": [(50, 16), (44, 69), (29, 39), (34, 25), (35, 34), (23, 25),",
      "               (52, 68), (37, 7)],",
      "    \"buttercup\": [(16, 53), (57, 69), (68, 33), (54, 8), (68, 39), (70, 57),",
      "                   (6, 37), (21, 29)],",
      "    \"bluebell\": [(43, 12), (36, 44), (47, 68), (32, 27), (26, 46), (28, 67),",
      "                  (57, 12), (67, 29)],",
      "    \"daisy\": [(65, 10), (28, 49), (3, 25), (42, 11), (36, 23), (6, 38),",
      "                   (69, 60)],",
      "}",
      "",
      "# How each thing is built: material -> list of (sideways, height, depth)",
      "# measured from the object's foot.",
      "BLUEPRINTS = {",
      "    \"oak\": {",
      "        \"trunk\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0)],",
      "        \"leaves\": [(-2,3,-1), (-2,3,0), (-2,3,1), (-1,3,-2), (-1,3,-1), (-1,3,0),",
      "            (-1,3,1), (-1,3,2), (0,3,-2), (0,3,-1), (0,3,1), (0,3,2), (1,3,-2),",
      "            (1,3,-1), (1,3,0), (1,3,1), (1,3,2), (2,3,-1), (2,3,0), (2,3,1),",
      "            (-2,4,-1), (-2,4,0), (-2,4,1), (-1,4,-2), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (-1,4,2), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-2),",
      "            (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (2,4,-1), (2,4,0), (2,4,1),",
      "            (-1,5,-1), (-1,5,0), (-1,5,1), (0,5,-1), (0,5,0), (0,5,1), (1,5,-1),",
      "            (1,5,0), (1,5,1), (0,6,0)],",
      "    },",
      "    \"birch\": {",
      "        \"trunk\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0)],",
      "        \"leaves\": [(-2,4,-1), (-2,4,0), (-2,4,1), (-1,4,-2), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (-1,4,2), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-2),",
      "            (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (2,4,-1), (2,4,0), (2,4,1),",
      "            (-2,5,-1), (-2,5,0), (-2,5,1), (-1,5,-2), (-1,5,-1), (-1,5,0),",
      "            (-1,5,1), (-1,5,2), (0,5,-2), (0,5,-1), (0,5,1), (0,5,2), (1,5,-2),",
      "            (1,5,-1), (1,5,0), (1,5,1), (1,5,2), (2,5,-1), (2,5,0), (2,5,1),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-1), (0,6,0), (0,6,1), (1,6,-1),",
      "            (1,6,0), (1,6,1), (0,7,0)],",
      "    },",
      "    \"spruce\": {",
      "        \"trunk\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0), (0,6,0),",
      "            (0,7,0), (0,8,0)],",
      "        \"darkleaves\": [(-2,2,0), (-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-2),",
      "            (0,2,-1), (0,2,1), (0,2,2), (1,2,-1), (1,2,0), (1,2,1), (2,2,0),",
      "            (-1,3,0), (0,3,-1), (0,3,1), (1,3,0), (-2,4,0), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-1), (1,4,0),",
      "            (1,4,1), (2,4,0), (-1,5,0), (0,5,-1), (0,5,1), (1,5,0), (-2,6,0),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-2), (0,6,-1), (0,6,1), (0,6,2),",
      "            (1,6,-1), (1,6,0), (1,6,1), (2,6,0), (-1,7,0), (0,7,-1), (0,7,1),",
      "            (1,7,0), (-2,8,0), (-1,8,-1), (-1,8,0), (-1,8,1), (0,8,-2), (0,8,-1),",
      "            (0,8,1), (0,8,2), (1,8,-1), (1,8,0), (1,8,1), (2,8,0), (0,9,0)],",
      "    },",
      "    \"small_tree\": {",
      "        \"trunk\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0)],",
      "        \"leaves\": [(-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-1), (0,2,1), (1,2,-1),",
      "            (1,2,0), (1,2,1), (-1,3,-1), (-1,3,0), (-1,3,1), (0,3,-1), (0,3,1),",
      "            (1,3,-1), (1,3,0), (1,3,1), (0,4,0), (0,5,0)],",
      "    },",
      "    \"small_spruce\": {",
      "        \"trunk\": [(0,0,0), (0,1,0), (0,2,0), (0,3,0), (0,4,0), (0,5,0), (0,6,0)],",
      "        \"darkleaves\": [(-2,2,0), (-1,2,-1), (-1,2,0), (-1,2,1), (0,2,-2),",
      "            (0,2,-1), (0,2,1), (0,2,2), (1,2,-1), (1,2,0), (1,2,1), (2,2,0),",
      "            (-1,3,0), (0,3,-1), (0,3,1), (1,3,0), (-2,4,0), (-1,4,-1), (-1,4,0),",
      "            (-1,4,1), (0,4,-2), (0,4,-1), (0,4,1), (0,4,2), (1,4,-1), (1,4,0),",
      "            (1,4,1), (2,4,0), (-1,5,0), (0,5,-1), (0,5,1), (1,5,0), (-2,6,0),",
      "            (-1,6,-1), (-1,6,0), (-1,6,1), (0,6,-2), (0,6,-1), (0,6,1), (0,6,2),",
      "            (1,6,-1), (1,6,0), (1,6,1), (2,6,0), (0,7,0)],",
      "    },",
      "    \"bush\": {",
      "        \"trunk\": [(0,0,0), (0,1,0)],",
      "        \"leaves\": [(-1,0,-1), (-1,0,0), (-1,0,1), (0,0,-1), (0,0,1), (1,0,-1),",
      "            (1,0,0), (1,0,1), (-1,1,-1), (-1,1,0), (-1,1,1), (0,1,-1), (0,1,1),",
      "            (1,1,-1), (1,1,0), (1,1,1), (0,2,0), (0,3,0)],",
      "    },",
      "    \"cottage\": {",
      "        \"plank\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,0,4), (1,0,0),",
      "            (1,0,1), (1,0,2), (1,0,3), (1,0,4), (2,0,0), (2,0,1), (2,0,2), (2,0,3),",
      "            (2,0,4), (3,0,0), (3,0,1), (3,0,2), (3,0,3), (3,0,4), (4,0,0), (4,0,1),",
      "            (4,0,2), (4,0,3), (4,0,4), (5,0,0), (5,0,1), (5,0,2), (5,0,3), (5,0,4),",
      "            (0,1,0), (0,1,1), (0,1,2), (0,1,3), (0,1,4), (1,1,0), (1,1,4), (2,1,0),",
      "            (2,1,4), (3,1,4), (4,1,0), (4,1,4), (5,1,0), (5,1,1), (5,1,2), (5,1,3),",
      "            (5,1,4), (0,2,1), (0,2,2), (0,2,4), (1,2,0), (1,2,4), (2,2,0), (3,2,4),",
      "            (4,2,0), (4,2,4), (5,2,0), (5,2,2), (5,2,3), (0,3,0), (0,3,1), (0,3,2),",
      "            (0,3,3), (0,3,4), (1,3,0), (1,3,4), (2,3,0), (2,3,4), (3,3,0), (3,3,4),",
      "            (4,3,0), (4,3,4), (5,3,0), (5,3,1), (5,3,2), (5,3,3), (5,3,4)],",
      "        \"window\": [(0,2,0), (0,2,3), (2,2,4), (5,2,1), (5,2,4)],",
      "        \"roof\": [(-1,4,-1), (-1,4,0), (-1,4,1), (-1,4,2), (-1,4,3), (-1,4,4),",
      "            (-1,4,5), (0,4,-1), (0,4,0), (0,4,1), (0,4,2), (0,4,3), (0,4,4),",
      "            (0,4,5), (1,4,-1), (1,4,0), (1,4,1), (1,4,2), (1,4,3), (1,4,4),",
      "            (1,4,5), (2,4,-1), (2,4,0), (2,4,1), (2,4,2), (2,4,3), (2,4,4),",
      "            (2,4,5), (3,4,-1), (3,4,0), (3,4,1), (3,4,2), (3,4,3), (3,4,4),",
      "            (3,4,5), (4,4,-1), (4,4,0), (4,4,1), (4,4,2), (4,4,3), (4,4,4),",
      "            (4,4,5), (5,4,-1), (5,4,0), (5,4,1), (5,4,2), (5,4,3), (5,4,4),",
      "            (5,4,5), (6,4,-1), (6,4,0), (6,4,1), (6,4,2), (6,4,3), (6,4,4),",
      "            (6,4,5), (1,5,1), (1,5,2), (1,5,3), (2,5,1), (2,5,2), (2,5,3), (3,5,1),",
      "            (3,5,2), (3,5,3), (4,5,1), (4,5,2), (4,5,3)],",
      "        \"lantern\": [(2,2,-1), (4,2,-1)],",
      "    },",
      "    \"tower\": {",
      "        \"brick\": [(-2,0,-1), (-2,0,0), (-2,0,1), (-1,0,-2), (-1,0,-1),",
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
      "        \"window\": [(0,3,-2), (0,6,-2)],",
      "        \"lantern\": [(0,10,0)],",
      "    },",
      "    \"barn\": {",
      "        \"plank\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (0,0,4), (0,0,5),",
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
      "        \"window\": [(0,2,0), (0,2,3), (1,2,5), (3,2,0), (4,2,5), (6,2,0),",
      "            (7,2,2), (7,2,5)],",
      "        \"roof\": [(-1,5,-1), (-1,5,0), (-1,5,1), (-1,5,2), (-1,5,3), (-1,5,4),",
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
      "        \"lantern\": [(3,2,-1), (5,2,-1)],",
      "    },",
      "    \"shed\": {",
      "        \"plank\": [(0,0,0), (0,0,1), (0,0,2), (0,0,3), (1,0,0), (1,0,1),",
      "            (1,0,2), (1,0,3), (2,0,0), (2,0,1), (2,0,2), (2,0,3), (3,0,0), (3,0,1),",
      "            (3,0,2), (3,0,3), (0,1,0), (0,1,1), (0,1,2), (0,1,3), (1,1,0), (1,1,3),",
      "            (2,1,3), (3,1,0), (3,1,1), (3,1,2), (3,1,3), (0,2,1), (0,2,2), (1,2,0),",
      "            (1,2,3), (2,2,3), (3,2,1), (3,2,2)],",
      "        \"window\": [(0,2,0), (0,2,3), (3,2,0), (3,2,3)],",
      "        \"roof\": [(-1,3,-1), (-1,3,0), (-1,3,1), (-1,3,2), (-1,3,3), (-1,3,4),",
      "            (0,3,-1), (0,3,0), (0,3,1), (0,3,2), (0,3,3), (0,3,4), (1,3,-1),",
      "            (1,3,0), (1,3,1), (1,3,2), (1,3,3), (1,3,4), (2,3,-1), (2,3,0),",
      "            (2,3,1), (2,3,2), (2,3,3), (2,3,4), (3,3,-1), (3,3,0), (3,3,1),",
      "            (3,3,2), (3,3,3), (3,3,4), (4,3,-1), (4,3,0), (4,3,1), (4,3,2),",
      "            (4,3,3), (4,3,4), (1,4,1), (1,4,2), (2,4,1), (2,4,2)],",
      "        \"lantern\": [(1,2,-1), (3,2,-1)],",
      "    },",
      "    \"crag\": {",
      "        \"rock\": [(-2,0,-1), (-2,0,0), (-2,0,1), (-1,0,-2), (-1,0,2), (0,0,-2),",
      "            (0,0,2), (1,0,-2), (1,0,2), (2,0,-1), (2,0,0), (2,0,1), (-1,1,-1),",
      "            (-1,1,0), (-1,1,1), (0,1,-1), (0,1,1), (1,1,-1), (1,1,0), (1,1,1),",
      "            (0,2,0)],",
      "    },",
      "    \"tall_crag\": {",
      "        \"rock\": [(-3,0,-1), (-3,0,0), (-3,0,1), (-1,0,-3), (-1,0,3), (0,0,-3),",
      "            (0,0,3), (1,0,-3), (1,0,3), (3,0,-1), (3,0,0), (3,0,1), (-2,1,-1),",
      "            (-2,1,0), (-2,1,1), (-1,1,-2), (-1,1,2), (0,1,-2), (0,1,2), (1,1,-2),",
      "            (1,1,2), (2,1,-1), (2,1,0), (2,1,1), (-1,2,-1), (-1,2,0), (-1,2,1),",
      "            (0,2,-1), (0,2,1), (1,2,-1), (1,2,0), (1,2,1), (0,3,0)],",
      "        \"snow\": [(0,4,0)],",
      "    },",
      "}",
      "for flower in FLOWERS:                      # a flower is just a single cube",
      "    BLUEPRINTS[flower] = {flower: [(0, 0, 0)]}",
      "",
      "",
      "count = draw_world()",
      "print(\"Done! The world consists of\", count, \"cubes.\")",
      "print()",
      "print(\"Drag with the mouse to look around, scroll to fly.\")",
      "print(\"The arrow keys fly like a drone: forward is wherever you are looking.\")",
      "print(\"R or Reset view brings you back. Fullscreen is in the top right.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Everything is cubes</h3>
      <p>Minecraft looks complicated, but behind all of it lies a single idea: the world is a grid, and every cell contains either nothing or a cube of some material. Trees, houses, mountains and water are not different kinds of thing — they are the same kind of cube in different colours, stacked in different ways.</p>
      <p>Such cubes are called <strong>voxels</strong>, from "volume" and "pixel". A pixel is a coloured point in a flat image; a voxel is a coloured point in a space. This world consists of a little over nine thousand of them.</p>
      <h3>The world is a dictionary</h3>
      <p>The entire world fits in one variable: <code>cubes</code>, a dictionary from chapter 8 where the key is the position <code>(x, y, z)</code> and the value is the material.</p>
      <p>That makes hard questions trivial. Is there something here? <code>(x, y, z) in cubes</code>. What is above? Look up <code>(x, y + 1, z)</code>. No searching, no lists to walk through — the dictionary answers instantly however big the world gets.</p>
      <p>Note the line <code>if cell not in cubes</code> when the objects are placed: the first cube wins the cell. It is a one-line rule that stops a tree from growing straight through a roof.</p>
      <h3>Data and code are kept apart</h3>
      <p>The program is split into two halves, and that dividing line is the most important structure in the whole chapter.</p>
      <ul>
        <li><strong>MAP</strong> is a height map drawn as text. One character per cell, where <code>0</code> is lowest and <code>g</code> highest. You can read the landscape straight from the source: the mountain in the top left, the lake in the middle.</li>
        <li><strong>OBJECTS</strong> only says what stands where — <code>"cottage": [(12, 44), ...]</code>. No height is needed; it is taken from the ground.</li>
        <li><strong>BLUEPRINTS</strong> describes how each thing is built, as lists of <code>(sideways, height, depth)</code> measured from the object's foot.</li>
      </ul>
      <p>The code above knows nothing about a single cottage or a single tree. It just reads data and lays out cubes. That is why you can move a house, raise a mountain or invent an entirely new object without touching a line of the program — and that is precisely what separating data from logic means.</p>
      <h3>Only what can be seen gets built</h3>
      <p><code>build_ground</code> does not lay out a solid block of earth. It lays the surface, and then only down to the lowest neighbour — because a wall facing a neighbour that sits higher could never be seen anyway.</p>
      <p>It is the same thought that makes Minecraft possible at all. A cube completely surrounded by other cubes cannot be seen, so there is no reason to draw it. Here it saves about two thirds of the work.</p>
      <h3>The light is computed, not measured</h3>
      <p>The scene has no real per-cube lighting — instead <code>work_out_colour</code> computes each cube's colour before it is drawn, using three simple rules:</p>
      <ul>
        <li><strong>Shadow:</strong> the sun sits in the north-west, so <code>in_shadow</code> looks diagonally upward in that direction. If something taller is there, the cube gets darker.</li>
        <li><strong>Nooks:</strong> the more cubes above, the less light reaches down. That is why it goes dark under tree crowns and inside roofs.</li>
        <li><strong>Texture:</strong> <code>(x * 7 + y * 13 + z * 29) % 15 - 7</code> gives every cell a small variation that is always the same. Without it the grass looks like a plastic mat.</li>
      </ul>
      <p>That last line is worth pausing on. It looks like randomness, but it is not: the same cell always gives the same number. This is called <em>deterministic noise</em> and is used everywhere in graphics — you want irregularity that does not flicker when you look away and back.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> nine thousand cubes take a moment to build and some power to draw. If it feels sluggish, reduce <code>WIDTH</code> and <code>DEPTH</code> — the map is only read as far as the numbers reach anyway.</div>
      <div class="uppgift"><strong>Exercise:</strong> start small — move a cottage by changing a pair of numbers in <code>OBJECTS</code>, then dig a pond by changing a few digits in <code>MAP</code> to <code>2</code>. After that, draw an object of your own: add an entry to <code>BLUEPRINTS</code> with a few coordinates, place it in <code>OBJECTS</code>, and run. If you want a challenge — change <code>in_shadow</code> so the sun sits in the south-east instead.</div>`
  }
);

/* Engelska kapitel 22-23. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Machine learning", titel: "Train a model", fil: "ch22_machine_learning.py",
    kod: [
      "# The first time takes a moment — the packages are downloaded.",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "import xgboost as xgb",
      "from sklearn.model_selection import train_test_split",
      "from sklearn.metrics import accuracy_score",
      "",
      "rng = np.random.default_rng(42)",
      "NUMBER_OF_DOGS = 300",
      "NUMBER_OF_CATS = 300",
      "",
      "# ===== 1. Invent some dogs =====",
      "# normal(mean, spread, how many)",
      "dog_weight = rng.normal(25, 7, NUMBER_OF_DOGS)     # kg, usually around 25",
      "dog_ears = rng.normal(9, 2.5, NUMBER_OF_DOGS)      # cm, usually around 9",
      "dog_sounds = rng.normal(20, 7, NUMBER_OF_DOGS)     # barks per hour",
      "",
      "# ===== 2. Invent some cats =====",
      "cat_weight = rng.normal(4.5, 1.2, NUMBER_OF_CATS)",
      "cat_ears = rng.normal(6, 1.0, NUMBER_OF_CATS)",
      "cat_sounds = rng.normal(3, 2.0, NUMBER_OF_CATS)",
      "",
      "# ===== 3. Assemble into tables: one row per animal =====",
      "# column_stack puts the three lists side by side as columns",
      "dogs = np.column_stack([dog_weight, dog_ears, dog_sounds])",
      "cats = np.column_stack([cat_weight, cat_ears, cat_sounds])",
      "",
      "print(\"A dog looks like this:\", dogs[0].round(1))",
      "print(\"A cat looks like this: \", cats[0].round(1))",
      "print()",
      "",
      "# ===== 4. Annotation: put the answer on every row =====",
      "# X = the features. Dogs first, cats underneath.",
      "X = np.vstack([dogs, cats])",
      "",
      "# y = the label, that is, the right answer. 1 = dog, 0 = cat.",
      "# The order has to match X exactly: row 0 in X belongs with y[0].",
      "y = np.array([1] * NUMBER_OF_DOGS + [0] * NUMBER_OF_CATS)",
      "",
      "print(\"X has\", X.shape[0], \"rows and\", X.shape[1], \"columns\")",
      "print(\"Row 0:   \", X[0].round(1), \"-> label\", y[0], \"(dog)\")",
      "print(\"Last row:\", X[-1].round(1), \"-> label\", y[-1], \"(cat)\")",
      "print()",
      "",
      "# ===== 5. Look at the data BEFORE training =====",
      "names = [\"weight (kg)\", \"ear length (cm)\", \"sounds per hour\"]",
      "figure, panels = plt.subplots(1, 3, figsize=(9, 2.8))",
      "",
      "for i in range(3):",
      "    panels[i].hist(dogs[:, i], bins=25, alpha=0.75,",
      "                   color=\"#ffc94a\", label=\"dog\")",
      "    panels[i].hist(cats[:, i], bins=25, alpha=0.75,",
      "                   color=\"#6ee7b7\", label=\"cat\")",
      "    panels[i].set_title(names[i])",
      "    panels[i].legend()",
      "",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "# ===== 6. Split and train =====",
      "X_train, X_test, y_train, y_test = train_test_split(",
      "    X, y, test_size=0.25, random_state=0)",
      "",
      "model = xgb.XGBClassifier(",
      "    n_estimators=60,        # number of trees",
      "    max_depth=3,            # how deep the trees may go",
      "    learning_rate=0.3,      # how much each tree may correct",
      "    tree_method=\"hist\"      # \"hist\" on CPU, device=\"cuda\" on a graphics card",
      ")",
      "model.fit(X_train, y_train)",
      "",
      "# ===== 7. Evaluate =====",
      "guesses = model.predict(X_test)",
      "hit_rate = accuracy_score(y_test, guesses) * 100",
      "print(f\"Accuracy on unseen data: {hit_rate:.1f} %\")",
      "print()",
      "",
      "for label, share in zip(names, model.feature_importances_):",
      "    print(f\"{label:<18} {'#' * int(share * 40)} {share:.2f}\")",
      "print()",
      "",
      "# A new unknown animal: 6 kg, 6.5 cm ears, 4 sounds an hour",
      "unknown = np.array([[6.0, 6.5, 4.0]])",
      "probability = model.predict_proba(unknown)[0]",
      "print(f\"Dog: {probability[1] * 100:.1f} %   Cat: {probability[0] * 100:.1f} %\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>The difference from everything so far</h3>
      <p>In every previous chapter <em>you</em> decided the rules. <code>if temperature &gt; 25</code> — you picked the threshold of 25. In machine learning you write no rules at all. You give the program examples with the answers, and it finds the rules itself.</p>
      <p>Here the examples are 600 invented animals. Each animal has three <strong>features</strong> (weight, ear length, how often it makes a sound) and one <strong>label</strong> (dog or cat). The model looks for the boundaries that separate the groups best.</p>
      <h3>How the data is invented</h3>
      <p><code>rng.normal(25, 7, 300)</code> gives 300 random numbers gathered around 25 with a spread of 7. That is a <em>normal distribution</em> — the same pattern real body weights, heights and exam results follow: many near the middle, fewer and fewer the further out you go.</p>
      <p>Dogs and cats are built separately, three lists each. Then <code>np.column_stack</code> places the three lists side by side as columns, so that each <em>row</em> becomes an animal and each <em>column</em> a feature. <code>np.vstack</code> stacks the dog table on top of the cat table into one big table.</p>
      <h3>Annotation — attaching the answers</h3>
      <p><code>X</code> is the features, <code>y</code> is the right answers. Labelling data with the correct answers is called <strong>annotation</strong>, and in the real world it is often the most expensive step of the whole project: somebody has to sit and label thousands of images, texts or medical records by hand.</p>
      <p>Here it takes one line, because we know which rows are which: <code>[1] * 300 + [0] * 300</code> gives 300 ones followed by 300 zeros. <strong>The order is everything.</strong> Row 0 in <code>X</code> belongs with <code>y[0]</code>, row 1 with <code>y[1]</code>, and so on. Shuffle the order in one but not the other and every animal gets the wrong answer, and the model learns pure nonsense — with no error message at all.</p>
      <p>That 1 means dog and 0 means cat is just an agreement. The model does not understand the words; it sees two groups that have to be kept apart.</p>
      <h3>Looking at the data first</h3>
      <p>Step 5 draws three histograms, one per feature. A histogram sorts the values into bars and shows how many animals land in each bar. Yellow is dog, green is cat.</p>
      <p>Read them like this: <strong>the less the colours overlap, the easier that feature makes it to tell the animals apart.</strong> Weight separates them almost perfectly — the bars sit on opposite sides. Ear length overlaps heavily, because a small dog and a large cat have roughly the same ears. That feature therefore does not help the model much, and you will see that later in the importance list.</p>
      <p>Looking at data before training is not an extra step but the first real piece of work. It is often here you discover that a feature is useless, that values are missing, or that something is plainly wrong — like a cat weighing 40 kg.</p>
      <h3>Training and testing</h3>
      <p><code>train_test_split</code> sets aside a quarter of the animals that the model never sees during training. That is the entire basis for trusting the number at the end.</p>
      <p>Measuring accuracy on data the model has already trained on would be like letting someone mark an exam with the answer key in front of them. A model can memorise the answers without understanding anything — that is called <strong>overfitting</strong>, and the test data is the only thing that reveals it.</p>
      <h3>What XGBoost actually does</h3>
      <p>The model builds 60 small decision trees, one at a time. The first tree guesses roughly. The second is trained to correct the first tree's mistakes. The third corrects what is left. And so it continues, with all the trees voting together at the end.</p>
      <p>That is why it is called <em>boosting</em>: many weak guessers lifting each other. <code>learning_rate</code> controls how large a correction each tree may make — a low value means more cautious but more stable learning, and requires more trees.</p>
      <h3>About the GPU</h3>
      <p><code>tree_method="hist"</code> computes on the processor. On a real computer with an Nvidia card you switch to <code>device="cuda"</code> and get tenfold faster training, because a graphics card can do thousands of calculations at once.</p>
      <p>That does <strong>not</strong> work here. Pytho runs Python compiled to WebAssembly, which for security reasons has no route to the graphics card's compute engine. The browser lets graphics through (that is how three.js draws) but not general computation. On 600 animals you will not notice — on 60 million rows it makes all the difference.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> the data here is invented and therefore a little too easy. Real data is messier, has gaps and contains traps. A model scoring 99 % on practice data means very little.</div>
      <div class="uppgift"><strong>Exercise:</strong> change <code>dog_weight</code> to <code>rng.normal(8, 7, NUMBER_OF_DOGS)</code> so the dogs weigh almost as much as the cats. Look at the histogram first: the colours now overlap almost completely. Then run the training — how far does the accuracy fall, and which feature takes over as the most important? Also try removing <code>dog_sounds</code> and <code>cat_sounds</code> entirely.</div>`
  },
  {
    del: "Machine learning", titel: "Language processing", fil: "ch23_language.py",
    kod: [
      "import nltk",
      "from nltk.tokenize import RegexpTokenizer",
      "from nltk.stem.snowball import SnowballStemmer",
      "from nltk import FreqDist, bigrams",
      "",
      "text = \"\"\"The cat sleeps on the sofa. The cat dreams about fish.",
      "The dog runs in the park and the dog barks at the cat.",
      "The fish swims in the tank and does not care about the cat.\"\"\"",
      "",
      "# 1. Tokenisation — split the text into words",
      "splitter = RegexpTokenizer(r\"\\w+\")",
      "words = splitter.tokenize(text.lower())",
      "print(\"Number of words:\", len(words))",
      "print(words[:8])",
      "print()",
      "",
      "# 2. Stop words — remove the common little words that carry no meaning",
      "stop_words = {\"on\", \"in\", \"at\", \"about\", \"and\", \"not\", \"does\", \"the\", \"a\", \"an\"}",
      "cleaned = [w for w in words if w not in stop_words]",
      "print(\"Left after cleaning:\", len(cleaned))",
      "print()",
      "",
      "# 3. Stemming — fold inflected forms down to the same stem",
      "stemmer = SnowballStemmer(\"english\")",
      "stems = [stemmer.stem(w) for w in cleaned]",
      "print(\"cats ->\", stemmer.stem(\"cats\"))",
      "print(\"running ->\", stemmer.stem(\"running\"))",
      "print(\"barks ->\", stemmer.stem(\"barks\"))",
      "print()",
      "",
      "# 4. Frequency — what is the text about?",
      "frequency = FreqDist(stems)",
      "for stem, count in frequency.most_common(6):",
      "    print(f\"{stem:<10} {'#' * count * 3} {count}\")",
      "print()",
      "",
      "# 5. Bigrams — which words stand next to each other?",
      "pairs = list(bigrams(cleaned))",
      "print(\"The first word pairs:\", pairs[:4])",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Text is harder than numbers</h3>
      <p>A model can only count. For it to understand language, the text first has to be turned into numbers, and the road there is what is called <strong>natural language processing</strong>, or NLP. NLTK is the toolbox for it, and it does work here in the browser.</p>
      <h3>Tokenisation</h3>
      <p>The first step: split the text into units. Sounds simple, but <code>text.split()</code> is not enough — then <code>"sofa."</code> becomes a different word from <code>"sofa"</code>, just because a full stop came along. <code>RegexpTokenizer(r"\\w+")</code> picks out runs of letters and throws the punctuation away.</p>
      <p><code>r"\\w+"</code> is a <em>regular expression</em>: <code>\\w</code> means a letter or a digit, <code>+</code> means one or more in a row. A small pattern language of its own, well worth learning later.</p>
      <h3>Stop words</h3>
      <p>Words like "and", "on", "in" appear in every text and therefore say almost nothing about what this particular text is about. Removing them makes the rest clearer.</p>
      <p>NLTK has ready-made stop word lists for many languages, but they have to be downloaded with <code>nltk.download("stopwords")</code>, which needs internet access that Python in the browser does not have. That is why we write the list ourselves here. On a real computer the download would work.</p>
      <h3>Stemming</h3>
      <p>To a computer, "cat", "cats" and "cat's" are three completely different character strings. A <strong>stemmer</strong> chops off the endings so that all three become the same stem, and suddenly the program can see that the text is largely about cats.</p>
      <p><code>SnowballStemmer("english")</code> is rule-based — it follows a list of English ending rules and needs no downloaded data. It is blunt and sometimes gets things wrong, but it is fast and surprisingly useful.</p>
      <h3>Frequency and bigrams</h3>
      <p><code>FreqDist</code> is NLTK's counter — in practice the same dictionary counter you built yourself in chapter 8, only ready-made.</p>
      <p><code>bigrams</code> gives every pair of adjacent words. Word pairs carry information that single words lose: "not good" means something entirely different from "good". It is the first step towards a computer grasping context — and the same basic idea, scaled up enormously, is what underlies modern language models.</p>
      <div class="uppgift"><strong>Exercise:</strong> paste in a longer text — a news article or a few pages from a book — and run the same pipeline. Which six stems top the list? Then combine chapters 22 and 23: count how often positive and negative words appear in film reviews and let XGBoost guess the rating.</div>`
  }
);

/* Engelska kapitel 24-25. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Machine learning", titel: "Words as numbers", fil: "ch24_words_as_numbers.py",
    kod: [
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer",
      "",
      "sentences = [",
      "    \"the cat sleeps on the sofa\",",
      "    \"the cat chases a mouse\",",
      "    \"the dog chases the cat in the park\",",
      "    \"the dog sleeps in the basket\",",
      "    \"the mouse runs from the cat\",",
      "    \"the mouse hides in the park\",",
      "]",
      "",
      "# ===== 1. CountVectorizer: count words =====",
      "counter = CountVectorizer()",
      "X = counter.fit_transform(sentences)",
      "vocabulary = counter.get_feature_names_out()",
      "",
      "print(\"Vocabulary:\", list(vocabulary))",
      "print(\"The matrix is\", X.shape[0], \"sentences x\", X.shape[1], \"words\")",
      "print()",
      "",
      "table = X.toarray()",
      "print(\"Sentence 0 as numbers:\", table[0])",
      "for word, count in zip(vocabulary, table[0]):",
      "    if count:",
      "        print(f\"   {word} = {count}\")",
      "print()",
      "",
      "# ===== 2. TF-IDF: play down words that appear everywhere =====",
      "tfidf = TfidfVectorizer()",
      "V = tfidf.fit_transform(sentences).toarray()",
      "",
      "print(\"The most important word in each sentence according to TF-IDF:\")",
      "for i, sentence in enumerate(sentences):",
      "    best = tfidf.get_feature_names_out()[V[i].argmax()]",
      "    print(f\"   {sentence:<34} -> {best}\")",
      "print()",
      "",
      "# ===== 3. Your own embeddings: words as company =====",
      "# The idea: words that appear in the same company mean something similar.",
      "index = {word: i for i, word in enumerate(vocabulary)}",
      "N = len(vocabulary)",
      "co_occurrence = np.zeros((N, N))",
      "WINDOW = 2",
      "",
      "for sentence in sentences:",
      "    words = [w for w in sentence.split() if w in index]",
      "    for i, word in enumerate(words):",
      "        for j in range(max(0, i - WINDOW), min(len(words), i + WINDOW + 1)):",
      "            if i != j:",
      "                co_occurrence[index[word], index[words[j]]] += 1",
      "",
      "print(\"Neighbours of 'cat':\")",
      "row = co_occurrence[index[\"cat\"]]",
      "for i in np.argsort(row)[::-1][:4]:",
      "    if row[i]:",
      "        print(f\"   {vocabulary[i]:<10} {int(row[i])} times\")",
      "print()",
      "",
      "# ===== 4. Squeeze down to a few dimensions =====",
      "# SVD finds the directions that carry the most information.",
      "logged = np.log1p(co_occurrence)",
      "U, S, Vt = np.linalg.svd(logged)",
      "embedding = U[:, :2] * S[:2]      # two numbers per word",
      "",
      "print(\"Embedding for 'cat':\", embedding[index[\"cat\"]].round(2))",
      "print()",
      "",
      "# ===== 5. Which words lie close together? =====",
      "def similarity(a, b):",
      "    va, vb = embedding[index[a]], embedding[index[b]]",
      "    return float(va @ vb / (np.linalg.norm(va) * np.linalg.norm(vb) + 1e-9))",
      "",
      "for pair in [(\"cat\", \"dog\"), (\"cat\", \"mouse\"), (\"sleeps\", \"chases\")]:",
      "    print(f\"{pair[0]} ~ {pair[1]}: {similarity(*pair):+.2f}\")",
      "print()",
      "",
      "# ===== 6. Draw the word map =====",
      "plt.figure(figsize=(7, 4.5))",
      "plt.scatter(embedding[:, 0], embedding[:, 1], color=\"#ffc94a\", s=30)",
      "for word in vocabulary:",
      "    x, y = embedding[index[word]]",
      "    plt.annotate(word, (x, y), fontsize=8, color=\"#e8f0ff\")",
      "plt.title(\"Word map — closeness means similar company\")",
      "plt.tight_layout()",
      "plt.show()",
      ""
    ].join("\n"),
    forklaring: `
      <h3>The problem</h3>
      <p>A model can only count. The word "cat" therefore has to become numbers before XGBoost or anything else can work with it. This chapter shows three ways, from the bluntest to the one modern language models are built on.</p>
      <h3>1. Bag of words</h3>
      <p><code>CountVectorizer</code> makes a list of every word that appears — the <em>vocabulary</em> — and then describes each sentence as a row of numbers: how many times each of those words occurs in it.</p>
      <p>If the vocabulary has 20 words, each sentence becomes 20 numbers, mostly zeros. The method is called <em>bag of words</em>, because the order disappears completely: "the dog chases the cat" and "the cat chases the dog" become exactly the same numbers. Blunt — but surprisingly useful for working out what a text is <em>about</em>.</p>
      <h3>2. TF-IDF</h3>
      <p>One problem with plain counting: words that appear in almost every sentence get high numbers without saying anything. TF-IDF plays such words down and lifts the ones that are rare in the collection but common in this particular sentence.</p>
      <p>The name means <em>term frequency – inverse document frequency</em>: how often the word appears here, divided by how many texts it appears in at all. It has been the standard method behind search engines for decades.</p>
      <h3>3. Embeddings</h3>
      <p>Both methods above treat every word as entirely unrelated to every other. "dog" and "cat" are as different as "dog" and "bicycle".</p>
      <p>Embeddings solve that with an idea that is easy to state: <strong>words that appear in the same company mean something similar.</strong> See "the dog ___ in the park" and you guess a verb, and probably one that would also fit after "the cat".</p>
      <p>Step 3 builds a <em>co-occurrence matrix</em>: for each word it counts which other words stand within two places of it. Rows in that matrix are already a kind of description of the word — only far too long, one number per word in the vocabulary.</p>
      <h3>SVD — squeezing it down</h3>
      <p><code>np.linalg.svd</code> finds the directions in the data that carry the most information, and lets us throw the rest away. From a matrix with twenty numbers per word we get two, with most of the pattern intact.</p>
      <p><code>np.log1p</code> before the SVD damps the very commonest words, which would otherwise dominate entirely. Real methods such as word2vec and GloVe do something related but more refined, and use 100–300 numbers per word instead of 2. We take two so we can draw them.</p>
      <h3>Measuring similarity</h3>
      <p><code>va @ vb</code> is the dot product, and divided by the lengths it gives <strong>cosine similarity</strong> — the angle between two word vectors. 1 means the same direction, 0 unrelated, −1 opposite. It is almost always what you measure with when comparing embeddings.</p>
      <p>The word map in step 6 shows the result: words with similar company end up near each other. With only six sentences it comes out rough — try running it again with twenty or fifty sentences and see how much clearer the groups become.</p>
      <div class="fallgrop"><strong>Worth knowing:</strong> embeddings inherit everything that is in the text they were trained on, including prejudice. Train on texts where certain professions are always mentioned alongside one gender and they end up near each other on the map, and the model carries it onward. It is a real and well-documented problem in the field.</div>
      <div class="uppgift"><strong>Exercise:</strong> write twenty sentences of your own about two clearly separate topics — say football and cooking — and run it again. Do the words fall into two groups on the map? Then try changing <code>WINDOW</code> from 2 to 1 and to 5, and see how much the window size affects the result.</div>`
  },
  {
    del: "Machine learning", titel: "Fetching data from the web", fil: "ch25_open_data.py",
    kod: [
      "import data",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "",
      "# SMHI's open data: air temperature from every station, the last hour",
      "URL = (\"https://opendata-download-metobs.smhi.se/api/version/1.0\"",
      "       \"/parameter/1/station-set/all/period/latest-hour/data.json\")",
      "",
      "try:",
      "    answer = data.fetch_json(URL)",
      "    stations = answer[\"station\"]",
      "    print(f\"Fetched {len(stations)} weather stations from SMHI.\")",
      "except Exception as error:",
      "    print(\"Could not fetch from SMHI:\", error)",
      "    print(\"Using the built-in backup data instead.\")",
      "    stations = data.backup_data()",
      "",
      "# ===== 1. Unpack: JSON in, lists out =====",
      "names, degrees, latitude = [], [], []",
      "",
      "for station in stations:",
      "    readings = station.get(\"value\")",
      "    if not readings:             # some stations report nothing",
      "        continue",
      "    try:",
      "        temp = float(readings[0][\"value\"])",
      "    except (TypeError, ValueError):",
      "        continue                 # skip broken values",
      "    names.append(station[\"name\"])",
      "    degrees.append(temp)",
      "    latitude.append(station[\"latitude\"])",
      "",
      "degrees = np.array(degrees)",
      "latitude = np.array(latitude)",
      "print(f\"{len(degrees)} stations with a valid reading.\")",
      "print()",
      "",
      "# ===== 2. Simple statistics =====",
      "print(f\"Coldest: {degrees.min():.1f} °C\")",
      "print(f\"Warmest: {degrees.max():.1f} °C\")",
      "print(f\"Mean:    {degrees.mean():.1f} °C\")",
      "print(f\"Median:  {np.median(degrees):.1f} °C\")",
      "print()",
      "",
      "# ===== 3. Top and bottom lists =====",
      "order = np.argsort(degrees)       # gives the indices in size order",
      "print(\"The coldest places:\")",
      "for i in order[:5]:",
      "    print(f\"  {names[i]:<28} {degrees[i]:6.1f} °C\")",
      "print(\"The warmest places:\")",
      "for i in order[-5:][::-1]:",
      "    print(f\"  {names[i]:<28} {degrees[i]:6.1f} °C\")",
      "print()",
      "",
      "# ===== 4. Draw =====",
      "figure, panels = plt.subplots(1, 2, figsize=(9, 3.2))",
      "",
      "panels[0].hist(degrees, bins=20, color=\"#ffc94a\")",
      "panels[0].set_title(\"Distribution of temperatures\")",
      "panels[0].set_xlabel(\"°C\")",
      "",
      "panels[1].scatter(latitude, degrees, s=12, color=\"#6ee7b7\")",
      "panels[1].set_title(\"Temperature against latitude\")",
      "panels[1].set_xlabel(\"latitude (further north ->)\")",
      "panels[1].set_ylabel(\"°C\")",
      "",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "# ===== 5. Is there a relationship? =====",
      "relationship = np.corrcoef(latitude, degrees)[0, 1]",
      "print(f\"Correlation latitude/temperature: {relationship:.2f}\")",
      "if relationship < -0.5:",
      "    print(\"Clear: the further north, the colder.\")",
      "elif relationship > 0.5:",
      "    print(\"Unusual: it is warmer in the north right now.\")",
      "else:",
      "    print(\"Weak relationship — the weather is driven by more than latitude today.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Real data instead of invented data</h3>
      <p>In chapter 22 we invented the dogs. Here the readings are fetched from SMHI's open API, collected from several hundred real weather stations within the last hour. Run the program again in an hour and you get new figures.</p>
      <p>The <code>data</code> module exists only in Pytho. It has three functions: <code>fetch_json(url)</code>, <code>fetch_text(url)</code> and <code>fetch_csv(url)</code>. On a real computer you would use the <code>requests</code> library instead, but the principle is the same.</p>
      <h3>JSON</h3>
      <p>APIs almost always answer with <strong>JSON</strong> — a text format that looks exactly like Python's dictionaries and lists, and becomes precisely that when unpacked. SMHI's answer is a dictionary with the key <code>"station"</code>, which contains a list with one dictionary per station, which in turn has a list of readings. Digging through such layers is a large part of the work with real data.</p>
      <h3>Real data is broken</h3>
      <p>Notice how much of the code is about handling rubbish. Some stations report nothing. Some have the value <code>null</code>. Some have text where a number should be. Hence <code>continue</code> in two places — skip the row and move on.</p>
      <p>This is normal, not exceptional. A large part of all data work is cleaning, and whoever skips it ends up with a model that learned from broken values.</p>
      <h3>Correlation</h3>
      <p><code>np.corrcoef</code> measures how strongly two series move together, on a scale from −1 to 1. Near −1 means that when one goes up the other goes down, which is exactly what you would expect from latitude and temperature in Sweden.</p>
      <p>But remember the most important rule in all of statistics: <strong>correlation is not causation.</strong> Latitude itself does nothing — it is the angle of the sun, the ocean currents and the air masses that lie behind it. Two things can move together without one causing the other.</p>
      <h3>Why most addresses will not work</h3>
      <p>You cannot fetch just anything. For security reasons a web page may only fetch data from servers that explicitly allow it, through a rule called <strong>CORS</strong>. Without that permission the browser blocks the request, which is why the program has a backup list built in.</p>
      <p>It is not a fault in your code and cannot be coded around — it is a protection that stops a page from quietly reading data out of your logged-in services. On a real computer with Python installed the rule does not apply, because then it is not a web page asking.</p>
      <h3>Swedish data sources to try</h3>
      <ul>
        <li><strong>SMHI</strong> — weather, temperature, precipitation, wind. Swap <code>parameter/1</code> for <code>parameter/7</code> for precipitation or <code>parameter/4</code> for wind speed.</li>
        <li><strong>SCB</strong> — population, wages, housing, prices. Sweden's official statistics.</li>
        <li><strong>Trafikverket</strong> — train delays and roadworks. Requires a free API key.</li>
        <li><strong>Naturvårdsverket and Sveriges dataportal</strong> — air quality, environment, municipal statistics.</li>
      </ul>
      <div class="uppgift"><strong>Exercise:</strong> change the parameter in the address to 7 (precipitation) or 4 (wind) and run again — which quantity varies most across the country? Then combine two fetches: read both temperature and wind, match the stations by name, and investigate whether it is colder where the wind is stronger.</div>`
  }
);

/* Engelska kapitel 26-29. */
window.PYTHONLAB_SPRAK.en.kapitel.push(
  {
    del: "Final project", titel: "A weather map in 3D", fil: "ch26_weather_map.py",
    kod: [
      "import data",
      "import scene",
      "import math",
      "",
      "BASE = \"https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/\"",
      "END = \"/station-set/all/period/latest-hour/data.json\"",
      "",
      "def read_parameter(number):",
      "    \"\"\"Fetches one parameter and returns {station name: (value, lat, lon)}.\"\"\"",
      "    answer = data.fetch_json(BASE + str(number) + END)",
      "    result = {}",
      "    for st in answer[\"station\"]:",
      "        reading = st.get(\"value\")",
      "        if not reading:",
      "            continue",
      "        raw_value = reading[0].get(\"value\")",
      "        if raw_value in (None, \"\"):",
      "            continue",
      "        result[st[\"name\"]] = (raw_value, st[\"latitude\"], st[\"longitude\"])",
      "    return result",
      "",
      "try:",
      "    temp = read_parameter(1)      # air temperature",
      "    print(f\"Fetched {len(temp)} stations from SMHI.\")",
      "except Exception as error:",
      "    print(\"Could not reach SMHI:\", error)",
      "    temp = {s[\"name\"]: (s[\"value\"][0][\"value\"], s[\"latitude\"], 15.0)",
      "            for s in data.backup_data()}",
      "",
      "# ===== 1. Clean up and convert to numbers =====",
      "stations = []",
      "for names, (value, lat, lon) in temp.items():",
      "    try:",
      "        stations.append((names, float(value), lat, lon))",
      "    except (TypeError, ValueError):",
      "        pass",
      "",
      "degrees = [s[1] for s in stations]",
      "print(f\"{len(stations)} valid readings, {min(degrees):.1f} to {max(degrees):.1f} °C\")",
      "print()",
      "",
      "# ===== 2. Convert Sweden into scene coordinates =====",
      "# Latitude 55-69 degrees north, longitude 11-24 degrees east.",
      "SCALE = 1.8",
      "",
      "def to_scene(lat, lon):",
      "    x = (lon - 17.5) * SCALE",
      "    z = -(lat - 62.0) * SCALE        # minus: north should end up at the back",
      "    return x, z",
      "",
      "# ===== 3. A colour scale from blue to red =====",
      "coldest_value, warmest_value = min(degrees), max(degrees)",
      "",
      "def colour_for(temp_c):",
      "    share = (temp_c - coldest_value) / max(0.1, warmest_value - coldest_value)   # 0 to 1",
      "    red = int(60 + share * 195)",
      "    green = int(90 + (1 - abs(share - 0.5) * 2) * 100)",
      "    blue = int(255 - share * 200)",
      "    return f\"#{red:02x}{green:02x}{blue:02x}\"",
      "",
      "# ===== 4. Build the scene =====",
      "scene.start()",
      "scene.background(\"#0a1526\")",
      "scene.ground(46, \"#16294a\")",
      "scene.camera(0, 16, 26)",
      "",
      "# The outline of Sweden — scene.sweden takes your own conversion function",
      "scene.sweden(to_scene, color=\"#7fa4dd\")",
      "",
      "bars = []",
      "for names, degree, lat, lon in stations:",
      "    x, z = to_scene(lat, lon)",
      "    height = (degree - coldest_value) * 0.35 + 0.3",
      "    bars.append(scene.bar(x, z, height, color=colour_for(degree), width=0.34))",
      "",
      "# Mark the extremes",
      "coldest = min(stations, key=lambda s: s[1])",
      "warmest = max(stations, key=lambda s: s[1])",
      "for st, colour in [(coldest, \"#8fb4ff\"), (warmest, \"#ff7d6b\")]:",
      "    x, z = to_scene(st[2], st[3])",
      "    scene.marker(x, (st[1] - coldest_value) * 0.35 + 1.2, z, color=colour, size=1.4)",
      "",
      "print(f\"Coldest: {coldest[0]} {coldest[1]:.1f} °C\")",
      "print(f\"Warmest: {warmest[0]} {warmest[1]:.1f} °C\")",
      "",
      "# ===== 5. A little weather in the air =====",
      "scene.sun(-16, 13, -8, radius=1.4)",
      "for i in range(6):",
      "    scene.cloud(-14 + i * 5.5, 9 + (i % 3) * 1.2, -6 + (i % 2) * 8,",
      "              size=1.1).drift(0.35)",
      "",
      "# ===== 6. Let the bars grow into place =====",
      "target_heights = [(s - coldest_value) * 0.35 + 0.3 for s in degrees]",
      "",
      "def animate(t):",
      "    share = min(1.0, t / 2.5)",
      "    smooth = share * share * (3 - 2 * share)     # a soft start and stop",
      "    for bar, target in zip(bars, target_heights):",
      "        bar.set_height(target * smooth)",
      "",
      "scene.every_frame(animate)",
      "print()",
      "print(\"Drag with the mouse to look around, scroll to fly back and forth.\")",
      "print(\"The arrow keys fly like a drone: forward is wherever you are looking.\")",
      "print(\"R or Reset view brings you back. Fullscreen is in the top right.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Everything you know, in one program</h3>
      <p>This chapter uses nearly every technique from the course: functions, dictionaries, error handling, comprehensions, mathematics and 3D. What is different from before is that the data is real and that you do not know in advance what it looks like.</p>
      <h3>From globe to scene</h3>
      <p>SMHI gives latitude and longitude in degrees. The scene has coordinates around the origin. <code>to_scene</code> converts between the systems: subtract the middle of Sweden and multiply by a scale.</p>
      <p>The minus sign on <code>z</code> is not arbitrary. In three.js positive z points <em>towards</em> the viewer, so without the minus the north of Sweden would end up at the front and the map would be mirrored. Sign errors like that are among the commonest things when you connect data to graphics — and they show up immediately, which is fortunate.</p>
      <h3>Height and colour carry the same information</h3>
      <p>Each bar gets both a height and a colour from the temperature. This is called <em>redundant encoding</em> and is deliberate: height reads well from the side, colour well from above. Turn the map and at least one of them always works.</p>
      <p><code>colour_for</code> first converts the temperature to a share between 0 and 1, then mixes the colour from it. <code>f"#{red:02x}"</code> writes the number as hexadecimal with two digits — the format colours are given in on the web.</p>
      <h3>Smooth animation</h3>
      <p><code>share * share * (3 - 2 * share)</code> looks like magic but is a well-known curve called <em>smoothstep</em>. It goes from 0 to 1 just as <code>share</code> does, but starts and stops gently instead of jerking. Almost all motion in games and interfaces passes through some such curve — straight linear movement looks mechanical to the eye.</p>
      <h3>The camera</h3>
      <p>The camera is free. Dragging with the mouse turns the view around the camera's own position — you can turn all the way round on the spot, not just orbit the map. The mouse wheel flies back and forth along your line of sight.</p>
      <p>The arrow keys fly like a drone: forward goes in the direction you are looking, so if you point downwards you descend. Left and right always keep your height, and Page Up and Page Down go straight up and down. R or the Reset view button brings you back to the starting position.</p>
      <p><code>scene.fullscreen()</code> or the button in the 3D tab fills the whole screen. Escape brings you back.</p>
      <div class="uppgift"><strong>Exercise:</strong> swap parameter 1 for 4 (wind speed) or 6 (humidity) and watch the map change character. Then rebuild it so that <em>height</em> shows temperature and <em>colour</em> shows wind — two quantities in one picture.</div>`
  },
  {
    del: "Final project", titel: "The model in the room", fil: "ch27_model_in_the_room.py",
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
      "BASE = \"https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/\"",
      "END = \"/station-set/all/period/latest-hour/data.json\"",
      "",
      "def read_parameter(number):",
      "    answer = data.fetch_json(BASE + str(number) + END)",
      "    ut = {}",
      "    for st in answer[\"station\"]:",
      "        m = st.get(\"value\")",
      "        if m and m[0].get(\"value\") not in (None, \"\"):",
      "            ut[st[\"name\"]] = (m[0][\"value\"], st[\"latitude\"], st[\"longitude\"])",
      "    return ut",
      "",
      "try:",
      "    temp = read_parameter(1)",
      "except Exception as error:",
      "    print(\"Using backup data:\", error)",
      "    temp = {s[\"name\"]: (s[\"value\"][0][\"value\"], s[\"latitude\"], 15.0)",
      "            for s in data.backup_data()}",
      "",
      "# ===== 1. Build X and y =====",
      "X, y, names = [], [], []",
      "for n, (v, lat, lon) in temp.items():",
      "    try:",
      "        y.append(float(v))",
      "        X.append([lat, lon])",
      "        names.append(n)",
      "    except (TypeError, ValueError):",
      "        pass",
      "",
      "X = np.array(X)",
      "y = np.array(y)",
      "print(f\"{len(y)} stations. Features: latitude and longitude.\")",
      "print()",
      "",
      "# ===== 2. Two models on the same data =====",
      "linear = LinearRegression().fit(X, y)",
      "trees = GradientBoostingRegressor(n_estimators=120, max_depth=3,",
      "                                 random_state=0).fit(X, y)",
      "",
      "for label, model in [(\"Linear regression\", linear), (\"Boosted trees\", trees)]:",
      "    guess = model.predict(X)",
      "    print(f\"{label:<20} mean error {mean_absolute_error(y, guess):.2f} °C\")",
      "",
      "slope = linear.coef_[0]",
      "print(f\"\\nThe linear model says: {slope:.2f} °C per degree of latitude north.\")",
      "print()",
      "",
      "# ===== 3. Draw three charts, one per screen =====",
      "guess_linear = linear.predict(X)",
      "guess_trees = trees.predict(X)",
      "residual = y - guess_linear",
      "",
      "def tidy(panel):",
      "    panel.grid(alpha=0.25, linewidth=0.7)",
      "    panel.set_axisbelow(True)",
      "    for edge in (\"top\", \"right\"):",
      "        panel.spines[edge].set_visible(False)",
      "",
      "# (a) the readings and the model line",
      "fig_a, panel = plt.subplots(figsize=(7.2, 5.4))",
      "panel.scatter(X[:, 0], y, s=34, color=\"#1f9d55\", alpha=0.8,",
      "             edgecolors=\"white\", linewidths=0.6, label=\"weather station\")",
      "line_lat = np.linspace(X[:, 0].min(), X[:, 0].max(), 60)",
      "line_points = np.column_stack([line_lat, np.full(60, X[:, 1].mean())])",
      "panel.plot(line_lat, linear.predict(line_points),",
      "          color=\"#e0a21a\", lw=3.5, label=\"linear model\")",
      "panel.set_xlabel(\"latitude (further north ->)\")",
      "panel.set_ylabel(\"temperature (°C)\")",
      "panel.set_title(f\"Reading against model\\n{slope:.2f} °C per degree of latitude\", fontsize=13)",
      "panel.legend(fontsize=10, frameon=False)",
      "tidy(panel)",
      "fig_a.tight_layout()",
      "",
      "# (b) accuracy picture for both models",
      "fig_b, panel = plt.subplots(figsize=(7.2, 5.4))",
      "limits = [min(y.min(), guess_trees.min()), max(y.max(), guess_trees.max())]",
      "panel.plot(limits, limits, \"--\", color=\"#9aa7bd\", lw=1.8, zorder=1)",
      "panel.scatter(y, guess_linear, s=30, color=\"#e0a21a\", alpha=0.7,",
      "             label=\"linear\", zorder=2)",
      "panel.scatter(y, guess_trees, s=30, color=\"#c74a38\", alpha=0.7,",
      "             label=\"boosted trees\", zorder=3)",
      "panel.set_xlabel(\"actual temperature (°C)\")",
      "panel.set_ylabel(\"the model guess (°C)\")",
      "panel.set_title(\"The closer to the line, the better\", fontsize=13)",
      "panel.legend(fontsize=10, frameon=False)",
      "tidy(panel)",
      "fig_b.tight_layout()",
      "",
      "# (c) how the errors are distributed",
      "fig_c, panel = plt.subplots(figsize=(7.2, 5.4))",
      "panel.hist(residual, bins=24, color=\"#4a7fd4\", alpha=0.85)",
      "panel.axvline(0, color=\"#c74a38\", lw=2.5)",
      "panel.set_xlabel(\"error in degrees (actual - guessed)\")",
      "panel.set_ylabel(\"number of stations\")",
      "panel.set_title(\"The linear model's errors\", fontsize=13)",
      "tidy(panel)",
      "fig_c.tight_layout()",
      "",
      "# ===== 4. Build the scene with the model surface =====",
      "# Same colours as in the charts: green = measured, yellow = the model guess.",
      "MEASURED = \"#3ddc84\"",
      "MODEL = \"#ffc94a\"",
      "OUTLINE = \"#7c8ba5\"",
      "",
      "scene.start()",
      "scene.background(\"#0a1526\")",
      "scene.camera(0, 14, 38)",
      "scene.ground(46, \"#16294a\")",
      "",
      "SCALE = 1.8",
      "def to_scene(lat, lon):",
      "    return (lon - 17.5) * SCALE, -(lat - 62.0) * SCALE",
      "",
      "scene.sweden(to_scene, color=OUTLINE)",
      "",
      "coldest_value, warmest_value = y.min(), y.max()",
      "def height_for(t):",
      "    return (t - coldest_value) * 0.35 + 0.3",
      "",
      "# The readings as wide green bars",
      "for i in range(len(y)):",
      "    x, z = to_scene(X[i, 0], X[i, 1])",
      "    scene.bar(x, z, height_for(y[i]), color=MEASURED, width=0.34)",
      "",
      "# The model guess as a grid of narrow yellow bars.",
      "# scene.in_sweden() filters out points at sea and in neighbouring countries.",
      "for lat in np.arange(55.5, 69.5, 1.0):",
      "    for lon in np.arange(11.5, 24.5, 1.2):",
      "        if not scene.in_sweden(lat, lon):",
      "            continue",
      "        guessed = float(linear.predict([[lat, lon]])[0])",
      "        x, z = to_scene(lat, lon)",
      "        scene.bar(x, z, height_for(guessed), color=MODEL, width=0.13)",
      "",
      "# ===== 5. A legend set into the floor beside the map =====",
      "fig_legend, panel = plt.subplots(figsize=(6.0, 3.2))",
      "entries = [",
      "    (MEASURED, \"Measured temperature\", \"wide bars, one per station\"),",
      "    (MODEL, \"The model guess\", \"narrow bars in an even grid\"),",
      "    (OUTLINE, \"The outline of Sweden\", \"a thin line along the ground\"),",
      "]",
      "for i, (colour, heading, subtitle) in enumerate(entries):",
      "    height = 0.74 - i * 0.26",
      "    panel.add_patch(plt.Rectangle((0.05, height - 0.045), 0.09, 0.12,",
      "                                 color=colour, transform=panel.transAxes))",
      "    panel.text(0.20, height + 0.055, heading, transform=panel.transAxes,",
      "              fontsize=14, va=\"center\", fontweight=\"bold\")",
      "    panel.text(0.20, height - 0.02, subtitle, transform=panel.transAxes,",
      "              fontsize=11, va=\"center\", color=\"#5b6b85\")",
      "panel.set_title(\"What the bars mean\", fontsize=15, loc=\"left\")",
      "panel.axis(\"off\")",
      "fig_legend.tight_layout()",
      "",
      "# A flat panel lying down: -90 degrees around the x axis puts it in the floor.",
      "# The floor is 46 x 46, that is -23 to +23. The panel is drawn with a frame",
      "# around the image, so we allow for it when placing it flush in the corner.",
      "FLOOR = 23",
      "LEG_WIDTH, LEG_DEPTH = 19.0, 10.1",
      "FRAME = 1.16                     # the frame is 16 % larger than the image",
      "",
      "leg_x = FLOOR - LEG_WIDTH * FRAME / 2",
      "leg_z = FLOOR - LEG_DEPTH * FRAME / 2",
      "",
      "legend = scene.panel(leg_x, 0.05, leg_z, width=LEG_WIDTH, height=LEG_DEPTH,",
      "                    image=scene.chart_to_image(fig_legend))",
      "legend.rotate(-math.pi / 2, 0, 0)",
      "plt.close(fig_legend)",
      "",
      "# ===== 6. Three screens side by side =====",
      "# The side screens are angled 20 degrees towards the middle.",
      "scene.chart_screen(-15.5, 15, -19, width=11, height=8.2,",
      "                  figure=fig_a, turn=20)",
      "scene.chart_screen(0, 15, -23, width=11, height=8.2, figure=fig_b)",
      "scene.chart_screen(15.5, 15, -19, width=11, height=8.2,",
      "                  figure=fig_c, turn=-20)",
      "",
      "scene.look_at(0, 6, -6)      # aim the view between the map and the screens",
      "",
      "print(\"Wide green bars = measured. Narrow yellow = the model guess.\")",
      "print(\"The legend is set into the floor, bottom right.\")",
      "print()",
      "print(\"Steering: drag with the mouse to look around, scroll to fly.\")",
      "print(\"The arrow keys fly like a drone: forward is wherever you are looking.\")",
      "print(\"Press R or Reset view to come back here.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Seeing a model instead of reading about it</h3>
      <p>A mean error of 2.1 °C says almost nothing until you see what it means. Here the model's guesses stand next to reality in the same room: green bars are measured temperatures, yellow ones are what the linear model believes about each place.</p>
      <p>Look at the shape. The yellow ones form a perfect plane sloping evenly from south to north — which is precisely what linear regression <em>can</em> do, and nothing else. The green ones jump up and down: the coast is milder than inland, the mountains colder than anything. The difference between the two patterns <strong>is</strong> the model's error, visible as distance.</p>
      <h3>Two models, two kinds of error</h3>
      <p><code>LinearRegression</code> fits a plane: temperature = a·latitude + b·longitude + c. Three numbers, and that is the whole model. It is never especially accurate, but it can be understood — <code>coef_[0]</code> states outright how many degrees colder it gets per degree of latitude north.</p>
      <p><code>GradientBoostingRegressor</code> builds 120 trees that correct each other, exactly as XGBoost did in chapter 22. It gets a far lower error, but you can no longer point at a number and say what it learned.</p>
      <p>That is a real trade-off in the field, not an exercise: <strong>simple and explainable, or accurate and opaque.</strong> In medicine and law the first is often chosen even when the second is better on paper.</p>
      <div class="fallgrop"><strong>Note:</strong> both models are measured here on the same data they were trained on, which chapter 22 warned about. The tree model therefore looks better than it is. An honest measure needs <code>train_test_split</code> — try adding it.</div>
      <h3>A chart as a texture</h3>
      <p><code>scene.chart_screen(...)</code> takes the matplotlib figure you just drew, turns it into an image, and puts it on a screen in the 3D room.</p>
      <p>Technically the route is: matplotlib renders the figure to a PNG in memory, the image is encoded as text with base64, the text is passed over to JavaScript, three.js loads it as a <em>texture</em> and puts it on a plane. Texture means exactly that — an image dressed onto a surface, the same technique that gives a game character a face.</p>
      <p>The point is that the map and the charts belong together. Instead of switching between two tabs, the analysis stands on screens behind the landscape it describes, and you can turn both at once.</p>
      <div class="uppgift"><strong>Exercise:</strong> add longitude to the chart — can you see the coast deviating? Then swap the yellow surface for the tree model's guesses instead of the linear ones. Does it follow the green bars better? And add a third feature, such as the station's height above sea level if you can find it in SMHI's data.</div>`
  },
  {
    del: "Final project", titel: "A small language model", fil: "ch28_language_model.py",
    kod: [
      "import data",
      "import random",
      "import re",
      "from collections import defaultdict, Counter",
      "",
      "# SMHI's weather warnings contain text written by meteorologists.",
      "LIVE = \"https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json\"",
      "EXAMPLE = \"https://opendata-download-warnings.smhi.se/ibww/test/test_{}.json\"",
      "",
      "# ===== 1. Dig out every piece of Swedish text from unknown JSON =====",
      "# We do not know exactly how the answer is structured, so we walk",
      "# hela strukturen och plockar out varje textbit vi hittar.",
      "def collect_text(node, found):",
      "    if isinstance(node, dict):",
      "        for key, value in node.items():",
      "            if key == \"en\":          # skip the English versions",
      "                continue",
      "            collect_text(value, found)",
      "    elif isinstance(node, list):",
      "        for item in node:",
      "            collect_text(item, found)",
      "    elif isinstance(node, str):",
      "        if len(node) > 40 and \" \" in node:   # only real sentences",
      "            found.append(node)",
      "    return found",
      "",
      "# ===== 2. Fetch — live warnings first, otherwise SMHI's examples =====",
      "raw_text = []",
      "try:",
      "    raw_text = collect_text(data.fetch_json(LIVE), [])",
      "    print(f\"Live warnings right now: {len(raw_text)} pieces of text.\")",
      "except Exception as error:",
      "    print(\"Could not fetch live warnings:\", error)",
      "",
      "if len(raw_text) < 5:",
      "    print(\"Too little text. Fetching SMHI's example warnings instead.\")",
      "    for number in range(1, 6):",
      "        try:",
      "            raw_text += collect_text(data.fetch_json(EXAMPLE.format(number)), [])",
      "        except Exception:",
      "            pass",
      "",
      "if not raw_text:",
      "    print(\"No text could be fetched — using the built-in backup text.\")",
      "    raw_text = [",
      "        \"Gusts of around 25 metres per second are expected during the night into Wednesday.\",",
      "        \"Gusts of around 20 metres per second are expected during the afternoon.\",",
      "        \"Strong gusts are expected as the low pressure system passes.\",",
      "        \"Snowfall giving 15 to 25 centimetres of fresh snow over the day.\",",
      "        \"Snowfall giving 5 to 10 centimetres of fresh snow during the morning.\",",
      "        \"The snowfall is expected to ease during the evening and the night into Thursday.\",",
      "        \"Heavy rain with locally large amounts during the afternoon.\",",
      "        \"Heavy rain is expected in the south during the night into Friday.\",",
      "        \"The rain turns to snowfall during the evening in the northern parts.\",",
      "        \"The precipitation turns to rain tomorrow in the southern parts.\",",
      "        \"High water flows in smaller watercourses over the next few days.\",",
      "        \"High water flows are expected in the larger rivers over the weekend.\",",
      "        \"The water flows are expected to peak during the night into Sunday.\",",
      "        \"Black ice can form when the rain falls on cold road surfaces.\",",
      "        \"Slippery conditions can arise during the morning along with light snowfall.\",",
      "        \"Strong gusts combined with snowfall give limited visibility.\",",
      "        \"Snowfall combined with wind gives drifting snow over open ground.\",",
      "        \"Risk of drifting snow over open ground during the evening and night.\",",
      "        \"Risk of flooding in smaller watercourses during the afternoon.\",",
      "        \"Risk of difficult weather in the western parts over the weekend.\",",
      "        \"The wind is expected to ease tomorrow as the low pressure system moves away.\",",
      "        \"The temperature falls during the night and the roads become slippery.\",",
      "        \"Strong winds are expected along the coast during the afternoon and evening.\",",
      "        \"Locally large amounts of rain can cause problems in the southern parts.\",",
      "        \"The situation is expected to improve tomorrow across the whole country.\",",
      "        \"Be aware of falling branches during strong gusts.\",",
      "    ]",
      "",
      "print(f\"{len(raw_text)} pieces of text to train on in total.\")",
      "print()",
      "print(\"A sample of SMHI's text:\")",
      "print(\" \", raw_text[0][:150])",
      "print()",
      "",
      "# ===== 3. Clean the text and split it into sentences =====",
      "sentences = []",
      "for passage in raw_text:",
      "    passage = re.sub(r\"<[^>]+>\", \" \", passage)      # strip any HTML",
      "    passage = re.sub(r\"\\s+\", \" \", passage)",
      "    for sentence in re.split(r\"(?<=[.!?])\\s+\", passage):",
      "        words = re.findall(r\"[\\wåäöÅÄÖ-]+\", sentence.lower())",
      "        if len(words) >= 4:",
      "            sentences.append(words)",
      "",
      "print(f\"{len(sentences)} sentences after cleaning.\")",
      "all_words = [o for m in sentences for o in m]",
      "print(f\"{len(all_words)} words, of which {len(set(all_words))} are distinct.\")",
      "print()",
      "",
      "commonest = Counter(all_words).most_common(8)",
      "print(\"The commonest words in SMHI's warning language:\")",
      "for word, count in commonest:",
      "    print(f\"   {word:<14} {count}\")",
      "print()",
      "",
      "# ===== 4. Train the model =====",
      "# Trigram: two words back gives better sentence structure than one.",
      "START = (\"<start>\", \"<start>\")",
      "followers = defaultdict(Counter)",
      "",
      "for words in sentences:",
      "    previous = START",
      "    for word in words + [\"<slut>\"]:",
      "        followers[previous][word] += 1",
      "        previous = (previous[1], word)",
      "",
      "print(f\"The model knows {len(followers)} word pairs.\")",
      "sample = [n for n in followers if n[0] != \"<start>\"][:1]",
      "if sample:",
      "    print(f\"After {sample[0]} comes:\", followers[sample[0]].most_common(3))",
      "print()",
      "",
      "# ===== 5. Let the model write =====",
      "def generate(max_words=26, temperature=1.0, seed=None):",
      "    rng = random.Random(seed)",
      "    previous = START",
      "    out = []",
      "    for _ in range(max_words):",
      "        choices = followers.get(previous)",
      "        if not choices:",
      "            break",
      "        candidates = list(choices.keys())",
      "        weights = [count ** (1.0 / temperature) for count in choices.values()]",
      "        word = rng.choices(candidates, weights=weights)[0]",
      "        if word == \"<slut>\":",
      "            break",
      "        out.append(word)",
      "        previous = (previous[1], word)",
      "    if not out:",
      "        return \"(the model found no continuation)\"",
      "    return out[0].capitalize() + \" \" + \" \".join(out[1:]) + \".\"",
      "",
      "print(\"=\" * 58)",
      "print(\"CAUTIOUS MODEL  (temperature 0.4 — takes no risks)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generate(temperature=0.4, seed=i))",
      "print()",
      "",
      "print(\"=\" * 58)",
      "print(\"BALANCED MODEL  (temperature 1.0 — follows the probabilities)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generate(temperature=1.0, seed=i + 10))",
      "print()",
      "",
      "print(\"=\" * 58)",
      "print(\"WILD MODEL  (temperature 2.5 — takes frequent chances)\")",
      "print(\"=\" * 58)",
      "for i in range(4):",
      "    print(\" \", generate(temperature=2.5, seed=i + 20))",
      "print()",
      "",
      "# ===== 6. How much of it is copied? =====",
      "# A trigram model can NEVER invent a new run of three words — it always",
      "# picks the next word from those that followed that very pair in the text.",
      "# So we measure longer stretches instead: five words in a row.",
      "WINDOW = 5",
      "",
      "original_text = set()",
      "for words in sentences:",
      "    for i in range(len(words) - WINDOW + 1):",
      "        original_text.add(tuple(words[i:i + WINDOW]))",
      "",
      "fresh, total = 0, 0",
      "for i in range(60):",
      "    words = generate(temperature=1.0, seed=100 + i).lower().rstrip(\".\").split()",
      "    for j in range(len(words) - WINDOW + 1):",
      "        total += 1",
      "        if tuple(words[j:j + WINDOW]) not in original_text:",
      "            fresh += 1",
      "",
      "if total:",
      "    print(f\"Of {total} stretches of {WINDOW} words, {fresh} were new \"",
      "          f\"({fresh / total * 100:.0f} %).\")",
      "    print(\"The rest are word orders the model saw in the training text.\")",
      "    print()",
      "    print(\"The longer the stretch you measure, the more copied it looks.\")",
      "    print(\"Try changing WINDOW to 4, 6 and 8.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>Real language this time</h3>
      <p>In chapter 22 we invented the data. Here the model is trained on text that meteorologists at SMHI have actually written — warnings about storms, snowfall and high water flows, fetched from their open warnings API.</p>
      <p>If there are no live warnings right now, SMHI's example warnings are fetched instead. It is the same kind of text, published so that developers can test against it. If neither works, a small backup text is built in.</p>
      <h3>Digging through unknown JSON</h3>
      <p>We do not know exactly how SMHI has structured its answer, and it may change. So <code>collect_text</code> searches the whole structure recursively: if the node is a dictionary, go into every value; if it is a list, go into every item; if it is a string long enough to be a sentence, keep it.</p>
      <p>That is recursion from chapter 15 applied to a real problem. The function does not need to know how deep the structure goes or what the fields are called — it searches until it finds text. The key <code>"en"</code> is skipped, otherwise English translations come along and mix the languages.</p>
      <h3>Cleaning with regular expressions</h3>
      <p><code>re.sub(r"&lt;[^&gt;]+&gt;", " ", text)</code> strips out HTML tags that may come along. <code>re.split(r"(?&lt;=[.!?])\s+", text)</code> splits into sentences after a full stop, exclamation mark or question mark. <code>re.findall(r"[\wåäöÅÄÖ-]+", ...)</code> picks out the words and keeps the Swedish letters, which would otherwise be lost — SMHI's live text is in Swedish even when the interface is in English.</p>
      <h3>Trigrams instead of bigrams</h3>
      <p>Chapter 22 looked one word back. Here the key is a <strong>pair</strong> of words, that is, two words of context. The sentences become noticeably more grammatical — the model knows the difference between what can follow "risk of" and what can follow "turns into".</p>
      <p>The price shows up in step 6: the more context the model has, the more the result resembles the training text. With a long enough memory it simply copies. That is the trade-off all language modelling wrestles with.</p>
      <h3>Measure how much is new</h3>
      <p>The last step compares the model's sentences against the training text. One detail makes the measurement tricky: a trigram model can <em>never</em> invent a new run of three words, because it always picks the next word from those that actually followed that pair. Measure triples and the answer is guaranteed to be zero per cent, however good the model is.</p>
      <p>So we measure longer stretches, five words in a row. There the model can combine pieces from different sentences into something that appeared nowhere. Change <code>WINDOW</code> to 4, 6 and 8 and watch the figure fall — the longer the stretch you demand, the more copied the result looks.</p>
      <p>The same question is asked of the real large models, and that is where the discussion about copyright and plagiarism begins. Now you can measure it yourself in thirty lines of code — and you have also seen how much the answer depends on how you choose to measure.</p>
      <h3>Temperature</h3>
      <p>Three runs with the same model but different temperatures. A low temperature reinforces the commonest words — the result is predictable but well formed. A high temperature evens out the probabilities and the model takes chances that often derail. It is the same dial found in every chat model.</p>
      <div class="fallgrop"><strong>Source:</strong> the text comes from SMHI's open data, which may be used freely under Creative Commons Attribution. The condition is that SMHI is credited as the source — worth knowing that open data almost always has conditions, even when it is free.</div>
      <div class="uppgift"><strong>Exercise:</strong> switch back to bigrams by using just one word as the key, and compare both the language quality and the proportion that comes out new. Then expand the corpus — fetch more example warnings or paste in a text of your own — and see whether the model improves with more data.</div>`
  },
  {
    del: "Final project", titel: "Transformers", fil: "ch29_attention.py",
    kod: [
      "import data",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "import re",
      "",
      "# The same text as in chapter 28: SMHI's weather warnings.",
      "LIVE = \"https://opendata-download-warnings.smhi.se/ibww/api/version/1/warning.json\"",
      "EXAMPLE = \"https://opendata-download-warnings.smhi.se/ibww/test/test_{}.json\"",
      "",
      "def collect_text(node, found):",
      "    if isinstance(node, dict):",
      "        for key, value in node.items():",
      "            if key != \"en\":",
      "                collect_text(value, found)",
      "    elif isinstance(node, list):",
      "        for item in node:",
      "            collect_text(item, found)",
      "    elif isinstance(node, str) and len(node) > 40 and \" \" in node:",
      "        found.append(node)",
      "    return found",
      "",
      "raw_text = []",
      "try:",
      "    raw_text = collect_text(data.fetch_json(LIVE), [])",
      "except Exception:",
      "    pass",
      "if len(raw_text) < 5:",
      "    for number in range(1, 6):",
      "        try:",
      "            raw_text += collect_text(data.fetch_json(EXAMPLE.format(number)), [])",
      "        except Exception:",
      "            pass",
      "if not raw_text:",
      "    raw_text = [",
      "        \"Strong gusts are expected during the night into Wednesday in the south.\",",
      "        \"Snowfall giving 15 centimetres of fresh snow is expected over the day.\",",
      "        \"Heavy rain with locally large amounts is expected during the afternoon.\",",
      "        \"High water flows in smaller watercourses are expected over the next few days.\",",
      "        \"The rain turns to snowfall during the evening in the northern parts.\",",
      "        \"The wind is expected to ease tomorrow as the low pressure system moves away.\",",
      "        \"Risk of drifting snow over open ground during the evening and night.\",",
      "        \"Slippery conditions can arise in the morning when rain falls on cold roads.\",",
      "        \"The snowfall is expected to ease during the evening in the western parts.\",",
      "        \"Locally large amounts of rain can cause flooding in smaller watercourses.\",",
      "        \"Heavy snowfall is expected in the northern parts during the night into Thursday.\",",
      "        \"The rain is expected to ease during the afternoon in the southern parts.\",",
      "    ]",
      "",
      "# ===== 1. Dela texten i sentences och word =====",
      "sentences = []",
      "for passage in raw_text:",
      "    passage = re.sub(r\"<[^>]+>\", \" \", passage)",
      "    for sentence in re.split(r\"(?<=[.!?])\\s+\", passage):",
      "        words = re.findall(r\"[\\wåäöÅÄÖ-]+\", sentence.lower())",
      "        if 4 <= len(words) <= 20:",
      "            sentences.append(words)",
      "",
      "vocabulary = sorted({o for m in sentences for o in m})",
      "index = {o: i for i, o in enumerate(vocabulary)}",
      "print(f\"{len(sentences)} sentences, {len(vocabulary)} distinct words.\")",
      "print()",
      "",
      "# ===== 2. Embeddings from the text — the same method as in chapter 24 =====",
      "N = len(vocabulary)",
      "co_occurrence = np.zeros((N, N))",
      "for words in sentences:",
      "    for i, word in enumerate(words):",
      "        for j in range(max(0, i - 3), min(len(words), i + 4)):",
      "            if i != j:",
      "                co_occurrence[index[word], index[words[j]]] += 1",
      "",
      "U, S, _ = np.linalg.svd(np.log1p(co_occurrence))",
      "E = U[:, :16] * S[:16]",
      "E = E / (np.linalg.norm(E, axis=1, keepdims=True) + 1e-9)",
      "print(\"Each word is now 16 numbers, computed from the text.\")",
      "print()",
      "",
      "# ===== 3. Attention: the heart of a transformer =====",
      "# Each word asks: which of the earlier words are relevant to me?",
      "# The answer is the similarity between the words' vectors.",
      "def softmax(x):",
      "    e = np.exp(x - x.max(axis=-1, keepdims=True))",
      "    return e / e.sum(axis=-1, keepdims=True)",
      "",
      "def attention(words, mask=True):",
      "    X = np.array([E[index[o]] for o in words])",
      "    scores = X @ X.T * 4                      # similarity between every pair of words",
      "    np.fill_diagonal(scores, -1e9)             # the word itself does not count",
      "    if mask:                               # words may only look backwards",
      "        scores = np.where(np.triu(np.ones_like(scores), 0) > 0, -1e9, scores)",
      "    forbidden = scores < -1e8",
      "    weights = softmax(scores)",
      "    weights[forbidden] = np.nan                # mark what has been switched off",
      "    return weights",
      "",
      "sentence = max(sentences, key=len)[:11]",
      "weights = attention(sentence)",
      "",
      "print(\"Sentence:\", \" \".join(sentence))",
      "print()",
      "print(\"Which earlier word does each word look at most?\")",
      "for i in range(1, len(sentence)):",
      "    others = weights[i, :i].copy()             # ignore the word itself",
      "    best = int(np.argmax(others))",
      "    print(f\"   {sentence[i]:<12} -> {sentence[best]:<12} ({others[best] * 100:.0f} %)\")",
      "print()",
      "",
      "# ===== 4. Draw the attention =====",
      "figure, panels = plt.subplots(1, 2, figsize=(13, 5.4))",
      "",
      "for panel, mask, heading in [",
      "    (panels[0], True, \"With a mask\\neach word sees only backwards\"),",
      "    (panels[1], False, \"Without a mask\\neach word sees the whole sentence\"),",
      "]:",
      "    m = attention(sentence, mask=mask)",
      "    colours = plt.get_cmap(\"YlGnBu\").copy()",
      "    colours.set_bad(\"#d8dee9\")               # grey where nothing may be seen",
      "    image = panel.imshow(m, cmap=colours, vmin=0)",
      "    panel.set_xticks(range(len(sentence)))",
      "    panel.set_xticklabels(sentence, rotation=55, ha=\"right\", fontsize=9)",
      "    panel.set_yticks(range(len(sentence)))",
      "    panel.set_yticklabels(sentence, fontsize=9)",
      "    panel.set_title(heading, fontsize=12)",
      "    figure.colorbar(image, ax=panel, fraction=0.046)",
      "",
      "panels[0].set_ylabel(\"the word asking\")",
      "panels[0].set_xlabel(\"looks at\")",
      "panels[1].set_xlabel(\"looks at\")",
      "plt.tight_layout()",
      "plt.show()",
      "",
      "print(\"A pale square = low attention. Dark = high.\")",
      "print(\"The grey area is masked — the words may not look there.\")",
      ""
    ].join("\n"),
    forklaring: `
      <h3>What chapter 28 did not do</h3>
      <p>The trigram model was a lookup table: count how often each word followed each pair, look it up, choose. It remembers exactly two words back and knows nothing about words being similar to each other.</p>
      <p><em>Attention</em> solves both problems at once, and is the mechanism modern language models are built on. Same text, an entirely different idea.</p>
      <h3>The basic thought</h3>
      <p>Every word asks a question: <strong>which of the earlier words are relevant to me?</strong> Then it fetches information from there, mostly from the most relevant ones.</p>
      <p>That is the whole principle. No fixed memory length, no set order — the word decides for itself what it needs to look at, and can reach ten words back as easily as one.</p>
      <h3>How the relevance is computed</h3>
      <p>Every word is already 16 numbers, computed from the SMHI text with the same co-occurrence method as in chapter 24. Words appearing in the same company get similar vectors.</p>
      <p><code>X @ X.T</code> compares every word with every other in one go and gives a table of similarities. Multiplying by 4 makes the differences sharper before the next step. <code>softmax</code> then turns each row into shares summing to 1 — so "how similar are they" becomes "how much of my attention does each one get".</p>
      <p>Two lines of code. It is the same calculation that sits inside a real transformer.</p>
      <h3>The mask</h3>
      <p><code>np.triu</code> gives the upper triangle of a matrix. Setting it to a large negative number before <code>softmax</code> makes the weights there zero — the words cannot see forwards.</p>
      <p>That is necessary for a model that is going to <em>write</em>: it must not see the answer before it guesses the next word. If it is instead going to <em>understand</em> a finished text, the mask is unnecessary, and both variants exist in real models. The picture shows them side by side.</p>
      <h3>What is missing compared with a real model</h3>
      <p>Here the words are compared directly with each other. In a trained transformer each word first passes through three learned matrices and becomes three different things: a query, a key and a value. The model can then look for something more specific than plain similarity — for example "which verb belongs to me" rather than "which word resembles me".</p>
      <p>Those matrices cannot be trained here. It requires backpropagation, which needs PyTorch or similar, and far more text than SMHI's warnings. What you see is therefore attention <strong>before training</strong> — and the entire job of training is to make the questions sharper than "what resembles me".</p>
      <p>Nothing in the calculation is faked. The vectors come from the text, the similarity is real, and the softmax and the mask are exactly as in a real model.</p>
      <div class="uppgift"><strong>Exercise:</strong> change <code>* 4</code> to <code>* 1</code> and then <code>* 20</code>. A low scale gives almost even attention, a high one makes each word look at a single other — the same kind of dial as the temperature in chapter 28. Then swap <code>E[:, :16]</code> for 4 numbers per word and see how much coarser the pattern becomes.</div>`
  }
);
