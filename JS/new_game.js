// Abrir/fechar Pop-up "LOGUIN":
const elementModal_loguin = document.querySelector('#modal_loguin');

// Abrir/fechar Pop-up "PERSONAGENS":
const elementModal_personagens = document.querySelector('#modal_personagens');

// Abrir/fechar Pop-up "YES or NO":
const elementModal_yesNo = document.querySelector('#modal_yesNo');

// Abrir/fechar Pop-up "EDITOR DE FICHA":
const elementModal_edit = document.querySelector('#modal_edit');

// Abrir/fechar Pop-up "NOME DO USUÁRIO":
const elementPlayer = document.querySelector('#loguinPlayer');

// Escrever nome do usuário na NAV:
const element_TitlePlayer = document.getElementById("ID_TitlePlayer");

// Escolher a mensagem para Pop-up "YES or NO":
const elementMSG = document.getElementById("msg");

txt_namePlayer = "";

// VAR's para acionar o modo edição enviando um valor à ficha correspondente:
const element_slot01 = document.getElementById("slot01");
const element_slot02 = document.getElementById("slot02");
const element_slot03 = document.getElementById("slot03");
const element_slot04 = document.getElementById("slot04");
  
// Chamar a mesma função do modo edição porém com valores pré-definidos pelas as var's:
element_slot01.addEventListener("click", function(){showModal_edit("Ficha 01")});
element_slot02.addEventListener("click", function(){showModal_edit("Ficha 02")});
element_slot03.addEventListener("click", function(){showModal_edit("Ficha 03")});
element_slot04.addEventListener("click", function(){showModal_edit("Ficha 04")});

// VAR's para acionar o modo exclusão enviando um valor à ficha correspondente:
const element_del01 = document.getElementById("del_01");
const element_del02 = document.getElementById("del_02");
const element_del03 = document.getElementById("del_03");
const element_del04 = document.getElementById("del_04");

// Chamar a mesma função do modo exclusão porém com valores pré-definidos pelas as var's:
element_del01.addEventListener("click", function(){showModal_del("Ficha 01")});
element_del02.addEventListener("click", function(){showModal_del("Ficha 02")});
element_del03.addEventListener("click", function(){showModal_del("Ficha 03")});
element_del04.addEventListener("click", function(){showModal_del("Ficha 04")});

// VAR's para trocar o fundo:
const element_bg = document.getElementById("saibaMais");
const trocaBG = document.getElementById("corpo");

/* ---------- Funções ---------- */

element_bg.addEventListener("mouseover", () => {
    trocaBG.style.backgroundImage = `url('../ASSETS/IMAGENS/tasha-the-witch-queen-clb-background-1920x1080.jpg')`;
});

element_bg.addEventListener("mouseleave", () => {
    trocaBG.style.backgroundImage = `url('../ASSETS/IMAGENS/CandlekeepMysteries_1920x1080_Wallpaper.jpg')`;
});

function backhome() {
    window.location = 'novoJogo.html';
}

function chamaPersonagens(){

var edite;

// VAR's para definir onde escrever as informações das fichas no Pop-up "PERSONAGENS":
const element_ficha_01 = window.localStorage.getItem("Ficha 01");
var element_nameChar_01 = document.getElementById("ID_nameChar_01");
var element_nivelChar_01 = document.getElementById("ID_nivelChar_01");
var element_classeChar_01 = document.getElementById("ID_classeChar_01");

const element_ficha_02 = window.localStorage.getItem("Ficha 02");
var element_nameChar_02 = document.getElementById("ID_nameChar_02");
var element_nivelChar_02 = document.getElementById("ID_nivelChar_02");
var element_classeChar_02 = document.getElementById("ID_classeChar_02");

const element_ficha_03 = window.localStorage.getItem("Ficha 03");
var element_nameChar_03 = document.getElementById("ID_nameChar_03");
var element_nivelChar_03 = document.getElementById("ID_nivelChar_03");
var element_classeChar_03 = document.getElementById("ID_classeChar_03");

const element_ficha_04 = window.localStorage.getItem("Ficha 04");
var element_nameChar_04 = document.getElementById("ID_nameChar_04");
var element_nivelChar_04 = document.getElementById("ID_nivelChar_04");
var element_classeChar_04 = document.getElementById("ID_classeChar_04");

// Condição para escrever na tela ou colocar "vazio" caso não possua nada na ficha correspondente:
if(window.localStorage.getItem("Ficha 01")){
    edite = JSON.parse(element_ficha_01);
    element_nameChar_01.classList.add("preenchido");
    element_nivelChar_01.classList.add("preenchido");
    element_classeChar_01.classList.add("preenchido");

    element_nameChar_01.innerHTML = edite.BIO_Nome;
    element_nivelChar_01.innerHTML = edite.Controle_Nivel;
    element_classeChar_01.innerHTML = edite.Controle_Classe;        
} else {
    element_nameChar_01.classList.remove("preenchido");
    element_nivelChar_01.classList.remove("preenchido");
    element_classeChar_01.classList.remove("preenchido");

    element_nameChar_01.innerHTML = "Vazio";
    element_nivelChar_01.innerHTML = "Vazio";
    element_classeChar_01.innerHTML = "Vazio";   
}

if(window.localStorage.getItem("Ficha 02")){
    edite = JSON.parse(element_ficha_02);
    element_nameChar_02.classList.add("preenchido");
    element_nivelChar_02.classList.add("preenchido");
    element_classeChar_02.classList.add("preenchido");

    element_nameChar_02.innerHTML = edite.BIO_Nome;
    element_nivelChar_02.innerHTML = edite.Controle_Nivel;
    element_classeChar_02.innerHTML = edite.Controle_Classe;  
} else {
    element_nameChar_02.classList.remove("preenchido");
    element_nivelChar_02.classList.remove("preenchido");
    element_classeChar_02.classList.remove("preenchido");

    element_nameChar_02.innerHTML = "Vazio";
    element_nivelChar_02.innerHTML = "Vazio";
    element_classeChar_02.innerHTML = "Vazio";   
}

if(window.localStorage.getItem("Ficha 03")){
    edite = JSON.parse(element_ficha_03);
    element_nameChar_03.classList.add("preenchido");
    element_nivelChar_03.classList.add("preenchido");
    element_classeChar_03.classList.add("preenchido");

    element_nameChar_03.innerHTML = edite.BIO_Nome;
    element_nivelChar_03.innerHTML = edite.Controle_Nivel;
    element_classeChar_03.innerHTML = edite.Controle_Classe;  
} else {
    element_nameChar_03.classList.remove("preenchido");
    element_nivelChar_03.classList.remove("preenchido");
    element_classeChar_03.classList.remove("preenchido");

    element_nameChar_03.innerHTML = "Vazio";
    element_nivelChar_03.innerHTML = "Vazio";
    element_classeChar_03.innerHTML = "Vazio";   
}

if(window.localStorage.getItem("Ficha 04")){
    edite = JSON.parse(element_ficha_04);
    element_nameChar_04.classList.add("preenchido");
    element_nivelChar_04.classList.add("preenchido");
    element_classeChar_04.classList.add("preenchido");

    element_nameChar_04.innerHTML = edite.BIO_Nome;
    element_nivelChar_04.innerHTML = edite.Controle_Nivel;
    element_classeChar_04.innerHTML = edite.Controle_Classe;  
} else {
    element_nameChar_04.classList.remove("preenchido");
    element_nivelChar_04.classList.remove("preenchido");
    element_classeChar_04.classList.remove("preenchido");

    element_nameChar_04.innerHTML = "Vazio";
    element_nivelChar_04.innerHTML = "Vazio";
    element_classeChar_04.innerHTML = "Vazio";   
}

}

function enviaPara_escolheAtributo(){
    window.location = 'escolheAtributo.html';
}

function hiddeModal_loguin(){
    elementModal_loguin.classList.remove("modalOn");
}

function hiddeModal_personagens(){
    elementModal_personagens.classList.remove("modalOn");
}

function hiddeModal_edit(){
    elementModal_edit.classList.remove("modalOn");
}

function salvarFicha(){
elementModal_edit.classList.remove("modalOn");

// VAR's para receber todas as informações do usuário no Pop-up "EDITOR":
const txt_nameChar = document.getElementById("ID_nameChar").value;
const txt_idadeChar =document.getElementById("ID_idadeChar").value;
const txt_alturaChar = document.getElementById("ID_alturaChar").value;
const txt_pesoChar = document.getElementById("ID_pesoChar").value;
const txt_peleChar = document.getElementById("ID_peleChar").value;
const txt_olhoChar = document.getElementById("ID_olhoChar").value;
const txt_cabeloChar = document.getElementById("ID_cabeloChar").value;
const txt_historiaChar = document.getElementById("ID_historiaChar").value;

// Objeto que vai se tornar uma ficha nova:
var Ficha = {
    
    ATR_01_FOR: 0,
    ATR_02_DES: 0,
    ATR_03_CON: 0,
    ATR_04_INT: 0,
    ATR_05_SAB: 0,
    ATR_06_CAR: 0,

    ATR_HAB_PF_01: false,
    ATR_HAB_PF_02: false,
    ATR_HAB_PF_03: false,
    ATR_HAB_PF_04: false,
    ATR_HAB_PF_05: false,
    ATR_HAB_PF_06: false,

    ATR_MOD_01_FOR: 0,
    ATR_MOD_02_DES: 0,
    ATR_MOD_03_CON: 0,
    ATR_MOD_04_INT: 0,
    ATR_MOD_05_SAB: 0,
    ATR_MOD_06_CAR: 0,

    BIO_Altura: txt_alturaChar,
    BIO_Cabelo: txt_cabeloChar,
    BIO_Dono: txt_namePlayer,
    BIO_Idade: txt_idadeChar,
    BIO_Nome: txt_nameChar,
    BIO_Pele: txt_peleChar,
    BIO_Peso: txt_pesoChar,
    BIO_Olho: txt_olhoChar,
    BIO_Historia: txt_historiaChar,

    Controle_BonusProeficiencia: 0,
    Controle_Classe: "Indefinida",
    Controle_CA: 0,
    Controle_Iniciativa: 0,
    Controle_Nivel: 0,
    Controle_Vida: 0,
    Controle_VidaTemp: 0,

    Extras_Ações: "Nenhuma",
    Extras_Antecedente: "Nenhum",
    Extras_Idiomas: "Comum",
    Extras_Proeficiências: "Nenhuma",
    Extras_Resistências: "Nenhuma",
    Extras_TraçosRaciais: "Nenhum",

    HAB_Acrobacia: 0,
    HAB_AdestrarAnimais: 0,
    HAB_Arcanismo: 0,
    HAB_Atletismo: 0,
    HAB_Atuação: 0,
    HAB_Enganação: 0,
    HAB_Furtividade: 0,
    HAB_História: 0,
    HAB_Intuição: 0,
    HAB_Investigação: 0,
    HAB_Medicina: 0,
    HAB_Natureza: 0,
    HAB_Percepção: 0,
    HAB_Persuasão: 0,
    HAB_Prestidigitação: 0,
    HAB_Religião: 0,
    HAB_Sobrevivência: 0,

    HAB_PF_Acrobacia: false,
    HAB_PF_AdestrarAnimais: false,
    HAB_PF_Arcanismo: false,
    HAB_PF_Atletismo: false,
    HAB_PF_Atuação: false,
    HAB_PF_Enganação: false,
    HAB_PF_Furtividade: false,
    HAB_PF_História: false,
    HAB_PF_Intuição: false,
    HAB_PF_Investigação: false,
    HAB_PF_Medicina: false,
    HAB_PF_Natureza: false,
    HAB_PF_Percepção: false,
    HAB_PF_Persuasão: false,
    HAB_PF_Prestidigitação: false,
    HAB_PF_Religião: false,
    HAB_PF_Sobrevivência: false,

    Magias_1C: "nenhuma",
    Magias_2C: "nenhuma",
    Magias_3C: "nenhuma",
    Magias_4C: "nenhuma",
    Magias_5C: "nenhuma",
    Magias_6C: "nenhuma",
    Magias_7C: "nenhuma",
    Magias_8C: "nenhuma",
    Magias_9C: "nenhuma",

    TALENTOS: "Nenhum"
}

// VAR com o valor pré-definido nas variáveis "element_slot0X" para escrever o devido nome da ficha:
const element_escreveFicha = window.localStorage.getItem("Slot");

// Salva o objeto no navegador:
window.localStorage.setItem(element_escreveFicha, JSON.stringify(Ficha));
chamaPersonagens();
}

function saveName(){

// Pop-up para salvar:
elementMSG.innerHTML = "Deseja salvar?"
elementModal_yesNo.classList.add("modalOn");

let yes = document.getElementById("yes");
let no = document.getElementById("no");

yes.addEventListener("click", saveNamePlayer);
no.addEventListener("click", fecha);

    function saveNamePlayer(){
    // Escreve o nome do usuário na NAV:
        txt_namePlayer = document.getElementById("ID_namePlayer").value;
        element_TitlePlayer.innerHTML = txt_namePlayer;
        elementPlayer.classList.add("On");
        elementModal_yesNo.classList.remove("modalOn");

    }

    function fecha(){
        // Fecha Pop-up:
        elementModal_yesNo.classList.remove("modalOn");
    }
}

function showModal_del(slotDel){
var teste = slotDel;

elementMSG.innerHTML = "Deseja deletar?"
elementModal_yesNo.classList.add("modalOn");

let yes = document.getElementById("yes");
let no = document.getElementById("no");

yes.addEventListener("click", deletaFicha);
no.addEventListener("click", fecha);

    function deletaFicha(){
    // Deleta a ficha selecionada:
    window.localStorage.removeItem(teste);
    showModal_personagens()
    elementModal_yesNo.classList.remove("modalOn");
    }

    function fecha(){
        // Fecha Pop-up:
        elementModal_yesNo.classList.remove("modalOn");
    }
}

function showModal_edit(slotFicha){
var txtFicha = document.getElementById("title_FichaEdit");
txtFicha.innerHTML = slotFicha;
elementModal_edit.classList.add("modalOn");

// Cria uma chave "Slot" com o nome correspondente a ficha que está sendo editada para salvar depois na função "salvarFicha()"
window.localStorage.setItem("Slot", slotFicha);
}

function showModal_loguin(){
    elementModal_loguin.classList.add("modalOn");
}

function showModal_personagens(){
    chamaPersonagens();
    elementModal_personagens.classList.add("modalOn");
}
