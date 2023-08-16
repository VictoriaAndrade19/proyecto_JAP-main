document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.querySelector('.products-container');
    const URL_PRODUCTOS = "https://japceibal.github.io/emercado-api/cats_products/101.json";

    fetch(URL_PRODUCTOS)
      .then(response => response.json())
      .then(data => {
        const products = data.products;
        
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');

          const productSoldCount = document.createElement('small');
          productSoldCount.classList.add('product-sold');
          productSoldCount.textContent = `Vendidos: ${product.soldCount}`;
          productCard.appendChild(productSoldCount);
  
          const productPrice = document.createElement('p');
          productPrice.classList.add('product-price');
          productPrice.textContent = `${product.cost} ${product.currency}`;
          productCard.appendChild(productPrice);
          const productDescription = document.createElement('p');
          productDescription.classList.add('product-desc');
          productDescription.textContent = product.description;
          productCard.appendChild(productDescription);
  
          const productName = document.createElement('h3');
          productName.classList.add('product-name');
          productName.textContent = product.name;
          productCard.appendChild(productName);

          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;
          productCard.appendChild(productImage);
  
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error:', error));
  });