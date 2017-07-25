// https://github.com/bgando/object-exercises/

// Objects exercise

const ANIMAL = {};
ANIMAL.username = "piggy";

ANIMAL['tagline'] = "eat all you can";

const NOISES = [];
ANIMAL['noises'] = NOISES;

let counter = 1;
for (let prop in ANIMAL) {
    console.log(prop);
    if (prop === 'username') {
        console.log("Hi my name is " + ANIMAL.username);

    }
    if (prop === 'tagline') {
        console.log("I like to say " + ANIMAL.tagline);
    }

    counter++;
}
console.log("The for in loop was looped " + counter + ' times');

