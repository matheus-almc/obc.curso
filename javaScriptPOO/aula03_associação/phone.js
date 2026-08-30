class phone {
  constructor(number, type) {
    this.number = number;
    this.type = type;
  }

  fullPhone() {
    return `Número: ${this.number}, Tipo: ${this.type}`;
  }
}

module.exports = phone;