//scopes
/*var b = 2;// global variable
function foo2(){
	var b = 7;// local variable;
	console.log(b);
}
console.log(b);
foo2();
*/





//closures

/*var c;
var b = 2;
function foo(a){	
	c = a + b;
	return c;
}
foo(5);*/


//Prototype

function Rectangle(w,h){
	this.width = w;
	this.height = h;
}
Rectangle.prototype.getArea = function(){
		return this.width * this.height
}
Rectangle.prototype.valueOf = function(){
	return this.width * this.height
}

Rectangle.prototype.getPer = function(){
	return 2*(this.width + this.height)
}

Rectangle.prototype.toString = function(){
	return 'widh = ' + this.width + ' height = ' + this.height;
}

var r1 = new Rectangle(100,50);
console.log(r1);
console.log(r1.getArea() + ' area');


var r2 = new Rectangle(10,500);
console.log(r2);
console.log(r2.getPer() + ' per');

var r3 = new Rectangle(10,50);
console.log(r3);
console.log(r3.getArea() + ' area');
console.log(r3.getPer() + ' per');

document.write(r3);
document.write(r3 - r2);






//


