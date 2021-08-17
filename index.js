class Product {
  constructor(name) {
    this.name = name;
    this.price = 0;
    this.calories = 0;
  }

  setPrice(productPrice) {
    this.price = productPrice
  }

  setCalories(productCalories) {
    this.calories = productCalories
  }
}

// DRINK
class Drink extends Product { }

Drink.COLA = "COLA ";
Drink.COFE = "COFE";

const colaPrice = 50;
const colaCalories = 40;

const cofePrice = 80;
const cofeCalories = 20;

const cola = new Drink(Drink.COLA);
const cofe = new Drink(Drink.COFE)

cola.setPrice(colaPrice);
cola.setCalories(colaCalories);
cofe.setPrice(cofePrice);
cofe.setCalories(cofeCalories);

// SALAD
class Salad extends Product { }

Salad.CAESAR = "CAESAR ";
Salad.OLIVIER = "OLIVIER";

const caesarPrice = 100;
const caesarCalories = 20;

const olivierPrice = 50;
const olivierCalories = 80;

const caesar = new Salad(Drink.CAESAR);
const olivier = new Salad(Drink.OLIVIER);

caesar.setPrice(caesarPrice);
caesar.setCalories(caesarCalories);

olivier.setPrice(olivierPrice);
olivier.setCalories(olivierCalories);

// HUMBURGER
class Hamburger extends Product {
  constructor(size, stuffing) {
    super();
    this.size = size;
    this.stuffing = stuffing
  }

  calculatePrice = (sizePrice, stuffingPrice) => {
    this.price = sizePrice + stuffingPrice;
  }

  calculateCalories = (sizeCalories, stuffingCalories) => {
    this.calories = sizeCalories + stuffingCalories;
  }
}

Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'large';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

const smallSizePrice = 50;
const smallSizeCalories = 20;

const bigSizePrice = 100;
const bigSizeCalories = 40;

const cheeseStuffingPrice = 10;
const cheeseStuffingCalories = 20;

const saladStuffingPrice = 20;
const saladStuffingCalories = 5;

const potatoStuffingPrice = 15;
const potatoStuffingCalories = 10;

hamburger.calculatePrice(smallSizePrice, cheeseStuffingPrice)
hamburger.calculateCalories(smallSizeCalories, cheeseStuffingCalories);

// ORDER
class Order {
  constructor() {
    this.isOrderPaid = false;
    this.listOfOrders = [];
    this.price = 0;
    this.calories = 0;
  }

  calculatePrice() {
    this.price = this.listOfOrders.reduce((acc, cur) => acc += cur.price, 0);
  }

  calculateCalories() {
    this.calories = this.listOfOrders.reduce((acc, cur) => acc += cur.calories, 0);
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
    if (this.isOrderPaid) console.log('Order is already paid')
    return this;
  }
}

const order = new Order();
order
  .addProduct(cofe)
  .addProduct(hamburger)
  .addProduct(olivier)
  .deleteProduct(cofe)
  .pay()
  .deleteProduct(cofe)
order.calculatePrice();
order.calculateCalories();

console.log(order.price, 'order price')
console.log(order.calories, 'order calories')
