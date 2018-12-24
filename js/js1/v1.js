function valider() {
//recuperer le(s) champs dans le document (dom)
var  champs_age = document.getElementById('age');
var  div_message =      document.getElementById('message');
if (champs_age.value <18) {
    //alert("tu es Mineur");
    div_message.innerHTML="<marquee>Tu es mineur</marquee>";
} else {
    div_message.innerHTML="<marquee>Tu es majeur</marquee>";

}

}