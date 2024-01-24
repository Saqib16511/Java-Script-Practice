// var x = "variable";
// var y = 42;
// document.write(x)
// document.write("<br>")




// // if Condition (this is a true and false condition and this will be print on browser, when condition is true)
// var a = 100;
// var b = 40;
// if (a > b){
//     document.write("if condition is true this will be print")
//     document.write("<br>")
// }
// //if Condition Logical Operators
// // Logical Operator AND(&&)
// var a = 40;
// var b = 29;
// var c = 83;
// var d = 82;
// if (a > b && c > d){
//     document.write("if both conditions are true this will be print")
//     document.write("<br>")
// }
// // Logical Operator OR(||)
// var a = 65;
// var b = 978;
// var c = 24;
// var d = 75;
// if (a > d || b > c){
//     document.write("if any of the condition is true this will be print")
//     document.write("<br>")
// }
// // Logical Operator NOT(!)
// var a = 65;
// var b = 978;
// if (!a < b){
//     document.write("if condition is false this will be print <br>")
// }

// // if else Statement (by use of else condition,False condition will be print if condition is false)
//  var a = ["hi","hello","hey"];
//  var b = "welcome";
//  if (a == b){
//     document.write("if condition is true this will be print<br>")
//  }else{
//     document.write("if condition is false this will be print<br>")
//  }
// //  if else if Statement
// var per = 67;
// if (per >= 80 && per <= 100){
//     document.write("Grade A+");
// }else if(per >= 60 && per < 100){
//     document.write("Grade B");
// }else if (per >= 40 && per < 100){
//     document.write("Grade C");
// }else{
//     document.write("fail");
// }
//     document.write("<br>")

// // Ternary Operator 
// var a = 419;
// b = (a > 100)? "true": "false";
// document.write(b)

// var a = 419;
// b = "your value is " + (a > 500? "true":"false");
// document.write("<br>" + b);

// Alert Box 
// alert("This Is An alert box!");

// var a = 45;
// if (a > 89){
//     alert("this is true condition")
// }else{
//     alert("this is false condition")
// }

// Comfirm Box
//  confirm("Press a button!")

// Prompt Box


// backgroung color change by if condition 
// var body = document.querySelector("body");
// body.style.background = "blue";
// var btn = document.getElementById("btn");
// btn.style.background = "crimson";
// btn.style.fontSize = "20px";
// btn.style.color = "white";

// btn.addEventListener('click', () =>{
//     if(body.style.backgroundColor == "white"){
//         body.style.backgroundColor = 'black';
//     }else{
//         body.style.backgroundColor = 'white' ;
//     }
// }
// );
// document.write("<br>")
// // Function
// function myFunction(){
//     document.write('hello JS');
// }
// myFunction()
// document.write("<br>")
// Function Parameters
// function practice( right,left){
//     document.write("practice" + right + left)
// }
// practice("hello","world")
//  function myfac(one,two){
//     document.write("you are my" + one)
//  }
//  myfac(" friend ")

// function sumFunc(one,two,three){
//     var result = one + two - three ;
//     return result;
// }

// var c = sumFunc(3,8,20);
// document.write(c);

// function div(one,two,three,four,five){
//     var b = (one + two + three + four) / five;
//     return b; 
// }
// var c = div(2,3,1,5,2) * 2
// document.write(c)

// var a = document.getElementById('hh');
// function change(){
//     a.style.color = 'yellow';
// }

// LOOP
// var a = 1;
// while(a <= 10){
//     document.write("hello welcome <br>");
//     a = a + 1;
// }

// DO WHILE LOOP
// var a = 1
// do{
//     document.write("DO WHILE LOOP <br>");
//     a = a + 1;
// }while(a <= 10);

// FOR LOOP
// for(var a = 1; a <= 10; a++){
//     document.write("hello hello hello <br>");
// }

// for(var a = 1; a <= 5; a++){

//     for(b = 1; b <= a; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
    
// }

// for(var a = 5; a >= 1; a--){
//     for(var b = a; b >= 1; b--){
//         document.write(b)
//     }
//     document.write("<br>")
// }

// array --------
// var ary = [
//     [ 'sara' , 'muskan' , 'nimra' , 'faiza' ],
//     [ 'saba' , 'mariyam' , 'nayab' , 'fozia' ],
//     [ 'sehar' , 'mahnoor' , 'neelam' , 'farwah' ],
//     [ 'sobia' , 'mehak' , 'noreen' , 'fazeela' ],
// ]
// for(var a = 0; a < 4; a++){
//     for(var b = 0; b < 4; b++){
//         document.write(ary[a][b] + " ");
//     }
//     document.write("<br>")
// }

// // Array Sort
// var a = ["1","2","3","4","5"]
// a.sort()
// document.write()


// DATE OBJECT
// var nnn = new Date();
// document.write(nnn)


// // MAP METHOD
// var arr = [10,2,60,40];
// var i = arr.map(test);
// function test(x){
//   return x * 10;  
// }
// document.write(i);



// var element;
// element = document.body;
// console.log(element)

// GET ELEMENT BY ID
// element = document.getElementById("header");
// console.log(element);

// GET ELEMENT BY ID (onlytext)
// element = document.getElementById("header").innerText;
// console.log(element);

// GET ELEMENT BY ID (GET ATTRIBUTE)
// element = document.getElementById("header").getAttribute("class");
// console.log(element);

// DOM SET ATTRIBUTE
// element = document.getElementById("header")
// element.setAttribute("style","border:10px solid pink;")
// console.log(element);


// DOM REMOVE ATTRIBUTE
// element = document.getElementById("header")
// document.getElementById("header").removeAttribute("style")
// console.log(element);