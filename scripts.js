const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' }
];

const menuDiv = document.getElementById('menu');

// Função para mostrar os produtos
function showProducts(products) {
    menuDiv.innerHTML = ''; // Limpa o conteúdo atual
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Adiciona a classe para estilização
        productDiv.innerHTML = `
            <img src="${product.src}" alt="${product.name}">
            <p><strong>${product.name}</strong></p>
            <p>Preço: R$${product.price.toFixed(2)}</p>
            <hr>
        `;
        menuDiv.appendChild(productDiv);
    });
}

// Primeiro botão: Mostrar todos os produtos
document.getElementById('showAll').addEventListener('click', () => {
    showProducts(menuOptions);
});

// Segundo botão: Aplicar 10% de desconto (usando map)
document.getElementById('applyDiscount').addEventListener('click', () => {
    const discountedProducts = menuOptions.map(product => {
        return {
            ...product,
            price: product.price * 0.90 // Aplica o desconto de 10%
        };
    });
    showProducts(discountedProducts);
});

// Terceiro botão: Somar o valor original (usando reduce)
document.getElementById('totalPrice').addEventListener('click', () => {
    const totalPrice = menuOptions.reduce((total, product) => total + product.price, 0);
    menuDiv.innerHTML = `<p>O valor total dos produtos é: R$${totalPrice.toFixed(2)}</p>`;
});

// Quarto botão: Filtrar produtos veganos (usando filter)
document.getElementById('filterVegan').addEventListener('click', () => {
    const veganProducts = menuOptions.filter(product => product.vegan);
    showProducts(veganProducts);
});
