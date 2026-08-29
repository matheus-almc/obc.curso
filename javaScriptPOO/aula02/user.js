class User {
    constructor(name, email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    status(email, password) {
        if (this.email === email && this.password === password) {
            console.log(`Usuário: ${this.name} Está logado`);
        } else {
            console.log("Invalid email or password");
        }
    }
}

const matheus = new User("Matheus", "matheus@example.com", "password123");
const sabrina = new User("Sabrina", "sabrina@example.com", "password456");
console.log(matheus);
matheus.status("matheus@example.com", "password123");
console.log(sabrina);
sabrina.status("sabrina@example.com", "password459");


