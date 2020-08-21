
function choixArticle() {
    let checkBox = document.getElementById("cam1");
    let text = document.getElementById("options");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
