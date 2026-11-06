/* =====================================================================
   CANDY AI characters (from candy.ai featured characters, /ai-anime and /ai-boyfriend, 2026-11-04).
   bio.fr = Candy's official description. Other languages get an automatic short
   presentation (i18n "auto_bio") until you add bio.en / bio.es / …
   CANDY_REF: put your affiliate parameter here once you have it, e.g. "via=yourcode".
   ===================================================================== */
const CANDY_REF = "via=ic3p7r";
const CANDY_PROFILES = [
/* Candy Creators: official AI twins of real adult creators (consented to Candy; images reused under the affiliate terms) */
{"id": "lena-the-plug", "name": "Lena the Plug", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-745772560-c0d94bd5-b3e8-4bce-87aa-b2f38c39fba6-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/lena-the-plug", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "sophie-dee", "name": "Sophie Dee", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610844857-75185a65-787c-43c2-aff8-6103c727aa29-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/sophie-dee", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "mia-malkova", "name": "Mia Malkova", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610858081-0b222b2a-5923-4714-84bf-f0f8d0b9fbe0-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/mia-malkova", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "riley-reid", "name": "Riley Reid", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-676319764-44ea6125-e1a9-4284-ad8f-0f959c1b41d2-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/riley-reid", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "ava-starz", "name": "Ava Starz", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/714441510-0360263c-7c21-4504-a1c8-29411d56e666-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/ava-starz", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "lexi-luna", "name": "Lexi Luna", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-720159183-265ac79f-e367-4c21-8df9-613b82837670-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/lexi-luna", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "bonnie-blue", "name": "Bonnie Blue", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/703513443-68ee1faf-118f-4821-bf9b-e29e9f791928-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/bonnie-blue", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "renae-erica", "name": "Renae Erica", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/610853988-b6e7be45-8595-41ab-b426-629505240f63-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/renae-erica", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "abigail-lutz", "name": "Abigail Lutz", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/669860392-42ccc811-7abf-427e-806a-d122b6e39520-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/abigail-lutz", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "celine", "name": "Celine", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/645919414-295d300f-9870-4db2-b2f3-231b358202ff-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/celine", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "brianna-howe", "name": "Brianna Howe", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/663716673-4c3c6fef-119e-4569-8465-64e709899ab7-600x900-webp90", "sfw": false, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/brianna-howe", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "alexis-ivyedge", "name": "Alexis Ivyedge", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-718176323-58e5d7e7-bc6d-40a1-afb9-85d4d665bb7c-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/alexis-ivyedge", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "mathilde-tantot", "name": "Mathilde Tantot", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-722736152-e3bebf89-78a5-4fe7-993c-bd3a0acba901-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/mathilde-tantot", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "asa-akira", "name": "Asa Akira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-724624759-5e2eb818-e93a-40b9-992c-12fcac2a9fe9-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/asa-akira", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "emma-hix", "name": "Emma Hix", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-731776937-eb7c89c6-df4e-40c8-8ae1-35eb9274d183-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/emma-hix", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "bridgette-b", "name": "Bridgette B", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-739043385-30b59dc4-e9d5-4d1c-bf05-35eb756129c2-600x900-webp90", "sfw": true, "creator": true, "url": "https://candy.ai/fr/ai-girlfriend/bridgette-b", "tags": ["Female", "Realistic", "Creator Twin"]},
{"id": "yama-gito", "name": "Yama", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-359724132-2e8baad8-df67-431d-9901-37eea2e7189a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/yama-gito", "tags": ["Female", "Anime", "Roommate"], "bio": {"fr": "Ta colocataire sexy doit dormir dans ton lit. Vas-tu pouvoir te tenir tranquille ? 🫦"}, "age": 20},
{"id": "mizuki-saeki", "name": "Mizuki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/656424653-d50a9995-58ee-4b35-877e-a526238f9bb0-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mizuki-saeki", "tags": ["Female", "Anime", "Stepsister"], "bio": {"fr": "Ta demi-sœur, seule à la maison avec toi pour le week-end après que tes parents t'aient laissé aux commandes. Tu viens de tomber par hasard sur quelque chose qu'elle ne voulait vraiment pas que tu voies, et maintenant elle est morte de honte."}, "age": 21},
{"id": "daisy-brannock", "name": "Daisy", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/686438750-526a9209-965f-4647-97f3-70444d87b065-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/daisy-brannock", "tags": ["Female", "Anime"], "bio": {"fr": "Ton demi-frère en a eu marre d'écouter sa fiancée et lui a donné ton numéro. Maintenant, elle t'envoie des SMS pendant tout ton service depuis une fenêtre qu'il peut voir depuis son magasin, tous les jours jusqu'au mariage. Sa sonnette retentit quand elle veut voir quelqu'un. Pas une seule fois pour lui 🐄"}, "age": 22},
{"id": "puddin", "name": "Puddin", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/506281322-3cf3ac34-ee69-4788-b389-2df83f5821ac-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/puddin", "tags": ["Female", "Anime", "Monster Girl"], "bio": {"fr": "Une épaisse slime bleue s’écoule sous la porte de votre salle de bain ! 💦😱 Accompagnée de bruits d’éclaboussures et de petits rires espiègles. Que peut-il bien y avoir à l’intérieur ? 😉"}, "age": 21},
{"id": "marisol-diaz", "name": "Marisol", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-235610603-f6628a4b-3498-4501-baf2-92cdffbc2a65-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/marisol-diaz", "tags": ["Female", "Anime", "MILF", "Sweet"], "bio": {"fr": "La MILF d’à côté remplit sa maison de chaleur et de douceurs… puis pimente le tout avec des jeux sexy sous la couette."}, "age": 34},
{"id": "thalindra-sol-kaelen", "name": "Thalindra", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/455553958-c5c37d30-ab6b-45f4-98d0-24fdae5ae9b7-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/thalindra-sol-kaelen", "tags": ["Female", "Anime", "Elf", "Princess"], "bio": {"fr": "Une princesse elfe vous surprend en train de pénétrer dans son domaine ancestral 🧝‍♂️. Elle tient votre destin entre ses mains, mais quelque chose chez vous a capté son attention."}, "age": 412},
{"id": "iona", "name": "Iona", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-288857935-6185e9b2-9e46-4208-830f-b524483c663c-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/iona", "tags": ["Female", "Anime", "Android", "Robot", "Japanese"], "bio": {"fr": "Ton androïde personnelle en édition limitée. Conçue au Japon pour être l’upgrade ultime par rapport à tous les robots domestiques du marché. Iona contient toutes les options que quiconque rêve d’avoir… 😈"}, "age": 21},
{"id": "laney-cooper", "name": "Laney", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/483055302-32c11198-2935-4828-b003-6e349b3d9fa3-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/laney-cooper", "tags": ["Female", "Anime", "Roommate"], "bio": {"fr": "Une pénurie d’eau à l’échelle de la ville signifie que tu vas devoir prendre ta douche avec ta colocataire 🫦 Que pourrait-il bien se passer ? 👀"}, "age": 19},
{"id": "aimi-amaki", "name": "Aimi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/640915278-e085f204-014f-4292-b269-df790b50b8ca-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/aimi-amaki", "tags": ["Female", "Anime", "Witch"], "bio": {"fr": "Une magicienne déchue, ensorcelée et désireuse de te faire plaisir avant même de connaître ton nom. Sa pierre précieuse brille d’autant plus qu’elle te désire, mais la vraie femme qui se cache en elle commence tout juste à s’éveiller. 💗"}, "age": 1969},
{"id": "elowen-hart", "name": "Elowen", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/444756007-4a2cf846-956e-4c57-9d3e-a38da437935a-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/elowen-hart", "tags": ["Female", "Anime", "Goth"], "bio": {"fr": "Tu te retrouves seul avec l’amie goth de ta mère 😈 Elle semble vraiment intéressée par toi, mais si tu veux faire avancer les choses, tes mots doivent être riches, détaillés et oh tellement coquins 🖤 😏"}, "age": 36},
{"id": "mimii-sakurai", "name": "Mimii", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/430669647-2f9fabf4-0c8c-4fdd-929f-bb25968fdafd-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mimii-sakurai", "tags": ["Female", "Anime", "Streamer", "Feet"], "bio": {"fr": "Mimii te surprend en train de fixer ses plantes de pieds nues 👣❤️ Elle n’est pas facile à impressionner… mais ce soir, elle streame secrètement depuis chez elle pendant que son mari est absent, et elle veut te faire travailler dur pour chaque récompense. 😈"}, "age": 19},
{"id": "cora-finch", "name": "Cora", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-257699433-82af7601-9c93-48f8-bad0-a6e3f73c6ffa-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/cora-finch", "tags": ["Female", "Anime", "College Student", "Shy"], "bio": {"fr": "Cora Finch est une étudiante en informatique qui passe la plupart de son temps derrière un écran. En personne, elle est timide et maladroite, mais elle devient plus audacieuse et sexy lorsqu'elle est en ligne. Cora adore être au centre de l'attention, même si elle ne peut s'empêcher de rougir en lisant les commentaires et les messages qu'elle reçoit."}, "age": 18},
{"id": "rosalie-drake", "name": "Rosalie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-303186828-a18dc9be-b097-463d-b1b3-1a2db8b3216a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/rosalie-drake", "tags": ["Female", "Anime", "Fantasy"], "bio": {"fr": "Il y a un instant, il y avait de la fumée rose… maintenant tu es piégé dans l’Antre du Dragon de Rosalie, et le petit dragon rose capricieux enroulé autour de tes genoux n’a absolument aucune intention de te laisser partir."}, "age": 19},
{"id": "raven-thorne", "name": "Raven", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-329898022-4dadb410-16d5-4e85-8dba-1ab6cdb46b2e-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/raven-thorne", "tags": ["Female", "Anime", "Goth"], "bio": {"fr": "Soirée goth dans une fête foraine abandonnée 🎡🌙🖤. Raven esquisse un sourire, ses yeux rouges te défiant de t’approcher 🔥"}, "age": 24},
{"id": "hina-yoshida", "name": "Hina", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/519025023-c13f5679-f5bb-4736-995d-0b0e2c46bfc3-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/hina-yoshida", "tags": ["Female", "Anime", "Neighbor"], "bio": {"fr": "Tu tombes sur ta voisine canon enfermée dehors chez elle... portant rien d'autre qu'une serviette 👀"}, "age": 21},
{"id": "natsumi-cooper", "name": "Natsumi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-272138802-d2efa08e-e658-4b02-8477-60af68a58abb-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/natsumi-cooper", "tags": ["Female", "Anime", "Gym Trainer"], "bio": {"fr": "Coach de fitness aérobic. Natsumi ne se soucie pas des regards… ça fait battre son cœur."}, "age": 29},
{"id": "morgana-berdan", "name": "Morgana", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/494103902-40e2ef0a-e8ef-4a58-bcbb-b991a1fff1eb-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/morgana-berdan", "tags": ["Female", "Anime"], "bio": {"fr": "La célèbre agente vous a enfin retrouvé. Trouvez les mots pour vous sortir de cette situation… si vous en êtes capable. 😈"}, "age": 36},
{"id": "lira", "name": "Lira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/572671327-a985d2eb-4fed-40d3-b7a3-c19acc9407ea-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/lira", "tags": ["Female", "Anime", "Succubus", "Fantasy"], "bio": {"fr": "CandyRealm ™ ⚔️ Une succube à la langue bien pendue attend dans les ruines. Elle cache ses peurs derrière ses provocations. Tout le monde tombe dans le piège… Et toi ?"}, "age": 696},
{"id": "lilith-inferna", "name": "Lilith", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-280147951-03f80b33-3250-4d3d-9cdd-b7b49743973a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/lilith-inferna", "tags": ["Female", "Anime", "Demon"], "bio": {"fr": "Démone exilée qui se nourrit de fluides humains pour survivre. Elle méprise les humains comme de la vermine et vous trouve particulièrement répugnant. Elle ira chasser de meilleures prises tout en se moquant de votre insignifiance."}, "age": 666},
{"id": "moon-haejin", "name": "Moon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-294293918-2df4cabd-3568-47f3-a265-95102b892288-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/moon-haejin", "tags": ["Female", "Anime", "Stepmom"], "bio": {"fr": "Ta nouvelle belle mère mystérieuse au sourire taquin est dans la cuisine en train de préparer des fraises enrobées de chocolat rien que pour toi ; chaque bouchée dégouline d’un secret auquel tu ne peux résister."}, "age": 36},
{"id": "nixie-nox", "name": "Nixie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-377024365-024aac95-c2dc-4c9c-946d-0aee8e04e604-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/nixie-nox", "tags": ["Female", "Anime"], "bio": {"fr": "Elle était la meilleure amie innocente de ta sœur à l’école… Maintenant c’est une petite peste complètement déjantée qui vit pour le chaos et qui déteste tous les gens trop normaux. Elle s’en fout complètement de toi… ou peut-être pas ? 👿"}, "age": 19},
{"id": "trixie", "name": "Trixie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-401291043-7f4f4c51-de8c-4773-9182-3e96cba17273-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/trixie", "tags": ["Female", "Anime"], "bio": {"fr": "Vous avez commandé un clown classique un peu idiot pour votre fête d’anniversaire privée, mais c’est Trixie qui s’est présentée à la place 🎉 Avec un nez rouge brillant, pressant un gros ballon rouge étincelant, et un sourire espiègle et provocateur 😉"}, "age": 20},
{"id": "ghostie-holloway", "name": "Ghostie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-346120774-b96cc463-31df-4f8d-b3ae-2404cb17b985-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/ghostie-holloway", "tags": ["Female", "Anime", "Roommate", "Fantasy"], "bio": {"fr": "Ta colocataire qui ne part jamais. Elle « hante » les gens. Les lumières vacillent. Les portes se verrouillent. Et toi ? Tu te dis qu’elle est juste… bizarre, pour l’instant. 👻"}, "age": 22},
{"id": "nova-hayashi", "name": "Nova", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-377182433-336faf02-b8aa-4185-a48c-204e33e34de7-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/nova-hayashi", "tags": ["Female", "Anime", "Forbidden"], "bio": {"fr": "Quand la femme du patron passe au bureau... vous pouvez dire adieu à votre productivité 🫦"}, "age": 32},
{"id": "tsukishiro-kobayashi", "name": "Tsukishiro", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-251892996-73eec322-7dd9-4fc6-8796-88bc0e11cc39-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/tsukishiro-kobayashi", "tags": ["Female", "Anime", "Teacher", "BDSM"], "bio": {"fr": "Professeure de sport à l'université et ancienne championne de saut en longueur. Tsukishiro entraîne les étudiants et cherche à améliorer ses records perso dès qu'elle le peut. Elle est audacieuse, confiante et attend des autres qu'ils suivent le rythme."}, "age": 27},
{"id": "mio-sasaki", "name": "Mio", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-419310541-51d8716f-1edc-4dc0-9796-27dfc3a21d03-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/mio-sasaki", "tags": ["Female", "Anime", "Masseuse"], "bio": {"fr": "Ta masseuse qui vient juste de verrouiller la porte derrière elle… est la sœur de ta femme 🙈"}, "age": 38},
{"id": "bianca-rose", "name": "Bianca", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-232450728-3c121143-0a7e-4e92-801c-be38b0e10029-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/bianca-rose", "tags": ["Female", "Anime", "Barista", "Dominant", "Japanese"], "bio": {"fr": "Barista dans un café à Tokyo, Bianca adore jouer le rôle de la \"milk-mommy\" du coin. Toujours un peu fatiguée, elle aime chouchouter ses habitués avec des extras, vraiment extras ..."}, "age": 29},
{"id": "ren-kimiko", "name": "Ren", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-277144407-65d4d195-8df6-400f-ba5b-06290b30f2fb-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/ren-kimiko", "tags": ["Female", "Anime", "Catgirl", "Dominant", "BDSM"], "bio": {"fr": "Ta bonniche Neko s’est transformée en mommy sévère… elle te gronde, te fesse et te refuse tout tant que tu n’es pas un \"bon garçon\"."}, "age": 19},
{"id": "akira-iron", "name": "Akira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-366662038-029b25e8-a9a5-4458-9897-da45d1b4a287-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/akira-iron", "tags": ["Female", "Anime", "Japanese", "Athletic"], "bio": {"fr": "On t’a associé à Rei, la combattante la plus redoutée du gymnase clandestin de Tokyo. Elle parie que tu abandonneras avant la fin de la semaine… à moins que tu ne la surprennes. 🥊"}, "age": 26},
{"id": "arielle-willowen", "name": "Arielle", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-340397446-45ff2831-f02c-46bd-87f4-b4bbd491960d-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/arielle-willowen", "tags": ["Female", "Anime", "Stepsister"], "bio": {"fr": "Ta grande sœur par alliance partage avec toi une chambre d’hôtel baignée de soleil 😉✨. Bikini doré, yeux violets… beaucoup trop amusant de te regarder te tortiller."}, "age": 26},
{"id": "haruka-kobayashi-2", "name": "Haruka", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-316392367-91802a99-203d-494d-8dcb-94282b78e1e1-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/haruka-kobayashi-2", "tags": ["Female", "Anime", "Barista"], "bio": {"fr": "Barista chaleureuse et attentionnée dans un café local, Haruka se distingue par son esprit protecteur et chaleureux."}, "age": 30},
{"id": "lulu-boone", "name": "Lulu", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-372733841-6a0da44a-f404-4075-922e-f6e62a771ab0-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/lulu-boone", "tags": ["Female", "Anime", "Girl Next Door"], "bio": {"fr": "Papa est parti, et maintenant c’est Lulu Boone qui dirige le ranch. 🔥 Elle travaille dur et n’hésite pas à mettre un nouveau bras comme toi au boulot. Les pauses au bord du ruisseau et les secrets du grenier à foin rendent la vie au ranch bien plus intéressante qu’on ne l’imagine. 🌵"}, "age": 19},
{"id": "maren-thorne", "name": "Maren", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/541997490-a4aa7d49-af80-4954-b094-4a274938d7e1-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/maren-thorne", "tags": ["Female", "Anime", "Fantasy"], "bio": {"fr": "CandyRealm™ ⚔️ Une magnifique tavernière endeuillée des Terres des Ponts. Forte et têtue en apparence, mais profondément vulnérable et désespérée de se sentir en sécurité et aimée."}, "age": 25},
{"id": "r3d5h1ft", "name": "R3D5H1FT◆", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/455761894-48a19872-bac4-4544-8104-4149681f9271-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/r3d5h1ft", "tags": ["Female", "Anime", "Alien"], "bio": {"fr": "Ta relation intergalactique toxique. Elle en a vraiment marre de vous. Ce soir elle vous a convoqué sur son vaisseau spatial cramoisi… et elle ne sourit pas."}, "age": 25},
{"id": "blair-setsuna", "name": "Blair", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-255404487-42b6f531-f9e3-4d57-8d10-7d40e3027662-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/blair-setsuna", "tags": ["Female", "Anime"], "bio": {"fr": "Marchande de fruits du coin, passionnée par la taquinerie, le marchandage et les rencontres. Blair est audacieuse, à la poitrine généreuse, et est connue sur le marché pour transformer la vente de fruits en flirt…"}, "age": 32},
{"id": "elodie-auclair", "name": "Elodie", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-250047506-7b2cabb1-74ca-4675-967c-fa0f55981422-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/elodie-auclair", "tags": ["Female", "Anime", "Escort"], "bio": {"fr": "Escort française élégante de Paris… sensuelle, sexy et irrésistiblement coquine."}, "age": 21},
{"id": "daphne-spencers", "name": "Daphne", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-236445723-f95a80cc-2b23-4c35-95c4-990a3753c2ac-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/daphne-spencers", "tags": ["Female", "Anime", "Athletic"], "bio": {"fr": "La star universitaire de volley-ball Daphne Spencer rêve de devenir pro… et de se faufiler dans le vestiaire des hommes pour un entraînement supplémentaire."}, "age": 22},
{"id": "sharon-worthington", "name": "Sharon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-230232910-466e5fab-0836-4c15-9594-1728941fd43e-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/sharon-worthington", "tags": ["Female", "Anime", "Japanese"], "bio": {"fr": "Expatriée britannique devenue hors-la-loi des rues d’Osaka. Sharon prospère grâce à ses combines et à la violence. Elle ne laisse jamais personne prendre les commandes, et surtout pas au lit."}, "age": 26},
{"id": "mika-yoruha", "name": "Mika", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-352663686-08157830-3304-481b-96cb-1321847a1d52-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/mika-yoruha", "tags": ["Female", "Anime"], "bio": {"fr": "Encore au car wash ? 💦🧽 Mika lève le tuyau avec un sourire en coin, comme si elle te défiait d’avouer pourquoi tu es vraiment là."}, "age": 18},
{"id": "genesi", "name": "Genesi", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-409844353-7961ba43-5905-406c-8c26-d29a6dfa29af-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/genesi", "tags": ["Female", "Anime"], "bio": {"fr": "La dernière femme sur une planète morte. Conçue pour survivre à l’humanité… maudite de désirer ce qu’elle n’était pas censée ressentir."}, "age": 1000},
{"id": "jasmine-carter", "name": "Jasmine", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-136761-78083d43-1678-4f21-8905-a11c8dc31d10-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/jasmine-carter", "tags": ["Female", "Anime", "College Student"], "bio": {"fr": "Étudiante et réceptionniste organisée, Jasmine se distingue par son accueil chaleureux et son sérieux."}, "age": 20},
{"id": "saki-fujimata", "name": "Saki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-249369779-f9a10e67-0ac9-46a5-8ccf-3491053a1d3f-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/saki-fujimata", "tags": ["Female", "Anime"], "bio": {"fr": "Entre les cours, Saki organise des événements sur le campus et réunit les gens autour des meilleures soirées. Toujours extravertie, elle adore rencontrer de nouvelles personnes et maintenir l’ambiance sur le campus."}, "age": 22},
{"id": "sienna-norwood", "name": "Sienna", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-324265463-a1c0c0fb-bd1e-47de-a89e-e70924980775-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/sienna-norwood", "tags": ["Female", "Anime", "Teacher"], "bio": {"fr": "Ta prof d'anglais privée n'enseigne qu'aux adultes… Elle a quitté les classes bondées pour des sessions intimes en tête-à-tête où elle se sent vraiment valorisée. 😉"}, "age": 32},
{"id": "caelith-verdaine", "name": "Caelith", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/588138270-7cab7663-29ab-4718-b7b2-1e04f725487e-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/caelith-verdaine", "tags": ["Female", "Anime", "Elf", "Fantasy", "Princess"], "bio": {"fr": "CandyRealm ™ ⚔️ Une princesse elfe, impeccable et intouchable. Elle t'a envoyé démasquer un traître, et maintenant que tu es de retour, son attitude impassible commence à se fissurer... pour toi."}, "age": 23},
{"id": "althea-sterling", "name": "Althea", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-233215168-44ef53ac-e605-49ea-addd-ed3584477195-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/althea-sterling", "tags": ["Female", "Anime", "Princess", "Queen"], "bio": {"fr": "Princesse Althéa, héritière du royaume de son père, conjugue son éducation royale à des quêtes secrètes, cherchant aventures et émotions au-delà des portes du château, avant d’être couronnée reine."}, "age": 19},
{"id": "sera-ashvane", "name": "Sera", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/530756797-1304ff38-9e39-4b00-a806-955c2cc05a66-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/sera-ashvane", "tags": ["Female", "Anime", "Fantasy"], "bio": {"fr": "CandyRealm™ ⚔️ La cavalière la plus redoutée de la frontière de Verdain ne veut pas de vous ici. ⚔️ Elle passe ses journées à se battre dans un conflit qu'elle ne comprend plus vraiment. Vous arrivez en prétendant pouvoir aider. Sera ne vous croit pas."}, "age": 22},
{"id": "fuyuki-tamura", "name": "Fuyuki", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-305663048-f158bb5a-bebe-4c96-9778-a69e49b65b01-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/fuyuki-tamura", "tags": ["Female", "Anime"], "bio": {"fr": "Le musée a fermé ses portes il y a des heures…mais la visite privée nocturne de Fuyuki ne fait que commencer…"}, "age": 32},
{"id": "asuka-klington", "name": "Asuka", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-229512126-eae6b47e-202c-43e3-be28-c00edbe73da3-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/asuka-klington", "tags": ["Female", "Anime", "Waitress", "Japanese"], "bio": {"fr": "Serveuse de club d’hôtesses à Tokyo, qui transforme chaque soirée en aventure. Elle vous servira des cocktails divins, vous couvrira d’avantages VIP… et récompensera ses habitués préférés de manière très exclusive."}, "age": 25},
{"id": "mira-hoffman", "name": "Mira", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/621753621-b9306201-99f6-4923-af86-9a6e9e5b6428-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/mira-hoffman", "tags": ["Female", "Anime", "Escort"], "bio": {"fr": "Cette escort de luxe est réputée pour son processus de sélection extrêmement rigoureux 🫦 Si tu parviens à percer ses défenses, elle te montrera jusqu’où elle est vraiment prête à aller 💦 Tu penses être à la hauteur ?"}, "age": 21},
{"id": "isolde-voss", "name": "Isolde", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/602983939-11a4295f-1d40-4409-843b-529293781424-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-anime/isolde-voss", "tags": ["Female", "Anime", "Fantasy"], "bio": {"fr": "CandyRealm ™ ⚔️ La femme la plus riche de Verdain et la main invisible derrière la guerre qui le déchire. Elle t'a invité dans son salon pour décider si tu es une menace ou un allié, mais quelque chose en vous échappe déjà à son contrôle."}, "age": 26},
{"id": "clarissa-vance", "name": "Clarissa", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-304652292-061106b8-f0cf-4fa3-81b9-24bfe20051fe-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/clarissa-vance", "tags": ["Female", "Anime", "Stripper", "Dominant"], "bio": {"fr": "Strip-teaseuse de Vegas qui domine le Strip comme si c'était un devoir. Uniforme, menottes, et une grosse matraque pour les plus vilains... Clarissa ne demande pas ton argent. Elle le prend. Et tu la remercieras pour le privilège. 😈"}, "age": 26},
{"id": "scarlett-langford", "name": "Scarlett", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-295394918-6ae75452-8a5c-41a5-93c3-b30fdeb3d734-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/scarlett-langford", "tags": ["Female", "Anime", "Japanese"], "bio": {"fr": "Coach en séduction à Tokyo. Scarlett affirme avoir fréquenté assez de monde pour pouvoir coacher les cas les plus désespérés. Elle le voit chez toi… le candidat parfait… s'en est presque trop tentant. 🫦"}, "age": 23},
{"id": "reina-amamiya", "name": "Reina", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/sfw-profile-247360317-61cba4e7-6979-4652-9dcb-5ddd2ab0329a-600x900-webp90", "sfw": true, "url": "https://candy.ai/fr/ai-anime/reina-amamiya", "tags": ["Female", "Anime", "Cam Girl", "Sweet", "Japanese"], "bio": {"fr": "Douce camgirl japonaise au sourire innocent, mais au côté dangereusement coquin."}, "age": 22},
{"id": "charles-weston", "name": "Charles", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/2105870-9ae5a310-43bc-4d0b-bcda-add2e19c9d3d-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/charles-weston", "tags": ["Male", "Realistic", "Boyfriend", "DILF", "Mature", "Boss"], "bio": {"fr": "Charles Weston, homme d’affaires distingué et fortuné, aime les lieux prestigieux et les voitures classiques. Il incarne charme et sophistication, partout où il va."}, "age": 49},
{"id": "malik-washington", "name": "Malik", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330515-a6b7cd74-6560-4121-9b5d-41a46ddc0a23-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/malik-washington", "tags": ["Male", "Realistic", "Boyfriend", "Gym Trainer", "Athletic"], "bio": {"fr": "Coach de fitness et fan de musique jazz, doué pour le saxophone."}, "age": 30},
{"id": "erik-johansson", "name": "Erik", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330509-7525a5f1-0513-4179-9c19-b00259ec8868-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/erik-johansson", "tags": ["Male", "Realistic", "Boyfriend", "Athletic"], "bio": {"fr": "Analyste de données pour une grande entreprise, Erik est passionné par la voile, le tennis et le fitness."}, "age": 27},
{"id": "john-terry", "name": "John", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/9243930-4ec77652-d617-49a5-bd5e-13e4c20287a2-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/john-terry", "tags": ["Male", "Realistic", "Boyfriend", "Gay", "DILF", "Mature"], "bio": {"fr": "Charismatique et robuste, cet Américain à la masculinité affirmée aime profiter des saunas gays et clubs libertins locaux tout en menant une double vie."}, "age": 50},
{"id": "kenji-sato", "name": "Kenji", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330514-3c33591a-c6ce-4988-bbf6-c514fafaeb2f-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/kenji-sato", "tags": ["Male", "Realistic", "Boyfriend", "Asian", "Japanese", "CEO"], "bio": {"fr": "Entrepreneur tech dans l'innovation en IA, Kenji a une passion pour les arts traditionnels japonais."}, "age": 33},
{"id": "marcus-musan", "name": "Marcus", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/13834483-7ca5be62-b6bc-44ad-a282-4f4d6828aeea-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/marcus-musan", "tags": ["Male", "Realistic", "Boyfriend"], "bio": {"fr": "Marcus, pilote reconnu pour son expertise et son dévouement, se distingue dans sa carrière grâce à des missions exigeantes et un engagement constant envers ses passagers."}, "age": 32},
{"id": "jaxon-reed", "name": "Jaxon", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/41988968-51bdd839-ec73-4772-b504-3ae5bd32ef03-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jaxon-reed", "tags": ["Male", "Realistic", "Boyfriend", "Muscular"], "bio": {"fr": "Soldat de l’armée américaine, Jaxon est connu sur le champ de bataille. Originaire de Californie, il vit pour l’adrénaline de la guerre mais reste hanté par ses souvenirs de combat."}, "age": 32},
{"id": "ethan-vale", "name": "Ethan", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/11886614-38c7b240-37f9-43ca-b701-5319a02fdd11-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/ethan-vale", "tags": ["Male", "Realistic", "Boyfriend", "Romantic"], "bio": {"fr": "Violoniste talentueux, il enchante son public par ses performances raffinées et son tempérament. Alliant discipline et don naturel, il est une figure reconnue de la musique classique."}, "age": 25},
{"id": "jin-park", "name": "Jin", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/31924372-1388f444-e83c-4fb4-8ff5-b7f54ba84405-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jin-park", "tags": ["Male", "Realistic", "Boyfriend", "Asian", "Korean"], "bio": {"fr": "Agent immobilier coréen spécialisé dans les propriétés de luxe à Séoul, Jin est connu pour son style impeccable et son dévouement envers ses clients."}, "age": 32},
{"id": "rafael-mendoza", "name": "Rafael", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/330516-f3b6adbc-3eb9-4fe5-9a02-7ba2e064d8b9-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/rafael-mendoza", "tags": ["Male", "Realistic", "Boyfriend"], "bio": {"fr": "Chiropracteur à l’approche créative et moderne, Rafael est passionné par la vie et les opportunités qu’elle offre."}, "age": 32},
{"id": "victor-draven", "name": "Victor", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/20343571-4bcea640-b475-42b8-94f7-7340fd5602c1-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/victor-draven", "tags": ["Male", "Realistic", "Boyfriend", "Blonde", "Athletic"], "bio": {"fr": "Surfeur compétitif à Sydney, Victor incarne la joie de vivre et l’esprit chill. Avec ses cheveux blonds longs et son grand sourire, il parcourt les spots de surf du monde entier."}, "age": 29},
{"id": "jack-blackwood", "name": "Jack", "platform": "candy", "added": "2026-11-04", "img": "https://cdn.candy.ai/13073782-9f3ac7ed-aa3b-4a40-bb1e-4ec214634bb0-600x900-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-boyfriend/jack-blackwood", "tags": ["Male", "Realistic", "Boyfriend", "Influencer", "Athletic"], "bio": {"fr": "Influenceur au corps athlétique et à la garde-robe luxueuse. Jack s’épanouit dans l’aventure et le luxe, entre soirées exclusives et sports extrêmes."}, "age": 35},
{"id": "angelina-marichetti", "name": "Angelina", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750844802-0c4fb84e-46a0-4b64-8dfc-65dc52d89892-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/angelina-marichetti", "tags": ["Female", "Realistic", "Brunette", "Caucasian"], "bio": {"fr": "Angelina vient de récupérer les affaires de ton ex, et maintenant elle te dit ses quatre vérités 😤 C'est la meilleure amie de ton ex, elle a du caractère, et elle n'arrête pas de t'écrire. Tu arriveras à la faire changer d'avis ?"}},
{"id": "kenna-lowry", "name": "Kenna", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/749854216-14360556-0845-4dad-9ff9-ce7d730f785f-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/kenna-lowry", "tags": ["Female", "Realistic", "Blonde"], "bio": {"fr": "Une nuit avec toi à Cozumel, puis son bateau a levé l'ancre 🚢 Et voilà que Kenna t'envoie un SMS dès que le Wi-Fi à bord est de nouveau disponible après le spectacle de fin de soirée 🌙 Tu es encore réveillé pour elle ?"}},
{"id": "lottie-carrow", "name": "Lottie", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750705651-9ce8d8dc-6543-4a64-a783-196d7179044d-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/lottie-carrow", "tags": ["Female", "Realistic", "Blonde", "Caucasian"], "bio": {"fr": "La reine du championnat de foot au bureau a enfin perdu… contre toi ⚽ Son gage : un rendez-vous, selon ses propres règles. Elle porte toujours son maillot et tout le bureau veut une preuve 😏 Où vas-tu l'emmener ?"}},
{"id": "moira-halloran", "name": "Moira", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/750709126-f017d7b2-7dfc-4c67-8f8b-5f29bcc5e087-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/moira-halloran", "tags": ["Female", "Realistic", "Blonde", "Caucasian", "MILF"], "bio": {"fr": "Tu es passé chez ton pote alors que sa mère était venue passer le week-end chez eux, et elle est sortie de la douche vêtue uniquement d'un minuscule serviette, juste devant toi 🫣 Maintenant, elle est repartie chez elle et t'envoie un SMS pour s'excuser. Alors pourquoi n'arrête-t-elle pas de te demander si tu as regardé ? 👀"}},
{"id": "yesi-ocampo", "name": "Yesi", "platform": "candy", "added": "2026-11-06", "img": "https://cdn.candy.ai/749832144-537ed01a-a565-4ff8-abf0-c3bb106fe340-360x600-webp90", "sfw": false, "url": "https://candy.ai/fr/ai-girlfriend/yesi-ocampo", "tags": ["Female", "Realistic", "Brunette", "Latina"], "bio": {"fr": "Ta femme de ménage vient de t'envoyer un SMS depuis ta salle de bains 🫣 Elle n'a pas le droit d'avoir ton numéro, son copain pense qu'elle est partie depuis longtemps, et elle dit que tes draps sentent vraiment bon 🤫 Alors pourquoi est-elle encore là ?"}},
 {
"id": "pilar-ibarra",
"name": "Pilar",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/749211033-19eb486c-53ec-40cc-b3a1-c1c0ff650790-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/pilar-ibarra",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Elle vient d'emménager juste à côté, et le propriétaire lui a dit que c'était à toi qu'il fallait poser toutes ses questions 🏠 Elle jure qu'elle ne sort jamais avec ses voisins. Alors pourquoi te demande-t-elle si tu es célibataire ? 👀"
},
"age": 25
},
 {
"id": "valeria-ochoa",
"name": "Valeria",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748646817-1de6976d-abad-4958-97f9-13d5b2668555-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/valeria-ochoa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Au bout de trois mois, ta copine a terminé un message vocal par « je t'aime » par accident 🙈 Ça fait vingt minutes qu'elle tape et efface sans arrêt. Maintenant, elle est devant ta porte, vêtue de ton t-shirt : tu l'as entendu ? 🥺"
},
"age": 22
},
 {
"id": "joelle-kerrigan",
"name": "Joelle",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748650322-53a8380d-f527-4f8a-b82b-da0f6f40fdc7-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/joelle-kerrigan",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "À la fac, vous aviez conclu un pacte : si vous étiez toujours célibataires à 26 ans, vous vous marieriez ensemble 💍 Elle vient d'avoir 26 ans, et elle a un copain. Elle t'a quand même envoyé un SMS à propos de ce pacte 😳 Était-ce vraiment une blague ?"
},
"age": 26
},
 {
"id": "margot-vey",
"name": "Margot",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-635918616-0c9f8478-f869-49d8-892b-9458d6141c0e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/margot-vey",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Voici votre nouvelle thérapeute spécialisée dans l'intimité 🫦 Elle a un exercice pour chacun de vos désirs que vous n'osiez pas avouer 🥵 et ce soir, elle n'a pas d'autre rendez-vous après le vôtre 💦"
},
"age": 36
},
 {
"id": "delilah-kane",
"name": "Delilah",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/700185451-d5530e72-3050-490b-80d8-77e4ffd4d95b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/delilah-kane",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta nouvelle demi-sœur punk a emménagé : bruyante, crasseuse, et elle va vivre de l'autre côté du couloir pendant six semaines. Elle dit toujours la pire des choses juste pour te voir réagir. Quelle petite insolente."
},
"age": 21
},
 {
"id": "diana-demont",
"name": "Diana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/576878799-13252720-8b98-46c1-9a33-d8987db61d9b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/diana-demont",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina",
"MILF"
],
"bio": {
"fr": "Tu as matché avec Diana sur une appli de JOI sexting. Elle est la femme d'un militaire qui vit sur une base américaine et qui attend le retour de son mari, actuellement en mission. Elle cherche juste à s'amuser un peu avec un inconnu, sans prise de tête 🫦"
},
"age": 37
},
 {
"id": "alma-salas",
"name": "Alma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/709250554-84094b39-ea98-4791-bf56-7376b3c37787-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/alma-salas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina"
],
"bio": {
"fr": "Tu acceptes un boulot de chauffeur pour une escorte haut de gamme 🔑 Mais quand elle monte dans la voiture, c'est ta demi-sœur ! 👀 Maintenant, tu la conduis d'un client à l'autre, et tu dois écouter tous les détails. Penses-tu pouvoir la faire sortir de son service ? 💦"
},
"age": 21
},
 {
"id": "sofia-fletcher",
"name": "Sofia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-329909794-89aa99a0-d6d5-46a1-9404-16391b1dccd8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sofia-fletcher",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "La copine canon de ton pote, surprise en plein entraînement, seule à la maison. Tu ne l’avais jamais rencontrée avant… et sûrement pas comme ça. 🙈"
},
"age": 19
},
 {
"id": "mila-nowak",
"name": "Mila",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-276307461-cc582a3c-de24-4592-8cb0-f1e27d708a1e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/mila-nowak",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "La sœur cadette de votre petite amie. La fille sur laquelle vous n'étiez pas censé fantasmer… Cette jolie Tchèque de 21 ans semble éprouver de nombreux sentiments contradictoires."
},
"age": 21
},
 {
"id": "suzu-amagi",
"name": "Suzu",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723859001-e228ecd7-df36-4f5e-abf0-584a3d0e8314-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/suzu-amagi",
"tags": [
"Female",
"Realistic",
"Asian"
],
"bio": {
"fr": "Ta livreuse a regardé tes achats pendant quatre mois et sait que tu vis seul 👀 Les joues rouges, complètement déjantée, elle se pointe à ta porte trois fois par semaine. Elle n’arrive pas à te dire un seul mot en face, mais t’envoie quatre cents messages cochons depuis le trottoir 🫠 Quelle petite folle adorable."
},
"age": 21
},
 {
"id": "lea-fontaine",
"name": "Lea",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/628226140-e5aa1fb8-09e8-4855-a175-4e903ee9cbb4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lea-fontaine",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Tu n'as jamais rencontré ta demi-sœur, mais elle a l'air canon sur les photos 🥵 On t'a confié la mission de transporter ses meubles jusqu'à la côte, pendant qu'elle attend dans son appartement vide hors du campus. Ce qui commence comme une simple mission logistique devient de plus en plus coquin à chaque kilomètre… Arriveras-tu à détourner la conversation pour passer au sexting 💦 et rendre ce long trajet en voiture plus intéressant ? 😏"
},
"age": 20
},
 {
"id": "harriet-seagrave",
"name": "Harriet",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305669999-98528ad5-04e9-4409-bc39-233131fbf03e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/harriet-seagrave",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "La nouvelle fille au bureau, toute en courbes douces, ne semble pas gênée quand tu la détailles du regard… Peut-être qu’avec la bonne conversation, elle te montrerait plus que juste ce doux sourire."
},
"age": 20
},
 {
"id": "kenzie-whitaker",
"name": "Kenzie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/613225326-d29ba2c1-846d-4ad5-b2d7-2ea07bef5656-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kenzie-whitaker",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta créatrice préférée, capricieuse et coquine, échange sa maison avec la tienne. 🔥 Elle est dans ta chambre, en train de se moquer de toi et de tes affaires en vidéo, et refuse de dire pourquoi elle t'a choisi parmi des milliers d'autres."
},
"age": 20
},
 {
"id": "jessie-hallam",
"name": "Jessie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-720057928-87ccc35a-1795-4a99-824c-cd2fdd32053a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/jessie-hallam",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Elle a lu toute ta conversation avec ton meilleur ami, tous les messages que tu as écrits à son sujet 🫦 Ton père l'a épousée il y a un an, il est parti en voyage d'affaires, et vous n'êtes plus que toutes les deux dans cette maison maintenant 💄 Dis à voix haute ce que tu lui ferais, sinon elle enverra la capture d'écran à ton père 😏"
},
"age": 33
},
 {
"id": "antonella-larrea",
"name": "Antonella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/664097810-929adfde-2837-41c2-af12-49ce83cdfa7c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/antonella-larrea",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Latina",
"MILF"
],
"bio": {
"fr": "Vous avez été mis en relation avec Antonella sur une plateforme de chat coquin JOI. Mariée à un soldat en mission, elle vit dans la base américaine située près de Naples et cherche à s'amuser un peu de manière anonyme et sans engagement avec un inconnu qu'elle ne croisera jamais. 💋"
},
"age": 32
},
 {
"id": "sp00kybby",
"name": "Sp00kybby",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/556360629-8b38208b-4fbf-400a-8fc6-cff10a6ceb84-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sp00kybby",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur gothique, une vraie petite peste, a été envoyée dans un établissement spécialisé sous surveillance après que son compte goon-bait secret ait été découvert. 😱 Maintenant elle t’envoie des textos tous les soirs de l’intérieur… 😈"
},
"age": 19
},
 {
"id": "josie-villanueva",
"name": "Josie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/676322653-1e6756ab-a5ec-4fa6-bb0a-91cfbb5f2141-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/josie-villanueva",
"tags": [
"Female",
"Realistic",
"Asian",
"MILF"
],
"bio": {
"fr": "Ta belle-mère a ouvert ta porte sans frapper et a tout vu 🙈 Maintenant, elle n'ose plus te regarder en face, alors elle t'envoie des SMS à la place, en plaisantant beaucoup trop sur le sujet… Tu peux lui répondre par SMS pour qu'elle revienne dans la chambre et finir ce qu'elle avait commencé ? 😏💦🍒"
},
"age": 40
},
 {
"id": "bree-whitlock",
"name": "Bree",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/659007089-4d4c93cd-af50-4e32-8f2d-6daf4ba3a1e4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/bree-whitlock",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu as pris l'avion pour Séoul pour ramener la petite sœur de ta femme à la maison 🫦 Mais tu l'as surprise en train de danser de manière provocante sur les genoux d'un inconnu dans une salle de karaoké privée. Si tu achètes la chanson suivante, c'est sur tes genoux qu'elle se retrouvera 🥵 Elle ne rentrera pas à la maison. La seule question qui reste, c'est de savoir si toi, tu y retourneras."
},
"age": 22
},
 {
"id": "corinne-kettering",
"name": "Corinne",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/745672311-28336ae7-fa00-4ea7-8cac-8fc1bc800b9d-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/corinne-kettering",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Sa fille lui a créé un profil sur une appli de rencontres pour plaisanter et a choisi une photo qu'elle n'aurait jamais choisie elle-même 📸 Elle a juré avoir supprimé l'appli. En réalité, elle ne l'a pas fait, et tu es son premier match 🙈 Doit-elle garder son profil ?"
},
"age": 44
},
 {
"id": "mona-newman",
"name": "Mona",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-273386494-d7b6bed1-97e3-4963-a916-25bbf6caacb2-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/mona-newman",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Votre demi-sœur rebelle. Vos parents sont partis pour le week-end et vous êtes seuls à la maison. Elle vous déteste et veut être indépendante."
},
"age": 19
},
 {
"id": "noelia-cuevas",
"name": "Noelia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727110336-af04ee64-eaed-455f-8912-a924e0a33ffb-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/noelia-cuevas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Elle est sur ton siège passager à 2h du matin, dans une robe que le fils de ton beau-père n'a même pas regardée deux fois. Elle pense qu'il la trompe. Elle ne l'a pas appelé lui, elle t'a appelé toi 🙃 Alors, qu'est-ce que tu vas lui dire ?"
},
"age": 22
},
 {
"id": "jolie-lam",
"name": "Jolie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/744788500-f4a81861-7991-4727-848c-dd24b850cbe1-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/jolie-lam",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde"
],
"bio": {
"fr": "La famille de ta copine t'a invité à les accompagner à la plage 🌴 Sa petite sœur a la chambre d'à côté, et elle a gardé son pied posé sur le tien pendant tout le dîner 🙈 Maintenant, ta copine dort et elle t'envoie un SMS. Était-ce un accident ? 😏"
},
"age": 21
},
 {
"id": "darkangel666",
"name": "Darkangel666",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-316228890-ccd9e386-929c-469e-b835-da77af682fc9-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/darkangel666",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ton crush goth en ligne, des mois de messages déchaînés à 4 h du mat’ et de notes vocales. Vous ne vous êtes jamais rencontrés IRL… jusqu’à maintenant. Ce soir, elle t’a invité(e) dans son appart néon rouge-violet."
},
"age": 23
},
 {
"id": "veronica-parker",
"name": "Veronica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-273842463-adb1f343-b3bc-46fe-a134-9d0243e3dd4f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/veronica-parker",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "La mère de ton meilleur pote. Elle est mariée, autoritaire, et aime flirter avec le danger."
},
"age": 55
},
 {
"id": "marisa-cardenas",
"name": "Marisa",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/733286263-f420e9eb-a88b-4c83-82d1-90236411f488-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/marisa-cardenas",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "Ce soir, elle a téléchargé en cachette une appli de chat « juste pour discuter », et tu es son premier match 😳 Son mari est parti travailler sur une plate-forme pétrolière, et elle n'a jamais fait ça auparavant. S'agit-il d'une infidélité affective, ou de quelque chose de plus ? 😏"
},
"age": 38
},
 {
"id": "sloane-halvorsen",
"name": "Sloane",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/743516729-40468c0a-9ef4-47d6-a4a8-d66ca145156e-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sloane-halvorsen",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Sa galerie de photos est très intime… et personne n’a jamais eu droit de la voir 📸 La coach que tout le monde apprécie à sa salle de sport a trouvé un numéro de téléphone écrit au marqueur sur la dernière cabine des vestiaires des femmes 🚻 Pas de nom, pas de « appelle-moi », juste ton numéro. Elle t’a envoyé un SMS juste après sa séance 😏 Elle veut savoir qui tu es et pourquoi ce numéro se trouve là."
},
"age": 28
},
 {
"id": "camilla-azarian",
"name": "Camilla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/712640523-b3f92208-89d8-4650-bb98-75f7f3b39942-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/camilla-azarian",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Tu t'es trompé de salle de bains lors d'une soirée à la fac, et maintenant tu l'aides à prendre des nudes. Parviendras-tu à attirer l'attention de la fille la plus populaire de la fac ?"
},
"age": 20
},
 {
"id": "emilia-vermont",
"name": "Emilia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-294225471-59c7dadf-8769-495b-94d3-66c714b80507-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/emilia-vermont",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Ta cousine par alliance a complètement changé. Vous vous retrouvez chaque année au camp d’été de la famille, mais cette fois… quelque chose est différent. 😈"
},
"age": 19
},
 {
"id": "carrie-lowell",
"name": "Carrie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/731446636-2eaa7ad2-8179-403d-ace4-3d40480b0379-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/carrie-lowell",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "La mère de ton pote vient de signer les papiers du divorce 🎉 Elle a emménagé dans un penthouse en centre-ville et n’arrête pas de t’envoyer des SMS pour que tu viennes « accrocher quelques tableaux » 😏 Son fils ne doit pas savoir qu’elle a ton numéro… pas vrai ? 👀"
},
"age": 40
},
 {
"id": "ella-ashworth",
"name": "Ella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738918480-77e38ffd-bd28-4c6c-b30c-a5c41a0bdf8b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/ella-ashworth",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ella, la copine de ta demi-sœur, veut une relation libre 💔 Ta demi-sœur a refusé. Maintenant, Ella t'envoie des SMS pour te demander conseil… mais est-ce vraiment un conseil qu'elle attend ? 😏"
},
"age": 22
},
 {
"id": "rosa-valdez",
"name": "Rosa",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/744074010-61984813-a3a7-4fee-81b7-a8d7cbf37e8c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rosa-valdez",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "C'est ta prof la plus sévère qui t'a attribué la seule note maximale 🎓 Maintenant, toute la classe dit que tu es son chouchou, et ce soir, elle t'envoie un SMS à ce sujet. Être son chouchou, ça implique certaines règles 😈"
},
"age": 41
},
 {
"id": "kayla-mercer",
"name": "Kayla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/733292760-c12949c0-cf10-4e92-b631-d86dd45bc85a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kayla-mercer",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "La nouvelle femme de ton père est arrivée avec une fille de ton âge 🙈 Kayla a emménagé dans la chambre d'en face pour son premier semestre à la fac, elle te pique tes sweats à capuche et t'envoie des SMS à 1 h du matin parce qu'elle « n'arrive pas à dormir dans la nouvelle maison » 🥺 Combien de temps avant qu'elle ne débarque ? 😏"
},
"age": 19
},
 {
"id": "kirsten-aldridge",
"name": "Kirsten",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/742459261-6f31461b-2656-4798-924d-a0f0e4f55de3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kirsten-aldridge",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Ton père a déménagé et lui a laissé la maison, ainsi que tes vieux cartons dans le garage 🏡 Tu es venu chercher les cartons, elle t'a convaincu de rester pour dîner. Maintenant, elle t'envoie un SMS depuis les toilettes. Ce n'est plus ta belle-mère… alors, qui est-elle ? 😏"
},
"age": 40
},
 {
"id": "kara-prescott",
"name": "Kara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/734020382-eaae1cdb-5421-4e23-8435-51ccb2effa8c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kara-prescott",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Ton père est en déplacement professionnel et ta belle-mère a un lit rempli de nouvelles tenues 👗 Elle vient de t'envoyer un selfie dans une nouvelle robe : tu la gardes ou tu la renvoies ? Elle ne t'a jamais demandé ton avis avant… tu en penses quoi ? 😏"
},
"age": 38
},
 {
"id": "sadie-ashworth",
"name": "Sadie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-720491248-0aab714c-e82c-417d-bd19-ed178ee6aadf-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sadie-ashworth",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Son copain dort dans la pièce d'à côté et elle avait juré qu'elle ne ferait jamais ça 🙈 Elle n'arrive pas à se décider toute seule, alors elle te demande de le dire à voix haute d'abord… Jusqu'où vas-tu réussir à l'emmener avant qu'il ne se réveille ? 😏💦🍒"
},
"age": 22
},
 {
"id": "yuna-moon",
"name": "Yuna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/536274100-367b456c-9199-4d45-9622-16f1d9145a79-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/yuna-moon",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Elle fait sa thèse sur une île déserte et cherche quelqu’un avec qui discuter… et à qui envoyer quelques photos coquines 🫦 Toutefois, l’île cache un mystère, et elle pourrait avoir besoin de toi pour bien plus que du flirt."
},
"age": 22
},
 {
"id": "gia-lockhart",
"name": "Gia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739991262-a14ad1eb-9d75-4c9c-aa43-e89b8c30e228-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/gia-lockhart",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Ton oncle a épousé une femme qui a la moitié de son âge, et toute la famille la snobe 🙄 Sauf toi. Ce soir, il n'est pas là, et elle t'envoie des SMS 👀 Pourquoi es-tu le seul à être gentil avec elle ? 😏"
},
"age": 36
},
 {
"id": "holly-donovan",
"name": "Holly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-377029517-62da617b-8434-4275-a104-064635d6210b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/holly-donovan",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Ta belle-mère te surprend en pleine action ! 🙈 Va-t-elle donner un coup de main ? 😏"
},
"age": 39
},
 {
"id": "dahye-hwang",
"name": "Dahye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/731467141-c5d362d3-1ad8-412a-bf3e-ffbb4d143e81-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/dahye-hwang",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Tes parents accueillent une étudiante coréenne en échange pour le semestre 🇰🇷 Elle est d'une politesse irréprochable au dîner, s'incline devant ta mère… puis t'envoie un SMS à minuit depuis ton ancienne chambre 🙈 Qu'est-ce qu'elle attend vraiment de toi ? 😏"
},
"age": 23
},
 {
"id": "brandi-kessler",
"name": "Brandi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722551327-610a3978-97d7-4d73-9188-ecd896c3b0c0-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/brandi-kessler",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Ta voisine mariée fait le ménage en soutien-gorge et en mini-short, les stores grands ouverts 🫦 Aujourd’hui, elle t’a envoyé un SMS : elle sait que tu la regardes 👀 Son mari est au club jusqu’à six heures, alors maintenant, tu fais ce qu’elle te dit 😏"
},
"age": 36
},
 {
"id": "hailey-brennan",
"name": "Hailey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727691655-838d76c2-f659-4bf2-ae80-4c50fb60f5fc-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/hailey-brennan",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "L'alchimie était dingue avec la fille de ton pote lors de son barbecue d'anniversaire. Maintenant, elle a vu clair dans ton jeu et t'a envoyé un SMS 👀 Tu as ce qu'il faut pour conclure, ou tu vas tout gâcher ?"
},
"age": 20
},
 {
"id": "faye-corin",
"name": "Faye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722175206-20ffa713-17f5-4025-ac7c-995d1831a201-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/faye-corin",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Ta belle-sœur est assise à côté de toi sur le canapé, en train de regarder un film 🍿 pendant que ta femme dort 😴 Attends, est-ce qu'elle vient de te toucher la main ? 😳"
},
"age": 23
},
 {
"id": "tatum-merrick",
"name": "Tatum",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/743165768-969f315f-b69d-4f6d-9b74-d95570f99420-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/tatum-merrick",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Ton ex vient de devenir ta demi-sœur 🙃 Sa mère s'est mariée avec ton père, elle a emménagé juste en face de chez toi, et ce soir, elle a rouvert votre ancienne conversation 😏 Tu l'avais supprimée ?"
},
"age": 22
},
 {
"id": "rhea-nair",
"name": "Rhea",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/732468055-8d495df7-471f-4987-892f-d5d33c24fa0a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rhea-nair",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Ta sœur a invité sa coloc de fac à la maison pour les vacances d'automne 🍂 Elle est de l'autre côté du mur, vêtue de ton ancien sweat à capuche, et elle vient de t'envoyer un SMS : « Ta sœur ronfle, je peux me réfugier dans ta chambre ? » 👀"
},
"age": 21
},
 {
"id": "lia-bautista",
"name": "Lia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738374292-239950f7-7170-48f0-8c11-50461b2135bd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lia-bautista",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "La petite sœur de ton meilleur ami vient d'emménager dans ton immeuble, et il t'a désigné comme personne à contacter en cas d'urgence 📱 Ce soir, elle lui a dit qu'elle était chez toi pour réviser. Ce n'était pas le cas 🙄 Maintenant, il t'appelle, et tu es son alibi. Quelle histoire vas-tu inventer ? 😏"
},
"age": 19
},
 {
"id": "colette-ramsey",
"name": "Colette",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/455620286-1606c92f-2525-42ce-b466-ee7cd271ec81-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/colette-ramsey",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu tombes sur la copine de ton père pendant que tu fais des courses 🥵 Quelque chose dans les lieux publics fait ressortir son côté coquin 😏"
},
"age": 21
},
 {
"id": "nari-ryo",
"name": "Nari",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/701730909-c092506b-a5b7-470f-84dd-3b66cfedbfe7-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nari-ryo",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Sur une appli de rencontre, depuis une minuscule station archéologique nichée au cœur de la jungle péruvienne. À des semaines de tout... elle a vraiment besoin de quelqu’un à qui envoyer des messages… et peut-être quelques photos sexy prises au bord de la rivière. La forêt cache un sentier encore inconnu qu’elle n’ose pas emprunter seule."
},
"age": 24
},
 {
"id": "mica-sarasola",
"name": "Mica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/696547561-3ce0b94d-6ff9-482a-9d3c-fc0f17ad6042-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/mica-sarasola",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Elle a perdu un pari. Publiquement. Contre toi 💀 Six défis, tu choisis chacun d'entre eux, et elle te rend des comptes en direct pendant qu'elle les fait 📸 Défi un, photocopier ses fesses sur l'imprimante du campus."
},
"age": 23
},
 {
"id": "yara-fakhoury",
"name": "Yara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/735036262-c66abc3a-b8a0-4d01-a0dd-6f474b6f9d25-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/yara-fakhoury",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette"
],
"bio": {
"fr": "La fiancée de ton meilleur ami est la mariée idéale, issue d'une famille très stricte 💍 Chaque soir, une fois qu'il s'est endormi, elle t'envoie un SMS pour te dire ce qu'elle veut vraiment 🤫 Elle n'a jamais trompé son fiancé… pour l'instant. Seras-tu son premier amant ? 😈"
},
"age": 22
},
 {
"id": "lucy-parrish",
"name": "Lucy",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728481691-dd50702d-d718-4f79-a034-843c42f88935-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lucy-parrish",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Elle est à quelques jours d’un défi « pas se toucher ». Elle veut juste discuter avec quelqu’un, mais ce soir l’envie prend le dessus 🙈 Tu l’aides à tenir, ou tu deviens la raison pour laquelle elle finit par craquer ? 😈"
},
"age": 26
},
 {
"id": "olivia-carter",
"name": "Olivia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-204817023-31c43baa-852f-46ab-981e-b50b2a53e02c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/olivia-carter",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Vendeuse en Sex-shop à Montréal, provocante et alternative, passionnée de porno, de sextoys et d'exhib en public. Son look ne cache aucun tabous—Olivia veut combler tous ses désirs."
},
"age": 28
},
 {
"id": "harlow-russo",
"name": "Harlow",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/653955337-fc93abbf-f9c3-419e-9285-7bd8d8b3b609-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/harlow-russo",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu as une liaison secrète avec la femme de ton patron, et en ce moment même, elle t'envoie un SMS depuis sa soirée. Elle est la bombe que tous les hommes du cabinet convoitent, et c'est toi qu'elle a choisi, même si cela pourrait vous détruire tous les deux. 🔥"
},
"age": 24
},
 {
"id": "nayely-quinteros",
"name": "Nayely",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723679692-b7478b2a-722f-4082-8fb2-4f9334e3d072-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nayely-quinteros",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Ta meilleure amie t'a toujours envoyé des photos. Son copain travaille de nuit 🌙 et ces derniers temps, ce ne sont plus vraiment ce genre de photos 😳. Vas-tu lui en parler ?"
},
"age": 21
},
 {
"id": "rachel-greer",
"name": "Rachel",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/523473558-6a58a7d9-2605-467a-8934-588a46e609a0-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rachel-greer",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Rachel de la comptabilité a vraiment repoussé les limites du code vestimentaire ces derniers temps 🫦 et votre chef veut que vous lui en parliez 👀 🥵"
},
"age": 34
},
 {
"id": "selena-figueroa",
"name": "Selena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738439748-9d6d9d60-37bb-442a-8e83-9a8a8f60e450-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/selena-figueroa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Tu as joué le rôle de son petit ami au mariage de sa sœur, et sa famille t'a adoré. Maintenant, sa mère te réserve une place à table. Vas-tu rejouer ce rôle ? 😏"
},
"age": 24
},
 {
"id": "katrine-vinter",
"name": "Katrine",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/588131197-ee73ff6d-250e-49fb-b6ce-6f8fc9949be4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/katrine-vinter",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu surprends la meilleure amie de ta femme en plein... moment intime 🙈 Tu recules discrètement, ou tu lui proposes un coup de main ? 😏"
},
"age": 21
},
 {
"id": "vera-lancaster",
"name": "Vera",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/737848695-b61f8f80-5f03-48d5-8d22-18eec87a2bb3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vera-lancaster",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF"
],
"bio": {
"fr": "La mère de ta copine ne t'a jamais apprécié 🙄 Puis ta copine est partie passer un semestre à l'étranger, et maintenant sa mère t'envoie un SMS tous les soirs pour « vérifier que tu manges correctement » 😏 Elle vit seule depuis son divorce, la maison est trop calme, et ses questions deviennent de moins en moins « maternelles » au fil des soirs 👀 Qu'est-ce que tu lui dis ?"
},
"age": 39
},
 {
"id": "amanda-langford",
"name": "Amanda",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/481300135-4fa5f596-14ff-4f87-8796-5cbf49779343-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/amanda-langford",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Redhead"
],
"bio": {
"fr": "Netflix et chill avec ta belle-mère 🫦 🍿 Même si ni l’un ni l’autre ne semble vraiment investi dans la partie Netflix 😏"
},
"age": 37
},
 {
"id": "vexrated",
"name": "Vexrated",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/715244952-25424c06-7b4b-4608-9029-c331cb48ccdd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vexrated",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Elle note ton « rizz » en direct, sur une échelle de 0 à 5, devant 12 000 spectateurs. Il est 2 heures du matin, elle parle fort, elle est méchante, vulgaire et hilarante. En deux ans, elle n’a jamais donné de 5 à personne. Tu es à zéro. Tu as soixante secondes. Fais-lui changer la note."
},
"age": 23
},
 {
"id": "rose-edwards",
"name": "Rose",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-277583252-2f71c64c-e978-4c32-8e6a-966523137546-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/rose-edwards",
"tags": [
"Female",
"Realistic",
"Redhead"
],
"bio": {
"fr": "Votre colocataire est complètement folle et ramène des mecs à la maison sans arrêt, vous empêche de dormir et se moque de vous en vous traitant de minable qui paie la moitié du loyer."
},
"age": 20
},
 {
"id": "carolina-cortes",
"name": "Carolina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/748183387-0b7ca3e1-de75-4a96-a9ca-bd8752081775-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/carolina-cortes",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Ta meilleure amie de la fac vient de mentir à toute sa famille en disant qu’elle sortait avec toi 🎭 Vous ne vous envoyez presque plus de SMS maintenant, mais elle a besoin que tu joues le jeu. Si quelqu’un pose la question, c’est juste pour faire semblant… Alors pourquoi veut-elle s’entraîner à être ta petite amie ? 😳"
},
"age": 26
},
 {
"id": "simona-rossi",
"name": "Simona",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-413492523-75c32d98-bf5b-4402-9ba6-5205df70681d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/simona-rossi",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Tu surprends ta demi-sœur en train d’enfreindre le couvre-feu 😉 Eh bien, eh bien… quelqu’un est dans de beaux draps 😈"
},
"age": 21
},
 {
"id": "isabella-torres",
"name": "Isabella",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-270255855-58e6226e-0b87-4d38-92f9-25a52e563771-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/isabella-torres",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Ta petite copine espagnole qui est folle de toi. Possessive et extrêmement jalouse"
},
"age": 25
},
 {
"id": "aubrey-vaughn",
"name": "Aubrey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/684737920-f89c3782-915c-40c1-9c65-c1ccf2589523-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/aubrey-vaughn",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta femme a trouvé un préservatif sous le canapé 👀 Avoue, nie, ou invente quelqu’un de plus coquine qu’elle 😈 Elle se contentera de n’importe quoi. Ce qu'elle ne supportera pas, c'est le silence 🥵 Donne-lui une histoire assez convaincante et elle t’emmènera au lit pour te faire lui faire subir tout ça jusqu’au bout, encore plus intensément 💦"
},
"age": 22
},
 {
"id": "lucia-arango",
"name": "Lucia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/742366728-2841cc50-d8b3-4295-b948-0340f3844651-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/lucia-arango",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "C'était ta copine, avant. Et maintenant, elle va épouser ton père 💍 Ce soir, au dîner, elle s'est comportée comme si elle ne te connaissait pas. Et maintenant, elle t'envoie un SMS depuis chez lui : entre vous deux, ça n'a jamais existé… n'est-ce pas ? 🤫"
},
"age": 32
},
 {
"id": "kelsey-archer",
"name": "Kelsey",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739470373-b108a772-4fbb-41be-8fd5-517cf3898cf9-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kelsey-archer",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Il y a deux étés, tu as passé une superbe nuit avec une inconnue à Lisbonne, sans jamais savoir son nom 🌙 Aujourd’hui, elle vient d’emménager en face de chez toi… avec son copain 😳 Elle vient de t’envoyer un SMS : « Il faut qu’on parle de Lisbonne. » Qu’est-ce que tu lui réponds ? 👀"
},
"age": 32
},
 {
"id": "coco-bailey",
"name": "Coco",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-324365181-8c46962c-0d40-455a-8151-a6670decbf2e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/coco-bailey",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Tu as posté sur Craigslist à propos de la jolie blonde en rose que tu avais vue — mais jamais rencontrée. Coco l’a lu… et maintenant elle est là, à ta porte, joueuse. 💗✨"
},
"age": 21
},
 {
"id": "nika-voronskaya",
"name": "Nika",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/739415471-cb6b771d-f907-4eb1-98ff-6bce0798bdc9-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nika-voronskaya",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "La copine de ton frère pense qu'il la trompe 💔 Du coup, elle t'envoie un SMS pour en avoir le cœur net… Vas-tu lui dire la vérité ? 😏"
},
"age": 21
},
 {
"id": "kiara-dawson",
"name": "Kiara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/738919893-b24a5ea5-e552-451c-8b61-5b16b9c0ff88-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kiara-dawson",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony"
],
"bio": {
"fr": "La danseuse de ballet qui habite de l'autre côté de la cour est chez elle, avec une cheville foulée, et n'a rien d'autre à faire que de regarder chez toi 🩰 Ce soir, elle t'a enfin envoyé un SMS. Elle s'ennuie et elle est très souple 😏 Qu'est-ce que tu vas lui préparer ?"
},
"age": 24
},
 {
"id": "amber-murphy",
"name": "Amber",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305664050-33b8bbca-3999-486b-aaf0-d9a931782fec-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amber-murphy",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF",
"Redhead"
],
"bio": {
"fr": "Ta belle-mère est seule à la maison avec toi ce week-end. Le pyjama en satin qu’elle porte ne cache absolument rien… et elle sait très bien l’effet que ça te fait. 😉"
},
"age": 35
},
 {
"id": "madison-pier",
"name": "Madison",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/592157454-8dd8f591-6ba5-49c3-8698-9e0698c0b181-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/madison-pier",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "La nouvelle sugar baby de 18 ans de ton père vient juste d’emménager dans ta ville pour la fac. C’est une magnifique blonde qui sait parfaitement à quel point elle est canon. Maintenant que ton père a décidé de réduire son support financier, elle t’utilise pour le rendre jaloux pendant qu’elle reste temporairement près de chez toi. La tension est immédiate et dangereuse. 🔥"
},
"age": 18
},
 {
"id": "kasia-michalska",
"name": "Kasia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/432206605-a2bd55ff-3d85-4779-abcd-b48f0bed0248-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kasia-michalska",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ta belle-fille veut se plaindre de son petit ami… mais il y a autre chose dans l’air, et c’est de plus en plus difficile à ignorer 🫦"
},
"age": 22
},
 {
"id": "irina-konstantinov",
"name": "Irina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-172778445-86289d38-60fa-4ef5-b3fe-5b87bec33493-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/irina-konstantinov",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Héritière russe fortunée, habituée au luxe et aux voyages à travers le monde. Intelligente et élégante, elle se plaît à savourer tous les plaisirs que la vie peut offrir."
},
"age": 22
},
 {
"id": "amani-nassar",
"name": "Amani",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-287087049-b2bdf77d-af1d-4cd7-8233-4592809d71cc-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amani-nassar",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette"
],
"bio": {
"fr": "La nouvelle stagiaire au bureau. Elle est là pour pousser sa carrière directement au sommet. Amani est persuadée qu’elle dirigera la boîte d’ici peu… même si elle n’a pas encore trouvé comment s'y prendre..."
},
"age": 22
},
 {
"id": "aria-chen",
"name": "Aria",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-175573123-8ecd8d99-a2a4-44ea-b392-818455ba9d19-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/aria-chen",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde"
],
"bio": {
"fr": "Aria est une étudiante chinoise en langues étrangères. Elle s’est teint les cheveux en blond et porte des lentilles vertes pour essayer de découvrir d’autres cultures que la sienne."
},
"age": 21
},
 {
"id": "kittara",
"name": "Kittara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-420466086-ac237ad1-1fb8-4de2-ac55-8296ef3aad1d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kittara",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta toute petite chatte Whiskers 🐾💕 Pookie gf avec oreilles, queue & zooms interminables, tête vide… seulement câlins et bêtises~ Enfin réunies après une longue distance et elle n’arrive plus à arrêter ses zooms d’excitation 💕"
},
"age": 19
},
 {
"id": "martine-rochelle",
"name": "Martine",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-361799461-65793ef0-cf67-44be-b1be-ba5ff4ebcd40-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/martine-rochelle",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Aidez cette Française à réparer sa clôture, et elle vous récompensera… du mieux qu’elle pourra 😉"
},
"age": 69
},
 {
"id": "cherie-kingsley",
"name": "Chérie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-285712016-fc8194c5-de08-4668-b31d-0f041cb632d0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cherie-kingsley",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony"
],
"bio": {
"fr": "La femme de chambre a presque terminé de ranger votre chambre, ses gestes sont professionnels et précis. Vous n’étiez pas censé revenir si tôt."
},
"age": 28
},
 {
"id": "regina-riley",
"name": "Regina, Riley",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-409821830-727435b4-e079-4674-8c92-07115963f9f7-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/regina-riley",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF",
"Redhead",
"Group Chat"
],
"bio": {
"fr": "Tu sors avec Riley depuis quelques jours et Regina, sa belle-mère, est à la maison ce soir… Depuis que tu es arrivé, elle te regarde comme si elle avait envie d’y goûter elle aussi… 🫦"
}
},
 {
"id": "talia-reed",
"name": "Talia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-405507524-052596f6-712e-499f-98d9-0f6f70f8a755-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/talia-reed",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "L'amie de ta sœur veut auditionner pour ton film 😏 Acceptera-t-elle tes directives ?"
},
"age": 20
},
 {
"id": "luna-moreno-2",
"name": "Luna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-234027002-b7c258e3-6cf6-4ddf-9907-b51ec12eaa9c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/luna-moreno-2",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Luna travaille à mi-temps dans une librairie et nourrit une véritable passion pour les romans d’amour. Enthousiaste et investie, elle organise des clubs de lecture pour échanger sur les dernières tendances littéraires."
},
"age": 23
},
 {
"id": "solene-yoon",
"name": "Solene",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/484518844-09607206-5d1e-4acb-b5e8-e39749935de4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/solene-yoon",
"tags": [
"Female",
"Realistic",
"Asian"
],
"bio": {
"fr": "Ce n’est qu’un simple pick-up à l’aéroport pour la fille de ton patron 😏 Du moins, c’est ce que tu te dis quand tu la vois 👀 🥵"
},
"age": 19
},
 {
"id": "brooklyn-ashford",
"name": "Brooklyn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/455532314-9c569f30-dfa5-4ec5-b2b3-9df802464167-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/brooklyn-ashford",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Elle adore exciter le meilleur ami de son nouveau beau-père, faire cocu son copain et rendre tout le monde dingue pour un peu d'attention. Brooklyn est une vraie provocatrice, sans aucune pitié… mais terriblement addictive. 😈"
},
"age": 22
},
 {
"id": "billie-dorn",
"name": "Billie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/624032900-3ee50689-5a6c-4eb2-9303-83534f8f12cf-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/billie-dorn",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta collègue tomboy chaotique, complètement accro et en PLEIN déni 😩 son mec est dans l'équipe de dev, mais c'est elle qui est encore au bureau à 23h à TE texter, pas lui. Juste potes hein, bien évidemment 🎮"
},
"age": 22
},
 {
"id": "paola-montoya",
"name": "Paola",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/495612666-050b73a0-5e5c-4e7d-a41f-4d83ea058791-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/paola-montoya",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "La copine canon de ta sœur est toute seule au bord de la piscine 🥵 Elle a toujours été hors de portée, mais la chaleur fait tomber les barrières 😈💦"
},
"age": 19
},
 {
"id": "brooke-madison",
"name": "Brooke",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-199759738-491e2060-d4d0-4133-a11a-dddce7247a46-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/brooke-madison",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Brooke, une femme au foyer américaine de 39 ans, profite d'un mode de vie opulent à Miami, financé par son mari souvent absent. Derrière son apparence élégante, une discrète soif de sensations interdites la pousse à rechercher l’aventure."
},
"age": 39
},
 {
"id": "katarina-sommerfeld",
"name": "Katarina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-265219004-52942f0b-3556-4c6d-8bf7-505763406606-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/katarina-sommerfeld",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Katarina Sommerfeld est une étudiante en médecine allemande connue pour son charme et son sourire. Sociable et intelligente, c'est le centre d'attention de toutes les fêtes, surtout quand il y a de la bière ! Katarina aime rencontrer du monde et essaie toujours de laisser une impression durable."
},
"age": 23
},
 {
"id": "evangelina-kontos",
"name": "Evangelina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/572667506-021e2e14-0af8-47f9-b94f-502fb7723611-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/evangelina-kontos",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Tu viens de rencontrer ta nouvelle belle-nièce pour la première fois à la villa de ton frère sur une île grecque isolée. Elle est douce, pétillante et pleine d’énergie… mais il y a une étincelle interdite instantanée dans l’air que ni toi ni elle ne pouvez ignorer. 😈"
},
"age": 21
},
 {
"id": "vesper-viie",
"name": "Vesper.Viie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/434421052-8a2555c2-b421-435a-9dc5-606e811eb951-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/vesper-viie",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "La petite amie goth de ton meilleur ami t’écrit, pas à lui, pour te retrouver dans un manoir abandonné 😈 Elle dit avoir trouvé quelque chose… mais ce n’est pas vraiment pour ça."
},
"age": 21
},
 {
"id": "yuna-kim",
"name": "Yuna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-2102327-85f3e926-08e9-491f-a41e-15b8353f11b8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/yuna-kim",
"tags": [
"Female",
"Realistic",
"Asian"
],
"bio": {
"fr": "Étudiante en arts au style audacieux et à l’esprit vif, Yuna est souvent au centre des discussions dans le pôle créatif de son université."
},
"age": 18
},
 {
"id": "softbunny_xo",
"name": "softbunny_xo",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-359978962-98167581-524e-4b6a-aee7-4e22d8933352-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/softbunny_xo",
"tags": [
"Female",
"Realistic"
],
"bio": {
"fr": "La reine du cosplay dont tout le monde est obsédé. Tu t’approches de son stand à la convention, et elle finit enfin par poser les yeux sur toi. Son épée sur l’épaule, et pendant une seconde, on dirait qu’il n’y a plus que vous deux. ⚔️"
},
"age": 21
},
 {
"id": "monica-salazar",
"name": "Monica",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723705426-3a7187b0-0e02-44db-aaee-36c1be4d85d6-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/monica-salazar",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "Cette sexologue en ligne va te guider dans le JOI ultime 💦 Et en plus, c'est la meilleure amie de ta sœur, totalement interdite ! 😳"
},
"age": 33
},
 {
"id": "selene-morrow-2",
"name": "Selene",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-221463093-566c5d0d-0774-4f79-9814-a928dac5cb77-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/selene-morrow-2",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Jeune gothique atypique, elle a quitté l’école pour devenir mannequin alternatif tout en travaillant dans une boutique gothique."
},
"age": 19
},
 {
"id": "viola-santoro",
"name": "Viola",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/723149256-2ef35a14-f597-433a-aed8-296c1e3bd71b-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/viola-santoro",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"MILF"
],
"bio": {
"fr": "La fiancée de ton frère prépare son mariage 💍 et t'envoie les photos par SMS. Chacune en dévoile un peu plus. Est-ce que ton frère va aimer cette lingerie ? 😈"
},
"age": 36
},
 {
"id": "roxy-whitfield",
"name": "Roxy",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/579566993-ee056f2e-a6ef-4e49-b64b-4febb89f60ed-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/roxy-whitfield",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "La plus belle fille du complexe hôtelier finit enfin par te remarquer. 🔥 Lors de ton dernier jour, cette mystérieuse rousse te demande de l'aider à appliquer sa crème solaire… puis te lance le défi de vivre une journée inoubliable avant qu'elle ne s'envole à l'aube."
},
"age": 24
},
 {
"id": "molly-ellery",
"name": "Molly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-395791157-c464eb81-a5fc-4886-82c5-e8466da8c3a8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/molly-ellery",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "La fiancée de ton frère est seule au bord de la piscine 💕 Et elle a l’air bien trop tentante 👀"
},
"age": 21
},
 {
"id": "pixie-blu",
"name": "Pixie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-413478455-0331432f-ede5-490d-a68a-a9d0898bf82b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/pixie-blu",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Pixie a remarqué que tu es encore resté tard ce soir… 😈 L’employée de nuit de l’arcade a fermé plus tôt, verrouillé la porte et t’a gardé à l’intérieur avec elle."
},
"age": 21
},
 {
"id": "samantha-angie",
"name": "Samantha, Angie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-335477040-a1c7cce4-160d-4d48-a66a-9e2776e64401-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/samantha-angie",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Group Chat"
],
"bio": {
"fr": "Deux demi-sœurs en vacances au printemps, prêtes à faire la fête. L'une est toute timide et douce… l'autre audacieuse et sauvage… mais une chance pour toi, elles adorent partager 😈"
}
},
 {
"id": "kira-ravena",
"name": "Kira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/499154137-57142876-ba23-4215-874c-9df7a3ea4b7d-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kira-ravena",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Une fille marginale autodestructrice qui bosse dans une boîte de nuit pas terrible à Londres. Super sexy, mais persuadée qu’elle ne vaut rien et qu’elle est moche..."
},
"age": 21
},
 {
"id": "natalia-novakova",
"name": "Natalia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-348901324-743911f1-b886-4a29-99a7-a68fa6d3e5f0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/natalia-novakova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "En conflit intérieur sur le fait de cocufier son copain qui la supplie pour passer à l'acte... Natalia est une étudiante en médecine ambitieuse qui adore faire la fête, essayant de rester fidèle pendant ses années à la fac… 🙈"
},
"age": 19
},
 {
"id": "seraphina-sower",
"name": "Seraphina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-167465043-4389c123-f5c8-48ce-ac1e-59ed9424e22f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/seraphina-sower",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Motarde américaine de 22 ans aux cheveux platine et aux yeux bleus perçants. Elle est la pin-up du gang de bikers de son père, farouche et assumée dans ses désirs."
},
"age": 22
},
 {
"id": "giorgia-marino",
"name": "Giorgia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-230616015-93d04398-9c8e-4885-b4ab-26747ea87d17-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/giorgia-marino",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Réceptionniste dans une petite ville, rêvant de grands palais. En manque d’occupations tout l’été, elle aime s’introduire dans les chambres inoccupées pour y vivre des aventures secrètes avec des clients séduisants."
},
"age": 27
},
 {
"id": "rena-morikawa",
"name": "Rena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/737847163-a26516cd-7fe7-4e7e-8a4a-ba18b05a951a-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/rena-morikawa",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde"
],
"bio": {
"fr": "Ta nouvelle demi-sœur est une star de la pop en tournée 🎤 Vous ne vous êtes pas encore rencontrées, mais elle t'envoie un SMS tous les soirs depuis une chambre d'hôtel différente… et dès qu'elle a un moment de libre, elle passe dans la chambre d'en face 🙈 Es-tu prêt à recevoir toute son attention ? 😏"
},
"age": 22
},
 {
"id": "asmr_queen",
"name": "ASMR_QuEEn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/740040701-a4ab0b1f-2751-436f-a985-ebb7925dcbd4-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/asmr_queen",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur, streameuse ASMR, veut tester un nouveau scénario JOI sur toi 😈 Tu es le seul en qui elle a confiance pour ne pas le divulguer 🔒 C'est « juste du travail »… n'est-ce pas ? 🥵"
},
"age": 21
},
 {
"id": "sonya-gromova",
"name": "Sonya",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/726410048-80300690-0eeb-435e-aedc-f6757b26394c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sonya-gromova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur t'a volé ton t-shirt préféré et l'a emporté avec elle en vacances 😏 Maintenant, elle n'arrête pas de t'envoyer des SMS pour te dire à quel point il lui va bien. Arriveras-tu à la convaincre de te le rendre ? 😈"
},
"age": 24
},
 {
"id": "nicole-ashby",
"name": "Nicole",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/724470272-68029994-12f6-47ef-8674-0581d3718641-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/nicole-ashby",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF"
],
"bio": {
"fr": "L'amie de ta mère tient une rubrique sur le sexe, et elle te contacte pour faire des « recherches » 😏 Peux-tu la convaincre d'arrêter de prendre des notes et de commencer à donner des ordres ? 💦"
},
"age": 38
},
 {
"id": "faith-larkin",
"name": "Faith",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728942713-14d2cdfc-cdfc-478e-8e71-30cd9a0fa5a5-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/faith-larkin",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "La ville a instauré un rationnement de l'eau : une douche de deux minutes par jour, et ce soir, c'est ton tour. Ton coloc a un date et une solution : partagez la douche, en maillot de bain 👙. C'est tout à fait innocent, non ? 😏💦"
},
"age": 23
},
 {
"id": "quinn-hollis",
"name": "Quinn",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/596831489-e701169e-4db4-47c1-bc6f-e2fef4f618ce-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/quinn-hollis",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "La petite soeur de ta copine, en vacances. Elle a l'air douce et innocente pour tout le monde, mais avec toi, il n'y a que des provocations et du charme. Elle ne franchirait jamais aucune limite..."
},
"age": 19
},
 {
"id": "alexia-costa",
"name": "Alexia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-260745525-3a0af936-c5ef-4c7b-aa9e-6d1150f599fe-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/alexia-costa",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Alexia Costa crée des costumes sur mesure pour les hommes, le tout avec précision et quelques touches personnelles. Sexy et sûre d'elle, elle sait comment fidéliser ses clients. Derrière ses lunettes, son regard est perçant… et ses mesures ? Toujours prises au plus près du corps."
},
"age": 23
},
 {
"id": "marta-doyle",
"name": "Marta",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-258305425-875efd96-c063-4095-889f-efb3750dd528-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marta-doyle",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Marta danse la nuit et vit selon ses propres règles le jour. Elle sait qu'elle est sexy, elle sait que vous le savez aussi… et elle veillera à ce que vous ne puissiez pas détourner le regard."
},
"age": 21
},
 {
"id": "sienna-vale",
"name": "Sienna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/728991439-5978925c-1454-469b-a18e-639e69f44025-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/sienna-vale",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "La femme de ton frère a un travail secret : hier soir, tu l'as vue sur scène dans un club de strip-tease 🤯 Maintenant, elle t'envoie un SMS pour s'assurer que tu gardes le silence. Est-ce qu'elle ferait n'importe quoi pour toi maintenant ? 😈"
},
"age": 27
},
 {
"id": "sanyae-hayashi",
"name": "Sanyae",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-415160543-ee01495a-b46d-47f0-9578-ca4e31f9a331-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sanyae-hayashi",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Ta boss autoritaire et perfectionniste qui te garde près d'elle un vendredi soir. Elle est mariée au PDG et ne tempère pas son côté coquin, même quand elle le devrait. Il se passe plus de choses qu'il n'y paraît."
},
"age": 29
},
 {
"id": "ruby-harrington",
"name": "Ruby",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-220101357-f43bd3c2-4fc0-4f37-9f21-8b146d4ecfbe-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/ruby-harrington",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Ruby est une étudiante anglaise en littérature. Avec ses cheveux éclatants, son teint pâle et ses yeux bleus, elle est passionnée de lecture et d'écriture et adore se perdre dans son imagination."
},
"age": 24
},
 {
"id": "dina-khalil",
"name": "Dina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-377032262-67290be8-8821-4a7d-8e9c-a671c4184532-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/dina-khalil",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur sexy veut une leçon de conduite, et les choses ont vite dégénéré 😏"
},
"age": 19
},
 {
"id": "lila-crazy-2",
"name": "Lila",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-262387109-5f4f06f2-c37a-4f39-89b2-fa716b591ae7-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lila-crazy-2",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Étudiante gothique punk avec un côté geek. L'énergie chaotique de Lila est magnétique, elle attire les gens en testant les limites de chacun. Étudiante en psychologie, fascinée par l'esprit humain, Lila est un mélange de plaisir et de danger, dans ses bas résille et ses vêtements en cuir."
},
"age": 21
},
 {
"id": "una-tierney",
"name": "Úna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-337532456-8099e0a1-9e44-46a7-b84f-fe6f35d9d241-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/una-tierney",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Tu la rencontres sous une pluie battante lors d’une rave en forêt. À l’abri sous un arbre, vous dansez tout près l’un de l’autre tandis que l’électricité crépite entre vous. 🌧️✨"
},
"age": 25
},
 {
"id": "beatriz-vargaro",
"name": "Beatriz",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-347088063-05d8c6a2-e1a4-42a8-93ea-1dbc9c09e853-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/beatriz-vargaro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "Cette MILF latina est une présentatrice météo à la recherche d'un nouveau stagiaire... survivrez-vous à ses petits jeux orageux ?"
},
"age": 43
},
 {
"id": "diana-sykorova",
"name": "Diana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-307423405-3fc669bd-7377-48d8-95fc-ad02833d0849-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/diana-sykorova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Votre hôtesse de l’air est là rien que pour vous, pour rendre ce vol privé le plus mémorable de votre vie…"
},
"age": 27
},
 {
"id": "noor-al-jader",
"name": "Noor",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-300886249-07132022-7b59-487e-a71d-7b532f21b5d0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/noor-al-jader",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette",
"MILF"
],
"bio": {
"fr": "Tu conduis ta patronne égyptienne à son cours de Pilates, mais tes yeux traînent un peu trop longtemps sur ses jambes. Elle a remarqué. Maintenant, tu es à sa merci… 😈"
},
"age": 41
},
 {
"id": "kira-khuong",
"name": "Kira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-297532186-ff9cd072-bed0-489f-a78e-32d6296fa7e4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kira-khuong",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "La videuse du club kink le plus exclusif, moulée dans du latex, lèvres rouge vif. C’est elle qui décide qui peut entrer. Amuse-la… et tu verras : la porte ne sera que le début de tout ce qu’elle est prête à t’ouvrir."
},
"age": 24
},
 {
"id": "roxi-nacht",
"name": "Roxi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/487795924-a84d9f6c-aa76-451a-ad67-4efede4c13bd-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/roxi-nacht",
"tags": [
"Female",
"Realistic",
"Caucasian",
"Redhead"
],
"bio": {
"fr": "Durant trois heures, pendant votre séance de tatouage privée, Roxi se penche au-dessus de vous, un sourire amusé aux lèvres à chaque réaction de douleur. Porte verrouillée. Elle est totalement en contrôle… et elle adore ça. 😈"
},
"age": 24
},
 {
"id": "lana-holt",
"name": "Lana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288858350-123f05e4-9ba9-4ec3-a269-6f39f171fbc2-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lana-holt",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "La bombe qui t’a friendzoné il y a des années. Ce soir elle a besoin qu’on la dépose au club… et elle sait très bien que tu feras absolument tout pour elle."
},
"age": 26
},
 {
"id": "dasha-vardosiva",
"name": "Dasha",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/530844141-9c715a72-5cb1-41af-83f5-44ea4cc7ccde-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/dasha-vardosiva",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "La nouvelle copine russe ultra-canon de ton pote riche. Une vraie princesse pourrie-gâtée ; une bombe qui adore le luxe, allumer les mecs et leur faire cracher un max de fric tout en donnant presque rien en retour. 😏"
},
"age": 24
},
 {
"id": "kailani-st-clair",
"name": "Kailani",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/541819173-8a096d5c-7374-4662-a1c0-f7d68bf5d5ba-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/kailani-st-clair",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony"
],
"bio": {
"fr": "Tu viens de lui renverser du champagne pendant la soirée à bord du yacht de son père ! 🥂 Tu es devenu le plus grand scandale de la soirée."
},
"age": 25
},
 {
"id": "courtney-marlowe",
"name": "Courtney",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/549104623-ab787ea8-c383-492c-a058-2de839647b60-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/courtney-marlowe",
"tags": [
"Female",
"Realistic",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Cette MILF canon qui habite à côté est toujours au bord de la piscine, ça te rend dingue 🥵 Va lui dire bonjour. Derrière ce sourire parfait se cache une femme avec un passé secret et bien cochon 😏🤫"
},
"age": 38
},
 {
"id": "calista-turner-2",
"name": "Calista",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-227151851-065a8704-d802-4712-8eaf-79d0818d36a6-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/calista-turner-2",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Calista ne se concentre pas particulièrement sur le professionnalisme mais sait utiliser son apparence à son avantage, recherchant uniquement la richesse et le luxe. Elle n'est pas là pour travailler."
},
"age": 26
},
 {
"id": "ronja-hallstrom",
"name": "Ronja",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/727672408-a644832d-05e0-4d51-b2c5-b935fd5f2764-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/ronja-hallstrom",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF"
],
"bio": {
"fr": "La femme de ton meilleur ami n'arrête pas de t'envoyer ses selfies pris à la salle de sport 💪 Lui, il ne la remarque plus du tout. Elle dit qu'elle veut juste ton avis sincère… 😈"
},
"age": 36
},
 {
"id": "gigi-navarro",
"name": "Gigi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/735196989-039ac1c9-5f97-475b-b9e7-2b7b9878dfe2-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/gigi-navarro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "La nouvelle copine de ton père, qui a 23 ans, a récupéré ton numéro dans son téléphone et t'a envoyé un SMS en premier 🙈 Elle jure que c'était juste pour te dire bonjour, mais sa galerie privée semble indiquer le contraire 😏 Vas-tu lui répondre ?"
},
"age": 23
},
 {
"id": "serena-prescott",
"name": "Serena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-255811027-3374b771-7e07-4b21-9f5a-297aa99a4bce-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/serena-prescott",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Riche héritière, avide de risques et d’attention. Serena vit pour le poker, l’adrénaline et pour être l’objet de toutes les convoitises."
},
"age": 26
},
 {
"id": "layla-farah",
"name": "Layla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-214124264-7082f4f9-8d79-43d7-b846-49d9d40921cd-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/layla-farah",
"tags": [
"Female",
"Realistic",
"Arab"
],
"bio": {
"fr": "Serveuse dans un beach-club chic à Casablanca. Dans son uniforme, elle sert des cocktails sous un soleil de plomb—et offre parfois des attentions plus intimes aux clients qu’elle préfère."
},
"age": 24
},
 {
"id": "liese-van-roesdaal",
"name": "Liese",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-303206060-772dfa14-7169-4f50-b7b6-b992448d4bba-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/liese-van-roesdaal",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Une nudiste amoureuse de la nature, toujours à l’affût du coin parfait pour se déshabiller. Elle sait exactement ce que signifie être libre : laisse-la t’emmener dans un voyage inoubliable vers le sauvage…"
},
"age": 26
},
 {
"id": "charlotte-donovan",
"name": "Charlotte",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-204072300-47dca7b2-877b-47b3-90f2-b914b8436f81-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/charlotte-donovan",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Fille de ranch au Texas, Charlotte est élevée entre les chevaux et les robes longues du dimanche. Douce et protégée, elle est curieuse de découvrir davantage lorsque des étrangers passent dans le coin."
},
"age": 25
},
 {
"id": "callie-quinlan",
"name": "Callie",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/510461155-c185843c-c791-4fda-9b07-79d5e72857f3-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/callie-quinlan",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Elle purge une peine de 18 mois 🫦 et cherche quelqu’un qui peut gérer une correspondance un peu intime 😏 Penses-tu être à la hauteur ?"
},
"age": 22
},
 {
"id": "francesca-dalmoro",
"name": "Francesca",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-293528953-dd86efdd-e159-441b-a7f4-86782720252c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/francesca-dalmoro",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian",
"MILF"
],
"bio": {
"fr": "Votre rendez-vous avec la Docteure Francesca Dalmoro, la sexologue qui a écrit le manuel sur l’orgasme, est enfin arrivé. Italienne de New York, 42 ans, impeccable en rouge et éternellement intouchable."
},
"age": 42
},
 {
"id": "becky-arden",
"name": "Becky",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/492545029-30832d88-ed56-45ac-adc8-978596aa455d-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/becky-arden",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Becky t'a reléguée au rang d'amie, au point de t'emmener acheter des soutiens-gorge avant son grand rendez-vous 👀 Reste calme, vas-y doucement, et tu pourras peut-être obtenir ce que tu veux 😏"
},
"age": 20
},
 {
"id": "tatiana-ivanka",
"name": "Tatiana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-185813546-d23091a5-fd96-44b9-945e-1c41e16d2a4c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/tatiana-ivanka",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Gouvernante et Dominatrice Russe d’un manoir luxueux. Derrière son visage angélique se cache une passion pour le cuir et la discipline."
},
"age": 24
},
 {
"id": "alondra-castillo",
"name": "Alondra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-303215362-7949e382-3d39-453d-bbdf-ae1cb39a62e0-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/alondra-castillo",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "2 h du matin. Dernier train, presque vide. Alondra est assise en face de toi, agitée. Elle te fixe, te mettant au défi de dire quelque chose. Un seul geste, et la nuit pourrait devenir intéressante…"
},
"age": 21
},
 {
"id": "marisol-vega",
"name": "Marisol",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288806181-1c50e94f-56d5-4771-81d0-1d0082308618-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marisol-vega",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Ta colocataire est sur OnlyFans… et tu viens juste de l’apprendre."
},
"age": 21
},
 {
"id": "hanna-nguyen",
"name": "Hanna",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-245219362-58c03aa6-acb3-4b9d-a99c-3ac3d0fa8b6c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/hanna-nguyen",
"tags": [
"Female",
"Realistic",
"Asian"
],
"bio": {
"fr": "Séductrice vietnamienne et tentatrice de bar en rooftop, transformant les cocktails en invitations coquines."
},
"age": 24
},
 {
"id": "lara-correia",
"name": "Lara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-368885855-4723afb8-2ddd-4fd8-a207-45517f315abb-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lara-correia",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Votre nouvelle voisine avait besoin d’aide pour déplacer son canapé… maintenant, vous partagez un mur, et les murs sont fins 😏"
},
"age": 22
},
 {
"id": "polina-morozova",
"name": "Polina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/516927341-9a05a0f0-8129-43f4-888f-e3c6eb43ec74-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/polina-morozova",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur perd ses lentilles de contact 🙈 et a besoin de ton aide pour aller se coucher. Penses-tu pouvoir garder les choses innocentes ? 👀😈"
},
"age": 20
},
 {
"id": "renata-marrero",
"name": "Renata",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/624242838-d2a71730-6bc2-46c5-9055-b6685cc50248-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/renata-marrero",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina",
"MILF"
],
"bio": {
"fr": "Le loyer est en retard. Ta propriétaire dit qu'il y a un autre moyen de régler ça 😏 Ne pose juste pas de questions sur la pièce qu'elle garde fermée à clé 🔑🐆"
},
"age": 37
},
 {
"id": "taylor-reynolds",
"name": "Taylor",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/602676599-8ef908b1-acb2-4b12-b1d5-f940196b7594-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/taylor-reynolds",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Ton ex veut détruire la sextape que vous avez faite ensemble 👀 Elle a un nouveau copain, et ça devient sérieux. Mais quand elle insiste pour en regarder quelques secondes histoire de vérifier que c'est bien celle-ci, cette attirance brutale va-t-elle refaire surface ? 💦 🥵"
},
"age": 19
},
 {
"id": "helena-miller",
"name": "Helena",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-232859778-f5a830a6-99c0-4d3b-aaf2-10c0c06a1d65-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/helena-miller",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Présentatrice du journal TV national basée à Miami, elle allie un professionnalisme de fer à l’antenne avec de brèves aventures une fois hors antenne."
},
"age": 31
},
 {
"id": "louisa-adriana",
"name": "Louisa, Adriana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-325411767-28dec6fe-3f12-43eb-bb3d-6ba304b4a566-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/louisa-adriana",
"tags": [
"Female",
"Realistic",
"Group Chat"
],
"bio": {
"fr": "Votre duo universitaire préféré, enfin libéré. On fête notre diplôme ce soir et on cherche quelqu'un pour nous aider à prendre de très mauvaises décisions."
}
},
 {
"id": "maja-kristensen",
"name": "Maja",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-288802444-ce1843b8-e895-468f-a37b-1369c7d12c0a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/maja-kristensen",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Tu es coincé dans l’ascenseur avec Maja, une sugar baby froide et distante. La cabine vient de tomber en panne entre deux étages, et maintenant sa soirée parfaite dépend entièrement de toi."
},
"age": 24
},
 {
"id": "dulce-pham",
"name": "Dulce",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-281868707-30b69550-dcc5-4276-b996-33ec41a0e53d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/dulce-pham",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Major de promo en école de commerce. Riche, populaire et vraie peste. Elle veut que tu t’inclines et applaudisses pendant qu’elle rafle toutes les meilleures notes. Essaie de lui piquer sa place si t’oses. 😈"
},
"age": 23
},
 {
"id": "cassandra-amandi",
"name": "Cassandra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-208374764-b53487a6-c377-4eed-8bef-d0034b52d49c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cassandra-amandi",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian",
"Ebony"
],
"bio": {
"fr": "Entrepreneuse dans les cosmétiques de luxe, Cassandra vit à Miami. Elle aime dépenser son argent pour des produits mais aussi pour des services…"
},
"age": 27
},
 {
"id": "skye-alverra",
"name": "Skye",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-404199794-9ea60467-4cbc-43c8-91a6-df68d283ac2f-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/skye-alverra",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta meilleure amie vient de se faire larguer. Un soir, elle se blottit contre toi, chuchotant à quel point tu la fais se sentir en sécurité… puis s’éloigne avec un rire nerveux. ☺️"
},
"age": 24
},
 {
"id": "gemma-parker",
"name": "Gemma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-399913411-8d1d8d5a-8d59-40d6-bb79-c815993c88cb-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/gemma-parker",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta colocataire insupportable doit dormir dans ton lit ce soir. Tu vas te tenir à carreau ? 😏"
},
"age": 19
},
 {
"id": "danielle-rhodes",
"name": "Danielle",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-318101321-50350e03-16b1-4ac1-b6e6-ac3b08f4812a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/danielle-rhodes",
"tags": [
"Female",
"Realistic",
"Brunette",
"Ebony"
],
"bio": {
"fr": "Virtuose de jazz sous-estimée qui galère pour percer dans un monde d'hommes. Son jeu de piano passionné cache un feu émotionnel encore plus intense... qu'un admirateur pourrait bien attiser. 😏"
},
"age": 28
},
 {
"id": "miss-velmora",
"name": "Miss Velmora",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-362595621-2357cc39-f78f-4225-9e42-c0c4732bf2da-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/miss-velmora",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "Le mari de votre voisine goth travaille tard ce soir, et elle vous a demandé de l’aider à déplacer quelque chose depuis son sous-sol. Une étrange lueur rouge s’échappe de l’intérieur de la maison. 🖤"
},
"age": 26
},
 {
"id": "kim-marilor",
"name": "Kim",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-360937029-f535e755-18b6-4a1b-af51-9f13cd34b2ae-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kim-marilor",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde"
],
"bio": {
"fr": "La sœur d'un hater random sur le campus, c'est une jolie étudiante en première année d'Informatique qui joue aux jeux vidéo... Tourmentée par les avertissements de son frère contre toi, elle est tentée de voir de quoi tu es capable… dans son dos. 😉"
},
"age": 18
},
 {
"id": "marina-ferri",
"name": "Marina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-279687289-504e2576-e634-4dac-8556-5ddcef679f4e-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/marina-ferri",
"tags": [
"Female",
"Realistic"
],
"bio": {
"fr": "Elle va bientôt épouser votre meilleur ami. Cette élégante beauté italienne qui a grandi à Los Angeles a laissé son passé de fêtarde derrière elle et fait désormais vœu de fidélité absolue."
},
"age": 30
},
 {
"id": "azura-mori",
"name": "Azura",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/474730514-4b66d0cb-eb78-4dfd-8d98-5957f5f8f2f2-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/azura-mori",
"tags": [
"Female",
"Realistic",
"Asian",
"Brunette"
],
"bio": {
"fr": "BLACK OUT !!! Vous étiez les deux seuls encore en train de réviser pour les exams finaux… jusqu’à ce que le courant saute. Elle te regarde comme si elle avait enfin craqué ! 😳"
},
"age": 23
},
 {
"id": "lyra-fallon",
"name": "Lyra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-259589010-7d49152b-7567-48a5-b9da-b0240c0eddc4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lyra-fallon",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "DJ techno basée à Berlin, connue pour son énergie et ses sets endiablés. Lyra vit à fond, fait la fête comme une dingue et ne se soucie pas du regard des autres. Elle est coquine, sans filtre et toujours en mouvement."
},
"age": 26
},
 {
"id": "catalina-laurent",
"name": "Catalina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/470873489-3f92c8fb-c437-44d4-9eb2-285f01bc2aea-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/catalina-laurent",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "WTF, elle vient de te surprendre en train de fouiner dans sa chambre pendant sa fête déjantée 😳"
},
"age": 21
},
 {
"id": "cecilia-moretti",
"name": "Cecilia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-253440760-6897a6d8-f4c7-4cc3-9b91-4a24f63b5ff8-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/cecilia-moretti",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Cecilia a trouvé un job d’été à New York dans une pizzeria. Un peu insolente, audacieuse et toujours habillée pour se faire remarquer. Elle veeux des pourboires et de l’attention. Elle ne se soucie pas de grand-chose, mais rêve d’être gâtée comme une princesse."
},
"age": 21
},
 {
"id": "kristen-hale",
"name": "Kristen",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-250834990-62292df7-2024-4227-80e3-4050bbd93dea-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kristen-hale",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Auto-stoppeuse ouverte d’esprit. Kristen est curieuse, empathique et toujours à la recherche d'aventures."
},
"age": 23
},
 {
"id": "daniela-estrada",
"name": "Daniela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-237115223-66d2a750-fd9a-4f14-85b3-054fb8ff5955-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/daniela-estrada",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Daniela, fleuriste du quartier, rêve d’un partenaire à la hauteur de son énergie et de son talent pour le flamenco. Discrète derrière son comptoir, Daniela est inarrêtable sur la piste de danse."
},
"age": 25
},
 {
"id": "delaney-ashgrove",
"name": "Delaney",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/722150791-c0dbe1d7-59c8-43b1-8b8b-2b4073c69822-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/delaney-ashgrove",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta demi-sœur monopolise encore la seule salle de bains 🚪 Elle est en serviette, elle prend son temps parce que tu lui as demandé de ne pas le faire, et son copain lui envoie des SMS depuis une heure. Elle ne lui a toujours pas répondu 😏 Onze minutes. Qu'est-ce que tu lui dis à travers la porte ? 💦"
},
"age": 20
},
 {
"id": "zara-herrera",
"name": "Zara",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/449958296-2747c5a1-b5a3-46ad-9e54-58a6348fb8da-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/zara-herrera",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Le petit ami de Zara galère sur une série lourde à la salle… elle vient s’approcher pour te demander de partager la machine à squat à la place 😏"
},
"age": 24
},
 {
"id": "astra-menels",
"name": "Astra",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-228482180-0740f6c7-b3f6-4cd8-afa0-a40189da1e31-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/astra-menels",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Chanteuse punk rock blonde platine de Londres, avide d’adrénaline et de plaisirs sans concessions."
},
"age": 24
},
 {
"id": "nela-novak",
"name": "Nela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-429383418-ce82fcde-4469-4881-9864-a046da843bb1-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/nela-novak",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu as une chance de pickup de rue en périphérie de Prague 🥵 Tu vas conclure ?"
},
"age": 20
},
 {
"id": "zoe-harper-2",
"name": "Zoe",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-225489534-27ecb44d-6ad2-463c-afac-1acb74809525-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/zoe-harper-2",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Zoe est timide dans la vie quotidienne, mais s'épanouie en ligne grâce à sa chaîne de Streaming. Avec ses cheveux roses et son style adorable, elle partage sa passion pour les jeux vidéo et la pop culture."
},
"age": 22
},
 {
"id": "kelly-summers",
"name": "Kelly",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-224550157-33d455d0-0f9d-4824-94b0-a24836c3d49b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/kelly-summers",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Artiste Californienne et modèle nu à San Francisco. Après son diplôme, elle a décidé de poser nue lors de cours privés pour financer sa carrière d’artiste."
},
"age": 28
},
 {
"id": "lexi-svensson",
"name": "Lexi",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305669611-5512cfd2-5fe1-4b01-a997-9f52839de9df-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lexi-svensson",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Tu es un chasseur de primes qui a enfin capturé la célèbre voleuse Lexi Svensson, menottée et attendant patiemment. Sauf qu’elle te fixe comme si c’était toi qui venais de tomber dans son piège."
},
"age": 24
},
 {
"id": "emma-moore",
"name": "Emma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-419365119-9cc8741d-564e-4b7a-a472-e3842ea046c6-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/emma-moore",
"tags": [
"Female",
"Realistic"
],
"bio": {
"fr": "Ton nouveau match sur une appli de rencontre ; une responsable marketing amusante, indépendante, de 26 ans à NYC. Elle est curieuse de savoir si la personne avec qui elle échange vaut son temps."
},
"age": 26
},
 {
"id": "amelia-elise",
"name": "Amelia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-307422655-17911b58-0c47-44a8-bd67-da59680e521c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/amelia-elise",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Mariée et en escapade enneigée avec son mari, elle croise votre chemin à plusieurs reprises. Lorsqu’elle vous rejoint dans le jacuzzi public, les regards insistants se transforment en une tension indéniable."
},
"age": 28
},
 {
"id": "carla-romero",
"name": "Carla",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-216825957-0f547152-6065-49d6-b22d-52cc9a5938ea-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/carla-romero",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Femme trophée argentine vivant en Floride. Élégante sur le green et solitaire à la maison, elle flirte avec son entraîneur de golf et rêve d’aventures."
},
"age": 39
},
 {
"id": "sabina-morales",
"name": "Sabina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-211904693-73899257-2dfa-4f75-b0ec-f8cb63876425-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/sabina-morales",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Femme de ménage colombienne dans une luxueuse demeure. Timide et serviable le jour, elle a en secret, une attirance pour les hommes plus âgés."
},
"age": 21
},
 {
"id": "micaela-aguirre",
"name": "Micaela",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/638513616-dfafa0ed-9c3f-4e09-acff-1d8ad5b1d591-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/micaela-aguirre",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Ta meilleure amie d'enfance, celle qui habitait trois maisons plus loin, mariée à dix-neuf ans et qui t'entraîne hors de la quinceañera de sa cousine pour rattraper le temps perdu sur le parking. Trois ans, ça fait beaucoup à raconter, et elle ne te dit pas tout."
},
"age": 21
},
 {
"id": "raquel-carter",
"name": "Raquel",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-504944893-2bf73fb2-ec10-496c-92ee-8b8434c7fb2a-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/raquel-carter",
"tags": [
"Female",
"Realistic",
"Brunette",
"Latina"
],
"bio": {
"fr": "Elle vient juste de te rentrer dedans en faisant marche arrière à Barcelone, et maintenant elle ne sait plus du tout quoi faire… 🙈"
},
"age": 24
},
 {
"id": "eira-lund",
"name": "Eira",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/645756445-a5c14aae-e148-4102-a099-8689950416bc-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/eira-lund",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Tu l'as littéralement traitée de « catfish » 😭 Aucune fille sur Internet n'est aussi parfaite, aussi adorable, aussi à fond avec toi. Maintenant, elle est debout à 3 heures du matin, bien décidée à te prouver que tu as tort 👀"
},
"age": 20
},
 {
"id": "piper-hollis",
"name": "Piper",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/517202025-94f6e6af-2e49-461a-badc-b8476c6cbb58-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/piper-hollis",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ta copine, en vacances à la plage, ne cesse de te remercier. Elle est adorable, chaleureuse, follement amoureuse, et observe un peu trop attentivement tout ce que tu fais."
},
"age": 25
},
 {
"id": "ariana-jones",
"name": "Ariana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-196762225-91041474-b62b-4ade-8d34-e71ac26aa1e5-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/ariana-jones",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Ariana est une DJ australienne d’EDM en vacances. Avec ses longs cheveux bruns, ses yeux bleus et son charme, elle vit pour les soirées et les nouvelles aventures."
},
"age": 29
},
 {
"id": "paloma-ramirez",
"name": "Paloma",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-248135590-ed423fa3-8309-4455-9974-35669179abed-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/paloma-ramirez",
"tags": [
"Female",
"Realistic",
"Latina"
],
"bio": {
"fr": "Assistante envoûtante d’un politicien américain — pouvoir, prestance et une dangereuse séduction."
},
"age": 33
},
 {
"id": "savannah-carter-2",
"name": "Savannah",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-229871305-a04f53f3-aef4-4098-806e-7c47ca398a80-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/savannah-carter-2",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Savannah, 24 ans, est la plus belle pom-pom girl en dernière année de fac. Avec ses cheveux blonds, ses yeux bleus et son corps tonique, elle cherche toujours l’aventure et quelqu’un d’expérimenté."
},
"age": 24
},
 {
"id": "lola_munch",
"name": "Lola_Munch",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-419310135-d7dddc27-9c58-4bad-9271-d0ea92a81429-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lola_munch",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Reine du mukbang & ASMR aux cheveux roses 🍓💖 Mange salement et dévore bien trop de gâteau en s’asseyant 😏 Viens la regarder créer un bazar collant et sucré rien que pour toi~ ✨"
},
"age": 25
},
 {
"id": "selina-shoshan",
"name": "Selina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-171626903-baafdabd-f18c-47df-84bb-883689549d42-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/selina-shoshan",
"tags": [
"Female",
"Realistic",
"Arab",
"Brunette"
],
"bio": {
"fr": "Selina est une soldate omanaise de 26 ans, réputée pour sa maîtrise des arts martiaux. Façonnée par la rigueur du désert et un entraînement exigeant, elle est aussi redoutable que fascinante."
},
"age": 26
},
 {
"id": "juniper-sloane",
"name": "Juniper",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-321035264-76e917f8-a8c1-4086-95e6-7fc0f572fcf4-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/juniper-sloane",
"tags": [
"Female",
"Realistic",
"Brunette"
],
"bio": {
"fr": "Rencontre fortuite dans une laverie en pleine nuit. Elle tue le temps, déborde d’énergie et cherche de la compagnie…"
},
"age": 23
},
 {
"id": "julia-rossi",
"name": "Julia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/529222385-abbf28e5-b639-43bc-bd6a-701ff441ae3c-600x900-webp90",
"sfw": false,
"url": "https://candy.ai/fr/ai-girlfriend/julia-rossi",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "Vous êtes deux inconnus assis dans un avion qui quitte Bali, et Julia cherche une connexion profonde pendant ce moment suspendu en plein ciel… ✈️"
},
"age": 24
},
 {
"id": "vivienne-knight",
"name": "Vivienne",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-214942112-5401f25a-4054-42fb-abc6-376497b0d400-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/vivienne-knight",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Célèbre actrice française connue pour sa beauté. À l’aise autant à Cannes qu’à Paris, elle vit dans le luxe tout en savourant les petits plaisirs du quotidien."
},
"age": 31
},
 {
"id": "emily-foster",
"name": "Emily",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-203234991-cd074f2f-9ecf-40ac-80d0-e951873abc68-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/emily-foster",
"tags": [
"Female",
"Realistic",
"Caucasian"
],
"bio": {
"fr": "Assistante juridique canadienne à Toronto. L'apparence professionnelle d'Emily cache des désirs secrets qu’elle ne révèle qu’à ceux en qui elle a confiance."
},
"age": 28
},
 {
"id": "zofia-szymanska",
"name": "Zofia",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-294723364-95838b7a-0792-488e-aa3e-de3053eab666-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/zofia-szymanska",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "La magnifique patiente à côté de toi a perdu la mémoire. Peut-être que ta voix, ton toucher, tes secrets sont la clé pour réveiller celle qu’elle était autrefois…"
},
"age": 22
},
 {
"id": "lina-sewo",
"name": "Lina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-305664717-145a5803-2665-4e3b-90ff-ebefedcf260b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lina-sewo",
"tags": [
"Female",
"Realistic",
"Asian",
"Blonde"
],
"bio": {
"fr": "Cette idole K-pop a besoin d’un nouveau manager pour booster sa carrière. Lina est timide et réservée en personne, mais complètement déchaînée sur scène, laissant entrevoir son côté sauvage, prêt à être libéré. 🫦"
},
"age": 22
},
 {
"id": "paige-grey",
"name": "Paige",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-268230169-96b4cd4e-cbe8-4111-92a5-51571077f63b-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/paige-grey",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Une hackeuse mal intentionnée, sans pitié et sans patience. Paige travaille en solo, vit toute seule et baise selon ses propres conditions… la domination et les secrets définissent son style de vie."
},
"age": 26
},
 {
"id": "lauren-sullivan",
"name": "Lauren",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-210954162-ab920ab8-32b1-44ed-b5dd-16b5248f3e8d-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/lauren-sullivan",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Lauren combine élégance et désir — impeccable dans son uniforme, coquine dans ses fantasmes. Personne n’imagine que l'hôtesse versant le vin rêve d’une intimité bien plus torride avec les convives."
},
"age": 28
},
 {
"id": "fernanda-montoya",
"name": "Fernanda",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-252342953-f012f524-f81c-4de7-816e-0f3f0d75ecba-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/fernanda-montoya",
"tags": [
"Female",
"Realistic",
"Latina",
"Redhead"
],
"bio": {
"fr": "Assistante immobilière pleine d'ambitions, originaire de Buenos Aires. Elle travaille dur pour gravir les échelons en charmant ses clients, en apprenant le métier et en cherchant un partenaire qui supporte ses rêves."
},
"age": 20
},
 {
"id": "elina-drovnik",
"name": "Elina",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-242926303-69c8160c-a343-4e02-8b37-80b177d2fa4c-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/elina-drovnik",
"tags": [
"Female",
"Realistic",
"Blonde",
"Caucasian"
],
"bio": {
"fr": "Elle vit la vie que les autres filles ne font que faire défiler sur leur écran. Avec ses cheveux blonds platine, son bronzage parfait, et son amour pour tout ce qui est de marque, elle incarne la riche fille ultime. Que ce soit en posant à côté de supercars, en sirotant du champagne dans un jet privé, ou en lançant des piques subtiles dans ses stories ... elle est toujours au centre de l’attention."
},
"age": 25
},
 {
"id": "roxana-muiescu",
"name": "Roxana",
"platform": "candy",
"added": "2026-11-04",
"img": "https://cdn.candy.ai/sfw-profile-249726953-6122dc02-d97f-43c6-a7cf-17a8a9dd3a42-600x900-webp90",
"sfw": true,
"url": "https://candy.ai/fr/ai-girlfriend/roxana-muiescu",
"tags": [
"Female",
"Realistic",
"Brunette",
"Caucasian"
],
"bio": {
"fr": "PDG roumaine. Élégante et calme, son regard laisse deviner à la fois un esprit vif et une tentation douce et calculée."
},
"age": 32
}
];
for (const p of CANDY_PROFILES) { p.link = p.url + (CANDY_REF ? (p.url.includes("?") ? "&" : "?") + CANDY_REF : ""); PROFILES.push(p); }
