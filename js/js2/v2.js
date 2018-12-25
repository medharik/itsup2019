function calculer() {
    //recuperer les champs  dans le form
var prix=document.getElementById('prix');
var qte=document.getElementById('qte');
var message=document.getElementById('message');

 if (isNaN(prix.value) ||  isNaN(qte.value)) {
     alert("Erreur : Ce n'est pas un nombre")
     
     prix.value =0;
     qte.value=0;
 } else if(prix.value < 0 || qte.value < 0){
    alert("les nombres doivent etre positifs");
    prix.value ="";
    qte.value="";
}
    else{


      //calculer
     tht=prix.value*qte.value

  //afficher
//alert("le tht est : "+tht+" DHS");
message.innerHTML="le tht est : "+tht+" DHS";
 }
   
}