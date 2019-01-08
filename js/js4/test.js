function corriger(){
    alert(Math.random();
var  n1=document.getElementById('n1');
var  n2=document.getElementById('n2');
var  r=document.getElementById('r');
var image =document.querySelector('img');
if(n1.value!="" && n2.value!="" && !isNaN(n1.value) && !isNaN(n2.value) ){

   var  vn1=eval(n1.value);
   var  vn2=parseFloat(n2.value);
   var  vr=parseFloat(r.value);//valeur de la r4eponse du user
    var somme =vn1+vn2;
    if(vr==somme){
     image.src="images/smiley-gentil.jpg";

    
    }else {
        image.src="images/smiley-mechant.jpg";

    }
    image.className='monter';
}else{
    alert("tous les champs sont requis et doivent etre numeriques");
    image.className='cacher';
}


}