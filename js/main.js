const openCalculatriceBouton = document.getElementById('openCalculatrice');
const closeCalculatriceBouton = document.getElementById('closeCalculatrice');
const maCalculatrice = document.getElementById('calculatrice');

const openImbricationListBouton = document.getElementById('openImbrication');
const closeImbricationListBouton = document.getElementById('closeImbrication');
const monImbrication = document.getElementById('liste');

openCalculatriceBouton.addEventListener('click', () => {
    maCalculatrice.showModal();
});

closeCalculatriceBouton.addEventListener('click', () => {
    maCalculatrice.close();
});

openImbricationListBouton.addEventListener('click', ()=>{
    monImbrication.showModal();
});

closeImbricationListBouton.addEventListener('click', () =>{
    monImbrication.close();
});