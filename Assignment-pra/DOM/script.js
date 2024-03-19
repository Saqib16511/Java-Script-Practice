// function api(){
//     fetch('https://dummyjson.com/products/1').then(async(resp)=>{
//         const h = await resp.json();
//         console.log(h)
//     })
// }
// api()


// function mult(ato,bto){
//     let result = ato * bto;
//     console.log(result)
// }
// mult(3,5);

// function div(a,b){
//     let res = a / b;
//     console.log(res);
// }
// div(2,4)

// function sub(a,b){
//     let res = a - b;
//     console.log(res)

// }
// sub(2,4);

// function tmult(a,b,c){
//     let res = a - b - c;
//     console.log(res)
// }
// tmult(2,5,3);

// function cal(a,b,c,d){
//     let fir = a * b;
//     let sec = c / d;
//     let res = fir + sec;
//     console.log(res);
// }
// cal(2,3,5,5);

// obj = {
//     a: 3,
//     b: 4,
//     c: 6,
//     d: 5
//     };
//     // console.log(obj);

//     function func(obj){
//         console.log(obj);
//         let aa = obj.a;
//         let bb = obj.b;
//         let cc = obj.c;
//         let dd = obj.d;
//         let add =  aa + bb + cc + dd;
//         console.log(add) 
//     }
// func(obj);

// const object = {
//             'name':'akram',
//             'age':20,
//             'school':'xyz'
//         }

// function func(obj){
//     obj["height"] = 6.2
//     console.log(obj)
// }

// func(obj)

// const obj = {'department':'micro',
//             'university':'sindh',
//             'batch':'2k18'
//         };

//         function universityinfo(obj){
//             obj['joiningdate'] = '6 April 2018';
//             console.log(obj)
//         }
//         universityinfo(obj);

// const personalinfo = {'name':'saqib',
//                     'date of birthday':'27 january',
//                     'age':'24'
//                 };
                
//                 function modifypersonalinfo(personalinfo){
//                     personalinfo['year of graduation'] = 2022;
//                     console.log(personalinfo);
//                     delete personalinfo.age;
//                 }
//                 modifypersonalinfo(personalinfo);

// function add(personalinfo,obj,object){
//         let res = [personalinfo,obj,object]
//         // console.log(res);
//         newobj = {...personalinfo,...obj,...object}
//         // console.log(newobj);
//         delete newobj.age
//         delete newobj.name
//         delete newobj.batch
//         delete newobj.department
//         console.log(newobj)
        
// }
// add(personalinfo,obj,object);

// OBJEXT ADD AND CHANGE THE VALUE OF KEYS
// const obj = {name:'ali',
//             age:14,
//             class:6,
//             favcolor:['red','green']
//         }

//         function student(obj){
//             console.log(obj);
//             obj.age = 18;
//             obj.favcolor.push('blue');
//             console.log(obj)
//         }
//         student(obj)