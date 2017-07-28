//blab

/*Write a function, nonsense that takes an input string. This function contains another function, blab which alerts string and is immediately called inside the function nonsense. blab should look like this inside of the nonsense function:
*
* In your function, nonsense, change the immediate call to a setTimeout so that the call to blab comes after 2 seconds. The blab function itself should stay the same as before.
*
*Now, instead of calling blab inside of nonsense, return blab (without invoking it). Call nonsense with some string and store the returned value (the blab function) in a variable called blabLater. Call nonsense again with a different string and store the returned value in a variable called blabAgainLater.
*
* Inspect blabLater and blabAgainLater in your console. Call them (they are functions!) and see what happens!

Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.*/

const nonesense = function (string) {
    const blab = function () {
        alert(string);
    };
    setTimeout(blab, 2000);
    return blab;
};


const blabLater = nonesense("bla bla bla");
const blabAgainLater = nonesense("Kwa kwakwakkwaaaaaaaa");


//First & Last Name
console.log(blabLater());
console.log(blabAgainLater());


/*Write a function with a closure. The first function should only take one argument, someone's first name, and the inner function should take one more argument, someone's last name. The inner function should console.log both the first name and the last name.*/

const namesFunc = function (firstName) {
    const lastName = function (lastName) {
        console.log(firstName + " " + lastName);
    };

    return lastName;
};

const firstNameFarmer = namesFunc("Farmer");
firstNameFarmer("Brown");

//Story Writer

/*Create a storyWriter function that returns an object with two methods. One method, addWords adds a word to your story and returns the story while the other one, erase, resets the story back to an empty string. Here is an implementation:*/

const storyWriter = function () {
    let words = '';
    return {
        addWords: function (text) {
            return words += " " + text;
        },
        erase: function () {
            return "";
        }
    };
};


