var a = new Date();
console.log(a);
document.write("</br>")

// task 2
var a = new Date();
document.write(a)
document.write("</br>")

// task 3
var b = new Date();
var day = b.getDay();
var hour = b.getHours();
console.log(b);
document.write("</br>")

// task 4 

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now = new Date();
document.write(" The Curretn month is" + months[now.getMonth()]);

document.write("</br>")

// task 5 

var c = "sunday";
 var d = c.slice(0, 3)
 document.write(d)
 document.write("</br>")

// task 6//

 var h = new Date("1920");
 var i = new Date("2020")
 var j = h - i;
 document.write(j)
