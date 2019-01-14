memoire="";

function validerCin(){
var cin=document.getElementById('cin');
var mcin=/^[a-zA-Z]{1,2}[0-9]{6}$/;

if(!mcin.test(cin.value)){
memoire +="Cin incorrect<br>";
cin.style.color='red'
cin.focus();

}else{
  cin.style.color='black'  
}

}

function validerEmail(){

    var email=document.getElementById('email');    
    var memail=/^[a-z]{4,}[a-z0-9._]{0,}@itsup.ma$/;
    
    if(!memail.test(email.value)){
    memoire +="Email incorrect<br>";
    }
    
}

function validerTout(){
   var message=document.getElementById('message');
   var f=document.querySelector('form');
validerCin();
validerEmail();
if(memoire != ""){
message.innerHTML=memoire;
memoire="";
}else{
f.submit();
}

}