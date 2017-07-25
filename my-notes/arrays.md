# __ARRAYS___

 - Just like an object, it's a container
 - It's ordered: tend to be used for ordered stuff
 - Can be nested
 - Can save any data type as a value
 - Its an object
 
### ___Array vs Objects___

 You would choose an Array:
	 
	 - if you wanted things to be ordered
	 - If you don't need named properties
	 - If you want to use the array methods

Array syntax:

    var box = [];
    box[0] = true;
    box[1] = 'meow';
    box.push({hello: 'goodbye'})
     
    var i = 0;
    box[i] //returns true
    box[1] //returns 'meow'
    box.pop() // removes last index and returns it, 
     in this case {hello: 'goodbye'}
    
### ___Iteration___

    var box = [];
    box['size'] = 9;
    box['0'] = 'meow'
    for (var k in box){
		    console.log(k) // will return array properties, 
		     usually being an index 
		     console.log(box[k]) // will return values.
		    
		   }

We use the `for (i=0; i<something; i==) in arrays because we don't care about the names in arrays but the values. So we get access them via their indices.`

[the-rules
](https://github.com/arnodhis/from-fundamentals-to-functional-JS-notes/blob/master/my-notes/the-rules.JPG)
      
      