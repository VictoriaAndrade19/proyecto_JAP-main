document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.querySelector('.products-container');
  
    fetch('categories.json')
      .then(response => response.json())
      .then(data => {
        const products = data.products;
        
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;
          productCard.appendChild(productImage);
  
          const productName = document.createElement('h3');
          productName.textContent = product.name;
          productCard.appendChild(productName);
  
          const productDescription = document.createElement('p');
          productDescription.textContent = product.description;
          productCard.appendChild(productDescription);
  
          const productPrice = document.createElement('p');
          productPrice.textContent = `${product.cost} ${product.currency}`;
          productCard.appendChild(productPrice);
  
          const productSoldCount = document.createElement('p');
          productSoldCount.textContent = `Vendidos: ${product.soldCount}`;
          productCard.appendChild(productSoldCount);
  
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });