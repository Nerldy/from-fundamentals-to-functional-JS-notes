# **CLOSURE_**

It happens when you return a function from inside of a function & that inner function retains access to the scope.

##### ***Example***

    var closureAlert = function(){
	    var x = "Help I'm a variable stuck in a closure";
	    var alerter = function(){
		    alert(x);
		};
		alerter();
	};
	 
	 closureAlert() //will return alert(x)


### **Recipe for Creating Closure**

>- Create your parent function  

> >***Example:*** 
> >checkscope function:
>>> `function checkscope() {
}`

 >- Define some variables in the parent's local scope

>> ***Example:*** 
>> var innerVar = "local scope":
>>>> `function checkscope() {
	var innerVar = "local scope";
}`

>- Define a function inside the function
>> ***Example:*** 
>>innerFunc function:
>>> `function checkscope() {
    var innerVar = "local scope";
    function innerFunc() {}
   }`

>- Return a function from inside the parent function ***WITHOUT CALLING IT***
>> ***Example:*** 
>>where it says **"return innerFunc"**:
>>>`function checkscope() {
    var innerVar = "local scope";
    function innerFunc() { return innerVar; }
    return innerFunc;
}`