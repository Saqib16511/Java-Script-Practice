var x = "variable";
var y = 42;
document.write(x)
document.write("<br>")




// if Condition (this is a true and false condition and this will be print on browser, when condition is true)
var a = 100;
var b = 40;
if (a > b){
    document.write("if condition is true this will be print")
    document.write("<br>")
}
//if Condition Logical Operators
// Logical Operator AND(&&)
var a = 40;
var b = 29;
var c = 83;
var d = 82;
if (a > b && c > d){
    document.write("if both conditions are true this will be print")
    document.write("<br>")
}
// Logical Operator OR(||)
var a = 65;
var b = 978;
var c = 24;
var d = 75;
if (a > d || b > c){
    document.write("if any of the condition is true this will be print")
    document.write("<br>")
}
// Logical Operator NOT(!)
var a = 65;
var b = 978;
if (!a < b){
    document.write("if condition is false this will be print <br>")
}

// if else Statement (by use of else condition,False condition will be print if condition is false)
 var a = ["hi","hello","hey"];
 var b = "welcome";
 if (a == b){
    document.write("if condition is true this will be print")
 }else{
    document.write("if condition is false this will be print")
 }