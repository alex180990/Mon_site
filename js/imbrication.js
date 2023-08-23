const imbrication = {cut:[],mat:[],qty:[],buy:[],scrap:[]};

const addline = document.getElementById("addline");
const disply = document.getElementById('disply');
const cutliste = document.getElementById('cutliste');
const message = `<p class="fw-lg">Aucune imbrication trouvée !</p>`

function inchesToPixels(inches) {
    return inches * conversionRatio;
}

function perte(buy, cut, qty){
    const intAchat = parseInt(buy);
    const intDecoupe = parseInt(cut);
    const intQantite = parseInt(qty);

    return intAchat - (intDecoupe * intQantite);
}

function display() {
    const disply = document.getElementById('disply');
    const message = "Aucune donnée à afficher.";
    let content = '';

    for (let i = 0; i < imbrication.mat.length; i++) {
        const conversionRatioBuy = 763 / imbrication.buy[i];

        content += `<div>
            <div id="achat" class="achat">${imbrication.mat[i]} ${imbrication.buy[i]}</div>
            <div class="flex-1" style="margin-bottom: 2px;">`;

        for (let j = 0; j < imbrication.qty[i]; j++) {
            content += `<div class="coupe" style="width:${(conversionRatioBuy * imbrication.cut[i]) + 'px'};">${imbrication.cut[i]}</div>`;
        }

        if (imbrication.scrap[i] !== 0) {
            content += `<div class="perte" style="width:${(conversionRatioBuy * imbrication.scrap[i]) + 'px'};">${imbrication.scrap[i]}</div>`;
        }

        content += `<div><button class="btn_remove" data-index="${i}">X</button></div>
            </div>
        </div>`;
    }

    if (imbrication.mat.length === 0) {
        disply.innerHTML = message;
    } else {
        disply.innerHTML = content;
    }

    const removeButtons = document.getElementsByClassName('btn_remove');
    for (let k = 0; k < removeButtons.length; k++) {
        const removeButton = removeButtons[k];
        removeButton.onclick = (event) => {
            const indexToRemove = event.target.dataset.index;
            removeElement(indexToRemove);
        }
    }
}


function removeElement(index) {
    imbrication.mat.splice(index, 1);
    imbrication.cut.splice(index, 1);
    imbrication.qty.splice(index, 1);
    imbrication.buy.splice(index, 1);
    imbrication.scrap.splice(index, 1);
    display();
}

window.onload = (event) => {
    if(imbrication.mat.length === 0){
        disply.innerHTML = message;
    }

    addline.onclick = () => {
        let profiler = document.getElementById('mat').value;
        let decoupe = document.getElementById('cut').value;
        let quantite = document.getElementById('qty').value;
        let achat = document.getElementById('buy').value;

        if(profiler === '' || decoupe === '' || quantite === '' || achat === ''){
            alert('Tous les champs doivent être utilisés !')
            document.getElementById('mat').value = '';
            document.getElementById('cut').value = '';
            document.getElementById('qty').value = '';
            document.getElementById('buy').value = '';

        }else{
            imbrication.mat.push(profiler);
            imbrication.cut.push(decoupe);
            imbrication.qty.push(quantite);
            imbrication.buy.push(achat);
            imbrication.scrap.push(perte(achat, decoupe, quantite));

            document.getElementById('mat').value = '';
            document.getElementById('cut').value = '';
            document.getElementById('qty').value = '';
            document.getElementById('buy').value = '';
        }

        display();
    };
};