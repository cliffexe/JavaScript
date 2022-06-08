// Busca o elemento com a ID output e o oculta na página
let elemOutput = document.getElementById('output').style.visibility = 'hidden';

// Busca o elemento com a ID realInput
let elemInput = document.getElementById('reaisInput');

// Função usada para converter valores
let converterValores = (e) => {
    // Busca o elemento com a ID output e o exibe na página
    document.getElementById('output').style.visibility = 'visible';
    let real = e.target.value; // Lê o valor digitado no <input>
    let valorDolar = real * 0.18; // Converte o valor de real para dolar
    let valorEuro = real * 0.16; // Converte o valor de real para euro
    let valorCoroa = real * 1.61; // Converte o valor de real para coroa sueca

    // Exibe os valores convertidos na página web
    document.getElementById('dolarOutput').innerHTML = valorDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    document.getElementById('euroOutput').innerHTML = valorEuro.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
    document.getElementById('coroaOutput').innerHTML = valorCoroa.toLocaleString('pt-BR', { style: 'currency', currency: 'SEK' });
}

// Adiciona o evento ao elemento <input>
elemInput.addEventListener('input', converterValores);