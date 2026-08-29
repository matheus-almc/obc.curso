class Product {
    constructor(name, description, price, inStock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }
    addOnStock(quantity) {
        this.inStock += quantity;
    }
    CalculateDiscount(discount) {
        const discountedPrice = this.price - (this.price * discount);
        return discountedPrice;
    }
}

const product1 = new Product("Smartphone", "Um super smartphone", 999.99, 10);
product1.addOnStock(5);
const discountedPrice = product1.CalculateDiscount(0.1);

console.log(product1);
console.log(`Desconto de 10%: $${discountedPrice.toFixed(2)}`);
