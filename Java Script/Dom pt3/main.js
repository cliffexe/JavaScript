// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

//Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML = 'eustacio are behind you');

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontsize = 'x-large');

// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

// Método querySelectorAll
let listali = document.querySelectorAll('li');
for (i = 0; i < listali.length; i++) {
    listali[i].style.border = '1px solid #0000FF';
    listali[i].style.padding = '3px';
}
console.log(listali);

// Busca por id
let myLi = document.querrySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));