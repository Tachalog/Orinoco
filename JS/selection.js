/* Ce petit bout de code fonctionne
var btn = document.querySelectorAll('button');
btn = confirm("continuez vos achats ?");
*/


var btnPanier = document.querySelectorAll('button');

for (var i = 0; i < btnPanier.length; i++){

    var button = btnPanier[i];
    button.addEventListener('click', function (e){

        window.alert('clique sur le bouton')
    })
}



