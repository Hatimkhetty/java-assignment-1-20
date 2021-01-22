//    task 1
 var a = new Date();
 console.log(a);
 document.write("</br>")

//   task 2
 var a = new Date();
 document.write(a)
 document.write("</br>")

//   task 3
 var b = new Date();
 var day = b.getDay();
 var hour = b.getHours();
 console.log(b);
 document.write("</br>")

//   task 4 

 var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
 var now = new Date();
 document.write(" The Curretn month is" + months[now.getMonth()]);

 document.write("</br>")

//   task 5 

 var c = "sunday";
  var d = c.slice(0, 3)
  document.write(d)
  document.write("</br>")
// 
//  task 6

 var date = prompt("Enter the current date");

 if ( date >= 1 && date <= 16){
     alert("starting days of month")
 }
 else{
     alert("last days of the month")
 }

//  task 7

 var oldDate = new Date();
 var since = oldDate.setFullYear("1997")
 var sec =  oldDate.getMilliseconds();
 var calc = since / sec
 document.write(calc)

//  task 8

var a = new Date();
var b = a.toString();
var c = b.slice(16, 19);
if ( c >= "12")(
  document.write("it's PM")
)
else if ( c < 12){
    document.write("it's Am")
}

//  task 9

var curDate = new Date();
var laterDate = curDate.setFullYear(2020, 12,0)
document.write("later date is" + " "+ curDate)

//  task 9

var currDate = new Date();
var ramadanDate = new Date(2015, 12, 0)
var diff = (currDate - ramadanDate) / 1000 
document.write("the past ramadan date is" + " "+diff);

//  task 10 
document.write("</br>")
document.write("<h1>k-electric-Bill<h1>" + " "+ "</br>")
var perName = prompt("enter your name");
document.write("Mr :" +" "+ perName + " "+ "</br>")
 var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
 var now = new Date();
 var monthName = months[now.getMonth()]
 document.write("month is" + " "+ monthName +"</br>" )   
var personUnit = prompt("enter your bill payable units")
document.write("your payable unit is :"+" "+ personUnit +" "+ "</br>")
document.write("per unit is " +"16 "+ "</br>")
var peruni = 16;
var unitCalc = (16 * personUnit);
document.write("your units amount is :" + " " + unitCalc + "</br>")
document.write("late pay charge" +" "+ "is" + " "+ "352" + "</br>")
document.write("after 15 date of month we charge " + " "+ (unitCalc + 352) )


  End 


   Functions 

//    task 1

function currentTime() {
    var a = new Date()
    document.write(a)
}
currentTime();

document.write("</br>")

//  task 2

function greet() {
    var firstName = prompt("Enter your first name")
    var lastName = prompt("Enter Your Last name")
    document.write(firstName +" "+ lastName);
}
greet();
document.write("</br>")

// task 3

function addNumber() {
    var num1 = prompt("enter number")
    var num2 = prompt("enter second number")
    document.write(num1 +" "+ num2);
}

addNumber();
document.write("</br>")

//  task 4

function parameter(a , b) {
   alert(a + " "+ b)
}
parameter(5 + 8);
document.write("</br>")
// 
//  task 5 

function measuring(){
var argu1 = prompt("Enter your square a number")
var argu2 = prompt("Enter your square b number")
var greet1 = argu1*argu1;
var greet2 = argu2*argu2;
document.write( "your sqaure one value is :" + " "+ greet1 + " "+ "your square two value is :" + " "+ greet2)
}

measuring();

//  task 6 

var height = prompt("Enter The whole Triangle number value")
var width = prompt("Enter The whole width number value")

var caclTraingle = height * width;
document.write(caclTraingle);













