var userCapital = prompt("Enter any alphabet i convert into capital");
var capital = userCapital.toUpperCase();
alert(capital)


var secondUserCapital = prompt("Enter any alphabet i convert into title case");
var secondCapital = secondUserCapital.toLowerCase();
alert(secondCapital);



var favMobile = prompt("Enter your mobile model");
document.write("your favmobile model lenght is" + " "+ favMobile.length);



var hatim23kh = 454;
var h = hatim23kh.toString();
alert(h)

document.write("<br/><br/>");
var str = "Pakistan";
var index = str.indexOf("n");
document.write("String " + str + "<br/>");
document.write("Index of 'n' is: " + index);

var username = prompt("enter your specail symbol");

if (username === "@" || "&" ) {
    alert("you choice the correct symbol");
}
else {
    alert("your symbol deos not exist here");
}


var varCount = "The quick brown fox jumps over the lazy dog";
var counting = varCount.length;
document.write( varCount +"  "+ "is" +"  "+ counting);

var findCharacter = "pakistan"
var finding = findCharacter[2];
document.write(finding);


 var ar = [ "hyderabad"]
ar.pop();
ar.push("islam");
document.write(ar)


document.write("<br/><br/><br/><br/>");
var message = "Ali and Sami are best friends.They play cricket and football together.";
message = message.replace(/and/g, "&");
document.write(message);

// performing 2 task in 1 

var userNum = prompt("Enter any number", "example 3.42527")
var convRound = Math.round(userNum);
alert(convRound)


var userNumb = prompt("Enter any number", "example 3.42527")
var convFloor = Math.floor(userNumb);
alert(convFloor);

var userNumbe = prompt("Enter any number", "example 3.42527")
var convCeil = Math.ceil(userNumbe);
alert(userNumbe);


// performing 2 task in 1 end//


document.write("</br>")
var diceNumber = Math.random();
document.write("Your Dice Number IS" +" "+ diceNumber);

if (Math.ceil(Math.random() * 2) === 1)
    document.write("Random coin value: Tails");
else
    document.write("Random coin value: Heads");

document.write("Random number between 1 and 100: " + Math.ceil(Math.random() * 100));


var usereSecretnumber = prompt("Enter your secret number");
if(usereSecretnumber === 1  && 2 >= 10) {
    alert("congratulation")
}
else {
    alert("Your secret number is not in our list")
}

var weight = prompt("Enter your weight in kilograms");
var weightCN = parseFloat(weight);
document.write("Th weight of user is " + weightCN + " kilograms");


var convNm = "457";
var convString = Number(convNm)
document.write(convString);

var num = 35.85;
var convert = num.toString();
document.write(convert);


// end //