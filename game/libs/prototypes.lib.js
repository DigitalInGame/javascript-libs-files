//prototypes.js

//create news prototypes

//new Error
//let ErrorIDFormat=Error;
ErrorID.prototype=Error.prototype;
//ErrorID.prototype.constructor=ErrorID;


//het val in twi index
String.prototype.valueIn=function (a,b){ 
return this.substr (a,b) 
}
String.prototype.valueLength=function(a,b){
return this.substr(a,b).length;
}

//compare self string with another
String.prototype.compare=function(comparater){
return eval(this)==comparater?true:false;
}

//compare self string with another
String.prototype.equals=function(comparater){
return eval(this)==comparater?true:false;
}

//get device orientation
Window.prototype.deviceRotation=function (){
return window.orientation;
}

//loop self function 
Window.prototype.loop=function  (){
requestAnimationFrame(eval (arguments.callee.caller));

}

//mathematic abs number to positive
Math.toPositive=function  (n){
return Math.abs (n);
}

//number to negative
Math.toNegative=function  (n){
return (-Math.abs (n));
}