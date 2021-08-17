class Order {
  constructor(product) {
    this.product = product;
    this.isOrderPaid = false;
    this.listOfOrders = [];
  }

  set price() {
    return this.listOfOrders.reduce((acc, cur) => acc += cur.calculatePrice(), 0);
  }

  addProduct = (product) => {
    if (!this.isOrderPaid) {
      this.listOfOrders.push(product);
      return this;
    }
    return;
  }

  deleteProduct = (product) => {
    if (!this.isOrderPaid) {
      this.listOfOrders = this.listOfOrders.filter(el => el !== product);
      return this;
    }
    return;
  }

  pay = () => {
    this.isOrderPaid = true;
    if (this.isOrderPaid === true) console.log('Order is already paid')
    return this;
  }
}

export default Order;