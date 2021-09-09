// CONSTANTS

const COLA_PRICE = 50;
const COLA_CALORIES = 40;

const COFEE_PRICE = 80;
const COFEE_CALORIES = 20;

const CAESAR_PRICE = 100;
const CAESAR_CALORIES = 20;

const OLIVIER_PRICE = 50;
const OLIVIER_CALORIES = 80;

const SMALL_SIZE_PRICE = 50;
const SMALL_SIZE_CALORIES = 20;

const BIG_SIZE_PRICE = 100;
const BIG_SIZE_CALORIES = 40;

const CHEESE_STUFFING_PRICE = 10;
const CHEESE_STUFFING_CALORIES = 20;

const SALAD_STUFFING_PRICE = 20;
const SALAD_STUFFING_CALORIES = 5;

const POTATO_STUFFING_PRICE = 15;
const POTATO_STUFFING_CALORIES = 10;

// CLASSES

// PRODUCT
class Product {
  constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

// DRINK
class Drink extends Product {
  static COLA = "COLA ";
  static COFEE = "COFEE";
  constructor(name, price, calories) {
    super(name, price, calories);
  }
}

// SALAD
class Salad extends Product {
  static CAESAR = "CAESAR";
  static OLIVIER = "OLIVIER";
  constructor(name, price, calories) {
    super(name, price, calories);
  }
}

// HUMBURGER
class Hamburger extends Product {
  static SIZE_SMALL = 'small';
  static SIZE_LARGE = 'large';
  static STUFFING_CHEESE = 'cheese';
  static STUFFING_SALAD = 'salad';
  static STUFFING_POTATO = 'potato';

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

// INSTANCES

const cola = new Drink(Drink.COLA, COLA_PRICE, COLA_CALORIES);
const cofee = new Drink(Drink.COFEE, COFEE_PRICE, COFEE_CALORIES);

const caesar = new Salad(Salad.CAESAR, CAESAR_PRICE, CAESAR_CALORIES);
const olivier = new Salad(Salad.OLIVIER, OLIVIER_PRICE, OLIVIER_CALORIES);

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.calculatePrice(SMALL_SIZE_PRICE, CHEESE_STUFFING_PRICE)
hamburger.calculateCalories(SMALL_SIZE_CALORIES, CHEESE_STUFFING_CALORIES);

const order = new Order();
order
  .addProduct(cofee)
  .addProduct(hamburger)
  .addProduct(olivier)
  .deleteProduct(cofee)
  .pay()
  .deleteProduct(cofee)
order.calculatePrice();
order.calculateCalories();

console.log(order.price, 'order price')
console.log(order.calories, 'order calories')
