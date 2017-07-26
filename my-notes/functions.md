# **FUNCTIONS_**

	- Its an object
	- Used to group logic

### ***Constructors***

At its core, its a function that returns objects.

####***Example***

    function AnimalMaker(name){
			    return {
				 speak: function(){
					 console.log('my name is " + name)}
					 }
				}

Using plus(+) to concatenate with  a string it will stringify an object, for example:

    'string' + {} //will return object as a string[object object]

If you want to return the object without it being stringified use a comma(,) instead, for example:

    "string", { } // will return string Object{}