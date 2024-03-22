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
//     console.log(houseforsale);

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
// property(houseforsale);

// CONSOLE IS AN OBJECT
// const myconsole = {
//     log : (message)=>{
//         console.log(message)
//     }
// };

// myconsole.log("hello");
// console.log(console);

// print delete and add Object properties
// 1. print name
// 2. delete age
// 3. add date of birth

// const obj = {
//     print : (obj)=>{
//         console.log(obj)
//     },
//     delete : (obj,age)=>{ 
//         // console.log(obj);
//         delete obj[age]
//         console.log(obj)
//     },
//     add : (obj,dateofbirth)=>{
//         console.log(obj)
//         obj[dateofbirth] = 24
//         console.log(obj)
//     }
// };
// const personal = {
//     name : 'rizwan',
//     age : 26
// };
// obj.print(personal);

// obj.delete(personal,'age');

// obj.add(personal,'dateofbirth');

// const obj = {
//     print : (arr)=>{
//         for(let i = 1;i <=  arr.length;i++){
//             console.log(i)
//         }
//         console.log(arr)
//     },
//     push: (arr,neww)=>{
//         console.log(arr)
//         arr.push(neww)
//         console.log(arr)
//     }
// }

// const arr = [1,2,3,4,5];
// obj.print(arr)

// obj.push(arr,7)

// FUNCTIONS PRACTICE
// function carry(first){
//     console.log(first)
// }
// carry([1,2,3,4,5]);
// function gum(en){
//     console.log(en)
// };
// gum('English');

// function num(int){
//     console.log(int)
// };
// num(2,3,1)

// function twodi(van,man){
//     console.log(van,man)
// };
// twodi("welcome",[5,3,5]);

// function fan(oneit,twoit,threeit,fourit){
//     console.log(oneit,twoit,threeit,fourit)
// }
// fan(35,"helo",[5,3,22],{color:'green',skin:'white',});

// function zom(boo,moo){
//     console.log(boo,moo);
// };
// zom(true,false);

// function sum(bmw,supra){
//     console.log(bmw+supra)
// };
// sum(3,2);

// function mal(a,b){
//     console.log(a*b)
// };
// mal(2,6);

// function ret(a,b){
//     return a+b;
// };
// const result = ret(5,5);
// console.log(result);

// function mac(a,b){
//     return a*b
// };
// const ree = mac(2,5);
// console.log(ree);

// function fun1(a){
//     function fun2(b){
//         return a*b
//     }
//     return fun2;
// };
// const res = fun1(2);
// console.log(res);
// console.log(res(5));

// function gun1(a,b){
//     function gun2(c){
//         return a*b+c
//     }
//     return gun2
// };
// const fire = gun1(2,5);
// console.log(fire);
// console.log(fire(5));

// function ready1(a,b,c,d){
//     function ready2(e){
//         return a+b+c+d*e
//     };
//     return ready2
// };
// const start = ready1(3,6,2,7);
// console.log(start);
// console.log(start(1));

// function yaa1(g,h){
//     function yaa2(q){
//         return g-h+q
//     };
//     return yaa2
// };
// const hoo = yaa1(8,3)
// console.log(hoo);
// console.log(hoo(2));

// function sin(hello,saqib){
//     console.log(hello,saqib)
// };
// sin("this",[1,2,3]);

// function double(a){
//     function double2(b){
//         return a-b
//     }
//     return double2
// };
// const bot = double(2);
// console.log(bot);
// console.log(bot(5));

// function ku(q,r){
//     console.log(q+"*"+r+"=", q*r,q+"-"+r+"=",q-r)
// };
// ku(2,5);

// function myfun(a,b){
//     function f1(c,d){
//         return c*d
//     }
//     function f2(a,b){
//         return a-b
//     }
//     ans1 = f1(a,b);
//     ans2 = f2(a,b);
//     result = a+'*'+ b + "=" + ans1+" "+ a+'-'+b+"="+ans2;
//     // result = `${a} * ${b} = ${ans1} and ${a} - ${b} = ${ans2}`;
//     return result;
// }
// let a = myfun(4,5);
// console.log(a)

// MAP OBJECT
// const map1 = new Map();
// map1.set('age',13);
// map1.set('saqib','mughal');
// map1.set('c',3);
// console.log(map1);

// // console.log(map1.get('saqib'));

// console.log(map1.set('age',12));
// console.log(map1);

// console.log(map1.has('saqib'))
// console.log(map1.has('saqib shah'));

// function obj(o,k){
//     if(o.has(k) ){
//         console.log(o.set(k,45))
//     }else{
//         alert('error')
//     }
// }
// obj(map1,'age');

// function blah(m,u){
//     if(m.has(u)){
//         console.log(m.set('laptop','HP'))
//     }else{
//         alert
//     }
// }
// blah(map1,'c',3)


// console.log(map1.delete('laptop'));

//  MAP EXCERCiSE 01
// const maxico = new Map();
// maxico.set('id',24);
// maxico.set('capital', 'Mexico City',);
// maxico.set('neighbours', ["USA","Guatemala","Belize"]);

// console.log(maxico);

// // change the ID
// maxico.set('id',25)

// maxico.get("neighbours").push("islamabad");
// console.log(maxico);

// MAP EXCERCiSE 02
// myPet = new Map();
// myPet.set('name', 'sudo');
// myPet.set('type','dog');
// myPet.set('breed','poodle');
// myPet.set('age','7');
// myPet.set('friends',['bit','bytes','data']);

// console.log(myPet);

// myPet.set('color','black');

// myPet.set('breed','beagle');

// myPet.get('fbananriends').pop();

// myPet.get('friends').push('chip');
// console.log(myPet);

// MAP EXCERCiSE 03
// const a = {name :'banana',quality : 1, price : 1.95};
// const apple = {name :'apple',quality : 1, price : 1.45};
// const candy = {name :'candy',quality : 1, price : 3.50};

// const store = new Map();
// store.set('storeNumber',5);
// store.set('locationCity','Milan');
// store.set('locationCountry','Italy');
// store.set('products',[banana,apple,candy]);

// console.log(store);

// console.log(store.get('products'));

// console.log(store.get("products")[2]);

// store.get("products")[0].price = 1.75;

// console.log(store);
// console.log(banana);

// // store.get('products')[2].price = 4.99;
// candy.price = 3.55;
// console.log(store);

// MAP EXCERCiSE 04
// const houseforsale = new Map();
// houseforsale.set('area',940);
// houseforsale.set('value',320000);
// houseforsale.set('streetName','fifth street');
// houseforsale.set('built',2012);
// houseforsale.set('owner',{name:'black',age:29});
// houseforsale.set('offers',[290000,295000,315000,312000]);

// console.log(houseforsale);

// houseforsale.delete('built');

// houseforsale.get('owner').age = 30;

// const maxprice =[290000,295000,315000,312000].reduce((max,price)=>{
//     if(max < price){
//         return price;
//     } return max
// },0)
// console.log(maxprice);

// houseforsale.set('sale price',312000);
// console.log(houseforsale);

// const myconsole = new Map();
// myconsole.set('log',(messege)=>{console.log(messege)});

// myconsole.get('log')('hello');

// myconsole.set(1,'number one');
// myconsole.set('1','string one');
//  console.log(myconsole;)

// const numbers = [10,20,15,30,15,20,35,60,10,5,6,5,6];

// const seennumbers = new Map();

// for(let i = 0;i < numbers.length;i++){
//     if(seennumbers.has(numbers[i])){
//         console.log(i, seennumbers.get(numbers[i]))
        
//     }else{
//         seennumbers.set(numbers[i],i)
//     }
// }
// console.log(seennumbers);


const companies =   [{name : 'company one', category: 'finance', start:1980, end: 2012},
                    {name : 'company two', category: 'technology', start:1985, end: 2008},
                    {name : 'company three', category: 'auto', start:1993, end: 2014},
                    {name : 'company four', category: 'retail', start:1982, end: 2015},
                    {name : 'company five', category: 'auto', start:1987, end: 2023},
                    {name : 'company six', category: 'finance', start:1992, end: 2017},
                    {name : 'company seven', category: 'technology', start:1988, end: 2016}];

                const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

                companies.forEach(function(companies){
                    console.log(companies)
                });

            const canDrink = [];
            for(let i = 0;i < ages.length;i++){
                if(ages[i] >= 18){
                    canDrink.push(ages[i])
                }
            };

            const doDrink = ages.filter(ages => ages >= 21)
            console.log(doDrink);

            const autocompany = companies.filter(function(companies){
                if(companies.category == 'auto'){
                    return true
                }
            })
            const autucompany = companies.filter(companies => companies.category == 'auto')
            console.log(autucompany);

            // get 80s companies 
            const undereighty = companies.filter(company=>(company.start >= 1980 && company.start <= 1990))
                console.log(undereighty)
            
                // get companies that lasted 10 years or more
            const lasttenyear = companies.filter(company =>(company.end >=2010 && company.end <= 2020))
                console.log(lasttenyear)

                // map 
                // create array of company names
                const companyname = companies.map((companies)=>{
                    return companies.name
                })
                console.log(companyname);

                
                const companystartend = companies.map(company=> `${company.name} (${company.start} - ${company.end})`);
                console.log(companystartend);
                // ages squire root
                const agessquare = ages.map(ages=> Math.sqrt(ages))
                console.log(agessquare);
                // ages multiply
                const agesmultiply = ages.map(ages=>ages * 2);
                console.log(agesmultiply);
                const agesmulsqu = ages
                .map(ages => Math.sqrt(ages))
                                    .map(ages => ages * 2)
                                    console.log(agesmulsqu)
                                    
                                    
                // sorting
                // sorting ages
                const agessort = ages.sort();
                console.log(agessort); 

                // sort company by end year
                const sortstarttime = companies.sort((a,b) => a.end > b.end ? 1 : -1);
                console.log(sortstarttime);

                // reduce 
                let sumages = 0;
                for(let i = 0;i < ages.length;i++){
                    sumages += ages[i]
                };
                console.log(sumages);

                const pra = ages.reduce((a,b)=> a < b ? a : b);
                console.log(pra)