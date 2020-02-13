// Class
class Animal {
    // Property
    species;

    // Method
    constructor(species, name) {
        this.species = species.toLowerCase();
        this.name = name;
        this.sound = "Woof";
    }

    speak() {
        console.log(this.sound);
    }

    getName() {
        return this.name;
    }
}

let dog = new Animal("dog", "Riçıt");

dog.speak();

let dogName = dog.getName();

console.log(dogName);

class Horse extends Animal {
    speak() {
        super.speak();
    };
}

