let selectCam = document.querySelector('input');

selectCam.addEventListener('click', function (e) {
    e.preventDefault();
});

selectCam.onchange = function () {
    if (selectCam.checked) {
        selectCam.textContent = "Appareil sélectionné";
    } else {
        selectCam.textContent = "Merci de sélectionner un produit.";
    }
};