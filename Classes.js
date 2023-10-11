// Classes.js
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some generic sound.");
    }
}

let dog = new Animal("Dog");
dog.makeSound();
