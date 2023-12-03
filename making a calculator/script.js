/*var a = prompt("Enter your first number :");
var b = prompt("Enter Your second number: ");

a = parseInt(a,10);
b = parseInt(b,10);

var addition = a+b;
var substraction = a-b;
var multiplication = a*b;
var division = a/b;
var floor = a%b;

document.write(a, "+", b, "=", addition+ "<br>")
document.write(a, "-", b, "=", substraction+ "<br>")
document.write(a, "*", b, "=", multiplication+ "<br>")
document.write(a, "/", b, "=", division+ "<br>")
document.write(a, "%", b, "=", floor+ "<br>")
*/

//GetElementById

document.getElementById("heading");

//we can select our html and put it in a varible, like>
var html = document.getElementById("heading");
// and we can work on the html file with the .innterHTML 
html.innerHTML = "Good Job";

document.getElementById("para").innerHTML = "this is not a good job";
