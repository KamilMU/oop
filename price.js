class Menu {
  constructor(price) {
    this.menu = []
  }
}

class Product {
  constructor(product) {
    this.product = product;
  }

  getPrice = () => {
    return this.product.price
  }
}

class Hamburger extends Product {
  constructor(product) {
    this.product = product;
  }

  getPrice = () => {
    return this.product.price
  }
}

export { Menu }