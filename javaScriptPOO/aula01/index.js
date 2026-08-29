// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "magic"],
//     author: {
//         name: "cristopher paolini",
//     },
//     addOnStock(quantity) {
//         this.inStock += quantity;
//     },
// }

function Book(title, pages, tags, author) {
    this.title = title;
    this.pages = pages;
    this.published = false;
    this.inStock = 0;
    this.tags = tags;
    this.author = author;
    this.addOnStock = function(quantity) {
        this.inStock += quantity;
    }
    this.save = function() {
        console.log("Book saved!");
    }
}

const author = {
    name: "cristopher paolini",
}
const tags = ["fantasy", "adventure", "magic"];

const eragon = new Book("Eragon", 468, tags, author);

console.log(eragon)

const eldest = new Book("Eldest", 704, tags, author);

console.log(eldest) 