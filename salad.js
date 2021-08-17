class Salad {
  constructor(name) {
    this.name = name
  }

  set price() {
    if (this.name === Salad.CAESAR) price = 50
    if (this.name === Salad.OLIVIER) price = 80
  }

  set calory() {
    if (this.name === Salad.CAESAR) calory = 40
    if (this.name === Salad.OLIVIER) calory = 20
  }
}

Salad.CAESAR = "CAESAR ";
Salad.OLIVIER = "OLIVIER";

export default Salad;