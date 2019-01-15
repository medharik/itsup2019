function validerTout(){
np=document.getElementById('np');
mnp=/^[a-z]{2,} [a-z]{2,}/
if (! mnp.test(np.value)) {
    alert('nom prenom incorrects')
}
}


function filiere(){
b=document.getElementById('bac')
n=document.getElementById('nbac');
fbac=document.getElementById('fbac')
fnbac=document.getElementById('fnbac');
if(b.checked){
fbac.className="montrer"
fnbac.className="cacher"
}
if(n.checked){
    fbac.className="cacher"
    fnbac.className="montrer"
}
}