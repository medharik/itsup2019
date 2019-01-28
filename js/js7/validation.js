message=""
function validerMatricule(){
 var  m=  document.getElementById('matricule');
 var mmat=/^[0-9]{1,6}[-/ ][a-zA-Z]{1}[-/ ]{1}[0-9]{1,2}$/
 if(!mmat.test(m.value)){
message +="Matricule de voiture invalide<br>";
 }

}
function validerPasse(){
 var  p=  document.getElementById('p');
 var  c=  document.querySelector('#c');
 var mp=/^[a-z]{4,}[0-9@._]{1,}$/
 if(!mp.test(p.value)){
message +="Mot de passe  invalide<br>";
 }
 if(c.value !="" && p.value!=c.value){
    message +="les 2 mots de passe ne correspondent pas <br>";

 }

}
function validercategorie(){
   cat= document.getElementById('cat');
   i=cat.selectedIndex;
  alert(cat.options[i].innerHTML)
}

function validerTout(){
    f=document.querySelector('form');
    e=document.getElementById('erreur');
validerMatricule();
validerPasse();
if(message==""){
f.submit();
}else {
e.innerHTML=message;
message=""
}

}

function validerCin(){
    
    //recuperer  le champs id="cin"
           cin= document.getElementById('cin');
    //creer le modele regex du cin
    modeleCin=/^[a-z]{1,2}[0-9]{6}$/
    //on test si la valeur du cin corresponds au modele

    if(!modeleCin.test(cin.value)){
alert('cin invalide');
    }
}