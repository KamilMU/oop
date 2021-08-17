class Product {
  constructor(name) {
    this.name = name;
    this.price = 0;
    this.calory = 0;
  }

  set price(productName) {
    this.price = productName
  }

  set calory(productName) {
    this.calory = productName
  }
}

// DRINK
class Drink extends Product { }

Drink.COLA = "COLA ";
Drink.COFE = "COFE";

const colaPrice = 50;
const colaCallory = 40;
const cofeCalory = 20;
const cofePrice = 80;

const cola = new Drink(Drink.COLA);
const cofe = new Drink(Drink.COFE)
cola.price = colaPrice;
cola.calory = colaCalory;
cofe.price = cofePrice;
cola.calory = colaCalory;

// SALAD
class Salad extends Product { }

Salad.CAESAR = "CAESAR ";
Salad.OLIVIER = "OLIVIER";

const caesarPrice = 100;
const caesarCallory = 20;
const olivierPrice = 50;
const olivierCalory = 80;

const caesar = new Salad(Drink.CAESAR);
const olivier = new Salad(Drink.OLIVIER)
caesar.price = caesarPrice;
caesar.calory = caesarCalory;
olivier.price = olivierPrice;
caesar.calory = caesarCalory;

// HUMBURGER
class Hamburger extends Product {
  constructor(size, stuffing) {
    super();
    this.size = size;
    this.stuffing = stuffing
  }

  get size() {
    return this.size;
  }

  get stuffing() {
    return this.stuffing;
  }

  calculatePrice = (sizePrice, stuffingPrice) => {
    console.log(sizePrice + stuffingPrice, 'hamb price'); 
    return sizePrice + stuffingPrice
  }

  calculateCalories = (sizeCalory, stuffingCalory) => {
    console.log(sizeCalory + stuffingCalory, 'hamb calory');
    return sizeCalory + stuffingCalory
  }
}

Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'large';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

const smallSizePrice = 50;
const smallSizeCalory = 20;

const bigSizePrice = 100;
const bigSizeCalory = 40;

const cheeseStuffingPrice = 10;
const cheeseStuffingCalory = 20;

const saladStuffingPrice = 20;
const saladStuffingCalory = 5;

const potatoStuffingPrice = 15;
const potatoStuffingCalory = 10;

hamburger.calculateCalories(smallSizeCalory, cheeseStuffingCalory)