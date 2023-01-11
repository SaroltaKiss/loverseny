let palyaWidth = window.innerWidth;
let w = parseInt(palyaWidth * 0.85);
let sorrend = [""];
let helyezes = 0;
let br = "<br>";
let onTippje = "";
let score = 70;
let szoveg = "";
let gyoztesLo= "";
let lepesek =[0];

let lovak = [];
for(i = 0; i < 5; i++){
    lovak[i] = lovakLista[Math.round(Math.random()*lovakLista.length)];
    //console.log(Math.round(Math.random()*lovakLista.length));
}
let hossz = lovak.length;

function Kiiratas(x){
    let lovakNevei = document.querySelector("#induloLovak").innerHTML;
    lovakNevei += x;
    document.querySelector("#induloLovak").innerHTML = lovakNevei;
}

function KiiratasDisplay(x){
    let lovakNevei2 = x;
    document.querySelector("#display").innerHTML = lovakNevei2;
}

function bekeres(){
    onTippje = prompt("Tippeljen az egyik lóra!", 'Bubu');
    let ervenyesLoNev = "Érvényes fogadás! ";
    document.getElementById("tippeltLo").innerHTML = "Az Ön tippje: " + onTippje.toUpperCase();
    for(i = 0; i < hossz; i++){
        if(onTippje.toUpperCase() == lovak[i].toUpperCase()){
            i = hossz;
            document.getElementById("startButton").style.display = "block";
            document.getElementById("bekeresButton").style.display = "none";
            document.getElementById("nincsIlyen").innerHTML = ervenyesLoNev.toUpperCase();
            document.getElementById("kattintas").style.display = "none";
        } else {
            document.getElementById("nincsIlyen").innerHTML = "Nincs ilyen ló! Te ökör!";
        }
    }
}

document.getElementById("startButton").style.display = "none";
document.getElementById("kovetkezoButton").style.display = "none";


let felsorolas = "<h2>";
felsorolas += "<ol>";
for(i = 0; i < hossz; i++) {
    felsorolas += "<li>" + lovak[i] + "</li>"
}
felsorolas += "</ol></h2>";
//console.log(felsorolas);

Kiiratas(felsorolas);
KiiratasDisplay(felsorolas);

function kovetkezo(){
    location.reload();
}

function futas(){
    lepesek = [];
   
    for(i = 0; i < hossz; i++){
        lepesek[i] = 0;
       
    }
   
    let vege = false;
    //let szamlalo = 0;
    while(!vege){
       
        for(i = 0; i < hossz; i++){
            //szamlalo++
            lepesek[i] = lepesek[i] + Math.round(Math.random()*2)+1;
            if(lepesek[i] >= score){
                vege = true;
                gyoztesLo = lovak[i];
                galopp();    
            }
        }
    }console.log(lepesek);
}
function eredmenyKiiras(){
    if(onTippje.toUpperCase() == gyoztesLo.toUpperCase()){
        szoveg = "Gratulálok, Ön nyert!!!";
    } else {
        szoveg = "Sajnos most nem nyert!";
    }
    document.getElementById("gyoztes").innerHTML = "A győztes ló neve: " + gyoztesLo + "! " + szoveg;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("kovetkezoButton").style.display = "block";
    document.getElementById("nincsIlyen").style.display = "none";
}

function lo1Move(szam, ido){
    let id;
    let loszama = szam;
    let lo =document.getElementById(loszama);
    console.log(lo);
    let pos = 60;
    //clearInterval(id);
    id = setInterval(frame, ido);
        function frame(){
        if(pos == w) {
            clearInterval(id);
            document.getElementById('loKep').src="img-20230104/lo2.gif";
            sorrend[helyezes] = lovak[0]
            helyezes++;
            if(helyezes == 5){
                eredmeny();
            }
            eredmenyKiiras();
        } else{
        pos++;
        lo.style.left = pos + 'px';
        }
    }
}

function lo2Move(szam, ido){
    let id;
    let loszama = szam;
    let lo =document.getElementById(loszama);
    let pos = 60;
    //clearInterval(id);
    id = setInterval(frame, ido);
        function frame(){
        if(pos == w) {
            clearInterval(id);
            document.getElementById('loKep2').src="img-20230104/lo2.gif";
            sorrend[helyezes] = lovak[1]
            helyezes++;
            if(helyezes == 5){
                eredmeny();
            }
            eredmenyKiiras();
        } else{
        pos++;
        lo.style.left = pos + 'px';
        }
    }
}

function lo3Move(szam, ido){
    let id;
    let loszama = szam;
    let lo =document.getElementById(loszama);
    let pos = 60;
    //clearInterval(id);
    id = setInterval(frame, ido);
        function frame(){
        if(pos == w) {
            clearInterval(id);
            document.getElementById('loKep3').src="img-20230104/lo2.gif";
            sorrend[helyezes] = lovak[2]
            helyezes++;
            if(helyezes == 5){
                eredmeny();
            }
            eredmenyKiiras();
        } else{
        pos++;
        lo.style.left = pos + 'px';
        }
    }
}

function lo4Move(szam, ido){
    let id;
    let loszama = szam;
    let lo =document.getElementById(loszama);
    let pos = 60;
    //clearInterval(id);
    id = setInterval(frame, ido);
        function frame(){
        if(pos == w) {
            clearInterval(id);
            document.getElementById('loKep4').src="img-20230104/lo2.gif";
            sorrend[helyezes] = lovak[3]
            helyezes++;
            if(helyezes == 5){
                eredmeny();
            }
            eredmenyKiiras();
        } else{
        pos++;
        lo.style.left = pos + 'px';
        }
    }
}

function lo5Move(szam, ido){
    let id;
    let loszama = szam;
    let lo =document.getElementById(loszama);
    let pos = 60;
    //clearInterval(id);
    id = setInterval(frame, ido);
        function frame(){
        if(pos == w) {
            clearInterval(id);
            document.getElementById('loKep5').src="img-20230104/lo2.gif";
            sorrend[helyezes] = lovak[4]
            helyezes++;
            if(helyezes == 5){
                eredmeny();
            }
            eredmenyKiiras();
        } else{
        pos++;
        lo.style.left = pos + 'px';
        }
    }
}
function galopp(){
    sebesseg1 = 100-lepesek[0];
    sebesseg2 = 100-lepesek[1];
    sebesseg3 = 100-lepesek[2];
    sebesseg4 = 100-lepesek[3];
    sebesseg5 = 100-lepesek[4];

    lo1Move("lo1", sebesseg1);
    lo2Move("lo2", sebesseg2);
    lo3Move("lo3", sebesseg3);
    lo4Move("lo4", sebesseg4);
    lo5Move("lo5", sebesseg5);
}

function Kiiratas3(x){
    let lovakNevei3 = document.querySelector("#eredmenyJelzo").innerHTML;
    lovakNevei3 += x;
    document.querySelector("#eredmenyJelzo").innerHTML = lovakNevei3;
}

function eredmeny(){
let felsorolas2 = "";
felsorolas2 += "<h3><ol>";
for(i = 0; i < hossz; i++) {
    felsorolas2 += "<li>" + sorrend[i] + "</li>"
}
felsorolas2 += "</ol></h3>";
Kiiratas3(felsorolas2)
}