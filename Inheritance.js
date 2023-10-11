// Inheritance.js
class Bird extends Animal {
    makeSound() {
        console.log("Tweet tweet!");
    }
}

let sparrow = new Bird("Sparrow");
sparrow.makeSound();
