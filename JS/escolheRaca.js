/* CHAMANDO A FICHA QUE VAI SER UTILIZADA NESSA TELA --------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

// Pega o nome da ficha que vai ser trabalhada:
const slotFicha = window.localStorage.getItem("Slot");
// Pega a ficha certa a partir do nome em "slotFicha":
const pointer = window.localStorage.getItem(slotFicha);
// thisFicha agora tem os valores da ficha:
var thisFicha = JSON.parse(pointer);

/* TODAS AS VARIÁVEIS DE CONTROLE ---------------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

// Variáveis para escrever as informações da "thisFicha":
const element_txtCharName = document.getElementById("ID_nameChar");
const element_txtCharIdade = document.getElementById("ID_idadeChar");
const element_txtCharAltura = document.getElementById("ID_alturaChar");
const element_txtCharPeso = document.getElementById("ID_pesoChar");
const element_txtCharPele = document.getElementById("ID_peleChar");
const element_txtCharOlho = document.getElementById("ID_olhoChar");
const element_txtCharCabelo = document.getElementById("ID_cabeloChar");

// Variáveis para escrever os atributos da "thisFicha":
const element_txtFOR = document.getElementById("ID_FOR");
const element_txtDES = document.getElementById("ID_DES");
const element_txtCON = document.getElementById("ID_CON");
const element_txtINT = document.getElementById("ID_INT");
const element_txtSAB = document.getElementById("ID_SAB");
const element_txtCAR = document.getElementById("ID_CAR");

// Escrevendo os atributos:
//element_TitlePlayer.innerHTML = thisFicha.BIO_Dono;
element_txtCharName.innerHTML = thisFicha.BIO_Nome;
element_txtCharIdade.innerHTML = thisFicha.BIO_Idade;
element_txtCharAltura.innerHTML = thisFicha.BIO_Altura;
element_txtCharPeso.innerHTML = thisFicha.BIO_Peso;
element_txtCharPele.innerHTML = thisFicha.BIO_Pele;
element_txtCharOlho.innerHTML = thisFicha.BIO_Olho;
element_txtCharCabelo.innerHTML = thisFicha.BIO_Cabelo;

// Variáveis para janela de "YerNo":
const element_msg = document.querySelector('#msg');
const elementModal_yesNo = document.querySelector('#modal_yesNo');

// Variáveis para escrever na tabela de raças:
const element_nameRaça = document.getElementById("nomeRaça");
const element_tamanhoRaça = document.getElementById("tamanhoRaça");
const element_livroRaça = document.getElementById("livroRaça");

// Variáveis para permitir o uso de cada atributo na calculadora:
var state_FOR = false;
var state_DES = false;
var state_CON = false;
var state_INT = false;
var state_SAB = false;
var state_CAR = false;

// Variáveis para adcionar o evento de clique dos botões de aba:
var element_Traço = document.getElementById("ID_Traços");
var element_Historia = document.getElementById("ID_Historia");
var element_Imagem = document.getElementById("ID_Imagem");

// Objeto para controlar que os valores na calculadora sejam igual da "thisFicha":
var totalAtributo = {
    T: 0,
    FOR: thisFicha.ATR_01_FOR,
    DES: thisFicha.ATR_02_DES,
    CON: thisFicha.ATR_03_CON,
    INT: thisFicha.ATR_04_INT,
    SAB: thisFicha.ATR_05_SAB,
    CAR: thisFicha.ATR_06_CAR
}

// Objeto para controlar quantidade de pontos adcionados em cada atributo:
var pointAtributo = {
    FOR: 0,
    DES: 0,
    CON: 0,
    INT: 0,
    SAB: 0,
    CAR: 0
}

//Objeto para salvar a raça selecionada.
var raçaSelecionada = {
    Extras_TraçosRaciais: ""
}

/* OBJETOS COM AS INFORMAÇÕES DAS RAÇAS ---------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

//Objeto com as informações da raça: Aarakocra.
const Aarakocra = {
    
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> DES +2; SAB +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 25 pés, voar 50 pés.",

    "<strong>Vida:</strong> Os aarakocras atingem a maturidade aos 3 anos de idade. Comparados aos humanos, os aarakocras geralmente não vivem mais de 30 anos.",

    "<strong>Alinhamento:</strong> A maioria dos aarakocras são bons e raramente escolhem lados quando se trata de lei e caos. Líderes tribais e guerreiros podem ser leais, enquanto exploradores e aventureiros podem tender ao caótico.",

    "<strong>Tamanho:</strong> Aarakocra são cerca de 5 metros de altura. Eles têm corpos finos e leves que pesam entre 80 e 100 libras. Seu tamanho é Médio.",

    "<strong>Voar:</strong> Você tem um deslocamento de vôo de 50 pés. Para usar esta velocidade, você não pode usar armadura média ou pesada.",

    "<strong>Garras:</strong> Suas garras são armas naturais, que você pode usar para fazer ataques desarmados. Se você acertar com eles, você causa dano cortante igual a 1d4 + seu modificador de Força, em vez do dano de concussão normal para um ataque desarmado.",

    "<strong>Linguagem:</strong> Você pode falar, ler e escrever Comum, Aarakocra e Auran."
    ],

    Info: [
        "Isolados em altas montanhas no topo de árvores altas, os aarakocra, às vezes chamados de povo-pássaro, evocam medo e admiração. Muitos aarakocra nem são nativos do Plano Material. Eles vêm de um mundo além - das vistas ilimitadas do Plano Elemental do Ar. Eles são imigrantes, refugiados, batedores e exploradores, seus postos avançados funcionam como pontos de apoio em um mundo estranho e alienígena."
    ],

    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Bugbear.png"
    ],

    Controle_Visão: [
        "Normal."
    ],

    Controle_Movimentação: [
        "Caminhada 25 pés.",
        "Voar 50 pés."
    ],

    Extras_Ações: [
        "<strong>Garras:</strong> Suas garras são armas naturais, que você pode usar para fazer ataques desarmados. Se você acertar com eles, você causa dano cortante igual a 1d4 + seu modificador de Força, em vez do dano de concussão normal para um ataque desarmado."
    ],

    Extras_Idiomas: [
        "Comum.",
        "Aarakocra.",
        "Auran."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Aasimar.
const Aasimar = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Car +2; Sab +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Vida:</strong> Aasimar amadurecem na mesma proporção que os humanos, mas vivem alguns anos a mais.",

    "<strong>Tamanho:</strong> Aasimar são construídos como humanos bem proporcionados. Seu tamanho é Médio.",

    "<strong>Visão no escuro:</strong> Graças à sua herança celestial, você tem uma visão superior em condições escuras e escuras. Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.",
    
    "<strong>Resistência Celeste:</strong> Você tem resistência a dano necrótico e radiante.",
    
    "<strong>Legado Celestial:</strong> Você conhece o truque da luz . Uma vez que você alcance o 3º nível, você pode lançar a magia de restauração menor uma vez com esta característica, e você recupera a habilidade de fazê-lo quando terminar um descanso longo. Uma vez que você alcance o 5º nível, você pode lançar a magia luz do dia uma vez com esta característica, e você recupera a habilidade de fazê-lo quando terminar um descanso longo. Carisma é sua habilidade de conjuração para essas magias.",
    
    "<strong>Linguagem:</strong> Você pode falar, ler e escrever Comum e Celestial."
    ],

    Info: [
        "Sejam descendentes de um ser celestial ou infundidos com poder celestial, aasimar são mortais que carregam uma centelha dos Planos Superiores dentro de suas almas. Eles podem atiçar essa faísca para trazer luz, aliviar feridas e desencadear a fúria dos céus.",

        "Aasimar pode surgir entre qualquer população de mortais. Eles se parecem com seus pais, mas vivem até 160 anos e muitas vezes têm características que sugerem sua herança celestial. Estes geralmente começam sutis e se tornam mais óbvios quando o aasimar ganha a habilidade de revelar sua natureza celestial completa. A tabela Aasimar Celestial Features tem exemplos que você pode escolher ou usar como inspiração para criar seus próprios."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Aasimar.png"
    ],

    Controle_Visão: [
        "<strong>Visão no escuro:</strong> Graças à sua herança celestial, você tem uma visão superior em condições escuras e escuras. Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "Nenhuma."
    ],

    Extras_Idiomas: [
        "Comum.",
        "Celestial."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Necrótico.",
        "Radiante."
    ],

    Magias_0C: [
        "Luz"
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Astral Elfo.
const AstralElf = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Escolha um dos seguintes: (a) Escolha qualquer +2; escolha qualquer outro +1 (b) Escolha qualquer +1; escolha qualquer outro +1; escolha qualquer outro +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Tipo de criatura:</strong> Você é um Humanóide. Você também é considerado um elfo para qualquer pré-requisito ou efeito que exija que você seja um elfo.",
    
    "<strong>Fogo Astral:</strong> Você conhece um dos seguintes truques de sua escolha: luzes dançantes , luz ou chama sagrada . Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração para isso (escolha ao selecionar esta raça).",
    
    "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão apenas como tons de cinza.",

    "<strong>Ancestralidade Fey:</strong> Você tem vantagem nos testes de resistência que fizer para evitar ou acabar com a condição enfeitiçada em si mesmo.",

    "<strong>Sentidos Aguçados:</strong> Você tem proficiência na perícia Percepção.",

    "<strong>Passo da Luz das Estrelas:</strong> Como uma ação bônus, você pode se teletransportar magicamente até 9 metros para um espaço desocupado que você possa ver. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos quando terminar um descanso longo.",

    "<strong>Transe Astral:</strong> Você não precisa dormir, e a magia não pode fazer você dormir. Você pode terminar um descanso longo em 4 horas se passar essas horas em uma meditação de transe, durante a qual permanece consciente.<br>Sempre que você terminar este transe, você ganha proficiência em uma perícia de sua escolha e com uma arma ou ferramenta de sua escolha, selecionada no Livro do Jogador . Você adquire misticamente essas proficiências extraindo-as da memória élfica compartilhada e das experiências de entidades no Plano Astral, e as retém até terminar seu próximo descanso longo.",

    "<strong>Línguas:</strong> Você pode falar, ler e escrever Comum e outro idioma que você e seu Mestre concordem ser apropriado para seu personagem."
    ],

    Info: [
        "Há muito tempo, grupos de elfos se aventuraram de Feywild ao Plano Astral para ficarem mais próximos de seus deuses. A vida no Vazio Prateado imbuiu suas almas com uma centelha de luz divina. Essa luz se manifesta como um brilho estrelado nos olhos de um elfo astral.",

        "Como nada envelhece no Plano Astral, os elfos astrais que habitam esse plano podem ser muito velhos, e sua longevidade lhes dá uma perspectiva incomum sobre a passagem do tempo. Alguns são propensos à melancolia, enquanto outros podem exibir uma ausência de sentimento. Muitos procuram maneiras criativas de se ocupar. Quer optem por viver em contemplação silenciosa ou explorar os confins do multiverso, os elfos astrais tendem a ver as coisas através das lentes do tempo como tendo pouco ou nenhum significado para eles. Elfos astrais que não moram no Plano Astral podem viver mais de 750 anos."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/AstralElf.png"
    ],

    Controle_Visão: [
        "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão apenas como tons de cinza."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "<strong>Passo da Luz das Estrelas:</strong> Como uma ação bônus, você pode se teletransportar magicamente até 9 metros para um espaço desocupado que você possa ver. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos quando terminar um descanso longo."
    ],

    Extras_Idiomas: [
        "Comum."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ],

    HAB_PF_Percepção: true
}

//Objeto com as informações da raça: Autominominomo.
const Autominominomo = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Escolha um dos seguintes: (a) Escolha qualquer +2; escolha qualquer outro +1 (b) Escolha qualquer +1; escolha qualquer outro +1; escolha qualquer outro +1",
    "<strong>Tamanho:</strong> Pequeno",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Tipo de criatura:</strong> Você é um Construtor.",

    "<strong>Invólucro blindado:</strong> Você está envolto em metal fino ou algum outro material durável. Enquanto você não estiver usando armadura, sua Classe de Armadura base é 13 + seu modificador de Destreza.",

    "<strong>Construído para o Sucesso:</strong> Você pode adicionar um d4 a uma jogada de ataque, teste de habilidade ou teste de resistência que fizer, e pode fazê-lo depois de ver a jogada de d20 , mas antes que os efeitos da jogada sejam resolvidos. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos quando terminar um descanso longo.",

    "<strong>Máquina de Cura:</strong> Se o feitiço de reparação for lançado em você, você pode gastar um Dado de Vida, lançá-lo e recuperar um número de pontos de vida igual ao teste mais seu modificador de Constituição (mínimo de 1 ponto de vida).<br>Além disso, seu criador projetou você para se beneficiar de vários feitiços que preservam a vida, mas que normalmente não afetam os Constructos: curar ferimentos , palavra de cura , curar ferimentos em massa , palavra de cura em massa e poupar os moribundos.",

    "<strong>Natureza Mecânica:</strong> Você tem resistência a dano de veneno e imunidade a doenças, e você tem vantagem em testes de resistência contra ser paralisado ou envenenado . Você não precisa comer, beber ou respirar.",

    "<strong>Descanso da Sentinela:</strong> Quando você faz um descanso longo, você passa pelo menos 6 horas em um estado inativo e imóvel, em vez de dormir. Nesse estado, você parece inerte, mas permanece consciente.",

    "<strong>Projeto especializado:</strong> Você ganha duas proficiências em ferramentas de sua escolha, selecionadas do Livro do Jogador.",

    "Línguas:</strong> Você pode falar, ler e escrever Comum e outro idioma que você e seu Mestre concordem ser apropriado para seu personagem."
    ],

    Info: [
        "Autónomos são seres mecânicos construídos por gnomos das rochas. Às vezes, por causa de um mau funcionamento ou de uma circunstância única, um autognomo se separa de seu criador e ataca por conta própria.",

        "Um autognome tem uma semelhança com seu criador, e a maioria dos autognomes são programados para falar e entender Gnômico. Os componentes internos usados ​​na fabricação de um autognome podem variar muito; um autognomo pode ter um coração batendo de verdade em sua cavidade torácica, enquanto outro pode ser alimentado por poeira estelar ou engrenagens intrincadas de um relógio.",
        
        "Role na tabela de Histórico do Autognome ou escolha uma entrada que você goste para identificar qual evento o colocou no caminho da aventura. Se nada na mesa lhe agradar, trabalhe com seu Mestre para criar uma história de origem para seu personagem.",
        
        "Como os gnomos, os autognomos podem viver por séculos, normalmente até 500 anos."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Autominominomo.png"
    ],

    Controle_Visão: [
        "Normal."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "<strong>Construído para o Sucesso:</strong> Você pode adicionar um d4 a uma jogada de ataque, teste de habilidade ou teste de resistência que fizer, e pode fazê-lo depois de ver a jogada de d20 , mas antes que os efeitos da jogada sejam resolvidos. Você pode usar esta característica um número de vezes igual ao seu bônus de proficiência e recupera todos os usos gastos quando terminar um descanso longo."
    ],

    Extras_Idiomas: [
        "Comum."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Veneno."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Bugbear.
const Bugbear = {
    
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Escolha um dos seguintes: (a) Escolha qualquer +2; escolha qualquer outro +1 (b) Escolha qualquer +1; escolha qualquer outro +1; escolha qualquer outro +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Tipo de criatura:</strong> Você é um Humanóide. Você também é considerado um goblinóide para qualquer pré-requisito ou efeito que exija que você seja um goblinóide.",

    "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão apenas como tons de cinza.",

    "<strong>Ancestralidade Fey:</strong> Você tem vantagem nos testes de resistência que fizer para evitar ou acabar com a condição enfeitiçada em si mesmo.",

    "<strong>Membros Longos:</strong> Quando você faz um ataque corpo a corpo no seu turno, seu alcance é 1,5 metro maior que o normal.",

    "<strong>Construção Poderosa:</strong> Você conta como um tamanho maior ao determinar sua capacidade de carga e o peso que pode empurrar, arrastar ou levantar.",

    "<strong>Sorrateira:</strong> Você é proficiente na perícia Furtividade . Além disso, sem apertar, você pode se mover e parar em um espaço grande o suficiente para uma criatura Pequena.",

    "<strong>Ataque surpresa:</strong> Se você acertar uma criatura com uma jogada de ataque, a criatura sofre 2d6 de dano extra se ainda não tiver participado de um turno no combate atual.",

    "<strong>Línguas:</strong> Você pode falar, ler e escrever Comum e outro idioma que você e seu Mestre concordem ser apropriado para seu personagem."

    ],

    Info: [
        "Nem insetos nem ursos, os bugbears são os primos volumosos de goblins e hobgoblins. Com raízes em Feywild, os primeiros bugbears residiam em lugares escondidos, em espaços sombrios e de difícil acesso. Há muito tempo e do canto do olho, eles chegaram ao Plano Material, instados a se espalhar por todo o multiverso pelo deus conquistador Maglubiyet. Séculos depois, eles ainda carregam um dom feérico para espreitar fora de vista, e muitos deles fugiram da influência desse deus.",

        "Eles são longos de membros e cobertos de pêlos grossos, com orelhas em forma de cunha e dentes pontiagudos. Apesar de sua constituição formidável, os bugbears são calados, graças a uma magia feérica que lhes permite se esconder em espaços aparentemente pequenos demais para eles."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Bugbear.png"
    ],

    Controle_Visão: [
        "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão apenas como tons de cinza."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "<strong>Ataque surpresa:</strong> Se você acertar uma criatura com uma jogada de ataque, a criatura sofre 2d6 de dano extra se ainda não tiver participado de um turno no combate atual."
    ],

    Extras_Idiomas: [
        "Comum."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Veneno."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ],

    HAB_PF_Furtividade: true
}

//Objeto com as informações da raça: Centauro.
const Centauro = {
    
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> FOR +2; SAB +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 40 pés.",

    "<strong>Vida:</strong> Os centauros amadurecem e envelhecem aproximadamente na mesma proporção que os humanos.",

    "<strong>Alinhamento:</strong> Centauros são inclinados à neutralidade. Aqueles que se juntam aos Selesnya são mais frequentemente neutros e bons, enquanto aqueles que se juntam aos Gruul são tipicamente neutros caóticos.",

    "<strong>Tamanho:</strong> Centauros têm entre 6 e 7 pés de altura, com seus corpos equinos atingindo cerca de 4 pés na cernelha. Seu tamanho é Médio.",

    "<strong>Fey:</strong> Seu tipo de criatura é feérico, ao invés de humanoide.",

    "<strong>Carregar:</strong> Se você se mover pelo menos 9 metros em linha reta em direção a um alvo e, em seguida, acertá-lo com um ataque corpo a corpo com arma no mesmo turno, você pode imediatamente seguir esse ataque com uma ação bônus, fazendo um ataque contra o alvo com seus cascos.",

    "<strong>Cascos:</strong> Seus cascos são armas brancas naturais, que você pode usar para fazer ataques desarmados. Se você acertar com eles, você causa dano de concussão igual a 1d4 + seu modificador de Força, em vez do dano de concussão normal para um ataque desarmado.",

    "<strong>Construção Equina:</strong> Você conta como um tamanho maior ao determinar sua capacidade de carga e o peso que você pode empurrar ou arrastar.<br>Além disso, qualquer escalada que exija mãos e pés é especialmente difícil para você por causa de suas pernas eqüinas. Quando você faz tal escalada, cada pé de movimento custa 4 pés extras, em vez do normal 1 pé extra.",

    "<strong>Sobrevivente</strong> Você tem proficiência em uma das seguintes perícias à sua escolha: Adestrar Animais , Medicina , Natureza ou Sobrevivência.",

    "<strong>Línguas</strong> Você pode falar, ler e escrever Comum e Silvestre. Sylvan é amplamente falado no Selesnya Conclave, pois é rico em vocabulário para descrever fenômenos naturais e forças espirituais."

    ],

    Info: [
        "Na extensa cidade de Ravnica, onde \"estrada aberta\" parece uma contradição e \"planície aberta\" é pura bobagem, os centauros, no entanto, mantêm o amor por espaços amplos e a liberdade de viajar. Tanto quanto podem, os centauros correm – em praças amplas, parques espaçosos e extensões de escombros e ruínas. Eles correm contra o vento, cascos trovejando e caudas voando atrás deles, até que a próxima parede aparece em seu caminho e os faz parar.",

        "<strong>Cavalaria da Natureza:</strong> Centauros têm a parte superior do corpo, até a cintura, de humanos musculosos, exibindo toda a variedade humana de tons de pele e características. Suas orelhas são ligeiramente pontudas, mas seus rostos são mais largos e quadrados do que os dos elfos. Abaixo da cintura, eles têm o corpo de pequenos cavalos, com uma gama semelhante de coloração - de vários tons de castanho ou louro a padrões listrados ou mesmo zebrados. A maioria dos centauros estiliza seus cabelos e caudas de maneira semelhante. Centauros Selesnya preferem cabelos longos e esvoaçantes. Centauros Gruul cortam seus cabelos em estilos ásperos e espetados.<br>Os corpos superiores dos centauros são comparáveis aos torsos humanos em tamanho, e seus corpos equinos inferiores têm cerca de 4 pés de altura na cernelha. Embora sejam menores do que um cavaleiro humano montado em um cavalo, eles desempenham papéis semelhantes como guerreiros de cavalaria, mensageiros, batedores e batedores.",

        "<strong>Afinidade pela Natureza:</strong> Centauros têm uma afinidade com o mundo natural. Entre as guildas que compartilham essa afinidade, os centauros preferem os cinturões de escombros dos Clãs Gruul e as amplas praças do Selesnya Conclave sobre os túneis subterrâneos dos Golgari e os laboratórios dos Simic.<br>Os centauros celebram a vida e o crescimento, e o nascimento de um potro é sempre motivo de festa. Ao mesmo tempo, eles reverenciam as tradições do passado, e entre os Gruul e os Selesnya são vozes da memória e da história, preservando os velhos costumes e mantendo vivas as lendas dos heróis ancestrais. Eles sentem um parentesco próximo com animais selvagens, talvez por causa de seus próprios corpos semelhantes a cavalos, e se deliciam com a sensação de correr ao lado de rebanhos e matilhas de outros animais.",

        "<strong>Clãs e Comunidade:</strong> Centauros sentem a interconexão do mundo natural. Assim, eles celebram a família e a comunidade como microcosmos dessa conexão maior. Entre os Gruul, eles têm uma forte identidade de clã, e os centauros Selesnya são ferozmente leais às suas comunidades individuais, bem como à guilda como um todo. Seu amor pela história e tradição também significa que os centauros são mais propensos do que a maioria dos outros ravnicanos a se juntarem à mesma guilda que seus pais.",
        
        "<strong>Nomes de Centauros.</strong> Os nomes próprios dos centauros são transmitidos através de linhas familiares. O nome dado a um novo potro é tipicamente o nome do membro da família falecido mais recentemente do mesmo sexo, mantendo viva a memória – e, os centauros acreditam, algum fragmento do espírito – do falecido. Os centauros não usam nomes de família, mas usam símbolos que representam sua pertença à família. Esses símbolos podem incluir representações gráficas de plantas ou animais, lemas impressos, tranças e contas usadas no cabelo e cauda, ou mesmo padrões específicos de tecido."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Centauro.png"
    ],

    Controle_Visão: [
        "Normal."
    ],

    Controle_Movimentação: [
        "Caminhada 40 pés."
    ],

    Extras_Ações: [
        "<strong>Carregar:</strong> Se você se mover pelo menos 9 metros em linha reta em direção a um alvo e, em seguida, acertá-lo com um ataque corpo a corpo com arma no mesmo turno, você pode imediatamente seguir esse ataque com uma ação bônus, fazendo um ataque contra o alvo com seus cascos.",

        "<strong>Cascos:</strong> Seus cascos são armas brancas naturais, que você pode usar para fazer ataques desarmados. Se você acertar com eles, você causa dano de concussão igual a 1d4 + seu modificador de Força, em vez do dano de concussão normal para um ataque desarmado."
    ],

    Extras_Idiomas: [
        "Comum.",
        "Silvestre."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Changeling.
const Changeling = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Escolha um dos seguintes: (a) Escolha qualquer +2; escolha qualquer outro +1 (b) Escolha qualquer +1; escolha qualquer outro +1; escolha qualquer outro +1",
    "<strong>Tamanho:</strong> Pequeno ou Médio",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Tipo de criatura. Você é um Fey.",

    "<strong>Tamanho:</strong> Você é Médio ou Pequeno. Você escolhe o tamanho ao selecionar esta raça.",

    "<strong>Instintos Mutantes:</strong> Graças à sua conexão com o reino das fadas, você ganha proficiência com duas das seguintes habilidades de sua escolha: Enganação , Intuição , Intimidação , Atuação ou Persuasão.",

    "<strong>Metamorfo:</strong> Como uma ação, você muda sua aparência e sua voz. Você determina as especificidades das mudanças, incluindo sua coloração, comprimento do cabelo e sexo. Você também pode ajustar sua altura entre Médio e Pequeno. Você pode se fazer parecer como um membro de outra raça, embora nenhuma de suas estatísticas de jogo mude. Você não pode duplicar a aparência de um indivíduo que nunca viu e deve adotar uma forma que tenha o mesmo arranjo básico de membros que você tem. Suas roupas e equipamentos não são alterados por esta característica.<br>Você permanece na nova forma até usar uma ação para reverter à sua forma verdadeira ou até morrer.",

    "<strong>Línguas:</strong> Você pode falar, ler e escrever Comum e outro idioma que você e seu Mestre concordem ser apropriado para seu personagem."

    ],

    Info: [
        "Com aparências em constante mudança, os changelings residem em muitas sociedades sem serem detectados. Cada changeling pode adotar sobrenaturalmente qualquer rosto que quiser. Para alguns changelings, um novo rosto é apenas um disfarce. Para outros changelings, um novo rosto pode revelar um aspecto de sua alma.",

        "Os primeiros changelings no multiverso apareceram em Feywild, e a essência maravilhosa e mutável daquele plano permanece nos changelings hoje – mesmo naqueles changelings que nunca pisaram no reino das fadas. Cada changeling decide como usar sua habilidade de mudar de forma, canalizando o perigo ou a alegria da Fada. Às vezes eles adotam novas formas por causa da malícia ou malícia, e outras vezes eles assumem uma nova identidade para corrigir erros ou deleitar os oprimidos.",

        "Em sua verdadeira forma, os changelings parecem desbotados, suas feições quase desprovidas de detalhes. É raro ver um changeling nessa forma, pois um changeling típico muda de forma da mesma forma que outros podem trocar de roupa. Uma forma casual – criada no calor do momento, sem profundidade ou história – é chamada de máscara. Uma máscara pode ser usada para expressar um estado de espírito ou para servir a um propósito específico e depois pode nunca mais ser usada. No entanto, muitos changelings desenvolvem identidades mais profundas, criando personalidades completas com histórias e crenças. Um aventureiro changeling pode ter personalidades para muitas situações, incluindo negociação, investigação e combate.",

        "Personas podem ser compartilhados por vários changelings; uma comunidade pode ser o lar de três changelings curadores, com quem estiver de plantão adotando a persona de Andrea, a médica gentil. Personas podem até ser passados ​​através de uma família, permitindo que um changeling mais jovem aproveite os contatos estabelecidos pelos usuários anteriores da persona."
    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Changeling.png"
    ],

    Controle_Visão: [
        "Normal."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "<strong>Metamorfo:</strong> Como uma ação, você muda sua aparência e sua voz. Você determina as especificidades das mudanças, incluindo sua coloração, comprimento do cabelo e sexo. Você também pode ajustar sua altura entre Médio e Pequeno. Você pode se fazer parecer como um membro de outra raça, embora nenhuma de suas estatísticas de jogo mude. Você não pode duplicar a aparência de um indivíduo que nunca viu e deve adotar uma forma que tenha o mesmo arranjo básico de membros que você tem. Suas roupas e equipamentos não são alterados por esta característica.<br>Você permanece na nova forma até usar uma ação para reverter à sua forma verdadeira ou até morrer."
    ],

    Extras_Idiomas: [
        "Comum."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Dhampir.
const Dhampir = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> Escolha um dos seguintes: (a) Escolha qualquer +2; escolha qualquer outro +1 (b) Escolha qualquer +1; escolha qualquer outro +1; escolha qualquer outro +1",
    "<strong>Tamanho:</strong> Pequeno ou Médio",
    "<strong>Velocidade:</strong> 35 pés, escalada igual à sua velocidade de caminhada.",

    "<strong>Tamanho:</strong> Você é Médio ou Pequeno. Você escolhe o tamanho quando ganha esta linhagem.",
    
    "<strong>Legado Ancestral:</strong> Se você substituir uma raça por esta linhagem, você pode manter os seguintes elementos dessa raça: quaisquer proficiências em perícias que você ganhou com ela e qualquer velocidade de escalada, voo ou natação que você ganhou com ela.<br>Se você não mantiver nenhum desses elementos ou escolher essa linhagem na criação do personagem, você ganha proficiência em duas perícias de sua escolha.",

    "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão como tons de cinza.",
    
    "<strong>Natureza Imortal:</strong> Você não precisa respirar.",
    
    "<strong>Escalada de Aranha:</strong> Você tem um deslocamento de escalada igual ao seu deslocamento de caminhada. Além disso, no 3º nível, você pode se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo ao longo do teto, deixando as mãos livres.",
    
    "<strong>Mordida Vampírica:</strong> Sua mordida com presas é uma arma natural, que conta como uma arma corpo a corpo simples com a qual você é proficiente. Você adiciona seu modificador de Constituição, em vez de seu modificador de Força, às jogadas de ataque e dano ao atacar com esta mordida. Ele causa 1d4 de dano perfurante em um acerto. Enquanto você estiver perdendo metade ou mais de seus pontos de vida, você tem vantagem nas jogadas de ataque que fizer com esta mordida.<br>Quando você ataca com esta mordida e atinge uma criatura que não seja um Constructo ou um Morto-vivo, você pode se fortalecer de uma das seguintes formas de sua escolha:<br><ul><li>Você recupera pontos de vida iguais ao dano perfurante causado pela mordida.</li><li>Você ganha um bônus para o próximo teste de habilidade ou jogada de ataque que fizer; o bônus é igual ao dano perfurante causado pela mordida.</li></ul>Você pode se fortalecer com esta mordida um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos gastos quando terminar um descanso longo.",

    "<strong>Línguas:</strong> Você pode falar, ler e escrever Comum e outro idioma que você e seu Mestre concordem ser apropriado para seu personagem."

    ],

    Info: [
        "Posicionados entre os mundos dos vivos e dos mortos, os dhampirs mantêm seu controle sobre a vida, mas são testados infinitamente por fomes cruéis. Seus laços com os mortos-vivos concedem aos dhampirs um gostinho da destreza imortal de um vampiro na forma de velocidade aumentada, visão no escuro e uma mordida que drena a vida.",

        "Com insights únicos sobre a natureza dos mortos-vivos, muitos dhampirs se tornam aventureiros e caçadores de monstros. Suas razões são muitas vezes profundamente pessoais. Alguns procuram o perigo, imaginando monstros como personificações de suas próprias fomes. Outros buscam vingança contra o que os transformou em dhampir. E outros ainda abraçam a solidão da caça, esforçando-se para se distanciar daqueles que tentariam sua fome."

    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Dhampir.png"
    ],

    Controle_Visão: [
        "<strong>Visão no escuro:</strong> Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante e na escuridão como se fosse luz fraca. Você discerne cores nessa escuridão como tons de cinza."
    ],

    Controle_Movimentação: [
        "Caminhada 35 pés.",
        "Escalada 35 pés."
    ],

    Extras_Ações: [
        "<strong>Mordida Vampírica:</strong> Sua mordida com presas é uma arma natural, que conta como uma arma corpo a corpo simples com a qual você é proficiente. Você adiciona seu modificador de Constituição, em vez de seu modificador de Força, às jogadas de ataque e dano ao atacar com esta mordida. Ele causa 1d4 de dano perfurante em um acerto. Enquanto você estiver perdendo metade ou mais de seus pontos de vida, você tem vantagem nas jogadas de ataque que fizer com esta mordida.<br>Quando você ataca com esta mordida e atinge uma criatura que não seja um Constructo ou um Morto-vivo, você pode se fortalecer de uma das seguintes formas de sua escolha:<br><ul><li>Você recupera pontos de vida iguais ao dano perfurante causado pela mordida.</li><li>Você ganha um bônus para o próximo teste de habilidade ou jogada de ataque que fizer; o bônus é igual ao dano perfurante causado pela mordida.</li></ul>Você pode se fortalecer com esta mordida um número de vezes igual ao seu bônus de proficiência, e você recupera todos os usos gastos quando terminar um descanso longo."
    ],

    Extras_Idiomas: [
        "Comum."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

//Objeto com as informações da raça: Dragonborn.
const Dragonborn = {
    Extras_TraçosRaciais: [
    "<strong>Valores de Habilidade:</strong> FOR +2; CAR +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 30 pés",

    "<strong>Vida:</strong> Os jovens draconatos crescem rapidamente. Eles andam horas após a eclosão, atingem o tamanho e o desenvolvimento de uma criança humana de 10 anos aos 3 anos de idade e atingem a idade adulta aos 15. Eles vivem cerca de 80 anos.",

    "<strong>Tamanho:</strong> Dragonborn são mais altos e mais pesados que os humanos, com mais de 1,80m de altura e pesando em média quase 250 libras. Seu tamanho é Médio.",

    "<strong>Ancestralidade Dracônica:</strong> Você tem ascendência dracônica. Escolha um tipo de dragão da tabela Ancestralidade Dracônica. Seu sopro e resistência a dano são determinados pelo tipo de dragão, conforme mostrado na tabela.",

    "<h5>Ancestralidade Dracônica</h5>",
    
    "<table class=\"listrada\"><thead><tr><th>Dragão</th><th>Tipo de dano</th><th>Sopro</th></tr></thead><tbody><tr><td>Preto</td><td>Ácido</td><td>Linha de 5 por 30 pés (Salvaguarda de Destreza)</td></tr><tr><td>Azul</td><td>Elétrico</td><td>Linha de 5 por 30 pés (Salvaguarda de Destreza)</td></tr><tr><td>Latão</td><td>Fogo</td><td>Linha de 5 por 30 pés (Salvaguarda de Destreza)</td></tr><tr><td>Bronze</td><td>Elétrico</td><td>Linha de 5 por 30 pés (Salvaguarda de Destreza)</td></tr><tr><td>Cobre</td><td>Ácido</td><td>Linha de 5 por 30 pés (Salvaguarda de Destreza</td></tr><tr><td>Ouro</td><td>Fogo</td><td>Cone de 15 pés (Salvaguarda de Destreza)</td></tr><tr><td>Verde</td><td>Venenoso</td><td>Cone de 15 pés (Salvaguarda de Constituição</td></tr><tr><td>Vermelho</td><td>Fogo</td><td>one de 15 pés (Salvaguarda de Destreza)</td></tr><tr><td>Prata</td><td>Frio</td><td>one de 15 pés (Salvaguarda de Constituição)</td></tr><tr><td>Branco</td><td>Frio</td><td>one de 15 pés (Salvaguarda de Constituição)</td></tr></tbody></table>",

    "<strong>Arma de Sopro:</strong> Você pode usar sua ação para exalar energia destrutiva. Sua ascendência dracônica determina o tamanho, forma e tipo de dano da expiração.<br>Quando você usa seu sopro, cada criatura na área da exalação deve fazer um teste de resistência, cujo tipo é determinado por sua ancestralidade dracônica. A CD para este teste de resistência é igual a 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano se falhar na resistência e metade desse dano se obtiver sucesso. O dano aumenta para 3d6 no 6º nível, 4d6 no 11º nível e 5d6 no 16º nível.<br>Depois de usar seu sopro, você não pode usá-lo novamente até completar um descanso curto ou longo.",

    "<strong>Resistência a danos:</strong> Você tem resistência ao tipo de dano associado à sua ancestralidade dracônica.",
    
    "<strong>Línguas:</strong> Você pode falar, ler e escrever Comum e Dracônico. O dracônico é considerado uma das línguas mais antigas e é frequentemente usado no estudo da magia. A linguagem soa dura para a maioria das outras criaturas e inclui numerosas consoantes e sibilantes duras."

    ],

    Info: [
        "Nascidos de dragões, como seu nome proclama, os draconatos caminham orgulhosamente por um mundo que os recebe com uma incompreensão temerosa. Moldados por deuses dracônicos ou pelos próprios dragões, os draconatos originalmente nasceram de ovos de dragão como uma raça única, combinando os melhores atributos de dragões e humanóides. Alguns draconatos são servos fiéis de dragões verdadeiros, outros formam as fileiras de soldados em grandes guerras, e outros ainda se encontram à deriva, sem um chamado claro na vida.",

        "<h5>Parentes do Dragão Orgulhosos</h5>",

        "Dragonborn se parecem muito com dragões eretos em forma humanóide, embora não tenham asas ou cauda. Os primeiros draconatos tinham escamas de tons vibrantes combinando com as cores de seus parentes dragões, mas gerações de cruzamentos criaram uma aparência mais uniforme. Suas escamas pequenas e finas são geralmente de latão ou bronze, às vezes variando de escarlate, ferrugem, ouro ou verde-cobre. Eles são altos e fortemente construídos, muitas vezes com cerca de 6 ½ pés de altura e pesando 300 libras ou mais. Suas mãos e pés são garras pungentes, semelhantes a garras, com três dedos e um polegar em cada mão.",
        
        "O sangue de um tipo particular de dragão corre muito forte em alguns clãs draconatos. Esses draconatos geralmente possuem escamas que combinam mais com as de seu ancestral dragão - vermelho brilhante, verde, azul ou branco, preto brilhante ou metálico brilhante como ouro, prata, latão, cobre ou bronze.",
        
        "<h5>Clãs Autossuficientes</h5>",
        
        "Para qualquer draconato, o clã é mais importante que a própria vida. Dragonborn deve sua devoção e respeito ao seu clã acima de tudo, até mesmo os deuses. A conduta de cada draconato reflete na honra de seu clã, e trazer desonra ao clã pode resultar em expulsão e exílio. Cada draconato conhece sua posição e deveres dentro do clã, e a honra exige manter os limites dessa posição.",
        
        "Um impulso contínuo para o auto-aperfeiçoamento reflete a auto-suficiência da raça como um todo. Dragonborn valoriza a habilidade e a excelência em todos os empreendimentos. Eles odeiam falhar e se esforçam ao máximo antes de desistir de algo. Um draconato detém o domínio dessa habilidade em particular como um objetivo de vida. Membros de outras raças que compartilham o mesmo compromisso acham fácil ganhar o respeito de um draconato.",
        
        "Embora todos os draconatos se esforcem para serem autossuficientes, eles reconhecem que a ajuda às vezes é necessária em situações difíceis. Mas a melhor fonte para tal ajuda é o clã, e quando um cliente precisa de ajuda, ele recorre a outro clã draconato antes de buscar ajuda de outras raças ou mesmo dos deuses."

    ],
    
    Imagem: [
        "../ASSETS/IMAGENS/RAÇAS/Dragonborn.png"
    ],

    Controle_Visão: [
        "Normal."
    ],

    Controle_Movimentação: [
        "Caminhada 30 pés."
    ],

    Extras_Ações: [
        "<strong>Arma de Sopro:</strong> Você pode usar sua ação para exalar energia destrutiva. Sua ascendência dracônica determina o tamanho, forma e tipo de dano da expiração.<br>Quando você usa seu sopro, cada criatura na área da exalação deve fazer um teste de resistência, cujo tipo é determinado por sua ancestralidade dracônica. A CD para este teste de resistência é igual a 8 + seu modificador de Constituição + seu bônus de proficiência. Uma criatura sofre 2d6 de dano se falhar na resistência e metade desse dano se obtiver sucesso. O dano aumenta para 3d6 no 6º nível, 4d6 no 11º nível e 5d6 no 16º nível.<br>Depois de usar seu sopro, você não pode usá-lo novamente até completar um descanso curto ou longo."
    ],

    Extras_Idiomas: [
        "Comum.",
        "Dracônico."
    ],

    Extras_Proeficiências: [
        "Nenhuma."
    ],

    Extras_Resistências: [
        "Nenhuma."
    ],

    Magias_0C: [
        "Nenhuma."
    ],

    Magias_1C: [
        "Nenhuma."
    ],

    Magias_2C: [
        "Nenhuma."
    ],

    Magias_3C: [
        "Nenhuma."
    ],

    Magias_4C: [
        "Nenhuma."
    ],

    Magias_5C: [
        "Nenhuma."
    ],

    Magias_6C: [
        "Nenhuma."
    ],

    Magias_7C: [
        "Nenhuma."
    ],

    Magias_8C: [
        "Nenhuma."
    ],

    Magias_9C: [
        "Nenhuma."
    ]
}

/* FUNÇÕES PARA CONTROLE DE TELA ----------------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

// Eventos de cada botão de aba, enviando como "atual" a aba clicada:
element_Traço.addEventListener("click", function(){abaTraço("Traços")});
element_Historia.addEventListener("click", function(){abaHistoria("História")});
element_Imagem.addEventListener("click", function(){abaImagem("Imagem")});

//Função para executar o conteúdo de Traços da raça atual:
function abaTraço(atual){
    aba = atual;
    atualRaça = chamaRaça;
    element_Traço.classList.add("abaSelecionada");
    element_Historia.classList.remove("abaSelecionada");
    element_Imagem.classList.remove("abaSelecionada");
    escreveRaça();
}

//Função para executar o conteúdo de História da raça atual:
function abaHistoria(atual){
    aba = atual;
    element_Traço.classList.remove("abaSelecionada");
    element_Historia.classList.add("abaSelecionada");
    element_Imagem.classList.remove("abaSelecionada");
    escreveRaça();
}

//Função para executar o conteúdo de Imagem da raça atual:
function abaImagem(atual){
    aba = atual;
    element_Traço.classList.remove("abaSelecionada");
    element_Historia.classList.remove("abaSelecionada");
    element_Imagem.classList.add("abaSelecionada");
    escreveRaça();
}

//Escreve a raça selecionada no HTML via variavel enviada pelas as funções de cada raça:
function escreveRaça() {
    switch (chamaRaça) {
        case "Aarakocra":
            Escreve_Aarakocra();
        break;
        case "Aasimar":
            Escreve_Aasimar();
        break;
        case "AstralElf":
            Escreve_AstralElf();
        break;
        case "Autominominomo":
            Escreve_Autominominomo();
        break;
        case "Bugbear":
            Escreve_Bugbear();
        break;
        case "Centauro":
            Escreve_Centauro();
        break;
        case "Changeling":
            Escreve_Changeling();
        break;
        case "Dhampir":
            Escreve_Dhampir();
        break;
        case "Dragonborn":
            Escreve_Dragonborn();
        break;
    }
}

//Função para escrever na tela usando o valor da raça (função) clicada. O "item" refere-se a string em questão e o "i" sempre será igual a 0, assim podemos pular uma linha após a terceira vez que a função é executada:
function escreve(item, i) {
    i++;
    document.getElementById("escreveRaça").innerHTML += item + "<br>";
    if(i == 3){        
        let x = document.getElementById("escreveRaça").innerHTML += "<br>";        
    }
}

//Limpa a area usada para escrever as informações das raças:
function apagaConteudo(){
    document.getElementById("escreveRaça").innerHTML = "";
}

/* FUNÇÕES PARA SALVAR --------------------------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

function salvarFicha() {
    element_msg.innerHTML = "Deseja salvar e continuar?"
    elementModal_yesNo.classList.add("modalOn");

    let yes = document.getElementById("yes");
    let no = document.getElementById("no");

    yes.addEventListener("click", saveAtributo);
    no.addEventListener("click", fecha);

    function saveAtributo(){
        thisFicha.ATR_01_FOR = totalAtributo.FOR;
        thisFicha.ATR_02_DES = totalAtributo.DES;
        thisFicha.ATR_03_CON = totalAtributo.CON;
        thisFicha.ATR_04_INT = totalAtributo.INT;
        thisFicha.ATR_05_SAB = totalAtributo.SAB;
        thisFicha.ATR_06_CAR = totalAtributo.CAR;

        switch (chamaRaça) {
            case "Aarakocra":
                case_Aarakocra();
            break;
            case "Aasimar":
                case_Aasimar();
            break;
            case "AstralElf":
                case_AstralElf();
            break;
            case "Autominominomo":
                case_Autominominomo();
            break;
            case "Bugbear":
                case_Bugbear();
            break;
            case "Centauro":
                case_Centauro();
            break;
            case "Changeling":
                case_Changeling();
            break;
            case "Dhampir":
                case_Dhampir();
            break;
            case "Dragonborn":
                case_Dragonborn();
            break;
        }
        
        //localStorage.setItem('teste', JSON.stringify(thisFicha));
        //elementModal_yesNo.classList.remove("modalOn");
    }

    function fecha(){
        elementModal_yesNo.classList.remove("modalOn");
    }
}

/*function RegraTasha() {

    element_msg.innerHTML = "Deseja salvar e continuar?"
    elementModal_yesNo.classList.add("modalOn");

    let yes = document.getElementById("yes");
    let no = document.getElementById("no");

    yes.addEventListener("click", saveAtributo);
    no.addEventListener("click", fecha);

}*/

/* FUNÇÕES PARA ESCREVER AS RAÇAS ---------------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

//Função com todas as informações da raça: Aarakocra.
function Escreve_Aarakocra() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Aarakocra)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Aarakocra);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Aarakocra";
            window.localStorage.setItem("Salvo", objValue);
        break;
        case "História":
            var objValue = Object.values(Aarakocra)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Aarakocra";
        break;
        case "Imagem":
            var objValue = Object.values(Aarakocra)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Aarakocra";
        break;
    }

    totalAtributo_reset();
    desligaAtributos()
    stateAtribute();
    escreveAtributo();
    state_DES = true;
    state_SAB = true;

    document.getElementById("moreDES").classList.remove("off");
    document.getElementById("moreSAB").classList.remove("off");
    document.getElementById("lessDES").classList.remove("off");
    document.getElementById("lessSAB").classList.remove("off");

    chamaRaça = "Aarakocra";
}

function Case_Aarakocra() {
    RegraTasha();
}

//Função com todas as informações da raça: Aasimar.
function Escreve_Aasimar() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Aasimar)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Aasimar);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Aasimar";
        break;
        case "História":
            var objValue = Object.values(Aasimar)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Aasimar";
        break;
        case "Imagem":
            var objValue = Object.values(Aasimar)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Aasimar";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_SAB = true;
    state_CAR = true;

    document.getElementById("moreCAR").classList.remove("off");
    document.getElementById("moreSAB").classList.remove("off");
    document.getElementById("lessCAR").classList.remove("off");
    document.getElementById("lessSAB").classList.remove("off");

    chamaRaça = "Aasimar";
}

function Case_Aasimar() {

}

//Função com todas as informações da raça: AstralElf.
function Escreve_AstralElf() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(AstralElf)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, AstralElf);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Astral Elf";
        break;
        case "História":
            var objValue = Object.values(AstralElf)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Astral Elf";
        break;
        case "Imagem":
            var objValue = Object.values(AstralElf)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Astral Elf";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_DES = true;
    state_CON = true;
    state_INT = true;
    state_SAB = true;
    state_CAR = true;

    desligaAtributos();
    ligaAtributos();

    chamaRaça = "AstralElf";
}

function case_AstralElf() {

    element_msg.innerHTML = "Qual truque deseja conhecer?"
    elementModal_yesNo.classList.add("modalOn");

    let HiddeBttnY = document.getElementById("yes");
    let HiddeBttnN = document.getElementById("no");
    HiddeBttnY.style.display = "none";
    HiddeBttnN.style.display = "none";

    let btn_01 = document.createElement('button');
    let btn_02 = document.createElement('button');
    let btn_03 = document.createElement('button');
    
    btn_01.innerHTML = "Chama Sagrada";
    btn_01.className = "button_white";
    btn_02.innerHTML = "Luz";
    btn_02.className = "button_white";
    btn_03.innerHTML = "Luzes Dançantes";
    btn_03.className = "button_white";

    var lbl = document.getElementById("escolha");
    
    lbl.appendChild(btn_01);
    lbl.appendChild(btn_02);
    lbl.appendChild(btn_03);

    btn_01.onclick = function(){AE_MG0_01()};
    btn_02.onclick = function(){AE_MG0_02()};
    btn_03.onclick = function(){AE_MG0_03()};

    function AE_MG0_01() {
        AstralElf.Magias_0C = "Chama Sagrada";
        elementModal_yesNo.classList.remove("modalOn");

        for (let value of Object.values(raçaSelecionada)){
            thisFicha.Extras_TraçosRaciais += `${value}<br>`;
        }
    }

    function AE_MG0_02() {
        AstralElf.Magias_0C = "Luz";
        elementModal_yesNo.classList.remove("modalOn");

        for (let value of Object.values(raçaSelecionada)){
            thisFicha.Extras_TraçosRaciais += `${value}<br>`;
        }
    }

    function AE_MG0_03() {
        raçaSelecionada.Magias_0C = "Luzes Dançantes";
        elementModal_yesNo.classList.remove("modalOn");

        for (let value of Object.values(raçaSelecionada)){
            thisFicha.Extras_TraçosRaciais += `${value}<br>`;
        }
        
        console.log(thisFicha);
    }

}

//Função com todas as informações da raça: Autominominomo.
function Escreve_Autominominomo() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Autominominomo)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Autominominomo);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Autominominomo";
        break;
        case "História":
            var objValue = Object.values(Autominominomo)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Autominominomo";
        break;
        case "Imagem":
            var objValue = Object.values(Autominominomo)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Autominominomo";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_DES = true;
    state_CON = true;
    state_INT = true;
    state_SAB = true;
    state_CAR = true;

    desligaAtributos();
    ligaAtributos();

    chamaRaça = "Autominominomo";
}

//Função com todas as informações da raça: Bugbear.
function Escreve_Bugbear() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Bugbear)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Bugbear);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Bugbear";
        break;
        case "História":
            var objValue = Object.values(Bugbear)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Bugbear";
        break;
        case "Imagem":
            var objValue = Object.values(Bugbear)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Bugbear";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_DES = true;
    state_CON = true;
    state_INT = true;
    state_SAB = true;
    state_CAR = true;

    desligaAtributos();
    ligaAtributos();

    chamaRaça = "Bugbear";
}

//Função com todas as informações da raça: Centauro.
function Escreve_Centauro() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Centauro)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Centauro);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Centauro";
            window.localStorage.setItem("Salvo", objValue);
        break;
        case "História":
            var objValue = Object.values(Centauro)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Centauro";
        break;
        case "Imagem":
            var objValue = Object.values(Centauro)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Centauro";
        break;
    }

    totalAtributo_reset();
    desligaAtributos()
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_SAB = true;

    document.getElementById("moreFOR").classList.remove("off");
    document.getElementById("moreSAB").classList.remove("off");
    document.getElementById("lessFOR").classList.remove("off");
    document.getElementById("lessSAB").classList.remove("off");

    chamaRaça = "Centauro";
}

//Função com todas as informações da raça: Changeling.
function Escreve_Changeling() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Changeling)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Changeling);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Changeling";
        break;
        case "História":
            var objValue = Object.values(Changeling)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Changeling";
        break;
        case "Imagem":
            var objValue = Object.values(Changeling)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Changeling";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_DES = true;
    state_CON = true;
    state_INT = true;
    state_SAB = true;
    state_CAR = true;

    desligaAtributos();
    ligaAtributos();

    chamaRaça = "Changeling";
}

//Função com todas as informações da raça: Dhampir.
function Escreve_Dhampir() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Dhampir)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Dhampir);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Dhampir";
        break;
        case "História":
            var objValue = Object.values(Dhampir)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Dhampir";
        break;
        case "Imagem":
            var objValue = Object.values(Dhampir)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Dhampir";
        break; 
    }

    totalAtributo_reset();
    desligaAtributos();
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_DES = true;
    state_CON = true;
    state_INT = true;
    state_SAB = true;
    state_CAR = true;

    desligaAtributos();
    ligaAtributos();

    chamaRaça = "Dhampir";
}

//Função com todas as informações da raça: Dragonborn.
function Escreve_Dragonborn() {
    raçaSelecionada = {};
    apagaConteudo();

    switch (aba) {
        case "Traços":
            var objValue = Object.values(Dragonborn)[0]
            raçaSelecionada = {Extras_TraçosRaciais: ""};
            objValue.forEach(escreve, 0);
            raçaSelecionada = Object.assign(thisFicha, Dragonborn);
            delete raçaSelecionada.Imagem;
            document.getElementById("nameRaça").innerHTML = "Dragonborn";
            window.localStorage.setItem("Salvo", objValue);
        break;
        case "História":
            var objValue = Object.values(Dragonborn)[1]
            objValue.forEach(escreve, 0);
            document.getElementById("nameRaça").innerHTML = "Dragonborn";
        break;
        case "Imagem":
            var objValue = Object.values(Dragonborn)[2]
            document.getElementById("escreveRaça").innerHTML = `<img src='${objValue}'>`;
            document.getElementById("nameRaça").innerHTML = "Dragonborn";
        break;
    }

    totalAtributo_reset();
    desligaAtributos()
    stateAtribute();
    escreveAtributo();
    state_FOR = true;
    state_CAR = true;

    document.getElementById("moreFOR").classList.remove("off");
    document.getElementById("moreCAR").classList.remove("off");
    document.getElementById("lessFOR").classList.remove("off");
    document.getElementById("lessCAR").classList.remove("off");

    chamaRaça = "Dragonborn";
}

/* FUNÇÕES PARA CONTROLAR A CALCULADORA ---------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

function stateAtribute() {
    state_FOR = false;
    state_DES = false;
    state_CON = false;
    state_INT = false;
    state_SAB = false;
    state_CAR = false;
}

function moreFOR(){
    if(state_FOR == true && totalAtributo.T < 3 && pointAtributo.FOR < 2){
        pointAtributo.FOR++;
        totalAtributo.FOR++;
        totalAtributo.T++;
        escreveAtributo();
    }
}

function lessFOR(){
    if(state_FOR == true && totalAtributo.FOR > thisFicha.ATR_01_FOR){
        pointAtributo.FOR--;
        totalAtributo.FOR--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

function moreDES(){
    if(state_DES == true && totalAtributo.T < 3 && pointAtributo.DES < 2){
        pointAtributo.DES++;
        totalAtributo.DES++;
        totalAtributo.T++;
        escreveAtributo();
    }
}

function lessDES(){
    if(state_DES == true && totalAtributo.DES > thisFicha.ATR_02_DES){
        pointAtributo.DES--;
        totalAtributo.DES--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

function moreCON(){
    if(state_CON == true && totalAtributo.T < 3 && pointAtributo.CON < 2){
        pointAtributo.CON++;
        totalAtributo.CON++;
        totalAtributo.T++;
        escreveAtributo();  
    }
}

function lessCON(){
    if(state_CON == true && totalAtributo.CON > thisFicha.ATR_03_CON){
        pointAtributo.CON--;
        totalAtributo.CON--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

function moreINT(){
    if(state_INT == true && totalAtributo.T < 3 && pointAtributo.INT < 2){
        pointAtributo.INT++;
        totalAtributo.INT++;
        totalAtributo.T++;
        escreveAtributo();
    }
}

function lessINT(){
    if(state_INT == true && totalAtributo.INT > thisFicha.ATR_04_INT){
        pointAtributo.INT--;
        totalAtributo.INT--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

function moreSAB(){
    if(state_SAB == true && totalAtributo.T < 3 && pointAtributo.SAB < 2){
        pointAtributo.SAB++;
        totalAtributo.SAB++;
        totalAtributo.T++;
        escreveAtributo();
    }
}

function lessSAB(){
    if(state_SAB == true && totalAtributo.SAB > thisFicha.ATR_05_SAB){
        pointAtributo.SAB--;
        totalAtributo.SAB--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

function moreCAR(){
    if(state_CAR == true && totalAtributo.T < 3 && pointAtributo.CAR < 2){
        pointAtributo.CAR++;
        totalAtributo.CAR++;
        totalAtributo.T++;
        escreveAtributo();
    }
}

function lessCAR(){
    if(state_CAR == true && totalAtributo.CAR > thisFicha.ATR_06_CAR){
        pointAtributo.CAR--;
        totalAtributo.CAR--;
        totalAtributo.T--;
        escreveAtributo();
    }
}

//Inicializa os atributos referente a "thisFicha":
function escreveAtributo(){
    element_txtFOR.innerHTML = totalAtributo.FOR;
    element_txtDES.innerHTML = totalAtributo.DES;
    element_txtCON.innerHTML = totalAtributo.CON;
    element_txtINT.innerHTML = totalAtributo.INT;
    element_txtSAB.innerHTML = totalAtributo.SAB;
    element_txtCAR.innerHTML = totalAtributo.CAR;
}

//Remseta todos os valores da calculadora para os da ficha em questão:
function totalAtributo_reset(){
    totalAtributo.T = 0;
    totalAtributo.FOR = thisFicha.ATR_01_FOR;
    totalAtributo.DES = thisFicha.ATR_02_DES;
    totalAtributo.CON = thisFicha.ATR_03_CON;
    totalAtributo.INT = thisFicha.ATR_04_INT;
    totalAtributo.SAB = thisFicha.ATR_05_SAB;
    totalAtributo.CAR = thisFicha.ATR_06_CAR;
}

//Remove a classe dos botões da calculadora de atributos:
function desligaAtributos(){
    document.getElementById("moreFOR").classList.add("off");
    document.getElementById("moreDES").classList.add("off");
    document.getElementById("moreCON").classList.add("off");
    document.getElementById("moreINT").classList.add("off");
    document.getElementById("moreSAB").classList.add("off");
    document.getElementById("moreCAR").classList.add("off");

    document.getElementById("lessFOR").classList.add("off");
    document.getElementById("lessDES").classList.add("off");
    document.getElementById("lessCON").classList.add("off");
    document.getElementById("lessINT").classList.add("off");
    document.getElementById("lessSAB").classList.add("off");
    document.getElementById("lessCAR").classList.add("off");
}

//Adciona a classe dos botões da calculadora de atributos:
function ligaAtributos(){
    document.getElementById("moreFOR").classList.remove("off");
    document.getElementById("moreDES").classList.remove("off");
    document.getElementById("moreCON").classList.remove("off");
    document.getElementById("moreINT").classList.remove("off");
    document.getElementById("moreSAB").classList.remove("off");
    document.getElementById("moreCAR").classList.remove("off");

    document.getElementById("lessFOR").classList.remove("off");
    document.getElementById("lessDES").classList.remove("off");
    document.getElementById("lessCON").classList.remove("off");
    document.getElementById("lessINT").classList.remove("off");
    document.getElementById("lessSAB").classList.remove("off");
    document.getElementById("lessCAR").classList.remove("off");
}

/* INICIALIZA A TELA ---------------------------------------*/
/* ----------------------------------------------------------*/
/* ----------------------------------------------------------*/

//Inicializa a primeira raça da tabela para o usuário:

    // Comando para ao iniciar, escrever os atributos na tela:
    document.getElementsByTagName("body").onload = escreveAtributo();

    var objValue = Object.values(Aarakocra)[0];
    objValue.forEach(escreve, 0);

    document.getElementById("nameRaça").innerHTML = "Aarakocra";

    // Variavel para controlar a aba ativa:
    var aba = "Traços";

    // Variavel para controlar qual raça dele ser escrita na tela na função "escreveRaça()":
    var chamaRaça = "Aarakocra";

    document.getElementById("moreFOR").classList.add("off");
    document.getElementById("moreCON").classList.add("off");
    document.getElementById("moreINT").classList.add("off");
    document.getElementById("moreCAR").classList.add("off");

    document.getElementById("lessFOR").classList.add("off");
    document.getElementById("lessCON").classList.add("off");
    document.getElementById("lessINT").classList.add("off");
    document.getElementById("lessCAR").classList.add("off");

    state_DES = true;
    state_SAB = true;

    //Escreve a tabela de raças para o usuário:
    for (var i = 0; i < 9; i++){
        let string = i;
        String(string);
        var completeRaça = string + '_nomeRaça'
        var completeTamanho = string + '_tamanhoRaça'
        var completeLivro = string + '_livroRaça'
        
        switch (i) {
            case 0:
                document.getElementById(completeRaça).innerHTML = "Aarakocra";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "EEPC";
            break;
            case 1:
                document.getElementById(completeRaça).innerHTML = "Aasimar";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "MPMM";
            break;
            case 2:
                document.getElementById(completeRaça).innerHTML = "Astral Elf";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "AAG";
            break;         
            case 3:
                document.getElementById(completeRaça).innerHTML = "Autominominomo";
                document.getElementById(completeTamanho).innerHTML = "Pequeno";
                document.getElementById(completeLivro).innerHTML = "AAG";
            break;
            case 4:
                document.getElementById(completeRaça).innerHTML = "Bugbear";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "MPMM";
            break;
            case 5:
                document.getElementById(completeRaça).innerHTML = "Centauro";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "GGR";
            break;
            case 6:
                document.getElementById(completeRaça).innerHTML = "Changeling";
                document.getElementById(completeTamanho).innerHTML = "Pequeno/Médio";
                document.getElementById(completeLivro).innerHTML = "MPMM";
            break;
            case 7:
                document.getElementById(completeRaça).innerHTML = "Dhampir";
                document.getElementById(completeTamanho).innerHTML = "Pequeno/Médio";
                document.getElementById(completeLivro).innerHTML = "RVGR";
            break; 
            case 8:
                document.getElementById(completeRaça).innerHTML = "Dragonborn";
                document.getElementById(completeTamanho).innerHTML = "Médio";
                document.getElementById(completeLivro).innerHTML = "PHB";
            break;        
        }           
    }
