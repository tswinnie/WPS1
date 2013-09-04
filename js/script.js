/*
console.log("Hello World");
var firstName = "Tyrone";
var lastName = "Swinnie";
var yearBorn = 1986;
var currentYear = 2013;
var age = currentYear - yearBorn;
console.log("My age is " + age);
console.log(firstName + " " + lastName);//this is how to add comments and this is done the same as flash
*/
var kidHeight = 40;//in inches
var rideHeight = 50;
var parentWith = false;
var h = "50"
var haveAte  = true;


if(kidHeight < rideHeight && parentWith === false ){
	console.log("NO you can't ride!");
}else if(haveAte === true){
	console.log("Let Your Food Digest First");
	
}else{
	console.log("You Can Ride Today"); 
}

/*
if(h === rideHeight){//use 3 equal signs when seeing if things are equal
	console.log("Yay you can ride!")
	
}
*/
/*
while(i<5){
	console.log(i);
	i++;
}
*/
/*
var students = ["Ross", "Nate", "Tyrone"];//this is an array in js
students.push("Jake");//adding to an array
console.log(students);
)
*/

//ALERTS
/*
alert("THis is an Alert");

//Prompts

prompt("this is a prompt");

//capturing user info

var yearBorn = prompt("Type In Year Born");
//var yearBorn = 1986;

var age = 2013 - Number(yearBorn) + 5;
console.log (yearBorn);

*/

function calcArea (height, width ){ //making functions in js
	var area = height * width;
	console.log(area);
	
	
}

calcArea(5, 6);


//Annoymous Function---------------

var calcForce = function (mass, ascc){//function without a name
	var force = mass * ascc;
	consoloe.log(force);
	
}

calcForce(5, 6);





































