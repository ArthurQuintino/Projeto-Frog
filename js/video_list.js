const VIDEO_LIST = [
    { title: "forest gump", synopsis: "Um homem comum, Forrest Gump, testemunha e participa de momentos históricos, enquanto vive uma vida extraordinária que desafia as expectativas em sua jornada única. Desde sua infância até sua vida adulta, Forrest impacta e é impactado por pessoas e eventos icônicos." },
    { title: "onze homens e um segredo", synopsis: "Em 'Onze Homens e Um Segredo', um grupo de especialistas em roubo se une para realizar um assalto elaborado em Las Vegas. Traições, artimanhas e muita inteligência se entrelaçam enquanto eles buscam realizar um dos roubos mais ousados da história." },
    { title: "batman cavaleiro das trevas", synopsis: "Em 'Batman Cavaleiro das Trevas', o vigilante mascarado Batman enfrenta um novo e astuto adversário, o Coringa. Gotham mergulha no caos, desafiando Batman moral e fisicamente, enquanto ele luta para salvar a cidade que jurou proteger." },
    { title: "O profissional", synopsis: "Em 'O Profissional', um assassino de aluguel frio e eficiente forma uma improvável conexão com uma jovem protegida. O filme desencadeia uma sequência de eventos intensos, misturando ação, drama e uma relação única entre mentor e pupila." },
    { title: "john wick de volta ao jogo", synopsis: "Após o assassinato de seu cachorro, símbolo de uma última conexão com sua falecida esposa, John Wick, um ex-assassino, busca vingança em um submundo de criminosos. Uma busca por justiça transforma-se em uma série de confrontos letais e estilizados." },
    { title: "john wick um dia novo para matar", synopsis: "Em 'John Wick: Um Dia Novo Para Matar', John Wick é forçado a voltar ao mundo do crime, enfrentando perigos e desafios enquanto busca resolver problemas do passado. A ação intensa e o mundo intrigante de assassinos continuam a cativar o público." },
    { title: "john wick Parabellum", synopsis: "Fugindo de um contrato global sobre sua cabeça, John Wick enfrenta uma intensa batalha pela sobrevivência no submundo assassino. 'John Wick: Parabellum' é uma montanha-russa de ação coreografada, expandindo ainda mais o universo do formidável assassino." },
    { title: "john wick 4", synopsis: "A saga de John Wick continua quando ele se vê mais uma vez no centro de uma conspiração mortal. 'John Wick 4' promete mais ação estilizada, reviravoltas e o carismático anti-herói em uma busca implacável por sua própria sobrevivência." },
    { title: "bastardos inglorios", synopsis: "Durante a Segunda Guerra Mundial, um grupo de soldados judeus americanos forma os 'Bastardos Inglórios' para realizar operações secretas e vingativas contra os nazistas. O filme de Quentin Tarantino combina humor negro, violência e uma narrativa alternativa ousada." },
    { title: "interstellar", synopsis: "Em 'Interestelar', exploradores espaciais embarcam em uma missão para encontrar um novo lar para a humanidade. O filme, dirigido por Christopher Nolan, envolve os espectadores com desafios cósmicos, teorias científicas intrigantes e temas emocionais profundos." },
    { title: "velozes e furiosos tokyo", synopsis: "Em 'Velozes e Furiosos: Tokyo Drift', velocidade e adrenalina colidem nas ruas de Tóquio. Corredores habilidosos enfrentam desafios perigosos em busca de respeito e vitória, em uma narrativa que adiciona uma reviravolta à popular franquia de ação." },
    { title: "casa mostro", synopsis: "Em 'Casa Monstro', um jovem se aventura em uma casa misteriosa e descobre segredos sobrenaturais e criaturas estranhas. O filme animado oferece uma combinação encantadora de imaginação, amizade e coragem em face do desconhecido." },
    { title: "breaking bad", synopsis: "Em 'Breaking Bad', um professor de química se transforma em um produtor de metanfetamina, mergulhando no mundo do crime para assegurar o futuro financeiro de sua família. A série é uma exploração complexa da moralidade e das consequências das escolhas." },
    { title: "peaky blinders", synopsis: "Na Inglaterra pós-Primeira Guerra Mundial, a família Shelby lidera uma gangue conhecida como 'Peaky Blinders', enfrentando desafios políticos e criminosos. A série oferece uma visão intrigante da sociedade da época, misturando drama familiar e intriga criminal." },
    { title: "lista negra", synopsis: "Em 'Lista Negra', uma ex-agente governamental se une a um criminoso para desvendar conspirações enquanto elaboram uma lista de alvos de alta prioridade. A série é um thriller de suspense que mantém os espectadores à beira de seus assentos." },
    { title: "ncsi", synopsis: "Uma equipe de especialistas forenses investiga crimes complexos usando tecnologia avançada, buscando a verdade nos detalhes mais minuciosos. 'NCIS' oferece uma mistura de drama, humor e intrigas policiais enquanto a equipe enfrenta casos desafiadores." },
    { title: "house", synopsis: "O brilhante, porém cínico, Dr. House lidera uma equipe médica enquanto enfrenta casos médicos desafiadores, utilizando métodos pouco convencionais. 'House' é uma série médica que explora diagnósticos complexos, ética médica e as relações entre a equipe." },
    { title: "suits", synopsis: "Em 'Suits', um prestigiado escritório de advocacia de Nova York é o cenário para dramas jurídicos. Um jovem prodígio do college ingressa no mundo jurídico, lidando com intrigas e desafios legais enquanto navega pela dinâmica única da firma." },
    { title: "the office", synopsis: "Uma comédia mockumentary que segue a vida cotidiana dos funcionários de um escritório, revelando o humor nas interações diárias e nos desafios profissionais. 'The Office' é uma jornada hilária e muitas vezes constrangedora pelo mundo corporativo." },
    { title: "rick and morty", synopsis: "Um cientista excêntrico, Rick, e seu neto aventureiro, Morty, exploram dimensões alternativas, vivendo aventuras absurdas e lidando com dilemas éticos. 'Rick and Morty' é uma animação irreverente que mistura sci-fi, humor negro e reflexões existenciais." },
    { title: "star wars mandalorian", synopsis: "Em 'Star Wars: The Mandalorian', um caçador de recompensas viaja pelos confins da galáxia, enfrentando perigos e desvendando segredos enquanto protege uma criança especial. A série expande o universo de 'Star Wars', oferecendo uma narrativa cativante fora da saga principal." },
    { title: "star wars clone wars", synopsis: "Em 'Star Wars: The Clone Wars', Jedi, clones e separatistas se envolvem em batalhas épicas. A série animada explora os eventos entre os Episódios II e III de Star Wars, adicionando profundidade e complexidade ao conflito galáctico." },
    { title: "top gear", synopsis: "Um programa de televisão que destaca carros, testes de condução e desafios inusitados, proporcionando entretenimento automotivo irreverente. 'Top Gear' é uma celebração da paixão por carros, com uma pitada de humor britânico." },
    { title: "doctor who", synopsis: "O Doutor, um alienígena com a habilidade de se regenerar, viaja através do tempo e espaço em sua nave, a TARDIS, enfrentando ameaças alienígenas e desafios morais. 'Doctor Who' é uma aventura sci-fi duradoura e cativante." },
    { title: "paprika", synopsis: "Em 'Paprika', um mundo onde terapeutas usam uma tecnologia para entrar nos sonhos de seus pacientes é abalado quando uma máquina que permite a entrada nos sonhos é roubada. O filme é uma exploração visualmente deslumbrante dos limites entre sonho e realidade." },
    { title: "mob psycho 100", synopsis: "Um jovem com habilidades psíquicas poderosas, Mob, tenta equilibrar suas habilidades sobrenaturais com a vida cotidiana. Enfrentando espíritos e desafios psíquicos, 'Mob Psycho 100' é uma jornada de autodescoberta e aceitação." },
    { title: "moshocu tensei", synopsis: "Reencarnado como um jovem em um mundo de fantasia, um homem de meia-idade busca redimir sua vida passada enquanto enfrenta aventuras e magias. 'Mushoku Tensei' explora temas de reinvenção pessoal, crescimento e os desafios de começar de novo em um novo mundo." },
    { title: "one punch man", synopsis: "Saitama, um herói entediado que derrota seus inimigos com um único soco, busca um desafio real enquanto enfrenta monstros e vilões. 'One Punch Man' combina ação, comédia e uma reviravolta única no gênero de super-heróis." },
    { title: "devilman crybaby", synopsis: "Após fundir-se com um demônio, Akira se torna Devilman, enfrentando a crescente ameaça demoníaca enquanto lida com as complexidades da natureza humana. 'Devilman Crybaby' é uma experiência visualmente impactante e emocionalmente intensa." },
    { title: "dororo", synopsis: "Em um mundo dominado por demônios, um jovem samurai chamado Hyakkimaru embarca em uma jornada épica para recuperar partes de seu corpo perdidas. Despojado de suas faculdades físicas em um pacto feito por seu próprio pai, ele é acompanhado pelo astuto e espirituoso órfão Dororo. Juntos, enfrentam desafios sobrenaturais, desvendam segredos sombrios e buscam vingança contra os demônios que assolam a terra. À medida que a dupla viaja por paisagens perigosas, uma história de coragem, redenção e a luta entre a humanidade e o sobrenatural se desenrola, prometendo emocionar e surpreender os espectadores." },
    { title: "Aggretsuko", synopsis: "Em 'Aggretsuko', Retsuko, uma adorável panda vermelha, enfrenta as frustrações do cotidiano como uma contadora exausta. Para lidar com o estresse, ela descarrega sua raiva através de intensas sessões de karaokê death metal. Entre humor e reflexões sobre a vida adulta, a série oferece uma perspectiva única sobre as pressões da vida profissional e pessoal." },
    { title: "Hellsing", synopsis: "Em 'Hellsing', a Organização Hellsing combate ameaças sobrenaturais, especialmente vampiros. Liderada por Alucard, um vampiro poderoso, a organização enfrenta inimigos sobrenaturais e conspirações obscuras. A série mistura ação intensa, horror gótico e elementos sobrenaturais, proporcionando uma narrativa envolvente e cheia de reviravoltas." },
    { title: "Dragon Ball", synopsis: "'Dragon Ball' segue a jornada de Son Goku em busca das míticas Esferas do Dragão. Ao longo de suas aventuras, ele enfrenta poderosos inimigos, faz amigos leais e desvenda segredos sobre seu passado. Com uma mistura de artes marciais, comédia e batalhas épicas, a série se tornou um clássico do anime, cativando fãs em todo o mundo." },
    { title: "Death Note", synopsis: "'Death Note' narra a história de Light Yagami, um estudante brilhante que descobre um caderno capaz de matar qualquer pessoa cujo nome seja escrito nele. À medida que Light tenta criar um mundo utópico livre de criminosos, ele se envolve em um jogo mortal de inteligência com o misterioso detetive conhecido apenas como L." },
    { title: "One Piece", synopsis: "'One Piece' acompanha Monkey D. Luffy em sua jornada para se tornar o Rei dos Piratas. Com seus amigos do bando do Chapéu de Palha, ele enfrenta desafios épicos, busca o tesouro conhecido como One Piece e desvenda os segredos do mundo. Repleto de aventuras, humor e personagens memoráveis, o anime é um fenômeno mundial." },
    { title: "Fullmetal Alchemist", synopsis: "'Fullmetal Alchemist' segue os irmãos Edward e Alphonse Elric, alquimistas em busca da Pedra Filosofal para restaurar seus corpos após uma experiência alquímica mal sucedida. Ao explorar temas de sacrifício, moralidade e poder, a série oferece uma narrativa complexa e emocional em um mundo de alquimia." },
    { title: "Cobra Kai", synopsis: "'Cobra Kai' continua a saga de 'Karate Kid', revisitando a rivalidade entre Johnny Lawrence e Daniel LaRusso. Ambientada décadas após os eventos do filme original, a série explora temas de redenção, resiliência e a complexidade das relações, enquanto os personagens lidam com os desafios da vida adulta e do karatê." },
    { title: "O Poderoso Chefão", synopsis: "'O Poderoso Chefão' é uma obra-prima dirigida por Francis Ford Coppola, baseada no romance de Mario Puzo. A saga da família Corleone abrange décadas e explora temas de poder, lealdade, e tragédia. Com atuações marcantes de Marlon Brando e Al Pacino, o filme é aclamado por sua narrativa envolvente e influência duradoura no cinema." },
    { title: "Matrix", synopsis: "'Matrix' introduz um mundo onde a realidade é uma ilusão criada por máquinas para controlar a humanidade. Neo, um hacker, descobre a verdade e se junta à resistência para combater as máquinas. A trilogia 'Matrix' é conhecida por seus efeitos visuais inovadores, filosofia intrigante e cenas de ação icônicas." },
    { title: "Game of Thrones", synopsis: "'Game of Thrones', baseada na série de livros 'A Song of Ice and Fire' de George R.R. Martin, é uma saga épica de fantasia que segue as lutas pelo trono de ferro de Westeros. Com tramas intricadas, personagens complexos e reviravoltas surpreendentes, a série se destaca pelo seu drama político, intrigas e elementos fantásticos." },
    { title: "Evangelion", synopsis: "'Evangelion' mergulha em um futuro distópico onde adolescentes pilotam gigantes chamados Evangelions para combater seres misteriosos conhecidos como Anjos. A série aborda temas psicológicos, filosóficos e existenciais, oferecendo uma experiência única e complexa que desafia as convenções do gênero mecha." },
    { title: "Cowboy Bebop", synopsis: "'Cowboy Bebop' segue a tripulação eclética da nave Bebop enquanto caçam recompensas no espaço. Com um estilo noir, trilha sonora envolvente e personagens cativantes, a série mescla elementos de western, noir e ficção científica, tornando-se um clássico do anime." }
];