let text = document.getElementById('p-div');
let image = document.getElementById('img-div');

const addpgButton = document.getElementById('p-button');
const addimgButton = document.getElementById('img-button');

function addNewParagraph () {
    image.style.display = "none";
    text.style.display = "block";

    let newtext = document.createElement('p');
    newtext.innerHTML = "sigma ohio skibidi toilet fanum tax grimace shake rizz";
    text.appendChild(newtext);
}

addpgButton.onclick = addNewParagraph;


function addNewImage () {
    image.style.display = "block";
    text.style.display = "none";

    let newImg = document.createElement('img');
    newImg.src = "images/MKYSIM.jpg";
    image.appendChild(newImg);
}

addimgButton.onclick = addNewImage;