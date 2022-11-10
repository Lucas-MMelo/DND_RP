const slotFicha = window.localStorage.getItem("Slot");
const pointer = window.localStorage.getItem(slotFicha);
thisFicha = JSON.parse(pointer)

const element_txtCharName = document.getElementById("ID_nameChar");
const element_txtCharIdade = document.getElementById("ID_idadeChar");
const element_txtCharAltura = document.getElementById("ID_alturaChar");
const element_txtCharPeso = document.getElementById("ID_pesoChar");
const element_txtCharPele = document.getElementById("ID_peleChar");
const element_txtCharOlho = document.getElementById("ID_olhoChar");
const element_txtCharCabelo = document.getElementById("ID_cabeloChar");

const element_txtFOR = document.getElementById("ID_FOR");
const element_txtDES = document.getElementById("ID_DES");
const element_txtCON = document.getElementById("ID_CON");
const element_txtINT = document.getElementById("ID_INT");
const element_txtSAB = document.getElementById("ID_SAB");
const element_txtCAR = document.getElementById("ID_CAR");

element_txtCharName.innerHTML = thisFicha.nome;
element_txtCharIdade.innerHTML = thisFicha.idade;
element_txtCharAltura.innerHTML = thisFicha.altura;
element_txtCharPeso.innerHTML = thisFicha.peso;
element_txtCharPele.innerHTML = thisFicha.pele;
element_txtCharOlho.innerHTML = thisFicha.olho;
element_txtCharCabelo.innerHTML = thisFicha.cabelo;

document.getElementsByTagName("body").onload = escreveAtributo();

function escreveAtributo(){
    element_txtFOR.innerHTML = thisFicha.Força;
    element_txtDES.innerHTML = thisFicha.Destreza;
    element_txtCON.innerHTML = thisFicha.Constituição;
    element_txtINT.innerHTML = thisFicha.Inteligência;
    element_txtSAB.innerHTML = thisFicha.Sabedoria;
    element_txtCAR.innerHTML = thisFicha.Carisma;
    
    element_txtFOR.classList.remove("up");
    element_txtDES.classList.remove("up");
    element_txtCON.classList.remove("up");
    element_txtINT.classList.remove("up");
    element_txtSAB.classList.remove("up");
    element_txtCAR.classList.remove("up");
}


const element_nameRaça = document.getElementById("nomeRaça");
const element_tamanhoRaça = document.getElementById("tamanhoRaça");
const element_livroRaça = document.getElementById("livroRaça");

for (var i = 0; i < 2; i++){
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
    }           
}

const Aarakocra = [
    "<strong>Valores de Habilidade:</strong> DES +2; SAB +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 25 pés, voar 50 pés.",

    "<strong>Vida:</strong> Os aarakocras atingem a maturidade aos 3 anos de idade. Comparados aos humanos, os aarakocras geralmente não vivem mais de 30 anos.",

    "<strong>Alinhamento:</strong> A maioria dos aarakocras são bons e raramente escolhem lados quando se trata de lei e caos. Líderes tribais e guerreiros podem ser leais, enquanto exploradores e aventureiros podem tender ao caótico.",

    "<strong>Tamanho:</strong> Aarakocra são cerca de 5 metros de altura. Eles têm corpos finos e leves que pesam entre 80 e 100 libras. Seu tamanho é Médio.",

    "<strong>Voar:</strong> Você tem um deslocamento de vôo de 50 pés. Para usar esta velocidade, você não pode usar armadura média ou pesada.",

    "<strong>Garras:</strong> Suas garras são armas naturais, que você pode usar para fazer ataques desarmados. Se você acertar com eles, você causa dano cortante igual a 1d4 + seu modificador de Força, em vez do dano de concussão normal para um ataque desarmado.",

    "<strong>Linguagem:</strong> Você pode falar, ler e escrever Comum, Aarakocra e Auran."
];

const Aasimar = [
    "<strong>Valores de Habilidade:</strong> Car +2; Sab +1",
    "<strong>Tamanho:</strong> Médio",
    "<strong>Velocidade:</strong> 30 pés.",

    "<strong>Vida:</strong> Aasimar amadurecem na mesma proporção que os humanos, mas vivem alguns anos a mais.",

    "<strong>Tamanho:</strong> Aasimar são construídos como humanos bem proporcionados. Seu tamanho é Médio.",

    "<strong>Visão no escuro:</strong> Graças à sua herança celestial, você tem uma visão superior em condições escuras e escuras. Você pode ver na penumbra a até 18 metros de você como se fosse luz brilhante, e na escuridão como se fosse luz fraca. Você não pode discernir cores na escuridão, apenas tons de cinza.",
    
    "<strong>Resistência Celeste:</strong> Você tem resistência a dano necrótico e radiante.",
    
    "<strong>Legado Celestial:</strong> Você conhece o truque da luz . Uma vez que você alcance o 3º nível, você pode lançar a magia de restauração menor uma vez com esta característica, e você recupera a habilidade de fazê-lo quando terminar um descanso longo. Uma vez que você alcance o 5º nível, você pode lançar a magia luz do dia uma vez com esta característica, e você recupera a habilidade de fazê-lo quando terminar um descanso longo. Carisma é sua habilidade de conjuração para essas magias.",
    
    "<strong>Linguagem:</strong> Você pode falar, ler e escrever Comum e Celestial."
];

var atual = "Aarakocra";

Aarakocra.forEach(escreve, 0)
document.getElementById("nameRaça").innerHTML = "Aarakocra";

function escreve(item, i) {
    i++;
    document.getElementById("escreveRaça").innerHTML += item + "<br>";

    if(i == 3){        
        let x = document.getElementById("escreveRaça").innerHTML += "<br>";        
    }
}

function apagaConteudo(){
    document.getElementById("escreveRaça").innerHTML = "";
}

function Escreve_Aarakocra() {
    escreveAtributo();

    apagaConteudo();
    Aarakocra.forEach(escreve, 0);
    document.getElementById("nameRaça").innerHTML = "Aarakocra";

    let x = thisFicha.Destreza + 2;
    let y = thisFicha.Sabedoria + 1;

    document.getElementById("ID_DES").classList.add("up");
    document.getElementById("ID_SAB").classList.add("up");

    document.getElementById("ID_DES").innerHTML = x;
    document.getElementById("ID_SAB").innerHTML = y;
}

function Escreve_Aasimar() {
    escreveAtributo();

    apagaConteudo();
    Aasimar.forEach(escreve, 0);
    document.getElementById("nameRaça").innerHTML = "Aasimar";

    let x = thisFicha.Sabedoria + 2;
    let y = thisFicha.Carisma + 1;

    document.getElementById("ID_SAB").classList.add("up");
    document.getElementById("ID_CAR").classList.add("up");

    document.getElementById("ID_SAB").innerHTML = x;
    document.getElementById("ID_CAR").innerHTML = y;
    
}