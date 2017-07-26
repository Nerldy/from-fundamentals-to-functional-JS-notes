function AnimalMaker(name) {
    return {
        speak: function () {
            console.log("my name is  " + name);
        },
        name: name
    };
}

const animalNames = ['sheep', 'liger', 'big bird'];
let animalObject = [];
for (var i = 0; i < animalNames.length; i++) {
    animalObject.push(AnimalMaker(animalNames[i]));
}

console.log(animalObject);

for (var j = 0; j < animalObject.length; j++) {
    console.log(animalObject[j].speak())
}