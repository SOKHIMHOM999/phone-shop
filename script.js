
//Data
// const productsData = [
//     { brand: 'Apple', category: 'phones', name: 'iPhone 15', des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'img/product01.png' },
//     { brand: 'Samsung', category: 'phones', name: 'Galaxy S24', des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'img/product01.png' },
//     { brand: 'Anker', category: 'accessories', name: 'Anker Power Bank', des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'img/product01.png' },
//     { brand: 'Beats', category: 'accessories', name: 'Beats Headphones', des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'img/product01.png' },
//     { brand: 'Apple', category: 'tablets', name: 'iPad Pro', des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: 'img/product01.png' }
// ];

const brands = ['Apple', 'Samsung', 'Anker', 'Beats'];
const categories = ['phones', 'tablets', 'accessories'];
const productsData = [];

for (let i = 1; i <= 150; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const name = `${brand} Product ${i}`;
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Product number ${i}.`;
    const image = `img/product${String(i % 5 + 1).padStart(2, '0')}.png`; // Rotate through 5 images

    productsData.push({ brand, category, name, des: description, image });
}




//logic
let selectedBrand = 'all';
let selectedCategory = 'all';

function setCategory(category) {
    selectedCategory = category;
    filterProducts();
    updateActiveButton();
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === selectedCategory) {
            button.classList.add('active');
        }
    });
}
function selectBrand(brand) {
    // Call your filter function with the selected brand
    selectedBrand = brand;  // Store the selected brand
    filterProducts();
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('productList');

    // Clear previous products
    productList.innerHTML = '';

    productsData.forEach(product => {
        const brandMatch = (selectedBrand === 'all' || product.brand === selectedBrand);
        const categoryMatch = (selectedCategory === 'all' || product.category === selectedCategory);
        const searchMatch = product.name.toLowerCase().includes(searchInput);

        if (brandMatch && categoryMatch && searchMatch) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `<img src="${product.image}" alt="img"/><h3>${product.name}</h3><p>${product.des}</p>`;
            productList.appendChild(productDiv);
        }
    });
}

// Initial load
filterProducts();