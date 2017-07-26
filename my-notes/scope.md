# **SCOPE_**

Where variables exist/have meaning.

### *Local Scope*
It's only created when a variable is created inside a function.

    var func = function(){
	    var local = true; //local scope
	    } 
	    
	console.log(local) //this will print an error  

### *Global Scope*

Variable can be accessed anywhere in the document.

### *Parent vs Child Scope*

 Children have access to the parent's variables but the parents don't have access to the child's scope.
 
***You don't wanna put your hands inside the blender***

    var g = "global";

	function blender(fruit) {
	    var b = fruit;
	    var y = "yoghurt";

    function bs() {
        console.log(b + ' and ' + y + ' makes ' + b + ' swirl');
    }

	    bs();
	} 
	bs(); //this will not run cause bs() is local to blender().

	blender("blueberry");

### *Precedence*

Local variable always wins.