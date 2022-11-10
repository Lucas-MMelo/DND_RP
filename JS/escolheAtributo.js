const slotFicha = window.localStorage.getItem("Slot");
const pointer = window.localStorage.getItem(slotFicha);
thisFicha = JSON.parse(pointer)

const element_TitlePlayer = document.getElementById("ID_TitlePlayer");   
const element_txtCharName = document.getElementById("ID_nameChar");
const element_txtCharIdade = document.getElementById("ID_idadeChar");
const element_txtCharAltura = document.getElementById("ID_alturaChar");
const element_txtCharPeso = document.getElementById("ID_pesoChar");
const element_txtCharPele = document.getElementById("ID_peleChar");
const element_txtCharOlho = document.getElementById("ID_olhoChar");
const element_txtCharCabelo = document.getElementById("ID_cabeloChar");

element_TitlePlayer.innerHTML = thisFicha.BIO_Dono;
element_txtCharName.innerHTML = thisFicha.BIO_Nome;
element_txtCharIdade.innerHTML = thisFicha.BIO_Idade;
element_txtCharAltura.innerHTML = thisFicha.BIO_Altura;
element_txtCharPeso.innerHTML = thisFicha.BIO_Peso;
element_txtCharPele.innerHTML = thisFicha.BIO_Pele;
element_txtCharOlho.innerHTML = thisFicha.BIO_Olho;
element_txtCharCabelo.innerHTML = thisFicha.BIO_Cabelo;

const element_help = document.getElementById("modal_ajuda");

var txtFOR = 8;
var modFOR = -1;
var txtDES = 8;
var modDES = -1;
var txtCON = 8;
var modCON = -1;
var txtINT = 8;
var modINT = -1;
var txtSAB = 8;
var modSAB = -1;
var txtCAR = 8;
var modCAR = -1;

var pointBuy = 0;

const element_txtFOR = document.getElementById("ID_valorFOR");
const element_modFOR = document.getElementById("ID_modFOR");
const element_txtDES = document.getElementById("ID_valorDES");
const element_modDES = document.getElementById("ID_modDES");
const element_txtCON = document.getElementById("ID_valorCON");
const element_modCON = document.getElementById("ID_modCON");
const element_txtINT = document.getElementById("ID_valorINT");
const element_modINT = document.getElementById("ID_modINT");
const element_txtSAB = document.getElementById("ID_valorSAB");
const element_modSAB = document.getElementById("ID_modSAB");
const element_txtCAR = document.getElementById("ID_valorCAR");
const element_modCAR = document.getElementById("ID_modCAR");

const element_pointBuy = document.getElementById("ID_point");

element_txtFOR.innerHTML = txtFOR;
element_modFOR.innerHTML = modFOR;
element_txtDES.innerHTML = txtDES;
element_modDES.innerHTML = modDES;
element_txtCON.innerHTML = txtCON;
element_modCON.innerHTML = modCON;
element_txtINT.innerHTML = txtINT;
element_modINT.innerHTML = modINT;
element_txtSAB.innerHTML = txtSAB;
element_modSAB.innerHTML = modSAB;
element_txtCAR.innerHTML = txtCAR;
element_modCAR.innerHTML = modCAR;

element_pointBuy.innerHTML = pointBuy + '/27';

const elementModal_yesNo = document.querySelector('#modal_yesNo');
const element_msg = document.querySelector('#msg');

function moreFOR() {
if(pointBuy<27){
    if(txtFOR<15){
        txtFOR ++;
        pointBuy ++;
        if(txtFOR>13){
            pointBuy ++;
        }
        if(txtFOR==10){
            modFOR++;
        }
        if(txtFOR==12){
            modFOR++;
        }
        if(txtFOR==14){
            modFOR++;
        }
    }
    if(txtFOR==15){
        element_txtFOR.classList.add("max");
        element_modFOR.classList.add("max");
    }
}
    element_txtFOR.innerHTML = txtFOR;
    element_modFOR.innerHTML = modFOR;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessFOR() {
    element_txtFOR.classList.remove("max");
    element_modFOR.classList.remove("max");

    if(txtFOR>8){
        txtFOR --;
        pointBuy--;
        if(txtFOR >= 13){
            pointBuy--;
            }
        if(txtFOR==9){
            modFOR = -1;
        }
        if(txtFOR==11){
            modFOR = 0;
        }
        if(txtFOR==13){
            modFOR = 1;
        }
    }
    element_txtFOR.innerHTML = txtFOR;
    element_modFOR.innerHTML = modFOR;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function moreDES() {
if(pointBuy<27){
    if(txtDES<15){
        txtDES ++;
        pointBuy ++;
        if(txtDES>13){
            pointBuy ++;
        }
        if(txtDES==10){
            modDES++;
        }
        if(txtDES==12){
            modDES++;
        }
        if(txtDES==14){
            modDES++;
        }
    }
    if(txtDES==15){
        element_txtDES.classList.add("max");
        element_modDES.classList.add("max");
    }    
}

    element_txtDES.innerHTML = txtDES;
    element_modDES.innerHTML = modDES;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessDES() {
    element_txtDES.classList.remove("max");
    element_modDES.classList.remove("max");

    if(txtDES>8){
        txtDES --;
        pointBuy--;
        if(txtDES >= 13){
            pointBuy--;
            }
        if(txtDES==9){
            modDES = -1;
        }
        if(txtDES==11){
            modDES = 0;
        }
        if(txtDES==13){
            modDES = 1;
        }
    }
    element_txtDES.innerHTML = txtDES;
    element_modDES.innerHTML = modDES;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function moreCON() {
if(pointBuy<27){
    if(txtCON<15){
        txtCON ++;
        pointBuy ++;
        if(txtCON>13){
            pointBuy ++;
        }
        if(txtCON==10){
            modCON++;
        }
        if(txtCON==12){
            modCON++;
        }
        if(txtCON==14){
            modCON++;
        }
    }
    if(txtCON==15){
        element_txtCON.classList.add("max");
        element_modCON.classList.add("max");
    }
}
    element_txtCON.innerHTML = txtCON;
    element_modCON.innerHTML = modCON;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessCON() {
    element_txtCON.classList.remove("max");
    element_modCON.classList.remove("max");

    if(txtCON>8){
        txtCON --;
        pointBuy--;
        if(txtCON >= 13){
            pointBuy--;
            }
        if(txtCON==9){
            modCON = -1;
        }
        if(txtCON==11){
            modCON = 0;
        }
        if(txtCON==13){
            modCON = 1;
        }
    }
    element_txtCON.innerHTML = txtCON;
    element_modCON.innerHTML = modCON;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function moreINT() {
if(pointBuy<27){
    if(txtINT<15){
        txtINT ++;
        pointBuy ++;
        if(txtINT>13){
            pointBuy ++;
        }
        if(txtINT==10){
            modINT++;
        }
        if(txtINT==12){
            modINT++;
        }
        if(txtINT==14){
            modINT++;
        }
    }
    if(txtINT==15){
        element_txtINT.classList.add("max");
        element_modINT.classList.add("max");
    }
}
    element_txtINT.innerHTML = txtINT;
    element_modINT.innerHTML = modINT;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessINT() {
    element_txtINT.classList.remove("max");
    element_modINT.classList.remove("max");

    if(txtINT>8){
        txtINT --;
        pointBuy--;
        if(txtINT >= 13){
            pointBuy--;
            }
        if(txtINT==9){
            modINT = -1;
        }
        if(txtINT==11){
            modINT = 0;
        }
        if(txtINT==13){
            modINT = 1;
        }
    }
    element_txtINT.innerHTML = txtINT;
    element_modINT.innerHTML = modINT;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function moreSAB() {
if(pointBuy<27){
    if(txtSAB<15){
        txtSAB ++;
        pointBuy ++;
        if(txtSAB>13){
            pointBuy ++;
        }
        if(txtSAB==10){
            modSAB++;
        }
        if(txtSAB==12){
            modSAB++;
        }
        if(txtSAB==14){
            modSAB++;
        }
    }
    if(txtSAB==15){
        element_txtSAB.classList.add("max");
        element_modSAB.classList.add("max");
    }
}
    element_txtSAB.innerHTML = txtSAB;
    element_modSAB.innerHTML = modSAB;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessSAB() {
    element_txtSAB.classList.remove("max");
    element_modSAB.classList.remove("max");

    if(txtSAB>8){
        txtSAB --;
        pointBuy--;
        if(txtSAB >= 13){
            pointBuy--;
            }
        if(txtSAB==9){
            modSAB = -1;
        }
        if(txtSAB==11){
            modSAB = 0;
        }
        if(txtSAB==13){
            modSAB = 1;
        }
    }
    element_txtSAB.innerHTML = txtSAB;
    element_modSAB.innerHTML = modSAB;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function moreCAR() {
if(pointBuy<27){
    if(txtCAR<15){
        txtCAR ++;
        pointBuy ++;
        if(txtCAR>13){
            pointBuy ++;
        }
        if(txtCAR==10){
            modCAR++;
        }
        if(txtCAR==12){
            modCAR++;
        }
        if(txtCAR==14){
            modCAR++;
        }
    }
    if(txtCAR==15){
        element_txtCAR.classList.add("max");
        element_modCAR.classList.add("max");
    }
}
    element_txtCAR.innerHTML = txtCAR;
    element_modCAR.innerHTML = modCAR;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function lessCAR() {
    element_txtCAR.classList.remove("max");
    element_modCAR.classList.remove("max");

    if(txtCAR>8){
        txtCAR --;
        pointBuy--;
        if(txtCAR >= 13){
            pointBuy--;
            }
        if(txtCAR==9){
            modCAR = -1;
        }
        if(txtCAR==11){
            modCAR = 0;
        }
        if(txtCAR==13){
            modCAR = 1;
        }
    }
    element_txtCAR.innerHTML = txtCAR;
    element_modCAR.innerHTML = modCAR;
    element_pointBuy.innerHTML = pointBuy + '/27';
}

function hiddeModal_help() {
    element_help.classList.remove("modalOn");
}

function showModal_logOut(){

    element_msg.innerHTML = "Deseja sair sem salvar?"
    elementModal_yesNo.classList.add("modalOn");

    let yes = document.getElementById("yes");
    let no = document.getElementById("no");

    yes.addEventListener("click", sair);
    no.addEventListener("click", ficar);

    function sair(){
        elementModal_yesNo.classList.remove("modalOn");
    }

    function ficar(){
        elementModal_yesNo.classList.remove("modalOn");
    }
}

function showModal_help() {
    element_help.classList.add("modalOn");
}

function salvarFicha() {
    element_msg.innerHTML = "Deseja salvar e continuar?"
    elementModal_yesNo.classList.add("modalOn");

    let yes = document.getElementById("yes");
    let no = document.getElementById("no");

    yes.addEventListener("click", saveAtributo);
    no.addEventListener("click", fecha);

    function saveAtributo(){
        thisFicha['ATR_01_FOR'] = txtFOR;
        thisFicha['ATR_02_DES'] = txtDES;
        thisFicha['ATR_03_CON'] = txtCON;
        thisFicha['ATR_04_INT'] = txtINT;
        thisFicha['ATR_05_SAB'] = txtSAB;
        thisFicha['ATR_06_CAR'] = txtCAR;
        elementModal_yesNo.classList.remove("modalOn");
        localStorage.setItem(slotFicha, JSON.stringify(thisFicha));
        window.location = 'escolheRaca.html';
    }

    function fecha(){
        elementModal_yesNo.classList.remove("modalOn");
    }
    
}

function backHome(){
    window.location = 'novoJogo.HTML';
}