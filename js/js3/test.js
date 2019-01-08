function calculer_tht(){
//recuperation des element depuis le DOM HTML (tag,id,class,..)
var cprix=document.getElementById('prix');
var cqte=document.querySelector('#qte');
var div_resultat=document.querySelector('#resultat');
//verification du champs vide
if (cprix.value.trim()=="") {
    alert("le prix est requis");
    cprix.className="ko";
}else if(qte.value.trim()==""){
alert("qte est requis")
}else if(isNaN(cprix.value.trim())) {
alert("le prix doit etre numerique")

}else if(isNaN(cqte.value.trim() )){
alert("la qrte doit etre numerique")
}else{
    //tout est ok
    cprix.className="ok";
    var tht=eval(cprix.value)*parseFloat(cqte.value);
    div_resultat.innerHTML="le total hors taxe est "+tht+" dhs";
}

}