const notes = [12, 8, 15, 17, 9, 14, 19];

function moyenne(){
  const somme=notes.reduce(function(acc,valeur){
    return acc+valeur;
  }, 0);
  return somme/notes.length;

}

const notesValides=notes.filter(function(item){
    return item>=10;
});

const afficher= ()=> {
    console.log("Les notes valides sont : ",notesValides);
    console.log("La moyenne des notes est :",moyenne());   
}

afficher();






