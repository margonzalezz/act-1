class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      if (this.products.some(p => p.code === product.code)) {
        throw new Error('ERROR. Ya existe un producto con el mismo código');
      }
  
      const newProduct = { id: this.products.length + 1, ...product };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      return product;
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  console.log('Initial products:', productManager.getProducts()); 
  
  const newProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  };
  
  const addedProduct = productManager.addProduct(newProduct);
  console.log('Product added:', addedProduct);
  console.log('Products after adding:', productManager.getProducts()); 
  
  // Intentar agregar un producto con el mismo código tira error
  try {
    productManager.addProduct(newProduct);
  } catch (error) {
    console.error('Error:', error.message); 
  }
  
  // Obtener un producto por ID
  const productId = addedProduct.id;
  const foundProduct = productManager.getProductById(productId);
  console.log('Product found by ID:', foundProduct);
  