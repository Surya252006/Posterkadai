// Cart and Wishlist Management
class CartManager {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('posterKadai_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('posterKadai_wishlist')) || [];
  }

  // Cart methods
  addToCart(productId, size, frame, finish, quantity = 1) {
    const existingItem = this.cart.find(item =>
      item.productId === productId &&
      item.size === size &&
      item.frame === frame &&
      item.finish === finish
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        productId,
        size,
        frame,
        finish,
        quantity,
        addedAt: new Date().toISOString()
      });
    }

    this.saveCart();
    this.updateCartCount();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.updateCartCount();
  }

  updateCartItemQuantity(index, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(index);
    } else {
      this.cart[index].quantity = quantity;
      this.saveCart();
    }
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => {
      const product = getProductById(item.productId);
      const price = product.prices[item.size][item.frame];
      return total + (price * item.quantity);
    }, 0);
  }

  getCartItems() {
    return this.cart.map(item => {
      const product = getProductById(item.productId);
      const price = product.prices[item.size][item.frame];
      return {
        ...item,
        product,
        unitPrice: price,
        totalPrice: price * item.quantity
      };
    });
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartCount();
  }

  saveCart() {
    localStorage.setItem('posterKadai_cart', JSON.stringify(this.cart));
  }

  // Wishlist methods
  addToWishlist(productId) {
    if (!this.wishlist.includes(productId)) {
      this.wishlist.push(productId);
      this.saveWishlist();
      this.updateWishlistCount();
    }
  }

  removeFromWishlist(productId) {
    this.wishlist = this.wishlist.filter(id => id !== productId);
    this.saveWishlist();
    this.updateWishlistCount();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getWishlistItems() {
    return this.wishlist.map(id => getProductById(id)).filter(Boolean);
  }

  saveWishlist() {
    localStorage.setItem('posterKadai_wishlist', JSON.stringify(this.wishlist));
  }

  // UI updates
  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'inline' : 'none';
    }
  }

  updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
      wishlistCount.textContent = this.wishlist.length;
      wishlistCount.style.display = this.wishlist.length > 0 ? 'inline' : 'none';
    }
  }

  // WhatsApp integration
  generateWhatsAppMessage(orderType = 'cart') {
    let message = `Hi PosterKadai! I want to place an order.\n\n`;

    if (orderType === 'cart') {
      const items = this.getCartItems();
      message += `🛒 Cart Items:\n`;
      items.forEach((item, index) => {
        message += `${index + 1}. ${item.product.title}\n`;
        message += `   Size: ${item.size}, Frame: ${item.frame}, Finish: ${item.finish}\n`;
        message += `   Quantity: ${item.quantity}, Price: ₹${item.totalPrice}\n\n`;
      });
      message += `💰 Total: ₹${this.getCartTotal()}\n\n`;
    } else if (orderType === 'single') {
      // For single product orders
      const productId = arguments[1];
      const size = arguments[2];
      const frame = arguments[3];
      const finish = arguments[4];
      const quantity = arguments[5] || 1;
      const address = arguments[6] || '';

      const product = getProductById(productId);
      const price = product.prices[size][frame];

      message += `🖼️ Product: ${product.title}\n`;
      message += `📐 Size: ${size}, Frame: ${frame}, Finish: ${finish}\n`;
      message += `🔢 Quantity: ${quantity}\n`;
      message += `💰 Price: ₹${price * quantity}\n`;
      if (address) message += `🏠 Address: ${address}\n`;
    }

    message += `\nPlease confirm my order. Thank you!`;

    return encodeURIComponent(message);
  }
}

// Initialize cart manager
const cartManager = new CartManager();

// Make it globally available
window.cartManager = cartManager;
