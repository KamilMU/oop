class Drink {
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

Drink.COLA = "COLA ";
Drink.COFE = "COFE";

colaPrice = 50;
colaCallory = 40;
cofeCalory = 20;
cofePrice = 80;
const cola = new Drink(Drink.COLA);
const cofe = new Drink(Drink.COFE)
cola.price = colaPrice;
cola.calory = colaCalory;
cofe.price = cofePrice;
cola.calory = colaCalory;