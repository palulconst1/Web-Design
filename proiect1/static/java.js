function afisModif() 
{
 var im=document.getElementsByClassName("video");
  im.alt="Video preluat de pe YouTube";
  alert(im.alt); 
}

window.onload = function()
{
let par = document.createElement("p");
    par.innerHTML="Sala noastra este expusa pe 2 niveluri, fiind impartita in partea de mobilitate, cardio, si cea de bodybuilding. Zona de cardio cuprinde 10 biciclete centrifuge, 10 benzi de alergare moderne cu suprafata curba, viteza maxima de 30 km/h si o inclinare de pana la 15 grade. De asemenea, nivelul 1 cuprinde si zona de mobilitate, echipata cu podea din saltele Tatami si diferite accesorii. Zona de bodybuilding cuprinte un total de 35 de aparate si doua randuri de gantere de la 1 pana la 50 kg. Sunt disponibile discuri de 2.5, 5, 10, 15, 20, 25 de kg. Aparatele sunt grupate pe grupele musculare asupra carora actioneaza.";
    let sec = document.getElementById("sectiune1");
    par.style.width = "100%";
    par.style.height = "auto";
    par.style.borderWidth = "2px";
    par.style.borderColor = "black";
    par.style.borderStyle = "solid";
    sec.appendChild(par);

    let sec3 = document.getElementById("sectiune3");
    let txt1 = document.createElement("input");
    let txt2 = document.createElement("input");
    let txt3 = document.createElement("input");
    let txt4 = document.createElement("input");
    txt1.type = "checkbox";
    txt2.type = "checkbox";
    txt3.type = "checkbox";
    txt4.type = "checkbox";
    //let lb1=document.createElement("p");
    //lb1.innerHTML="varianta 1";
    sec3.appendChild(txt1);
    sec3.appendChild(document.createElement("br"));
    //sec3.appendChild(lb1);
    sec3.appendChild(txt2);
    sec3.appendChild(document.createElement("br"));
    sec3.appendChild(txt3);
    sec3.appendChild(document.createElement("br"));
    sec3.appendChild(txt4);

    let sec4 = document.getElementById("sectiune4");
    let txt5 = document.createElement("input");
    let txt6 = document.createElement("input");
    let txt7 = document.createElement("input");
    let txt8 = document.createElement("input");
    txt5.type = "radio";
    txt6.type = "radio";
    txt7.type = "radio";
    txt8.type = "radio";
    //let lb1=document.createElement("p");
    //lb1.innerHTML="varianta 1";
    sec4.appendChild(txt5);
    sec4.appendChild(document.createElement("br"));
    //sec3.appendChild(lb1);
    sec4.appendChild(txt6);
    sec4.appendChild(document.createElement("br"));
    sec4.appendChild(txt7);
    sec4.appendChild(document.createElement("br"));
    sec4.appendChild(txt8);

    //let h2 = document.getElementsByTagName("h2");

   // let t = document.querySelector(".asdf");
   // t.style.backgroudColor = "red";
}

document.getElementById("sectiune1").onclick=function(event){
    let sec = document.getElementById("sectiune1");
    if (event.shiftKey) 
    sec.parentNode.removeChild(sec);
}

let param1;

var myVar = setInterval(myTimer, 1000, param1);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}

function imgDel(){
  var images = document.getElementsByTagName('img');
  for (i = 0; i < images.length;i++ ) {
      if (images[i].style.display === "none") {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
  }
  }
  

  
/*
function submitBday() {
  var Bdate = document.getElementById('bday').value;
  var Bday = +new Date(Bdate);

 var azi=new Date();
 var anAzi=azi.getFullYear();
 var lunaAzi=azi.getMonth();
 var ziAzi=azi.getDay();
 var ora=azi.getHours();
 var minut=azi.getMinutes();
 var secunda=azi.getSeconds();

 var vAni=Number(Number(anAzi)-Number(Bday.getFullYear));
 var vLuna=lunaAzi-Bday.getMonth;
 var vZi=ziAzi-Bday.getDay;

 var Q4A ="Aveti " + Number(anAzi) + " ani, "+ (Number(lunaAzi)+1) + " luni, "+ ziAzi + " zile.";
  //var Q4A ="Aveti " + String(vAni) + " ani, "+ String(vLuna) + " luni, "+ String(vZi) + " zile.";
  var theBday = document.getElementById('resultBday');
  theBday.innerHTML = Q4A;
}
*/