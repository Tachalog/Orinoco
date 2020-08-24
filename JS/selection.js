// Création d'un prototype objet

let eltArticle = {
    init:function(titre, prix) {
        this.titre = titre;
        this.prix = prix;
    },

    decrire: function () {
        var description = this.titre + " " + this.prix + ".";
        return description;
    },
};

//Vérification du retour des valeurs du prototype

let eltCam1 = Object.create(eltArticle);
eltCam1.init("Appareil photo de la marque Prontor", "150 euros");
let eltCam2 = Object.create(eltArticle);
eltCam2.init("Appareil photo vintage en noir et blanc", "150 euros");
let eltCam3 = Object.create(eltArticle);
eltCam3.init("Appareil photo de la marque Eastman Kodak", "150 euros");
let eltCam4 = Object.create(eltArticle);
eltCam4.init("Appareil photo de la marque MD Rokkor", "150 euros");
let eltCam5 = Object.create(eltArticle);
eltCam5.init("Appareil photo de la marque Samsung", "150 euros");

console.log(eltCam1.decrire());
console.log(eltCam2.decrire());
console.log(eltCam3.decrire());
console.log(eltCam4.decrire());
console.log(eltCam5.decrire());



let titreArticle = document.getElementsByTagName("h3");

for (valeur of titreArticle) {
    
    console.log(titreArticle);
}


let btn = document.querySelector("button");

btn.onclick=function(){
    alert("Bouton cliqué!")
};