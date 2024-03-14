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

// STOP WATCH BY USING JAVASCRIPT
// var timer = document.getElementById("watch");
// var sec = 0;
// var min = 0;
// var hr = 0;
// var stoptime = true;

// function startTimer(){
//   if(stoptime == true){
//     stoptime = false;
//     timerCycle();
//   }
// }
// function stopTimer(){
//   if(stoptime == false){
//     stoptime = true;
//   }
// }
// function timerCycle(){
//   if(stoptime == false) {
//     sec = parseInt(sec);
//     min = parseInt(min);
//     hr = parseInt(hr);
//     sec = sec + 1;
    
//   if(sec == 60){
//     min = min + 1;
//     sec = 0;
//   }
//   if(min == 60){
//     hr = hr + 1;
//     min = 0;
//   }
//     if(sec < 10 || sec == 0){
//       sec = '0' + sec;
//     }
//     if(min < 10 || min == 0){
//       min = '0' + min;
//     }
//     if(hr < 10 || hr == 0){
//       hr = '0' + hr;
//     }
//   timer.innerHTML = hr + ':'+ min + ':' + sec;
//     setTimeout('timerCycle()', 1000)
//  }
// }
// function resetTimer() {
//      timer.innerHTML = '00:00:00';
//      hr = 0;
//      sec = 0;
//      min = 0;
//      stoptime = true;
// }
// get a value from div
// let collect = document.getElementById("inp"); 
// let asd = document.querySelector(".two");
// let asf = document.querySelector(".three");
// document.addEventListener("click",total);
// function total(){
//   collect.value = asd.innerText;
//     collect.innerHTML;  
// }

// GRAPH LOGIC
// let div = document.getElementById("hello");
// let arr = [0,1,2,3,4];
// let index = 0;
// let secind = arr.length;

// let goForward = true;
// setInterval(myTimer, 1000);
// function myTimer(){
//   if(goForward){
//     if(index < arr.length){
//       div.innerHTML = arr[index]
//       index++;
//     }else{
//       index--;
//       goForward = false;
//     }  
//   }else{
//     if(index > 0 ){
//       div.innerHTML = arr[index];
//       index--;
//     }else{
//       goForward = true;
//     }
//   }   
// }


// ARRAY LOOP
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
// "u","v","w","x","y","z"];
// let index = 0;
// for(i = index;i < arr.length; i++){
//   document.write(arr[i]);
//   document.write("<br>")
// }

// EVEN AND ODD LOOP

// for(i = 1; i <= 100; i++){
//   // document.write(i++)
//   // document.write("<br>")
//   let aa = true;
//   if(i % 2 == 0) {
//     document.write(i + "even")
//    }else{
//      document.write(i + "odd")
//    }
//   document.write("<br>")
// }


// Reverse Array Loop
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
// "u","v","w","x","y","z"];

// index = arr.length - 1;
// for(var a = index;a > 0 ; a--){
//   document.write(arr[a]);
//   document.write("<br>");
// }

// ODD ARRAY LOOP
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
// "u","v","w","x","y","z"];

// let empt = 0;
//            for(a = empt;a < arr.length; a++){
//              letter = arr[a];
//              if(a % 2 == 0){
//                document.write(letter)
//              }else{
//                // document.write(letter)
//              }
//              document.write("<br>")
// }


// ARRAY LOOP PRACTICE
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// for(a = 0;a < arr.length; a++){
//   result = arr[a]
//   if(a % 3 == 0){
//     document.write(result);
//   }
//   document.write("<br>")
// }


// ARRAY ODD LOOP
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// let empty = arr.length - 1;
// for(a = empty; a > 0; a--){
//   result = arr[a]
//   if(a % 2 == 0){
//   }else{
//     document.write(result)
//   }
//   document.write("<br>")
// }

// REVERSE ARRAY LOOP START FROM [1]
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// let empty = arr.length - 1;
// for(a = empty; a > 0; a--){
//   result = arr[a]
//   if(a % 3 == 0){
//     document.write(result);
//   }
//   document.write("<br>")
// }

// REVERSE ARRAY LOOP START FROM [0]
// let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// let empty = arr.length - 1;
// for(a = empty; a > 0; a-=3){
//   result = arr[a]
//   // if(a % 3 == 1){
//     document.write(result);
//   // }
//   document.write("<br>")
// }


// ARAAY SORTING LOOP
// let arr = [12,13,6,7,8,1,0,9];
// let not = 0;
//   for(b = 0;b < arr.length; b++){
//     for(a = 0;a < arr.length; a++){
//       if(arr[a] > arr[b + 1]){
//         not = arr[a]
//         arr[a] = arr[b + 1]
//         arr[b + 1] = not;
//       }
      
//     }
//   }
//   document.write(arr);


// ARRAY REVERSE SORTING LOOP
// let arr = [12,-3,6,-7,8,11,10,9,70,-25,58,0,65];
// let not = 0;
//     for(a = arr.length;a > 0; a--){
//       for(b = arr.length;b > 0; b--){
//         if(arr[a - 1] < arr[b]){
//           not = arr[a - 1]
//           arr[a - 1] = arr[b]
//           arr[b] = not;
//         }
//       }
//     }
//     document.write(arr)


// MAXIMUM NUMBER IN ARRAY
// let arr = [0, 0,6,170,0,41,11,10,9,25,78];
// let check = 0;
// for(a = 0;a < arr.length; a++){
//     result = arr[a];
//     if(arr[a] > check){
//      check = result;
//     }
// }
// document.write(check)

// MINIMUM NUMBER IN ARRAY
// let arr = [12,6,17,55,8,41,-1,11,10,9,25,0];
// let low = 0;
// for(a = arr.length;a > 0; a-- ){
//     minn = arr[a]
//     if(minn < a){
//       low = minn
//     }
// }
// document.write(low)

// COOKIE STORAGE
// document.cookie = "username=hsarry Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// document.cookie = "user=joh"; 
// document.cookie = "user=ali";

// SESSION STORAGE
// sessionStorage.setItem ("name", "John Doe");
// sessionStorage.removeItem("name");

// REST OPERATOR
// sum("saqib",10,20,30)
// function sum(name, ...args){
//     console.log(arguments)
//     document.write(`${name}`)
//     let sum = 0
//     for(let i in args){
        
//         sum += args[i];
//         // document.write( sum)
//     }
//     document.write(sum);
// }

// SPREAD OPERATOR
//  arr = [1,2,3,4,5];
//  sum("saqib",...arr);
//  function sum(name,...arr){
//     console.log(arguments);
//     document.write(name);
//     let sum = 0;
//     for(let j in arr){
//         sum += arr[j];
//     }
//     document.write(sum);
//  }

// function sum (a,b){
//     c = a+b;
//     return c;
// }
// // ans = sum(10,10);

// console.log(sum(10,10));

// Object Literals 
// var fname = "Muhammad";
// var lname = "Saqib";
// var classN = 10;
// function obj(fname,lname,classN){
//     var fullname = fname +" "+ lname;
//     return {fullname,classN}
// }
// var print = obj(fname,lname,classN)
// console.log(print.fullname);
// console.log(print.classN);

// Destructuring Array
// let arr = ["Saqib",24,"Mirpurkhas"];
// let [name,age,city] = arr;
// console.log(name);
// console.log(age);
// console.log(city);

// ARRAY
// let student = ["Saqib","Saddam","Rizwan","Saqib"];
//  arr(...student);
//  function arr(){
//      console.log(arguments);
//      let hell = 0;
//     for(let i in student){
//         hell = student[i];
//     document.write(hell + " ");
//     }
// }
    // OBJECT Values
    // let acc = {
    //     saqib:{
            
    //         age:20,
    //         address:'mirpur khas',
    //         height:'5ft'
    //     },
    //     saddam:{
    //         name:"Saddam",
    //         age:18,
    //         city:"Dhaka"
    //     },
        
    // };
    //     let result = " ";
    //     for(let j in acc){
    //          result = acc[j];
    //         document.write(j +"<br>");
    //         for(let i in  result){
    //             document.write(i+" : "+ result[i] + "<br> ")
    //         }
    // }
   
    // TRADING LOGIC
//     let arr = [1,2,3,4,5];
// setInterval(right, 1000)
// let i = 0
// let j = 4
// function right(){
//     if(i < arr.length){
//         document.getElementById("chee").innerHTML = arr[i]
//         i += 1
//     }
//     else if(j >= 0){
//         document.getElementById("chee").innerHTML = arr[j]
//         j -= 1
//     }else if()
// }


    // k = 10 >> 2;
    // console.log(k)
    // let k = 100
    // k ^= 5;
    // console.log(k)

    // let ali = 15;
    // if(ali > 18){
    //     console.log("Above Eighteen")
    // }else if(ali < 18){
    //     console.log("Eighteen Below")
    // }else if(ali == 18){
    //     console.log("Eighteen Years Old")
    // };
    
    // let arr = [1,2,3,4,5];
    // for(let i = 0;i < arr.length;i++){
    //     document.write(arr[i]+" ");
    // }

    // let arr2 = [1,2,3,4,5]
    // for(let j = 5;j > 0;j--){
    //     document.write(j)
    // }

    // let good = 50
    // let bad = 70
    // let rehman = 50
    // if(rehman != bad){
    //     console.log('false')
    // }else if(rehman !== good){
    //     console.log(True)
    // };

    // let ferrari= 70
    // let Bmw = 50
    // let bmw = '50'
    // if(ferrari >= Bmw){
    //     console.log('Yes')
    // }else if( bmw === Bmw){
    //     console.log('No')
    // }


    // Result Card
    // let english = 70;
    // let urdu = 70;
    // let math = 70;
    // let biology = 45;
    // let physics = 70;
    // let total = 500;
    // let all = english
    // // Sum of All Subjects
    // obtain = english + urdu + math + biology + physics;
    // console.log(obtain +" "+ 'Marks');
    // // Average of All Subjects
    // totalsub = 5;
    // average =  obtain / totalsub;
    // console.log(average+" "+ 'Avg')
    // // Parcentage
    // divi = obtain / total;
    // percentage = divi * 100;
    // console.log (percentage+" "+ '%');
    // // Obtaine Grade
    // if(percentage >= 80){
    //     document.write('Grade A')
    // }else if(percentage >= 70){
    //     document.write('Grade B')
    // }else if(percentage >= 60){
    //     document.write('Grade C')
    // }else if(percentage >= 50){
    //     document.write('Grade D')
    // }else if(percentage >= 40){
    //     document.write('Grade E')
    // }
    // if(math < 40 || english < 40 || urdu < 40 || biology < 40 || physics < 40){
    //     document.write(` :You Failed in a paper and got 309 Marks`)
    // }
    // DAILY WORK GOAL
    // let dailywork = 3;
    // let dailyworkgoal = 5;
    // if(dailywork >= dailyworkgoal){
        //     document.write('you have achived your daily goal')
    // }else if(dailywork < dailyworkgoal){
    //     document.write('keep working you did not achive your goal yet')
    // };
// QUESTION CORRECT ANSWER
    // let pass = 4;
    // if(pass >= 4){
        //     document.write('you are pass')
    // }else if(pass >= 2){
    //     document.write('you are fail')
    // };
// SWITCH CASE
    // let food;
    // switch(40){
    //     case 120:
    //         food = "Choolay"
    //         break;
    //     case 80:
    //         food = "daal roti"
    //         break;
    //     case 150:
    //         food = "chana Biryani"
    //         break;
    //     case 200:
    //         food = "Beef Biryani"
    //         break;
    //     default:
    //         food = "give more money";
    // };
    // document.write(food);
// FONT COLOR CHANGE BY USING SWITCH CASE
    // let color;
    // switch('yellow'){
    //     case "green":
    //         color = "green"
    //         break;
    //     case 'yellow':
    //         color = 'yellow'
    //         break;
    //     default:
    //         color = "none"
    // }
    // document.getElementById("chee").style.color = color;
    
// BUYING DRINKS
    // let budget = 105;
    // let icecream = 200;
    // let colddrink = 150;
    // let coffee = 250;
    // let tea = 100;
    // if(budget >= icecream){
    //         document.write("i will buy ice cream")
    // }else if(budget >= colddrink){
    //     document.write("i will buy a cold drink")
    // }else if(budget >= coffee){
    //     document.write("i will buy coffee")
    // }else if(budget >= tea){
    //     document.write("i will buy a tea")
    // }else if(budget <= 50){
    //     document.write("i need more money")
    // };
    // USMAN IS SHORTER THAN
    // let usmanheight = 5.9;
    // let asharheight = 5.5;
    // let shahzadheight = 5.8;
    // let saqibheight = 5.4;
    // let aqibheight = 6.2
    // if(usmanheight < asharheight){
    //     document.write('usman is shorter than ashar')
    // }else if(usmanheight < shahzadheight){
    //     document.write('usman is shorter than shahzad')
    // }else if(usmanheight < saqibheight){
    //         document.write('usman is shorter than saqib')
    //     }else if(usmanheight < aqibheight){
    //             document.write('usman is shorter than aqib')
    // };
// LAPTOP COMPARISON
    // let hp = 30000;
    // let mac = 200000;
    // let dell = 20000;
    // let lenovo = 50000;
    // let myrang = 35000;
    // if(myrang > hp){
    //     document.write('HP laptop')
    // }else if(myrang > mac){
    //     document.write('MAC Laptop')
    // }else if(myrang > dell){
    //     document.write('Dell Laptop')
    // }else if(myrang > lenovo){
    //     document.write('Lenovo Laptop')
    // };
// LOCAL HOTEL FOOD
    // let customer = 150;
    // if(customer >= 200){
    //     document.write("give him beef biryani")
    // }else if(customer >= 150){
    //     document.write('give him chana biryani')
    // }else if(customer >= 120){
    //     document.write('give him choolay')
    // }else if(customer >= 80){
    //     document.write('give him daal roti')
    // }else if(customer < 80){
    //     document.write('tell him to give more money')
    // }
//  TEMPERATURE BY USING COMPARISON OPERTORS
    // let thermometer = 96
    // if(thermometer <= 90){
    //     document.write('you have temperature')
    // }else if(thermometer <= 100){
    //     document.write('you have fever')
    // }else if(thermometer <= 110){
    //     document.write('you have high fever')
    // }; 
// switch case
    // let last = 4;
    // switch(last){
    //     case 0:
    //         document.write('monday');
    //         break;
    //     case 1:
    //         document.write('tuesday');
    //         break;
    //     case 2:
    //         document.write('wednesday');
    //         break;
    //     case 3:
    //         document.write('thursday');
    //         break;
    //     case 4:
    //         document.write('friday');
    //         break;
    //     case 5:
    //         document.write('saturday');
    //         break;
    //     case 6:
    //         document.write('sunday');
    //         break;
    //     default:
    //         document.write('invalid date')  
    // }
// ARRAY SORT
    // let  arr=[8,7,5,2,];
    // arr = arr.sort();
    // console.log(arr);
// ARRAY PUSH METHOD
    // let arr = ['ali','ahmed','rizwan','aqib'];
    // arr.push('saddam','haris');
    // console.log(arr);
// OBJECT
    // let info = {
    //     name: 'saqib',
    //     age: 24,
    //     salary: 500
    // };
    // console.log(info);
// FOREACH LOOP
    // let students = ['azam','rehman','rizwan','muzammil'];
    // students.forEach(function f(elements){
    //     console.log('hello'+ " "+ elements)
    // });
        
    