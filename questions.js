const QUESTIONS = {
    "ANIME": {
        easy: [
            {id:1, q:"¿Protagonista de Dragon Ball?",o:["Naruto","Luffy","Goku","Ichigo"],a:2},
            {id:2, q:"¿Qué Pokémon es el compañero de Ash?",o:["Charmander","Pikachu","Squirtle","Bulbasaur"],a:1},
            {id:3, q:"¿Qué usa Naruto en su frente?",o:["Gorra","Bandana","Casco","Corona"],a:1},
            {id:4, q:"¿De qué color es el pelo de Sakura Haruno?",o:["Azul","Rojo","Rosa","Rubio"],a:2},
            {id:5, q:"¿Quién es el creador de Dragon Ball?",o:["Masashi Kishimoto","Akira Toriyama","Eiichiro Oda","Tite Kubo"],a:1},
            {id:6, q:"¿Cómo se llama el gato cósmico azul?",o:["Doraemon","Garfield","Tom","Salem"],a:0},
            {id:7, q:"¿Protagonista de One Piece?",o:["Zoro","Sanji","Luffy","Nami"],a:2},
            {id:8, q:"¿Qué animal es Chopper?",o:["Perro","Gato","Reno","Mapache"],a:2},
            {id:9, q:"¿Cómo se llama el hermano de Edward Elric?",o:["Roy","Alphonse","Edward","Scar"],a:1},
            {id:10, q:"¿Qué deporte se juega en Haikyuu?",o:["Fútbol","Tenis","Voleibol","Basket"],a:2}
        ],
        normal: [
            {id:11, q:"¿Cómo se llama el cuaderno de la muerte?",o:["Death Book","Death Note","Kill List","Doom Diary"],a:1},
            {id:12, q:"¿Qué fruta comió Luffy?",o:["Gomu Gomu","Mera Mera","Hie Hie","Ope Ope"],a:0},
            {id:13, q:"¿Quién es el hermano de Sasuke?",o:["Itachi","Madara","Obito","Kakashi"],a:0},
            {id:14, q:"¿Nombre del protagonista de Fullmetal Alchemist?",o:["Roy","Alphonse","Edward","Winry"],a:2},
            {id:15, q:"¿Cómo se llama el demonio dentro de Naruto?",o:["Kurama","Shukaku","Gyuki","Matatabi"],a:0},
            {id:16, q:"¿Qué estudio creó 'El Viaje de Chihiro'?",o:["Toei","Pierrot","Mappa","Ghibli"],a:3},
            {id:17, q:"¿Cómo se llama el titán de Eren Jaeger?",o:["Colosal","Acorazado","De Ataque","Hembra"],a:2},
            {id:18, q:"¿Quién es la 'Diosa' en Madoka Magica?",o:["Sayaka","Homura","Madoka","Mami"],a:2},
            {id:19, q:"¿Qué arma usa Inuyasha?",o:["Tessaiga","Bakusaiga","Tenseiga","Sounza"],a:0},
            {id:20, q:"¿Cómo se llama el mundo de Sword Art Online?",o:["Aincrad","Alfheim","Gun Gale","Underworld"],a:0}
        ],
        hard: [
            {id:21, q:"¿Cuál es el nombre real de L en Death Note?",o:["Light","Lawliet","Ryuzaki","Near"],a:1},
            {id:22, q:"¿Quién compuso la BSO de Cowboy Bebop?",o:["Joe Hisaishi","Yoko Kanno","Hiroyuki Sawano","Shiru Sagisu"],a:1},
            {id:23, q:"¿En qué año se estrenó Akira?",o:["1985","1988","1990","1992"],a:1},
            {id:24, q:"¿Cómo se llama el ángel más poderoso en Evangelion?",o:["Sachiel","Ramiel","Tabris","Zeruel"],a:2},
            {id:25, q:"¿Qué significa el nombre 'Naruto'?",o:["Remolino","Trueno","Zorro","Fuego"],a:0},
            {id:26, q:"¿Quién es el autor de Berserk?",o:["Inoue","Miura","Urasawa","Isayama"],a:1},
            {id:27, q:"¿Cómo se llama la técnica final de Guy Sensei?",o:["Hirudora","Sekizo","Night Guy","Asa Kujaku"],a:2},
            {id:28, q:"¿Cuál es el nombre del primer homúnculo en FMA?",o:["Envidia","Codicia","Orgullo","Padre"],a:2},
            {id:29, q:"¿Quién ganó el torneo de la célula?",o:["Goku","Gohan","Hércules (Satan)","Trunks"],a:2},
            {id:30, q:"¿Qué número tiene la esfera del dragón de la abuelo de Goku?",o:["1","2","3","4"],a:3}
        ]
    },
    "CIENCIA": {
        easy: [
            {id:31, q:"¿De qué color es el Sol?",o:["Azul","Amarillo","Rojo","Verde"],a:1},
            {id:32, q:"¿Fórmula del agua?",o:["H2O","CO2","NaCl","O2"],a:0},
            {id:33, q:"¿Qué planeta es el Lucero del Alba?",o:["Marte","Venus","Júpiter","Saturno"],a:1},
            {id:34, q:"¿Cuántos estados de la materia básica hay?",o:["2","3","4","5"],a:1},
            {id:35, q:"¿Satélite natural de la Tierra?",o:["Marte","Sol","Luna","Venus"],a:2},
            {id:36, q:"¿Animal más grande del mundo?",o:["Elefante","Ballena Azul","Tiburón","Dinosaurio"],a:1},
            {id:37, q:"¿Qué gas exhalamos al respirar?",o:["Oxígeno","Dióxido de Carbono","Hidrógeno","Nitrógeno"],a:1},
            {id:38, q:"¿De dónde obtenemos energía solar?",o:["Viento","Agua","Sol","Tierra"],a:2},
            {id:39, q:"¿Qué parte de la planta hace la fotosíntesis?",o:["Raíz","Tallo","Hojas","Flores"],a:2},
            {id:40, q:"¿Cuántos planetas hay en el sistema solar?",o:["7","8","9","10"],a:1}
        ],
        normal: [
            {id:41, q:"¿Planeta más grande?",o:["Marte","Tierra","Júpiter","Venus"],a:2},
            {id:42, q:"¿Qué gas es necesario para respirar?",o:["Nitrógeno","Oxígeno","Helio","Hidrógeno"],a:1},
            {id:43, q:"¿Quién propuso la Evolución?",o:["Newton","Einstein","Darwin","Tesla"],a:2},
            {id:44, q:"¿Hueso más largo del cuerpo?",o:["Húmero","Fémur","Tibia","Radio"],a:1},
            {id:45, q:"¿Qué órgano bombea sangre?",o:["Pulmón","Cerebro","Corazón","Hígado"],a:2},
            {id:46, q:"¿Cómo se llama el centro de un átomo?",o:["Electrón","Protón","Núcleo","Neutrón"],a:2},
            {id:47, q:"¿Qué planeta tiene más lunas?",o:["Júpiter","Saturno","Urano","Neptuno"],a:1},
            {id:48, q:"¿Metal líquido a temperatura ambiente?",o:["Hierro","Cobre","Mercurio","Oro"],a:2},
            {id:49, q:"¿Qué escala mide terremotos?",o:["Celsius","Richter","Kelvin","Pascal"],a:1},
            {id:50, q:"¿Quién inventó la bombilla?",o:["Edison","Tesla","Bell","Newton"],a:0}
        ],
        hard: [
            {id:51, q:"¿Elemento químico símbolo Au?",o:["Plata","Oro","Cobre","Hierro"],a:1},
            {id:52, q:"¿Partícula con carga negativa?",o:["Protón","Neutrón","Electrón","Positrón"],a:2},
            {id:53, q:"¿Velocidad de la luz?",o:["300,000 km/s","150,000 km/s","1,000,000 km/s","50,000 km/s"],a:0},
            {id:54, q:"¿Quién descubrió la penicilina?",o:["Pasteur","Fleming","Curie","Galileo"],a:1},
            {id:55, q:"¿Qué significa ADN?",o:["Ácido Ribonucleico","Ácido Desoxirribonucleico","Ácido Nítrico","Ácido Sulfúrico"],a:1},
            {id:56, q:"¿Partícula que transporta luz?",o:["Gluón","Fotón","Quark","Muón"],a:1},
            {id:57, q:"¿Quién formuló la Relatividad?",o:["Newton","Hawking","Einstein","Bohr"],a:2},
            {id:58, q:"¿Gas más abundante en la atmósfera?",o:["Oxígeno","CO2","Nitrógeno","Argón"],a:2},
            {id:59, q:"¿Cómo se llama la muerte programada celular?",o:["Mitosis","Apoptosis","Meiosis","Fisión"],a:1},
            {id:60, q:"¿Unidad de resistencia eléctrica?",o:["Voltio","Vatio","Amperio","Ohmio"],a:3}
        ]
    },
    "HISTORIA": {
        easy: [
            {id:61, q:"¿Quién descubrió América?",o:["Colón","Magallanes","Elcano","Pizarro"],a:0},
            {id:62, q:"¿En qué país están las Pirámides de Giza?",o:["Grecia","Egipto","Italia","México"],a:1},
            {id:63, q:"¿Quién fue el primer presidente de EE.UU.?",o:["Lincoln","Jefferson","Washington","Kennedy"],a:2},
            {id:64, q:"¿Qué país regaló la Estatua de la Libertad?",o:["Francia","Inglaterra","España","Alemania"],a:0},
            {id:65, q:"¿En qué continente está Roma?",o:["América","Asia","Europa","África"],a:1},
            {id:66, q:"¿Quién pintó la Capilla Sixtina?",o:["Da Vinci","Miguel Ángel","Rafael","Donatello"],a:1},
            {id:67, q:"¿Cómo se llamaba el barco de Colón?",o:["Titanic","Santa María","Victory","Beagle"],a:1},
            {id:68, q:"¿Qué civilización usaba jeroglíficos?",o:["Mayas","Incas","Egipcios","Romanos"],a:1},
            {id:69, q:"¿Quién era el dios del sol egipcio?",o:["Ra","Osiris","Isis","Anubis"],a:0},
            {id:70, q:"¿Qué país invadió Alemania para empezar la II Guerra?",o:["Francia","Polonia","Rusia","Italia"],a:1}
        ],
        normal: [
            {id:71, q:"¿En qué año empezó la II Guerra Mundial?",o:["1914","1939","1945","1918"],a:1},
            {id:72, q:"¿Qué imperio construyó el Coliseo?",o:["Griego","Egipcio","Romano","Maya"],a:2},
            {id:73, q:"¿Quién era la Reina de Egipto que se alió con Julio César?",o:["Nefertiti","Cleopatra","Hatshepsut","Isis"],a:1},
            {id:74, q:"¿En qué año cayó el Muro de Berlín?",o:["1985","1989","1991","1995"],a:1},
            {id:75, q:"¿Quién fue el líder de la Revolución Rusa?",o:["Stalin","Lenin","Trotsky","Putin"],a:1},
            {id:76, q:"¿Qué ciudad fue destruida por un volcán en el 79 d.C.?",o:["Roma","Atenas","Pompeya","Esparta"],a:2},
            {id:77, q:"¿Quién escribió el Diario de una joven durante la II Guerra?",o:["Ana Frank","Rosa Parks","Marie Curie","Frida Kahlo"],a:0},
            {id:78, q:"¿En qué país nació Napoleón?",o:["Francia","Italia","Córcega","España"],a:2},
            {id:79, q:"¿Quién fue el primer hombre en el espacio?",o:["Armstrong","Aldrin","Gagarin","Glenn"],a:2},
            {id:80, q:"¿Qué guerra duró 100 años?",o:["Guerra Civil","Guerra de los 100 años","I Guerra Mundial","II Guerra Mundial"],a:1}
        ],
        hard: [
            {id:81, q:"¿Revolución que ocurrió en 1789?",o:["Rusa","Industrial","Francesa","Americana"],a:2},
            {id:82, q:"¿Qué ciudad fue dividida por un muro hasta 1989?",o:["Viena","Berlín","Praga","Varsovia"],a:1},
            {id:83, q:"¿Nombre del barco en el que viajó Darwin?",o:["Titanic","Beagle","Victory","Santa María"],a:1},
            {id:84, q:"¿Quién fue el primer emperador romano?",o:["Julio César","Augusto","Nerón","Trajano"],a:1},
            {id:85, q:"¿En qué año terminó la I Guerra Mundial?",o:["1914","1918","1939","1945"],a:1},
            {id:86, q:"¿Quién era el presidente de EE.UU. durante la Guerra Civil?",o:["Washington","Lincoln","Jefferson","Grant"],a:1},
            {id:87, q:"¿Qué tratado terminó oficialmente con la I Guerra Mundial?",o:["Versalles","París","Ginebra","Madrid"],a:0},
            {id:88, q:"¿Quién fue la última reina de Francia?",o:["Victoria","Isabel","María Antonieta","Catalina"],a:2},
            {id:89, q:"¿Qué imperio conquistó gran parte de Asia bajo Gengis Kan?",o:["Japonés","Chino","Mongol","Persa"],a:2},
            {id:90, q:"¿En qué año ocurrió la Revolución Industrial?",o:["Siglo XV","Siglo XVI","Siglo XVIII","Siglo XX"],a:2}
        ]
    },
    "DEPORTES": {
        easy: [
            {id:91, q:"¿Cuántos jugadores tiene un equipo de fútbol?",o:["9","10","11","12"],a:2},
            {id:92, q:"¿Cómo se llama el 'palo' usado en béisbol?",o:["Raqueta","Bate","Stick","Maza"],a:1},
            {id:93, q:"¿Cada cuántos años hay Juegos Olímpicos?",o:["2","3","4","5"],a:2},
            {id:94, q:"¿Qué deporte juega Messi?",o:["Tenis","Baloncesto","Fútbol","Golf"],a:2},
            {id:95, q:"¿De qué color es la tarjeta de expulsión en fútbol?",o:["Amarilla","Azul","Roja","Verde"],a:2},
            {id:96, q:"¿Qué deporte usa una canasta?",o:["Voleibol","Fútbol","Baloncesto","Balonmano"],a:2},
            {id:97, q:"¿Cómo se llama el campo de juego en tenis?",o:["Pista","Cancha","Estadio","Diamante"],a:0},
            {id:98, q:"¿Cuántas ruedas tiene una bicicleta?",o:["1","2","3","4"],a:1},
            {id:99, q:"¿Qué deporte practica un nadador?",o:["Atletismo","Natación","Ciclismo","Boxeo"],a:1},
            {id:100, q:"¿Quién ganó el mundial 2022?",o:["Francia","Brasil","Argentina","Alemania"],a:2}
        ],
        normal: [
            {id:101, q:"¿Dónde se inventaron los Juegos Olímpicos?",o:["Roma","Grecia","Egipto","China"],a:1},
            {id:102, q:"¿Qué deporte practicaba Michael Jordan?",o:["Fútbol","Tenis","Baloncesto","Golf"],a:2},
            {id:103, q:"¿Cómo se llama el torneo de tenis sobre hierba?",o:["Roland Garros","US Open","Wimbledon","Australian Open"],a:2},
            {id:104, q:"¿Quién es el tenista con más Grand Slams?",o:["Federer","Nadal","Djokovic","Alcaraz"],a:2},
            {id:105, q:"¿En qué ciudad se celebran los JJOO 2024?",o:["Tokio","París","Londres","Madrid"],a:1},
            {id:106, q:"¿Qué deporte usa un disco (puck)?",o:["Hockey","Lacrosse","Cricket","Polo"],a:0},
            {id:107, q:"¿Cuántos anillos tiene la bandera olímpica?",o:["3","4","5","6"],a:2},
            {id:108, q:"¿Quién es 'The GOAT' del fútbol americano?",o:["Brady","Mahomes","Manning","Rodgers"],a:0},
            {id:109, q:"¿Qué selección tiene más mundiales de fútbol?",o:["Alemania","Italia","Brasil","Francia"],a:2},
            {id:110, q:"¿Cuántos tiempos tiene un partido de baloncesto NBA?",o:["2","3","4","5"],a:2}
        ],
        hard: [
            {id:111, q:"¿Quién tiene más Balones de Oro?",o:["Cristiano","Messi","Pelé","Maradona"],a:1},
            {id:112, q:"¿Cuál es la distancia de un maratón?",o:["21km","42.195km","10km","50km"],a:1},
            {id:113, q:"¿En qué país se celebró el primer mundial de fútbol?",o:["Brasil","Uruguay","Italia","Francia"],a:1},
            {id:114, q:"¿Quién ostenta el récord de 100m lisos?",o:["Bolt","Blake","Gay","Powell"],a:0},
            {id:115, q:"¿Qué equipo ha ganado más Champions League?",o:["Barça","Bayern","Real Madrid","Milan"],a:2},
            {id:116, q:"¿Cómo se llama el golpe maestro en golf?",o:["Ace","Birdie","Hole in one","Eagle"],a:2},
            {id:117, q:"¿Cuántos jugadores hay en un equipo de waterpolo?",o:["5","6","7","8"],a:1},
            {id:118, q:"¿Quién es el ciclista con más Tours de Francia (oficiales)?",o:["Induráin","Armstrong","Merckx","Hinault"],a:2},
            {id:119, q:"¿Qué país inventó el Voleibol?",o:["Canadá","EEUU","Brasil","Japón"],a:1},
            {id:120, q:"¿En qué año se fundó la FIFA?",o:["1900","1904","1920","1930"],a:1}
        ]
    },
    "CINE": {
        easy: [
            {id:121, q:"¿Quién es el ratón más famoso de Disney?",o:["Mickey","Donald","Goofy","Pluto"],a:0},
            {id:122, q:"¿Color del sable láser de Darth Vader?",o:["Azul","Verde","Rojo","Morado"],a:2},
            {id:123, q:"¿Cómo se llama el ogro verde?",o:["Fiona","Burro","Shrek","Gato"],a:2},
            {id:124, q:"¿Quién es el mejor amigo de Woody en Toy Story?",o:["Buzz","Rex","Slinky","Hamm"],a:0},
            {id:125, q:"¿Qué animal es Simba?",o:["Tigre","León","Pantera","Gato"],a:1},
            {id:126, q:"¿Cómo se llama la sirenita?",o:["Bella","Ariel","Yasmín","Cenicienta"],a:1},
            {id:127, q:"¿Qué superhéroe es un hombre araña?",o:["Iron Man","Batman","Spider-Man","Thor"],a:2},
            {id:128, q:"¿Cómo se llama el muñeco de nieve de Frozen?",o:["Sven","Olaf","Kristoff","Hans"],a:1},
            {id:129, q:"¿Quién es el capitán del Perla Negra?",o:["Barbossa","Jack Sparrow","Will Turner","Davy Jones"],a:1},
            {id:130, q:"¿Qué actor es Iron Man?",o:["Downey Jr.","Evans","Hemsworth","Pratt"],a:0}
        ],
        normal: [
            {id:131, q:"¿Director de 'Jurassic Park'?",o:["Nolan","Spielberg","Cameron","Scorsese"],a:1},
            {id:132, q:"¿Qué película ganó el primer Oscar?",o:["Alas","Metrópolis","El Cantor","Luces de la ciudad"],a:0},
            {id:133, q:"¿Cómo se llama el reino de Black Panther?",o:["Asgard","Wakanda","Atlantis","Gotham"],a:1},
            {id:134, q:"¿Qué actor interpreta a Joker en 2019?",o:["Ledger","Phoenix","Leto","Nicholson"],a:1},
            {id:135, q:"¿Nombre del robot de Star Wars R2-?",o:["D2","C3","B4","P0"],a:0},
            {id:136, q:"¿Quién dirigió 'Inception'?",o:["Nolan","Spielberg","Cameron","Tarantino"],a:0},
            {id:137, q:"¿Cómo se llama el tiburón de la película 'Tiburón'?",o:["Bruce","Jaws","Max","Moby"],a:0},
            {id:138, q:"¿Qué actor es 'La Roca'?",o:["Diesel","Statham","Dwayne Johnson","Cena"],a:2},
            {id:139, q:"¿En qué ciudad vive Batman?",o:["Nueva York","Gotham","Metrópolis","Central City"],a:1},
            {id:140, q:"¿Qué película tiene un anillo para gobernarlos a todos?",o:["Harry Potter","El Señor de los Anillos","Narnia","Star Wars"],a:1}
        ],
        hard: [
            {id:141, q:"¿Película con más Oscars de la historia?",o:["Titanic","Ben-Hur","Avatar","La La Land"],a:0},
            {id:142, q:"¿Quién dirigió 'Psicosis'?",o:["Kubrick","Hitchcock","Tarantino","Coppola"],a:1},
            {id:143, q:"¿En qué año se estrenó 'El Padrino'?",o:["1970","1972","1974","1976"],a:1},
            {id:144, q:"¿Cómo se llama el villano de 'La lista de Schindler'?",o:["Amon Goeth","Hans Landa","Voldemort","Darth Vader"],a:0},
            {id:145, q:"¿Cuál fue la primera película animada de Pixar?",o:["Bichos","Toy Story","Monstruos SA","Cars"],a:1},
            {id:146, q:"¿Quién ganó el Oscar a mejor actor por 'El Renacido'?",o:["Pitt","DiCaprio","Bale","Hanks"],a:1},
            {id:147, q:"¿Qué película de Kubrick tiene un monolito?",o:["2001: Odisea","El Resplandor","La Naranja","Barry Lyndon"],a:0},
            {id:148, q:"¿Quién es el director de 'Parásitos'?",o:["Park Chan-wook","Bong Joon-ho","Kim Ki-duk","Lee Chang-dong"],a:1},
            {id:149, q:"¿Cómo se llama la inteligencia artificial de Iron Man?",o:["HAL","JARVIS","SIRI","ALEXA"],a:1},
            {id:150, q:"¿Cuál es la película más taquillera (sin inflación)?",o:["Avatar","Endgame","Titanic","Star Wars"],a:0}
        ]
    },
    "TECNOLOGÍA": {
        easy: [
            {id:151, q:"¿Quién fundó Microsoft?",o:["Steve Jobs","Bill Gates","Elon Musk","Mark Zuckerberg"],a:1},
            {id:152, q:"¿Qué red social tiene un logo de cámara?",o:["Twitter","Instagram","Facebook","Snapchat"],a:1},
            {id:153, q:"¿Para qué sirve el comando Ctrl+C?",o:["Pegar","Copiar","Cortar","Guardar"],a:1},
            {id:154, q:"¿Qué empresa fabrica el iPhone?",o:["Samsung","Sony","Apple","Google"],a:2},
            {id:155, q:"¿Cómo se llama el buscador más usado?",o:["Bing","Yahoo","Google","DuckDuckGo"],a:2},
            {id:156, q:"¿Qué significa Wi-Fi?",o:["Wireless Fidelity","Wide Firm","Web Fiber","Wind Field"],a:0},
            {id:157, q:"¿Qué es un mouse?",o:["Monitor","Ratón","Teclado","Impresora"],a:1},
            {id:158, q:"¿Qué red social es de vídeos cortos?",o:["Facebook","LinkedIn","TikTok","Twitter"],a:2},
            {id:159, q:"¿Cuál es el sistema operativo de Google?",o:["iOS","Windows","Android","macOS"],a:2},
            {id:160, q:"¿Qué animal es el logo de Firefox?",o:["Zorro","Panda Rojo","Lobo","Tigre"],a:1}
        ],
        normal: [
            {id:161, q:"¿Qué significa PDF?",o:["Personal Doc","Portable Doc Format","Public Data","Pure Digital"],a:1},
            {id:162, q:"¿Navegador creado por Google?",o:["Safari","Firefox","Chrome","Edge"],a:2},
            {id:163, q:"¿Quién es el dueño de X (Twitter)?",o:["Bezos","Zuckerberg","Elon Musk","Gates"],a:2},
            {id:164, q:"¿Qué significa HTTP?",o:["HyperText Transfer Protocol","High Tech","Home Tool","Hidden Text"],a:0},
            {id:165, q:"¿Cuál es el lenguaje de la web?",o:["C++","HTML","Python","Java"],a:1},
            {id:166, q:"¿Qué significa RAM?",o:["Read Access","Random Access Memory","Real Area","Run Auto"],a:1},
            {id:167, q:"¿Quién fundó Amazon?",o:["Jeff Bezos","Steve Jobs","Larry Page","Jack Ma"],a:0},
            {id:168, q:"¿Qué es una dirección IP?",o:["Protocolo de Internet","ID de Persona","Impresora","Imagen"],a:0},
            {id:169, q:"¿Qué empresa compró WhatsApp?",o:["Google","Apple","Meta (Facebook)","Microsoft"],a:2},
            {id:170, q:"¿Para qué sirve un antivirus?",o:["Limpiar polvo","Proteger de virus","Acelerar internet","Cargar batería"],a:1}
        ],
        hard: [
            {id:171, q:"¿Lenguaje de programación más usado para IA?",o:["C++","Java","Python","PHP"],a:2},
            {id:172, q:"¿Qué significa CPU?",o:["Central Processing Unit","Computer Power Unit","Control Process","Core Power"],a:0},
            {id:173, q:"¿Quién es el padre de la computación?",o:["Alan Turing","Bill Gates","Steve Jobs","Ada Lovelace"],a:0},
            {id:174, q:"¿En qué año se creó la World Wide Web?",o:["1985","1989","1991","1995"],a:1},
            {id:175, q:"¿Qué es el 'Blockchain'?",o:["Cadena de bloques","Virus","Nube","Hardware"],a:0},
            {id:176, q:"¿Quién co-fundó Apple con Steve Jobs?",o:["Wozniak","Gates","Allen","Cook"],a:0},
            {id:177, q:"¿Qué significa SQL?",o:["Structured Query Language","Simple Quest","Solar Quality","System Query"],a:0},
            {id:178, q:"¿Cuál fue el primer ordenador programable?",o:["ENIAC","Z3","Colossus","Altair"],a:1},
            {id:179, q:"¿Qué empresa creó el lenguaje Java?",o:["Sun Microsystems","Microsoft","Oracle","IBM"],a:0},
            {id:180, q:"¿Qué es el Kernel?",o:["Núcleo del SO","Monitor","Virus","Memoria USB"],a:0}
        ]
    },
    "VIDEOJUEGOS": {
        easy: [
            {id:181, q:"¿Fontanero más famoso de los juegos?",o:["Mario","Luigi","Wario","Sonic"],a:0},
            {id:182, q:"¿De qué color es Pac-Man?",o:["Rojo","Verde","Amarillo","Azul"],a:2},
            {id:183, q:"¿Cómo se llama el erizo azul?",o:["Mario","Sonic","Link","Crash"],a:1},
            {id:184, q:"¿Qué empresa hace la consola PlayStation?",o:["Nintendo","Microsoft","Sony","Sega"],a:2},
            {id:185, q:"¿Cómo se llama el juego de bloques?",o:["Roblox","Fortnite","Minecraft","Tetris"],a:2},
            {id:186, q:"¿En qué juego disparas y construyes?",o:["Minecraft","Fortnite","Apex","CoD"],a:1},
            {id:187, q:"¿Quién es el hermano de Mario?",o:["Luigi","Wario","Waluigi","Bowser"],a:0},
            {id:188, q:"¿Qué animal es Donkey Kong?",o:["Gorila","Mono","Oso","Perro"],a:0},
            {id:189, q:"¿Cómo se llama el mando de Nintendo Switch?",o:["Joy-Con","DualShock","Xbox Controller","Wii Remote"],a:0},
            {id:190, q:"¿Qué capturas en Pokémon?",o:["Animales","Monstruos de bolsillo","Dinosaurios","Robots"],a:1}
        ],
        normal: [
            {id:191, q:"¿Consola más vendida de la historia?",o:["PS2","Wii","Switch","Nintendo DS"],a:0},
            {id:192, q:"¿Cómo se llama el protagonista de Zelda?",o:["Zelda","Link","Ganon","Epona"],a:1},
            {id:193, q:"¿En qué juego aparece Master Chief?",o:["Gears of War","Halo","Destiny","Doom"],a:1},
            {id:194, q:"¿Qué empresa creó Fortnite?",o:["Valve","Epic Games","Riot","Ubisoft"],a:1},
            {id:195, q:"¿Cómo se llama la ciudad de GTA V?",o:["Liberty City","Los Santos","Vice City","San Fierro"],a:1},
            {id:196, q:"¿Quién es la mascota de Sega?",o:["Alex Kidd","Sonic","Mario","Kirby"],a:1},
            {id:197, q:"¿Qué juego popularizó los Battle Royale?",o:["PUBG","Fortnite","H1Z1","Minecraft"],a:0},
            {id:198, q:"¿Cuál es la espada de Link?",o:["Excalibur","Maestra","Buster","Tessaiga"],a:1},
            {id:199, q:"¿En qué juego hay impostores?",o:["Among Us","Fall Guys","Stardew","FIFA"],a:0},
            {id:200, q:"¿Qué consola de Nintendo fracasó en ventas?",o:["GameCube","Wii U","N64","SNES"],a:1}
        ],
        hard: [
            {id:201, q:"¿Creador de Metal Gear?",o:["Miyamoto","Kojima","Sakurai","Nomura"],a:1},
            {id:202, q:"¿En qué año salió la primera PlayStation?",o:["1990","1994","1996","2000"],a:1},
            {id:203, q:"¿Cómo se llama el mundo de Minecraft?",o:["Overworld","Nether","End","Tierra"],a:0},
            {id:204, q:"¿Cuál es el juego con más presupuesto?",o:["GTA V","Star Citizen","Destiny","Cyberpunk"],a:1},
            {id:205, q:"¿Quién es el creador de Dark Souls?",o:["Miyazaki","Kojima","Kamiya","Itagaki"],a:0},
            {id:206, q:"¿En qué año salió Tetris?",o:["1980","1984","1988","1990"],a:1},
            {id:207, q:"¿Cómo se llama la protagonista de Metroid?",o:["Samus Aran","Lara Croft","Peach","Zelda"],a:0},
            {id:208, q:"¿Qué significa NES?",o:["Nintendo Entertainment System","New Era","Next Engine","Nintendo Entry"],a:0},
            {id:209, q:"¿Cuál es el primer juego de la historia?",o:["Pong","Tennis for Two","Spacewar!","Pac-Man"],a:1},
            {id:210, q:"¿Quién es el compositor de Super Mario?",o:["Koji Kondo","Nobuo Uematsu","David Wise","Yoko Shimomura"],a:0}
        ]
    },
    "GEOGRAFÍA": {
        easy: [
            {id:211, q:"¿País más grande del mundo?",o:["China","Canadá","Rusia","EEUU"],a:2},
            {id:212, q:"¿En qué continente está China?",o:["América","Europa","Asia","África"],a:2},
            {id:213, q:"¿Océano más grande?",o:["Atlántico","Índico","Pacífico","Ártico"],a:2},
            {id:214, q:"¿Qué país tiene forma de bota?",o:["España","Grecia","Italia","Portugal"],a:2},
            {id:215, q:"¿Cuál es la capital de España?",o:["Barcelona","Valencia","Madrid","Sevilla"],a:2},
            {id:216, q:"¿En qué país están las Pirámides?",o:["México","Egipto","Perú","Grecia"],a:1},
            {id:217, q:"¿Qué río pasa por Londres?",o:["Sena","Támesis","Danubio","Nilo"],a:1},
            {id:218, q:"¿Cuál es el país más pequeño?",o:["Mónaco","Vaticano","Andorra","Malta"],a:1},
            {id:219, q:"¿En qué continente está Brasil?",o:["América del Sur","África","Europa","Oceanía"],a:0},
            {id:220, q:"¿Cómo se llama la línea que divide la Tierra?",o:["Ecuador","Trópico","Meridiano","Polo"],a:0}
        ],
        normal: [
            {id:221, q:"¿Capital de Italia?",o:["Milán","Venecia","Roma","Nápoles"],a:2},
            {id:222, q:"¿Río más largo del mundo?",o:["Nilo","Amazonas","Misuri","Mekong"],a:1},
            {id:223, q:"¿En qué país está la Torre Eiffel?",o:["Italia","España","Francia","Alemania"],a:2},
            {id:224, q:"¿Capital de Japón?",o:["Pekín","Seúl","Tokio","Kioto"],a:2},
            {id:225, q:"¿Cuál es el pico más alto de España?",o:["Mulhacén","Teide","Aneto","Moncayo"],a:1},
            {id:226, q:"¿Qué país es famoso por sus canales?",o:["Francia","Holanda (Países Bajos)","Reino Unido","Suiza"],a:1},
            {id:227, q:"¿Capital de Alemania?",o:["Múnich","Hamburgo","Berlín","Bonn"],a:2},
            {id:228, q:"¿En qué océano está Hawái?",o:["Atlántico","Pacífico","Índico","Antártico"],a:1},
            {id:229, q:"¿Capital de Australia?",o:["Sídney","Melbourne","Canberra","Perth"],a:2},
            {id:230, q:"¿Qué país tiene más población?",o:["India","China","EEUU","Indonesia"],a:0}
        ],
        hard: [
            {id:231, q:"¿Desierto más cálido del mundo?",o:["Gobi","Sahara","Atacama","Kalahari"],a:1},
            {id:232, q:"¿Cuál es la montaña más alta?",o:["K2","Everest","Teide","Aconcagua"],a:1},
            {id:233, q:"¿País con más husos horarios?",o:["Rusia","EEUU","Francia","China"],a:2},
            {id:234, q:"¿Cuál es el lago más profundo?",o:["Superior","Victoria","Baikal","Tanganica"],a:2},
            {id:235, q:"¿Capital de Islandia?",o:["Reikiavik","Oslo","Helsinki","Estocolmo"],a:0},
            {id:236, q:"¿Qué estrecho separa España de África?",o:["Bósforo","Gibraltar","Magallanes","Malaca"],a:1},
            {id:237, q:"¿Cuál es el país más joven del mundo?",o:["Sudán del Sur","Kosovo","Timor Oriental","Montenegro"],a:0},
            {id:238, q:"¿Capital de Marruecos?",o:["Casablanca","Rabat","Marrakech","Fez"],a:1},
            {id:239, q:"¿En qué país está el Salar de Uyuni?",o:["Chile","Perú","Bolivia","Argentina"],a:2},
            {id:240, q:"¿Cuál es la fosa marina más profunda?",o:["Puerto Rico","Java","Marianas","Tonga"],a:2}
        ]
    },
    "ANIMALES": {
        easy: [
            {id:241, q:"¿Rey de la selva?",o:["Tigre","León","Elefante","Gorila"],a:1},
            {id:242, q:"¿Animal que dice 'miau'?",o:["Perro","Gato","Pájaro","Vaca"],a:1},
            {id:243, q:"¿Qué animal tiene una trompa?",o:["León","Elefante","Jirafa","Zebra"],a:1},
            {id:244, q:"¿Qué animal pone huevos y tiene plumas?",o:["Perro","Gato","Pájaro","Pez"],a:2},
            {id:245, q:"¿Animal que vive en el agua y tiene escamas?",o:["Pájaro","Oso","Pez","Mono"],a:2},
            {id:246, q:"¿Cómo se llama el animal que tiene el cuello muy largo?",o:["Elefante","Jirafa","Hipopótamo","Rinoceronte"],a:1},
            {id:247, q:"¿Qué animal nos da leche?",o:["Vaca","Pájaro","León","Tigre"],a:0},
            {id:248, q:"¿Qué animal es muy lento?",o:["Guepardo","Conejo","Tortuga","Caballo"],a:2},
            {id:249, q:"¿Animal que salta y vive en Australia?",o:["Mono","Canguro","Elefante","Tigre"],a:1},
            {id:250, q:"¿Qué animal tiene rayas negras y blancas?",o:["Caballo","Burro","Zebra","Vaca"],a:2}
        ],
        normal: [
            {id:251, q:"¿Mamífero más grande del mundo?",o:["Elefante","Ballena Azul","Rinoceronte","Jirafa"],a:1},
            {id:252, q:"¿Qué animal es el mejor amigo del hombre?",o:["Gato","Perro","Caballo","Loro"],a:1},
            {id:253, q:"¿Animal que pone los huevos más grandes?",o:["Águila","Avestruz","Cocodrilo","Pingüino"],a:1},
            {id:254, q:"¿Cómo respira un pez?",o:["Pulmones","Branquias","Piel","Nariz"],a:1},
            {id:255, q:"¿Qué animal es omnívoro?",o:["León","Vaca","Cerdo","Conejo"],a:2},
            {id:256, q:"¿Cuántas patas tiene una araña?",o:["4","6","8","10"],a:2},
            {id:257, q:"¿Qué animal es famoso por su memoria?",o:["Perro","Delfín","Elefante","Gato"],a:2},
            {id:258, q:"¿Animal que puede cambiar de color?",o:["Lagartija","Camaleón","Serpiente","Rana"],a:1},
            {id:259, q:"¿Cómo se llama el bebé de la rana?",o:["Renacuajo","Alevín","Oruga","Cachorro"],a:0},
            {id:260, q:"¿Qué ave no puede volar?",o:["Águila","Loro","Pingüino","Paloma"],a:2}
        ],
        hard: [
            {id:261, q:"¿Animal más rápido del mundo (en tierra)?",o:["Guepardo","León","Caballo","Tigre"],a:0},
            {id:262, q:"¿Cómo se llama el grupo de lobos?",o:["Manada","Jauría","Piara","Rebaño"],a:0},
            {id:263, q:"¿Único mamífero capaz de volar?",o:["Avestruz","Murciélago","Pingüino","Ardilla"],a:1},
            {id:264, q:"¿Cuántos estómagos tiene una vaca?",o:["1","2","3","4"],a:3},
            {id:265, q:"¿Qué animal tiene el corazón en la cabeza?",o:["Camarón","Cangrejo","Pulpo","Calamar"],a:0},
            {id:266, q:"¿Cómo se llama el estudio de los pájaros?",o:["Zoología","Ornitología","Entomología","Biología"],a:1},
            {id:267, q:"¿Qué animal tiene tres corazones?",o:["Delfín","Tiburón","Pulpo","Ballena"],a:2},
            {id:268, q:"¿Qué tipo de animal es la ballena?",o:["Pez","Mamífero","Reptil","Anfibio"],a:1},
            {id:269, q:"¿Cuál es el único pájaro que puede volar hacia atrás?",o:["Colibrí","Gorrión","Águila","Loro"],a:0},
            {id:270, q:"¿Cuántos años puede vivir una tortuga gigante?",o:["50","100","150+","20"],a:2}
        ]
    },
    "MÚSICA": {
        easy: [
            {id:271, q:"¿Quién es el Rey del Pop?",o:["Prince","Michael Jackson","Elvis","Eminem"],a:1},
            {id:272, q:"¿Cuántas cuerdas tiene una guitarra normal?",o:["4","5","6","7"],a:2},
            {id:273, q:"¿Instrumento de Beethoven?",o:["Violín","Piano","Flauta","Guitarra"],a:1},
            {id:274, q:"¿Qué instrumento se toca con baquetas?",o:["Piano","Guitarra","Batería","Violín"],a:2},
            {id:275, q:"¿Quién canta 'Baby'?",o:["Justin Bieber","Selena Gomez","Miley Cyrus","Nick Jonas"],a:0},
            {id:276, q:"¿De qué color es el piano?",o:["Rojo","Verde","Negro/Blanco","Azul"],a:2},
            {id:277, q:"¿Cómo se llama el grupo de K-pop de 7 chicos?",o:["EXO","BTS","BIGBANG","GOT7"],a:1},
            {id:278, q:"¿Qué instrumento es de viento?",o:["Violín","Flauta","Arpa","Piano"],a:1},
            {id:279, q:"¿Quién es la Reina del Pop?",o:["Beyoncé","Lady Gaga","Madonna","Rihanna"],a:2},
            {id:280, q:"¿Cómo se llama el signo al principio del pentagrama?",o:["Nota","Clave","Ritmo","Silencio"],a:1}
        ],
        normal: [
            {id:281, q:"¿De qué país eran 'The Beatles'?",o:["EEUU","Reino Unido","Irlanda","Australia"],a:1},
            {id:282, q:"¿Qué género cantaba Bob Marley?",o:["Rock","Pop","Reggae","Jazz"],a:2},
            {id:283, q:"¿Quién canta 'Bad Guy'?",o:["Ariana Grande","Billie Eilish","Dua Lipa","Taylor Swift"],a:1},
            {id:284, q:"¿Cómo se llama el vocalista de Queen?",o:["Freddie Mercury","Mick Jagger","Axl Rose","Bono"],a:0},
            {id:285, q:"¿Qué instrumento tocaba Jimi Hendrix?",o:["Batería","Piano","Guitarra","Bajo"],a:2},
            {id:286, q:"¿En qué ciudad nació el Jazz?",o:["Nueva York","Chicago","Nueva Orleans","Detroit"],a:2},
            {id:287, q:"¿Quién compuso la 5ª Sinfonía?",o:["Mozart","Bach","Beethoven","Vivaldi"],a:2},
            {id:288, q:"¿Qué banda lanzó 'The Dark Side of the Moon'?",o:["Queen","Led Zeppelin","Pink Floyd","Deep Purple"],a:2},
            {id:289, q:"¿Quién es conocido como 'La voz'?",o:["Sinatra","Elvis","Jackson","Mercury"],a:0},
            {id:290, q:"¿Qué festival de música se celebra en Bélgica?",o:["Coachella","Tomorrowland","Lollapalooza","Glastonbury"],a:1}
        ],
        hard: [
            {id:291, q:"¿Cuántas cuerdas tiene un violín?",o:["3","4","5","6"],a:1},
            {id:292, q:"¿Quién compuso 'Las Cuatro Estaciones'?",o:["Bach","Mozart","Vivaldi","Beethoven"],a:2},
            {id:293, q:"¿Cuál es la nota musical más alta?",o:["Do","Re","Mi","Si"],a:3},
            {id:294, q:"¿Quién escribió la ópera 'La flauta mágica'?",o:["Verdi","Puccini","Mozart","Wagner"],a:2},
            {id:295, q:"¿Qué instrumento tocaba Miles Davis?",o:["Saxo","Trompeta","Piano","Bajo"],a:1},
            {id:296, q:"¿En qué año murió John Lennon?",o:["1975","1980","1985","1990"],a:1},
            {id:297, q:"¿Quién es el autor de 'El lago de los cisnes'?",o:["Tchaikovsky","Chopin","Stravinsky","Rachmaninoff"],a:0},
            {id:298, q:"¿Qué significa 'Allegro'?",o:["Lento","Rápido","Suave","Fuerte"],a:1},
            {id:299, q:"¿Quién es el guitarrista de AC/DC?",o:["Angus Young","Slash","The Edge","Keith Richards"],a:0},
            {id:300, q:"¿Cuántas sinfonías completó Beethoven?",o:["5","7","9","10"],a:2}
        ]
    },
    "LITERATURA": {
        easy: [
            {id:301, q:"¿Quién escribió Don Quijote?",o:["Lope de Vega","Cervantes","Quevedo","Góngora"],a:1},
            {id:302, q:"¿Cómo se llama el niño mago?",o:["Harry Potter","Percy Jackson","Frodo","Aragon"],a:0},
            {id:303, q:"¿Quién escribió 'Romeo y Julieta'?",o:["Cervantes","Shakespeare","Dante","Homer"],a:1},
            {id:304, q:"¿De qué color es la ballena Moby Dick?",o:["Negra","Azul","Blanca","Gris"],a:2},
            {id:305, q:"¿Quién es el autor de 'Caperucita Roja'?",o:["Hermanos Grimm","Perrault","Andersen","Disney"],a:1},
            {id:306, q:"¿Qué libro tiene a un gato con botas?",o:["Shrek","El gato con botas","Pinocchio","Dumbo"],a:1},
            {id:307, q:"¿Cómo se llama el muñeco de madera?",o:["Gepetto","Pinocchio","Pepito","Fígaro"],a:1},
            {id:308, q:"¿Quién escribió 'Alicia en el país de las maravillas'?",o:["Lewis Carroll","Roald Dahl","C.S. Lewis","J.K. Rowling"],a:0},
            {id:309, q:"¿De qué trata el libro 'El diario de Ana Frank'?",o:["Fantasía","Historia real","Ciencia ficción","Terror"],a:1},
            {id:310, q:"¿Quién es el autor de 'El Hobbit'?",o:["Tolkien","Lewis","Martin","King"],a:0}
        ],
        normal: [
            {id:311, q:"¿Mejor amigo de Sherlock Holmes?",o:["Watson","Moriarty","Lestrade","Hudson"],a:0},
            {id:312, q:"¿Quién escribió 'El Principito'?",o:["Saint-Exupéry","Zola","Hugo","Dumas"],a:0},
            {id:313, q:"¿Título de la primera parte de 'El Quijote'?",o:["El Caballero","El Ingenioso Hidalgo","Sancho Panza","La Mancha"],a:1},
            {id:314, q:"¿Quién escribió 'Crónica de una muerte anunciada'?",o:["Borges","Neruda","García Márquez","Cortázar"],a:2},
            {id:315, q:"¿Cómo se llama el protagonista de 'Metamorfosis'?",o:["Gregor Samsa","Joseph K.","Hermann","Franz"],a:0},
            {id:316, q:"¿Quién escribió 'Los Miserables'?",o:["Hugo","Balzac","Flaubert","Stendhal"],a:0},
            {id:317, q:"¿Cuál es la obra más famosa de Homero?",o:["La Odisea","Eneida","Edipo Rey","Antígona"],a:0},
            {id:318, q:"¿Quién es el autor de 'Sherlock Holmes'?",o:["Agatha Christie","Conan Doyle","Edgar Allan Poe","Stephen King"],a:1},
            {id:319, q:"¿Qué poeta escribió 'Veinte poemas de amor'?",o:["Neruda","Lorca","Mistral","Paz"],a:0},
            {id:320, q:"¿Quién escribió 'Drácula'?",o:["Shelley","Stoker","Poe","Lovecraft"],a:1}
        ],
        hard: [
            {id:321, q:"¿Quién escribió 'Cien años de soledad'?",o:["Vargas Llosa","García Márquez","Neruda","Borges"],a:1},
            {id:322, q:"¿Obra más famosa de Dante Alighieri?",o:["Odisea","Divina Comedia","Iliada","Eneida"],a:1},
            {id:323, q:"¿Quién es el autor de '1984'?",o:["Huxley","Orwell","Bradbury","Asimov"],a:1},
            {id:324, q:"¿Quién escribió 'Fausto'?",o:["Goethe","Schiller","Kafka","Mann"],a:0},
            {id:325, q:"¿Cuál es el libro más vendido después de la Biblia?",o:["Don Quijote","Historia de dos ciudades","El Señor de los Anillos","El Principito"],a:0},
            {id:326, q:"¿Quién escribió 'Ulises'?",o:["James Joyce","Virginia Woolf","T.S. Eliot","Ezra Pound"],a:0},
            {id:327, q:"¿En qué año se publicó 'El Quijote'?",o:["1505","1605","1705","1805"],a:1},
            {id:328, q:"¿Quién escribió 'La montaña mágica'?",o:["Thomas Mann","Herman Hesse","Franz Kafka","Bertolt Brecht"],a:0},
            {id:329, q:"¿Autor de 'En busca del tiempo perdido'?",o:["Proust","Gide","Sartre","Camus"],a:0},
            {id:330, q:"¿Quién es la autora de 'Frankenstein'?",o:["Jane Austen","Mary Shelley","Emily Brontë","Virginia Woolf"],a:1}
        ]
    },
    "ARTE": {
        easy: [
            {id:331, q:"¿Quién pintó la Mona Lisa?",o:["Van Gogh","Da Vinci","Picasso","Dalí"],a:1},
            {id:332, q:"¿Color que sale de mezclar Azul y Amarillo?",o:["Rojo","Verde","Morado","Naranja"],a:1},
            {id:333, q:"¿Quién pintó 'La noche estrellada'?",o:["Da Vinci","Van Gogh","Monet","Dalí"],a:1},
            {id:334, q:"¿Qué material usa un escultor para modelar?",o:["Piedra","Arcilla","Papel","Agua"],a:1},
            {id:335, q:"¿Quién pintó 'La última cena'?",o:["Miguel Ángel","Rafael","Da Vinci","Velázquez"],a:2},
            {id:336, q:"¿En qué país nació Picasso?",o:["Francia","Italia","España","Portugal"],a:2},
            {id:337, q:"¿Qué objeto se usa para pintar con óleo?",o:["Lápiz","Pincel","Cuchara","Martillo"],a:1},
            {id:338, q:"¿Quién pintó su autorretrato con flores?",o:["Frida Kahlo","Diego Rivera","Dalí","Goya"],a:0},
            {id:339, q:"¿Qué es el 'Lienzo'?",o:["Un marco","Una tela","Un tipo de pintura","Un pincel"],a:1},
            {id:340, q:"¿Quién es el dios de las artes en Grecia?",o:["Zeus","Apolo","Ares","Hades"],a:1}
        ],
        normal: [
            {id:341, q:"¿En qué ciudad está el museo del Louvre?",o:["Londres","Madrid","París","Roma"],a:2},
            {id:342, q:"¿Quién pintó 'El Guernica'?",o:["Velázquez","Goya","Picasso","Miró"],a:2},
            {id:343, q:"¿Qué artista es famoso por sus relojes blandos?",o:["Picasso","Dalí","Miró","Magritte"],a:1},
            {id:344, q:"¿Quién pintó 'Las Meninas'?",o:["Goya","Velázquez","El Greco","Murillo"],a:1},
            {id:345, q:"¿En qué ciudad está el Museo del Prado?",o:["Barcelona","Sevilla","Madrid","Bilbao"],a:2},
            {id:346, q:"¿Qué estilo artístico fundó Picasso?",o:["Surrealismo","Impresionismo","Cubismo","Fauvismo"],a:2},
            {id:347, q:"¿Quién pintó 'El Grito'?",o:["Munch","Kandinsky","Klee","Nolde"],a:0},
            {id:348, q:"¿Qué artista pintaba latas de sopa Campbell?",o:["Warhol","Pollock","Haring","Lichtenstein"],a:0},
            {id:349, q:"¿Quién diseñó la Sagrada Familia?",o:["Gaudí","Mies","Le Corbusier","Wright"],a:0},
            {id:350, q:"¿Qué técnica usa puntos de colores?",o:["Cubismo","Puntillismo","Collage","Grafiti"],a:1}
        ],
        hard: [
            {id:351, q:"¿Qué artista se cortó una oreja?",o:["Dalí","Picasso","Van Gogh","Monet"],a:2},
            {id:352, q:"¿Quién esculpió el 'David'?",o:["Donatello","Miguel Ángel","Bernini","Rodin"],a:1},
            {id:353, q:"¿Estilo artístico de Claude Monet?",o:["Cubismo","Impresionismo","Surrealismo","Expresionismo"],a:1},
            {id:354, q:"¿Quién pintó 'La Venus del espejo'?",o:["Rubens","Tiziano","Velázquez","Rembrandt"],a:2},
            {id:355, q:"¿Qué arquitecto diseñó el museo Guggenheim Bilbao?",o:["Frank Gehry","Norman Foster","Zaha Hadid","Jean Nouvel"],a:0},
            {id:356, q:"¿Quién pintó 'El jardín de las delicias'?",o:["El Bosco","Brueghel","Durero","Holbein"],a:0},
            {id:357, q:"¿Qué artista es conocido por sus esculturas de arañas gigantes?",o:["Louise Bourgeois","Yayoi Kusama","Marina Abramovic","Jeff Koons"],a:0},
            {id:358, q:"¿Quién pintó 'La libertad guiando al pueblo'?",o:["Delacroix","Géricault","Ingres","David"],a:0},
            {id:359, q:"¿En qué año se terminó de pintar la Capilla Sixtina?",o:["1508","1512","1520","1541"],a:1},
            {id:360, q:"¿Qué pintor barroco usaba el claroscuro?",o:["Caravaggio","Bernini","Rubens","Rembrandt"],a:0}
        ]
    },
    "GASTRONOMÍA": {
        easy: [
            {id:361, q:"¿Ingrediente de la tortilla española?",o:["Arroz","Patata","Pasta","Pan"],a:1},
            {id:362, q:"¿Fruta con la que se hace el vino?",o:["Manzana","Pera","Uva","Naranja"],a:2},
            {id:363, q:"¿De qué está hecho el chocolate?",o:["Leche","Azúcar","Cacao","Café"],a:2},
            {id:364, q:"¿Qué animal nos da huevos?",o:["Vaca","Cerdo","Gallina","Oveja"],a:2},
            {id:365, q:"¿De qué color es la manzana Granny Smith?",o:["Roja","Amarilla","Verde","Azul"],a:2},
            {id:366, q:"¿Qué es el sushi?",o:["Pan con carne","Pescado crudo y arroz","Sopa de verduras","Ensalada"],a:1},
            {id:367, q:"¿Ingrediente principal del pan?",o:["Azúcar","Harina","Sal","Aceite"],a:1},
            {id:368, q:"¿Qué bebida tiene cafeína?",o:["Agua","Zumo","Café","Leche"],a:2},
            {id:369, q:"¿Fruta cítrica amarilla?",o:["Naranja","Limón","Fresa","Plátano"],a:1},
            {id:370, q:"¿Qué condimento es salado?",o:["Azúcar","Sal","Miel","Canela"],a:1}
        ],
        normal: [
            {id:371, q:"¿De qué país es el Sushi?",o:["China","Corea","Japón","Tailandia"],a:2},
            {id:372, q:"¿Ingrediente principal del Guacamole?",o:["Tomate","Cebolla","Aguacate","Chile"],a:2},
            {id:373, q:"¿Cómo se llama la pizza con piña?",o:["Margarita","Hawaiana","Peperoni","Cuatro Quesos"],a:1},
            {id:374, q:"¿Qué es el Queso Roquefort?",o:["Queso azul","Queso tierno","Queso de cabra","Queso de oveja"],a:0},
            {id:375, q:"¿De dónde es originaria la Paella?",o:["Madrid","Valencia","Barcelona","Sevilla"],a:1},
            {id:376, q:"¿Qué especia le da color a la paella?",o:["Pimienta","Azafrán","Comino","Perejil"],a:1},
            {id:377, q:"¿Qué país es famoso por sus quesos y vinos?",o:["Inglaterra","Francia","Alemania","Rusia"],a:1},
            {id:378, q:"¿Qué es un Croissant?",o:["Un bollo francés","Un tipo de queso","Una fruta","Un vino"],a:0},
            {id:379, q:"¿Cómo se llama la carne de vaca joven?",o:["Ternera","Buey","Toro","Vaca"],a:0},
            {id:380, q:"¿Qué es el Hummus?",o:["Crema de garbanzos","Crema de lentejas","Crema de berenjena","Sopa"],a:0}
        ],
        hard: [
            {id:381, q:"¿Qué tipo de pasta tiene forma de lazos?",o:["Penne","Fusilli","Farfalle","Macarrones"],a:2},
            {id:382, q:"¿Qué especia es la más cara?",o:["Canela","Pimienta","Azafrán","Vainilla"],a:2},
            {id:383, q:"¿Qué es el 'tofu'?",o:["Carne","Queso de soja","Pescado","Huevo"],a:1},
            {id:384, q:"¿Qué hongo es muy caro en cocina?",o:["Champiñón","Trufa","Níscalo","Boleto"],a:1},
            {id:385, q:"¿Qué país inventó el helado?",o:["Italia","China","EEUU","Grecia"],a:1},
            {id:386, q:"¿Qué es el 'Umami'?",o:["Un sabor","Un tipo de pez","Una especia","Un cuchillo"],a:0},
            {id:387, q:"¿De qué está hecha la salsa Béchamel?",o:["Aceite y vinagre","Huevo y aceite","Harina, mantequilla y leche","Tomate y cebolla"],a:2},
            {id:388, q:"¿Qué pez se usa para el caviar más caro?",o:["Salmón","Trucha","Esturión","Atún"],a:2},
            {id:389, q:"¿Qué es el Sake?",o:["Vino de arroz","Té verde","Sopa de miso","Postre"],a:0},
            {id:390, q:"¿Qué es un 'Sommelier'?",o:["Un chef","Un experto en vinos","Un camarero","Un pastelero"],a:1}
        ]
    },
    "MATEMÁTICAS": {
        easy: [
            {id:391, q:"¿Cuánto es 5 x 8?",o:["35","40","45","50"],a:1},
            {id:392, q:"¿Cuántos lados tiene un cuadrado?",o:["3","4","5","6"],a:1},
            {id:393, q:"¿Cuánto es 100 - 25?",o:["75","80","65","70"],a:0},
            {id:394, q:"¿Cuánto es 12 + 15?",o:["25","27","28","30"],a:1},
            {id:395, q:"¿Cómo se llama el triángulo de 3 lados iguales?",o:["Isósceles","Escaleno","Equilátero","Rectángulo"],a:2},
            {id:396, q:"¿Cuánto es la mitad de 50?",o:["20","25","30","35"],a:1},
            {id:397, q:"¿Qué número sigue al 99?",o:["98","100","101","110"],a:1},
            {id:398, q:"¿Cuántas horas tiene un día?",o:["12","24","36","48"],a:1},
            {id:399, q:"¿Cuánto es 7 x 7?",o:["42","48","49","56"],a:2},
            {id:400, q:"¿Qué forma tiene una pelota?",o:["Círculo","Esfera","Cubo","Cilindro"],a:1}
        ],
        normal: [
            {id:401, q:"¿Raíz cuadrada de 144?",o:["10","11","12","13"],a:2},
            {id:402, q:"¿Cuántos grados tiene un ángulo recto?",o:["45","90","180","360"],a:1},
            {id:403, q:"¿Polígono de 5 lados?",o:["Hexágono","Pentágono","Heptágono","Octágono"],a:1},
            {id:404, q:"¿Cuánto es 15 x 6?",o:["75","80","90","100"],a:2},
            {id:405, q:"¿Qué número romano es X?",o:["1","5","10","50"],a:2},
            {id:406, q:"¿Cómo se llama el lado más largo de un triángulo rectángulo?",o:["Cateto","Hipotenusa","Base","Altura"],a:1},
            {id:407, q:"¿Cuánto es 1000 / 8?",o:["120","125","150","200"],a:1},
            {id:408, q:"¿Qué es un número primo?",o:["Divisible solo por 1 y sí mismo","Número par","Número que termina en 0","Número negativo"],a:0},
            {id:409, q:"¿Cuánto suman los ángulos de un triángulo?",o:["90","180","270","360"],a:1},
            {id:410, q:"¿Qué es el diámetro?",o:["Mitad del radio","Doble del radio","Perímetro","Área"],a:1}
        ],
        hard: [
            {id:411, q:"¿Valor aproximado de Pi?",o:["2.14","3.14","4.14","5.14"],a:1},
            {id:412, q:"¿Quién formuló el teorema de la hipotenusa?",o:["Arquímedes","Pitágoras","Euclides","Newton"],a:1},
            {id:413, q:"¿Qué número romano es la 'L'?",o:["10","50","100","500"],a:1},
            {id:414, q:"¿Qué es una ecuación de segundo grado?",o:["Tiene x²","Tiene x³","No tiene x","Es una suma"],a:0},
            {id:415, q:"¿Quién inventó el cálculo (junto a Leibniz)?",o:["Newton","Einstein","Galileo","Tesla"],a:0},
            {id:416, q:"¿Qué es el número e?",o:["2.718...","3.141...","1.618...","0"],a:0},
            {id:417, q:"¿Qué es la sucesión de Fibonacci?",o:["Suma de los dos anteriores","Multiplicación por 2","Resta de 1","Números pares"],a:0},
            {id:418, q:"¿Qué mide la probabilidad?",o:["Certeza","Posibilidad de un evento","Distancia","Peso"],a:1},
            {id:419, q:"¿Qué es un algoritmo?",o:["Un virus","Pasos para resolver un problema","Un tipo de monitor","Un cable"],a:1},
            {id:420, q:"¿Qué es el número áureo?",o:["1.618...","3.141...","2.718...","1"],a:0}
        ]
    },
    "MITOLOGÍA": {
        easy: [
            {id:421, q:"¿Dios del trueno griego?",o:["Ares","Zeus","Poseidón","Hades"],a:1},
            {id:422, q:"¿Dios del mar griego?",o:["Zeus","Hades","Poseidón","Apolo"],a:2},
            {id:423, q:"¿Criatura mitad hombre mitad caballo?",o:["Minotauro","Centauro","Sirena","Cíclope"],a:1},
            {id:424, q:"¿Dios del inframundo griego?",o:["Zeus","Poseidón","Hades","Ares"],a:2},
            {id:425, q:"¿Héroe con fuerza sobrehumana?",o:["Hércules","Aquiles","Perseo","Ulises"],a:0},
            {id:426, q:"¿Diosa de la sabiduría?",o:["Afrodita","Atenea","Hera","Artemisa"],a:1},
            {id:427, q:"¿Diosa de la belleza y el amor?",o:["Atenea","Afrodita","Hera","Deméter"],a:1},
            {id:428, q:"¿Dios mensajero con alas en los pies?",o:["Hermes","Apolo","Ares","Dionisio"],a:0},
            {id:429, q:"¿Criatura con cabeza de toro?",o:["Centauro","Minotauro","Pegaso","Hidra"],a:1},
            {id:430, q:"¿Caballo con alas?",o:["Unicornio","Pegaso","Fénix","Dragón"],a:1}
        ],
        normal: [
            {id:431, q:"¿Héroe que mató a la Medusa?",o:["Hércules","Aquiles","Perseo","Teseo"],a:2},
            {id:432, q:"¿Donde vivían los dioses griegos?",o:["Atenas","Olimpo","Hades","Troya"],a:1},
            {id:433, q:"¿Quién abrió la caja prohibida?",o:["Elena","Pandora","Medusa","Afrodita"],a:1},
            {id:434, q:"¿Héroe del talón vulnerable?",o:["Ulises","Héctor","Aquiles","Ajax"],a:2},
            {id:435, q:"¿Dios de la guerra griego?",o:["Hermes","Apolo","Ares","Hefesto"],a:2},
            {id:436, q:"¿Esposa de Zeus?",o:["Atenea","Hera","Afrodita","Artemisa"],a:1},
            {id:437, q:"¿Quién robó el fuego para los hombres?",o:["Atlas","Prometeo","Pandora","Epimeteo"],a:1},
            {id:438, q:"¿Qué criatura renace de sus cenizas?",o:["Grifo","Hidra","Fénix","Quimera"],a:2},
            {id:439, q:"¿Quién mató al Minotauro?",o:["Hércules","Teseo","Perseo","Aquiles"],a:1},
            {id:440, q:"¿Dios de la música y el sol?",o:["Hermes","Apolo","Dionisio","Hefesto"],a:1}
        ],
        hard: [
            {id:441, q:"¿Dios egipcio con cabeza de chacal?",o:["Ra","Osiris","Anubis","Horus"],a:2},
            {id:442, q:"¿Martillo de Thor?",o:["Mjolnir","Gungnir","Stormbreaker","Excalibur"],a:0},
            {id:443, q:"¿Perro de tres cabezas del Hades?",o:["Cerbero","Fenrir","Argos","Anubis"],a:0},
            {id:444, q:"¿Lobo gigante que mata a Odín?",o:["Cerbero","Fenrir","Sköll","Hati"],a:1},
            {id:445, q:"¿Dios de la travesura nórdico?",o:["Thor","Odín","Loki","Baldur"],a:2},
            {id:446, q:"¿Diosa nórdica de la muerte?",o:["Freya","Frigg","Hel","Idunn"],a:2},
            {id:447, q:"¿Titán que sostiene el cielo?",o:["Prometeo","Atlas","Cronos","Océano"],a:1},
            {id:448, q:"¿Diosa egipcia de la maternidad?",o:["Isis","Bastet","Nut","Sekhmet"],a:0},
            {id:449, q:"¿Espada del Rey Arturo?",o:["Durandal","Excalibur","Tizona","Joyosa"],a:1},
            {id:450, q:"¿Quién es el padre de Thor?",o:["Odín","Loki","Tyr","Heimdall"],a:0}
        ]
    },
    "ESPACIO": {
        easy: [
            {id:451, q:"¿Cuál es el planeta rojo?",o:["Venus","Marte","Júpiter","Saturno"],a:1},
            {id:452, q:"¿Cómo se llama nuestra estrella?",o:["Luna","Sol","Sirio","Alfa"],a:1},
            {id:453, q:"¿Qué planeta tiene anillos?",o:["Marte","Tierra","Saturno","Neptuno"],a:2},
            {id:454, q:"¿La Tierra gira alrededor de...?",o:["La Luna","El Sol","Marte","Júpiter"],a:1},
            {id:455, q:"¿En qué planeta vivimos?",o:["Tierra","Venus","Marte","Plutón"],a:0},
            {id:456, q:"¿De qué color es el cielo de día?",o:["Negro","Azul","Verde","Rojo"],a:1},
            {id:457, q:"¿Qué sale de noche?",o:["Sol","Luna","Nubes","Rayo"],a:1},
            {id:458, q:"¿Qué planeta es el más grande?",o:["Tierra","Marte","Júpiter","Mercurio"],a:2},
            {id:459, q:"¿Qué es el Sol?",o:["Un planeta","Una estrella","Un satélite","Un cometa"],a:1},
            {id:460, q:"¿Cuántas lunas tiene la Tierra?",o:["0","1","2","3"],a:1}
        ],
        normal: [
            {id:461, q:"¿Primer hombre en la Luna?",o:["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","Elon Musk"],a:1},
            {id:462, q:"¿Planeta más cercano al Sol?",o:["Venus","Mercurio","Tierra","Marte"],a:1},
            {id:463, q:"¿Telescopio más famoso?",o:["Hubble","Kepler","Galileo","Newton"],a:0},
            {id:464, q:"¿Qué planeta es el más caliente?",o:["Mercurio","Venus","Marte","Júpiter"],a:1},
            {id:465, q:"¿Cómo se llama nuestra galaxia?",o:["Andrómeda","Vía Láctea","Sombrero","Triángulo"],a:1},
            {id:466, q:"¿Qué planeta dejó de serlo en 2006?",o:["Neptuno","Urano","Plutón","Ceres"],a:2},
            {id:467, q:"¿De qué están hechos los anillos de Saturno?",o:["Roca y Hielo","Gas","Fuego","Metal"],a:0},
            {id:468, q:"¿Qué es un agujero negro?",o:["Una estrella muerta muy densa","Un planeta vacío","Un túnel","Una mancha"],a:0},
            {id:469, q:"¿Cuánto tarda la luz del Sol en llegar a la Tierra?",o:["8 segundos","8 minutos","8 horas","8 días"],a:1},
            {id:470, q:"¿Qué planeta gira 'de lado'?",o:["Júpiter","Saturno","Urano","Neptuno"],a:2}
        ],
        hard: [
            {id:471, q:"¿Qué galaxia es la más cercana a la nuestra?",o:["Andrómeda","Triángulo","Sombrero","Magallanes"],a:0},
            {id:472, q:"¿Planeta con la Gran Mancha Roja?",o:["Júpiter","Saturno","Urano","Neptuno"],a:0},
            {id:473, q:"¿Cuántos planetas hay en el sistema solar?",o:["7","8","9","10"],a:1},
            {id:474, q:"¿Quién fue la primera mujer en el espacio?",o:["Valentina Tereshkova","Sally Ride","Peggy Whitson","Svetlana Savitskaya"],a:0},
            {id:475, q:"¿Qué es un Púlsar?",o:["Una estrella de neutrones que gira rápido","Un planeta gaseoso","Un cometa","Un agujero negro"],a:0},
            {id:476, q:"¿Cómo se llama la luna más grande de Júpiter?",o:["Europa","Ío","Ganímedes","Calisto"],a:2},
            {id:477, q:"¿Qué es la materia oscura?",o:["Materia invisible que forma el 27% del universo","Polvo espacial","Hielo","Gas negro"],a:0},
            {id:478, q:"¿Quién propuso las leyes del movimiento planetario?",o:["Galileo","Kepler","Copérnico","Newton"],a:1},
            {id:479, q:"¿Cómo se llama el límite de un agujero negro?",o:["Horizonte de sucesos","Límite crítico","Zona muerta","Punto de retorno"],a:0},
            {id:480, q:"¿Qué planeta tiene la luna 'Titán'?",o:["Júpiter","Saturno","Urano","Neptuno"],a:1}
        ]
    },
    "CÓMICS": {
        easy: [
            {id:481, q:"¿Identidad secreta de Batman?",o:["Peter Parker","Bruce Wayne","Clark Kent","Tony Stark"],a:1},
            {id:482, q:"¿Héroe que se vuelve verde?",o:["Iron Man","Hulk","Thor","Flash"],a:1},
            {id:483, q:"¿Compañero de Batman?",o:["Robin","Spider-Man","Super-Man","Aquaman"],a:0},
            {id:484, q:"¿Qué héroe usa un escudo?",o:["Batman","Superman","Capitán América","Hulk"],a:2},
            {id:485, q:"¿Quién es el hombre araña?",o:["Bruce Wayne","Peter Parker","Clark Kent","Tony Stark"],a:1},
            {id:486, q:"¿Identidad secreta de Superman?",o:["Peter Parker","Clark Kent","Bruce Wayne","Steve Rogers"],a:1},
            {id:487, q:"¿Enemigo principal de Batman?",o:["Thanos","Joker","Loki","Magneto"],a:1},
            {id:488, q:"¿De qué color es la armadura de Iron Man?",o:["Azul","Verde","Roja y Dorada","Negra"],a:2},
            {id:489, q:"¿Qué héroe es un dios nórdico?",o:["Iron Man","Hulk","Thor","Spider-Man"],a:2},
            {id:490, q:"¿Quién creó a la mayoría de héroes Marvel?",o:["Stan Lee","Jack Kirby","Bob Kane","Jerry Siegel"],a:0}
        ],
        normal: [
            {id:491, q:"¿De qué planeta es Superman?",o:["Marte","Krypton","Asgard","Titán"],a:1},
            {id:492, q:"¿Martillo de Thor?",o:["Aegis","Mjolnir","Uru","Storm"],a:1},
            {id:493, q:"¿En qué ciudad vive Spider-Man?",o:["Gotham","Nueva York","Metrópolis","Central City"],a:1},
            {id:494, q:"¿Qué metal tiene el esqueleto de Wolverine?",o:["Vibranium","Adamantium","Acero","Uru"],a:1},
            {id:495, q:"¿Cómo se llama el equipo de Iron Man y Capitán América?",o:["X-Men","Vengadores","Liga de la Justicia","Cuatro Fantásticos"],a:1},
            {id:496, q:"¿Quién es la mujer maravilla?",o:["Diana Prince","Natasha Romanoff","Wanda Maximoff","Jean Grey"],a:0},
            {id:497, q:"¿De qué planeta es Thanos?",o:["Krypton","Titán","Sakaar","Xandar"],a:1},
            {id:498, q:"¿Cómo se llama el villano que mató a los padres de Batman?",o:["Joe Chill","Joker","Pingüino","Acertijo"],a:0},
            {id:499, q:"¿Quién es el flash más famoso?",o:["Barry Allen","Wally West","Jay Garrick","Bart Allen"],a:0},
            {id:500, q:"¿Qué héroe tiene un anillo de poder verde?",o:["Green Lantern","Flash","Arrow","Aquaman"],a:0}
        ],
        hard: [
            {id:501, q:"¿Quién creó a Spider-Man?",o:["Jack Kirby","Stan Lee","Bob Kane","Jerry Siegel"],a:1},
            {id:502, q:"¿Villano de los X-Men?",o:["Thanos","Magneto","Loki","Joker"],a:1},
            {id:503, q:"¿Material del escudo del Cap. América?",o:["Adamantium","Vibranium","Acero","Uru"],a:1},
            {id:504, q:"¿Primera aparición de Batman?",o:["Detective Comics #27","Action Comics #1","Batman #1","Amazing Fantasy #15"],a:0},
            {id:505, q:"¿Quién es el mercenario bocazas?",o:["Deadpool","Deathstroke","Punisher","Bullseye"],a:0},
            {id:506, q:"¿Cómo se llama la hija de Thanos?",o:["Gamora","Nebula","Wanda","Natasha"],a:0},
            {id:507, q:"¿Quién es el autor de 'Watchmen'?",o:["Frank Miller","Alan Moore","Neil Gaiman","Grant Morrison"],a:1},
            {id:508, q:"¿Qué héroe es ciego?",o:["Daredevil","Cyclops","Hawkeye","Falcon"],a:0},
            {id:509, q:"¿Cómo se llama el reino de Aquaman?",o:["Asgard","Wakanda","Atlantis","Themyscira"],a:2},
            {id:510, q:"¿Quién es el villano principal de Crisis en Tierras Infinitas?",o:["Anti-Monitor","Darkseid","Thanos","Brainiac"],a:0}
        ]
    },
    "CULTURA POP": {
        easy: [
            {id:511, q:"¿En qué ciudad viven los Simpson?",o:["Quahog","Springfield","South Park","Shelbyville"],a:1},
            {id:512, q:"¿Fontanero de Nintendo?",o:["Mario","Luigi","Wario","Yoshi"],a:0},
            {id:513, q:"¿Red de vídeos más famosa?",o:["TikTok","YouTube","Instagram","Facebook"],a:1},
            {id:514, q:"¿Quién es el rey del rock?",o:["Elvis","Jackson","Mercury","Lennon"],a:0},
            {id:515, q:"¿Cómo se llama el ratón de Disney?",o:["Mickey","Jerry","Stuart","Speedy"],a:0},
            {id:516, q:"¿Qué red social tiene un logo azul con una f?",o:["Facebook","Twitter","Instagram","LinkedIn"],a:0},
            {id:517, q:"¿Cómo se llama el erizo azul de los videojuegos?",o:["Sonic","Mario","Link","Pikachu"],a:0},
            {id:518, q:"¿Qué película tiene juguetes que cobran vida?",o:["Toy Story","Cars","Shrek","Frozen"],a:0},
            {id:519, q:"¿Quién canta 'Despacito'?",o:["Luis Fonsi","Ricky Martin","J Balvin","Bad Bunny"],a:0},
            {id:520, q:"¿Cómo se llama el ogro de Dreamworks?",o:["Shrek","Fiona","Burro","Gato"],a:0}
        ],
        normal: [
            {id:521, q:"¿Cómo se llama la muñeca de Mattel?",o:["Bratz","Barbie","Nancy","Polly Pocket"],a:1},
            {id:522, q:"¿Qué animal es Mickey Mouse?",o:["Gato","Perro","Ratón","Pato"],a:2},
            {id:523, q:"¿Creador de Facebook?",o:["Steve Jobs","Bill Gates","Mark Zuckerberg","Jeff Bezos"],a:2},
            {id:524, q:"¿Qué serie trata sobre un trono de hierro?",o:["The Walking Dead","Juego de Tronos","Breaking Bad","Stranger Things"],a:1},
            {id:525, q:"¿Cómo se llama el profesor en La Casa de Papel?",o:["Sergio","Berlín","Tokio","Nairobi"],a:0},
            {id:526, q:"¿En qué serie aparece Eleven?",o:["Lost","Stranger Things","Dark","The Flash"],a:1},
            {id:527, q:"¿Quién es la cantante de 'Shake It Off'?",o:["Ariana Grande","Taylor Swift","Katy Perry","Lady Gaga"],a:1},
            {id:528, q:"¿Qué actor interpreta a Jack en Titanic?",o:["Brad Pitt","Tom Cruise","Leonardo DiCaprio","Johnny Depp"],a:2},
            {id:529, q:"¿Cómo se llama la red social de Elon Musk?",o:["X","Meta","Snapchat","LinkedIn"],a:0},
            {id:530, q:"¿Qué serie de Netflix trata sobre juegos infantiles mortales?",o:["Alice in Borderland","El Juego del Calamar","Sweet Home","Kingdom"],a:1}
        ],
        hard: [
            {id:531, q:"¿Red social con pájaro azul?",o:["Facebook","Twitter","Instagram","TikTok"],a:1},
            {id:532, q:"¿Nombre real del Joker (2019)?",o:["Jack Napier","Arthur Fleck","Bruce Wayne","Lex Luthor"],a:1},
            {id:533, q:"¿Quién canta 'Thriller'?",o:["Elvis","Prince","Michael Jackson","David Bowie"],a:2},
            {id:534, q:"¿Cuál fue el primer vídeo subido a YouTube?",o:["Me at the zoo","Hello World","Charlie bit my finger","Evolution of Dance"],a:0},
            {id:535, q:"¿Qué grupo de música lanzó 'Nevermind'?",o:["Nirvana","Pearl Jam","Alice in Chains","Soundgarden"],a:0},
            {id:536, q:"¿Quién dirigió 'Pulp Fiction'?",o:["Kubrick","Spielberg","Tarantino","Scorsese"],a:2},
            {id:537, q:"¿Qué rapero es conocido como 'Slim Shady'?",o:["Snoop Dogg","Jay-Z","Eminem","Drake"],a:2},
            {id:538, q:"¿Cómo se llama el mundo de Stranger Things?",o:["The Upside Down","The Underworld","The Other Side","The Void"],a:0},
            {id:539, q:"¿Qué artista lanzó el álbum 'Lemonade'?",o:["Rihanna","Beyoncé","Nicki Minaj","Cardi B"],a:1},
            {id:540, q:"¿En qué año se lanzó el primer iPhone?",o:["2005","2007","2008","2010"],a:1}
        ]
    }
};
