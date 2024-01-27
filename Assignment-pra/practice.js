// for(var a = 1; a <= 10; a++ ){
//     document.write(a + "<br>")
// }

// for(var a = 10; a >= 1; a-- ){
//     document.write(a + "<br>")
// }

// for(var a = 1 ; a <= 10; a++ ){
//     document.write("*" + "<br>")
// }

// for(var a = 1; a <= 4 ; a++ ){
//     for(var b = 1; b <= a; b++){
//         document.write("*")
//     }
//     document.write("<br>");
// }

// for(var a = 1; a <= 4 ; a++ ){
//     for(var b = 1; b <= a; b++){
//         document.write(b)
//     }
//     document.write("<br>");
// }

// for(var a = 5; a >= 1 ; a-- ){
//     for(var b = a; a >= b; b-- ){
//         document.write(b)
//     }
//     document.write("<br>");
// }


// SUM
// var a = 5;
// var b = 3;
// var d = (3 + 5);
// document.write(d)

//  Subtraction
// var a = 5;
// var b = 3;
// var d = (8 - 5);
// document.write(d)

// MULTIPLICATION
// var a = 5;
// var b = 3;
// var d = (3 * 5);
// document.write(d)

// DIVISION
// var a = 5;
// var b = 3;
// var d = (3 / 5);
// document.write(d)

// MODULE
// var a = 5;
// var b = 3;
// var d = (3 % 5);
// document.write(d)

// EXPONENTIAL
// var a = 2;
// var b = 2;
// var d = (2 ** 2);
// document.write(d)


// FUNCTION RETURN
// function fun(first,second,third){
//     var result = (first + second + third);
//     return result;
// }
// var c = fun(10, 20, 30);
// document.write(c)

// EVEN AND ODD
// function myfun(num){
//     if(num % 2 == 0){
//     document.write("this is even number")
//     }else{
//         document.write("this is odd number");
//     }
// }
// myfun(6);


// for(var a = 1;a <= 4; a++){
//     for(var b = 4;b > a; b--){
//         var j = "&nbsp"
//         document.write(j)
//     }
//     for(var c = 1 ; c <= b; c++) {
//         document.write(c)
//     }
//     document.write("<br>")
// }
// document.write("<br>")


// for(var a = 1;a <= 4; a++){
//     for(var b = 4;b > a; b--){
//         var j = "&nbsp "
//         document.write(j)
//     }
//     for(var c = 1 ; c <= b; c++) {
//         document.write(c)
//     }
//     document.write("<br>")
// }
// document.write("<br>")
// for(var a = 2; a <= 8 ; a++ ){
//     for(var b = 1; b <= a; b++){
//         document.write(a + b)
//     }
//     document.write("<br>");
// }

// ARRAY SLICE METHOD
// var a = ["one","two","three","four","five","six"];
//    var b = a.slice(4,5);
//     document.write(b);


// ARRAY SPLICE METHOD
// var a = ["one","two","three","four","five","six"];
//    var b = a.splice(2,0,"hello");
//     document.write(a);


// // ARRAY INDEXOF AND LASTINDEX METHOD
// var a = ["one","two","three","four","five","six"];
//    var b = a.indexOf("five");
//     document.write(b);

// ARRAY INCLUDES METHOD
// var a = ["one","two","three","four","five","six"];
//    var b = a.includes("five");
//     document.write(b);

// ARRAY SOME METHOD
// var ages = ["4","23","13","15","11","9"];
//    var b = ages.some(checkAdult);
//     document.write(b);
//     function checkAdult(ages){
//         return ages >= 18;
//     }

// ARRAY FINF METHGOD
// var ages = ["4","3","13","18","11","9"];
//    var b = ages.find(checkAdult);
//     document.write(b);
//     function checkAdult(ages){
//         return ages >= 11;
//     }

// ARRAY FINDINDEX METHOD
//     var ages = ["4","3","13","18","11","9"];
//    var b = ages.findIndex(checkAdult);
//     document.write(b);
//     function checkAdult(ages){
//         return ages >= 11;
//     }


// ARRAY FILTER METHOD
//     var ages = ["4","23","13","18","11","9"];
//    var b = ages.filter(checkAdult);
//     document.write(b);
//     function checkAdult(ages){
//         return ages >= 18;
//     }


// Array Assignment
// var i = 1;
// for(var a = 1;a <= 4;a++ ){
//     for(b = 1; b <= a;b++){
//         document.write(i);
//         i++;
//     }
//     document.write("<br>")
// }


// ARRAY MIN VALUE
// var a = [2,3,1];
// var j = a[0];
// for(b = 0; b < a.length; b++){
//     if(j < a[b]){
//         (j = j);
//     }else{
//         j = a[b];
//     }
// }
// document.write(j)

// // ARRAY MINI VALUE FUNCTION
// function mini(a = [5,3,6,2,4]){
//     var k = a[0];
//     for(var b = 0; b < a.length; b++){
//         if(k < a[b]){
//             (k = k);
//         }else{
//             k = a[b];
//         }
//     }
    
// document.write(k)
// }
// b = [2,3333,5,-0,-1]
// c = [2,3333,5,-0,-1]
// d = [2,3333,5,-0,-1]
//  mini()


// function max(a = [550,2574,5258,6845,23684,1205]){
//     var z = a[0];
//     for(b = 0;b < a.length; b++){
//         if(z < a[b]){
//             z = a[b];
//         }else{
//             (z = z)
//         }
//     }
//     document.write(z)
// }
// max();


// SWAPING METHOD
// var a = 1;
// var b = 2;
// var box = 0;
// box = a;
// a = b;
// b = box;
// document.write(a +" "+ b)

// SORTTING ARRAY FUNCTION
// var sor = [2,5,8,3,7,6];
// var box = 0;
// for(a = 0; a < sor.length; a++){
  
  
//   for(b = 0; b < sor.length ; b++){
//     if(sor[b] > sor[a + 1] ){
//       box = sor[b];
//       sor[b] = sor[a + 1];
//       sor[a + 1] = box;
      
//     }
//   }
// }
// document.write(sor)

// var arr = [4,255,37,-50,-20,100,0]
// var blank = 0;
// for(a = 0; a < arr.length; a++){
//   for(b = 0; b < arr.length; b++){
//     if(arr[b] > arr[a + 1]){
//       blank = arr[b];
//       arr[b] = arr[a + 1];
//       arr[a + 1] = blank;
//     }
//   }
// }
// document.write(arr)


// SORTTING ARRAY IN REVERSE
// var iso = [50,69,99,-80,0,1,-30,70,82,105,-2,5.05,6,7,-2.5];
// var emp = 0;
// for(a = 0;a < iso.length; a++){
//   for(b = 0;b < iso.length; b++){
//     if(iso[b] < iso[a + 1]){
//       emp = iso[b];
//     iso[b] = iso[a + 1];
//     iso[a + 1] = emp; 
//     }
//   }
// }
// document.write(iso);

// DATE OBJECT
// var nnn = new Date();
// document.write(nnn)


// CHANGING BUTTON STYLE BY DOM
// document.querySelector("#btn").onclick = button;
// element = document.querySelector("#btn");
// function button(){
//   if(element.style.backgroundColor == "blue"){
//     element.style.padding = "";
//   element.style.backgroundColor = "";
//   element.style.border = "";
//   element.style.borderRadius = "";
//   element.style.color = "";
//   element.style.fontWeight = ""
//   element.style.boxShadow = ""
//   element.style.margin = ""
  
//   }else{
//     element.style.padding = "10px 15px";
//   element.style.backgroundColor = "blue";
//   element.style.border = "0px solid";
//   element.style.borderRadius = "7px";
//   element.style.color = "white";
//   element.style.fontWeight = "bold"
//   element.style.boxShadow = "1px 1px 5px purple"
//   element.style.margin = "10% 50%"
//   }
// }

// DOM CLASS ADD
// document.getElementById("header").onclick = btn;
// function btn(){
//   document.getElementById("header").classList.add("second","one","third");
// var a = document.getElementById("header").classList;
//   console.log(a);
// }

// DOM CLASS LENGTH
// document.getElementById("header").onclick = btn;
// function btn(){
//   document.getElementById("header").classList.length;
// var a = document.getElementById("header").classList;
//   console.log(a);
// }

// DOM CLASS TOGGLE
// document.getElementById("btn").onclick = btn;
// function btn(){
//   document.getElementById("btn").classList.toggle("change");
// var a = document.getElementById("btn").classList;
//   console.log(a);
// }

// CALCULATOR
// var inp1 = document.getElementById("first");
// var inp2 = document.getElementById("second");
// var opt = document.getElementById("opt");

// document.getElementById("btn").addEventListener("click", cal);
// function cal() {
// //   typecasting = string into integer
// //   parseInt(string);
//   var ina = parseInt(inp1.value);
//   var result = document.querySelector(".result");
  
//   var inb = parseInt(inp2.value);
//   var optc = opt.value;
//   if(optc == "+"){
//     result.innerHTML = (ina + inb)
//   }else if(optc == "-"){
//      result.innerHTML = (ina - inb);
//   }else if(optc == "/"){
//     result.innerHTML = (ina / inb);
//   }else if(optc == "*"){
//     result.innerHTML = (ina * inb);
//   }
// }


// START WATCH

// document.getElementById("btn").onclick = button;
// function button(){
//   var sec = document.getElementById("sec");
// var min = document.getElementById("minute");
// var sts = setInterval(second, 1000);
// var num = 0;
// var minute = 0;
// function second(){
//   sec.innerHTML = num++;
//   min.innerHTML = minute;
//   if(num == 5){
//     minute++;
//     num = 0;
//   }
// }
// }


// HISTORY OBJECTS BACK,FORWARD
// document.getElementById("forward").onclick = forward;
// document.getElementById("back").onclick = back;
// function forward(){
//   history.forward();
// }
// function back(){
//   history.back();
// }