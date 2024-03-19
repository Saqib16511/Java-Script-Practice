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

// Excersice no.1 ADD KEYS AND VALUE AND CHANGE VALUES OF KEY IN OBJECT
// const mypet = {
//     name : 'sudo',
//     type : 'dog',
//     breed : 'poodle',
//     age : 7,
//     friends : ['bit','byte','data'],
// };
// function ani(mypet){
//     console.log(mypet);

//     // mypet["color"] = 'black'
//     mypet.color = 'black';

//     mypet.breed = 'beagle';

//     mypet.friends.pop();

//     console.log(mypet);

//     mypet.friends.push('chip');

//     console.log(mypet)
// }
// ani(mypet);

// OBJECT EXCERSICE no2
// const banana = {
//     name : 'banana',
//     quality : 1,
//     price : 1.95
// };
// const apple = {
//     name : 'appale',
//     quality : 1,
//     price : 1.45
// };
// const candy = {
//     name : 'candy',
//     quality : 1,
//     price : 3.50
// };

// const store = {
//     storeNumber : 5,
//     locationCity : 'milan',
//     products : [banana,apple,candy]
// };

// function market(store){
//     console.log(store);
//     // only print out all the product objects in "store"
//     // console.log(store.products[0]);
//     // console.log(store.products[2]);
//     // console.log(store.products[2]);
//     for(let i = 0;i < store.products.length;i++){
//         // console.log(store.products[i])
//     };
    
//     // only print out the 3rd product object in store;
//     // console.log(store.products[2]);

//     // change the price of banana object through the store object to be 1.75..
//     // store.products[0].price = 1.75;
//     // console.log(store);
//     // console.log(banana);

//     // change the price of candy directly to be 4.99..
//     store.products[2].price = 4.99;
//     console.log(store);
//     console.log(candy)

// }
// market(store);

// OBJECT EXCERSICE no3
// const houseforsale = {
//     area : 940,
//     value : 320000,
//     streetname : 'fifth street',
//     build : 2012,
//     owner : {name:'blake', age :29},
//     offers : [290000,295000,315000,312000]
// };
// function property(houseforsale){
//     console.log(houseforsale);

//     // delete the property with key "built".
//     delete houseforsale.build
//     // console.log(houseforsale);

//     // change the age of the owner to be 30 inside "houseforsale"..
//     houseforsale.owner.age = 30;
//     console.log(houseforsale);

//     // print the maximum offer price (use reduce)
//     const maxprice = houseforsale.offers.reduce((max,price)=>{
//         if(max < price){
//             return price;
//         } return max
//     },0)
//     console.log(maxprice);
//     houseforsale.saleprice = 312000
//     console.log(houseforsale)
// }
// property(houseforsale)