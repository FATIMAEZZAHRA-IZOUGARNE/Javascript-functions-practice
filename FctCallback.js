const produits = [ { nom: "Pomme", prix: 3 },
{ nom: "Banane", prix: 2 },
{ nom: "Kiwi", prix: 5 },
{ nom: "Mangue", prix: 8 }];


function filtrerProduits(tableau, callback){
    let result=[];
    for(item of tableau){
        if(callback(item))
            result.push(item);
    }
    return result;
}

function call(item){
    return item.prix<5;
}

const appel=filtrerProduits(produits, call);

appel.forEach(item=>console.log(item));





