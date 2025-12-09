const prenoms=["fatimaezzahra","mouna","yassin","nour"];

function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}

const capitalizePrenoms=prenoms.map(function(prenom){
    return capitalize(prenom);
}) 

const afficherPrenoms=() =>{
    console.log(capitalizePrenoms)
}

afficherPrenoms();
