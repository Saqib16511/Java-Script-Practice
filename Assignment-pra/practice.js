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
