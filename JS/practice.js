// var i = 8;
// console.log(i);

 //for(var i=0 ; i<=5; i++){
    //let contact = 5;          //contact is not defined
    //const address= "pune";   //address is not defined
      //  var name = "ssp";    //ssp
 //}
 //console.log(i);

// function getInfo(){
//     let contact = 5;
// const address= "pune";
//     var name = "ssp";   
// }

// getInfo();
// console.log("I am outside", address);

// console.log(4 - 6);           //-2
//console.log(4 + "6");            //46
// console.log(4 - "6");        //-2
// console.log(4 * "6");           //24
// console.log(88 / "6");        //14.5555
// console.log(NaN - 6);       //NaN

//const age;
//var age1;

//object in js

// const obj = {
//   empName : "pradip",
//   age :20,
//   course: "intutech"
// };
// obj.empName = "deva";    //update
// console.log(obj);
// console.log(obj.course);


//array in js

// const arr =["number 1", true, null ,"", 67.8];
// console.log(arr);
// console.log(arr[4]);
// arr.push("I am at end");
// console.log(arr);
//  arr.pop();
//  console.log(arr);
//  arr.unshift("I am at zero index");
//  console.log(arr);
//  arr.shift();
//  console.log(arr);


//array in object
//  const obj = {
//       empName : "pradip",
//        age :20,
//       course: "intutech",
//       hobbies:["cricket", "chess", "reading book"]
//      };
    //  //console.log(obj.hobbies);
     // obj.address = ["AMBULGA", "Ta mukhed", "Dist nanded"];
    //console.log(obj.address[1]);
    //  obj.contact = "5656565656";
    //  delete obj.age;      //delete
    //  console.log(obj);

    // object in array

    // const obj = [
    //     empName = "pradip",
    //           age = 20,
    //          course = "intutech",
    //          {
    //             hobbies: "cricket", 
    //            game : "chess",
    //            read : "reading book"
    //          }
    // ];
    // console.log(obj);


    // *splice method is index based

    // const arr = ["nashik","nanded","pune","mumbai"];
    // console.log(arr);
    // const addItem = arr.splice(1, 1,"goa","bang",56)
    // console.log(arr);
    // console.log(addItem);

    //  *slice method is not index based

    // const arr1 = ["nashik","nanded","pune","mumbai",56,"same"];
    // console.log(arr1);
    // const noReplace = arr1.slice(1,4);
    // console.log(noReplace);


    // * hoisting and use strict
    
    // a= 89;
    // console.log(a);
    // var a;      //hoisting is not work with let and const   

  //   'use strict'
  //  const a= 89;
  //   console.log(a);

// (!) singe bang operator
  // let user1 = "sumo";
  // console.log(!user1);//true
  // let user2 = "";
  // console.log(!user2);//false
  // let user3 = 100;
  // console.log(!user3);//false
  // let user4 = -6;
  // console.log(!user4);//false
// let a = 4;
// let b= '4';
// let c= 4;
//console.log(a != b);//false because here we compare value only
//console.log(a == b);//true

//console.log(a !== b);//true because here we compare value and data type 
//console.log(a === b);//false
// console.log(a < b);//false it is exception like bug
// console.log(a > c);//false
// console.log(a >= c);//true

  //typeof operator
// let arr = [];
// let obj = {};
// let e = null;
// console.log(typeof(arr));     //object
// console.log(typeof(arr));     //object
// console.log(typeof(e));       //object


//if else statement
// let a = 3;
// let b = "3";
// if(a == b){        //true
//   console.log("true");
// }else{
//   console.log("false");
// }

// if(a === b){          //false 
//   console.log("true");
// }else{
//   console.log("false");
// }

// let username = "";
// if(!username){          
//     console.log("yes it is true");
//   }else{
//     console.log("false");
//   }

// let username1 = "sumedha";
// if(!username1){          
//     console.log("yes it is true");
//   }else{
//     console.log("false");
//   }

    // * if else with single bang oper(!) *
// let username1 = -5;
// let username2 = "pradip";
// let username3 = 100;
// let username4 = "";

// if(!username2){          
//       console.log("false -5");
//     }else if(!username1){
//       console.log("false pradip");
//     }
//     else if(!username3){
//       console.log("false 100");
//     }
//     else if(!username4){
//       console.log("falsy");
//     }
//     else{
//       console.log("false")
//     }

//object comparision (based on address)
//we can't compare arrays or objects directly
// let obj1 = {
//   username : "ssp",
//   contact: 77777777
// }
// let obj2 = {
//   username : "ssp",
//   contact: 77777777
// }
// let obj3 = obj1
// console.log(obj1 == obj2);  //false
// console.log(obj1 === obj2);   //false
// console.log(obj3 === obj1);   //true coping address
// console.log(obj1.username === obj2.username);//true


  //switch case statement

  // let l=3;
  // let b=4;
  // let r= 7;
  // switch (area = l*b) {
  //   case 1:
  //     console.log("area of rect");
  //     break;
  
  //   default:
  //     break;
  // }


   // * for loop
  //  for (let i = 0; i < 5; i++) {
  //    console.log(i);
  //  } 

   // * for of (work with array)
  //  let arr  = [1,3,"punit",4,"patil"]
  //  for(const arrElement of arr){
  //   console.log(arrElement);
  //  }

   // * for of with object in array
  //  let arr1 = [
  //   {
  //     id : 1,
  //     name: "ssp",
  //     age : 36
  //   },
  //   {
  //    id : 2,
  //    name: "bsp",
  //    age : 26
  //  }
  //  ]
  //  for(const arrElement of arr1){
  //   console.log(arrElement);
  //  }


   // * for in (work with object)
  //  let userBio = {
  //         id : 1,
  //         name: "ssp",
  //         age : 36
  //  }
  //  for (let key in userBio){
    // console.log(key);
     //console.log(userBio[key]);
  //    console.log(key, ":", userBio[key]);
  //  }

// * array in object with for in 
  //  let userBio1 = {
  //   arr1 :  [1,6,9,"hi"],
  //   arr2 : [1,"pati",3,"hello"]
  //  }
  //  for(let keys in userBio1){
  //    console.log(keys, ":", userBio1[keys]);
  //  }


  // * logical operator
  // let a = 5;
  // let b = 5;
  // let c = 5;
  // const check1 = a == b && b == c;
  // console.log(check1);//true
  // const check2 = a != b && b != c;
  // console.log(check2);//false
  // const check3 = a == b || b == c;
  // console.log(check3);//true
  // const check4 = a != b || b != c;
  // console.log(check4);//false
  // const check5 = a != b || b == c;
  // console.log(check5);//true

  // let a = 5;
  // let b = 15;
  // let c = 5;
  //  const check1 = a !== b && b !== c;
  //  console.log(check1);//false
  // const check2 = a !== b || b === c;
  // console.log(check2);//true


  // let obj = {
  //   name : "ssp",
  //   contact : 4444444,
  //   addition : function(a,b) {
  //     let sum = a + b;
  //     console.log(sum);
  //   }
  // }
//obj.addition(4,6);
//console.log(obj.contact);
//instead of writing above line for eact obj key 
//write for in loop and access values inside object
// for(let elementObj in obj){
//   console.log(obj[elementObj])
// };
// obj.addition(4,6);


// * normal function
// function normalFun(){
//   alert("normal function");
// }
// normalFun();

// * function expression
// const funExpression = function(){
//   console.log("Function Expression");
// }
   
// * anonymous function
// const btn =document.getElementById("btn");
// btn.addEventListener("click", normalFun);



//arrow function
// arrowFunction = () =>{
//   alert("arrow function");
// }
// arrowFunction();

// const  arrowFunc = a => a;
// alert(arrowFunc("i am arrow function"));

// *  operator
// let a = 12;
// let b = a;
// a = 7;
// console.log(a); //7
// console.log(b); //12

//  let obj1 = {
//    username : "intutech",
//    contact : 4444444
//  }
//  let obj2 = obj1
//  obj1.username = "pradip";
//  console.log(obj1);//username: 'pradip', contact: 4444444 
//  console.log(obj2);//username: 'pradip', contact: 4444444

// * spread operator
//  let obj1 = {
//   username : "intutech",
//   contact : 4444444
// }
// let obj2 = {...obj1}
// obj1.username = "pradip";
// console.log(obj1);//username: 'pradip', contact: 4444444 
// console.log(obj2);//username: 'intutech', contact: 4444444

// * rest operator
// function printNum1(...number){
//    console.log(number)
// }
// printNum1("ssp",5,"key",67,98.5,true)

// function printNum2(a,b,...number){
//   console.log(a,b,number)
// }
// printNum2("ssp",5,"key",67,98.5,true)


// * exercise
// function calArr(...number) {
//   let sum = 0;
//   for(let add of number){
//     sum += add;
   
//   }
//   return sum;
// }
// console.log(calArr(5,6,7));


// * exercise
// function printArr(...number) {
//   for(let info of number){
//     console.log(info.username)
//   }
// }
// console.log(
//   printArr(
//     {
//       username : "ssp",
//       password : "78890"
//     },
//     {
//       username : "bsp",
//       password : "12890"
//     }
//   )
// );


// function printArr(...number) {
//   for(let info of number){
//     console.log(info.username)
//   }
// }

//   printArr(
//     {
//       username : "ssp",
//       password : "78890"
//     },
//     {
//       username : "bsp",
//       password : "12890"
//     }
//   )
  

// const count = [1,2,3,4,5,7,3,6]
// const newCounts = count.concat([8,9])
// console.log(newCounts)


// const count = [1,2,3,4,5,7,3,6]
// const newCount = count.indexOf(7)
// console.log(newCount)
// const newCount = count.indexOf(3)
// console.log(newCount)
// const newCount = count.indexOf(10)
// console.log(newCount)
// const newCount1 = count.lastIndexOf(3)
// console.log(newCount1)


// find object inside array
// const personData = [
//   {id:1, name:"ssp", contact: 12341234, address: "pune"},
//   {id:2, name:"Bsp", contact: 56781234, address: "pune"},
//   {id:3, name:"ysp", contact: 90871234, address: "pune"}
// ]
//const findObj = personData.find(function(person,index, persons){
  //console.log(person)
 // console.log(index)
  //console.log(persons)
//})

// const findObj = personData.find((person) => {
//   return person.id === 3   //like wise we compare name, address, contact, or hard any codeded value
// })
// console.log(findObj);

// const findObj = personData.find((person) => {
//   return person.id === 3   
// })
// findObj.name = "pvt" //simply we change name of third id
// console.log(findObj);
// console.log(personData)


// const personData = [
//   {id:4, name:"abc", contact: 12341234, address: "pune"},
//   {id:5, name:"def", contact: 56781234, address: "nashik"},
//   {id:6, name:"ghi", contact: 90871234, address: "nanded"},
//   {id:7, name:"abcd", contact: 12341234, address: "mumbai"},
//   {id:8, name:"defh", contact: 56781234, address: "nandurbar"},
//   {id:9, name:"ghij", contact: 90871234, address: "nanded"},
// ]
// const findObjs = personData.find((person) => {
//   return person.address === "nanded"
// })
// console.log(findObjs)



//const count =[1,3,5,7,9,"ssp","string"]
// const check = count.includes(3)  //true
// console.log(check)
// const check = count.includes(2)  //false
// console.log(check)
// const check = count.includes("strin")  //false
// console.log(check);
// if (!check) {
//   console.log("the item u have search is not present");
// }else{
//   console.log("present");
// }


// * map() method for array
//this methodused to loop through every element in array
//which returns new array

// const personData = [
//   {id : 1, name :"ssp", contact : 555555, address : "pune"},
//   {id : 2, name :"bsp", contact : 555555, address : "pune"},
//   {id : 3, name :"ysp", contact : 555555, address : "pune"}
// ]
// const mapArr = personData.map((person,index, persons)=> {
//   return person;
// })
// console.log(mapArr);//ssp, bsp, ysp

// const mapArr = personData.map((person,index, persons)=> {
//   return person.name === "ssp";  //true for id 1, false for id 2, false for id 3
// })
// console.log(mapArr);

// * sort() method

// const arr = ["a","z","h","u","e","i","o","u"]
// console.log(arr.sort());// sort by  only for alphabetical order
//const arr = ["natasha","kiran","hi","uucle","e","ice","o","camera","u"]
//console.log(arr.sort());// sort by  only for alphabetical order
 

// * numeric sort
//  const numberSort = [2,54,0,765,34,999]
//  const sortedNum = numberSort.sort((a,b) => {
//    if (a>b){
//      return 1;
//    }else if (a===b) {
//      return 0;
//    } else{
//      return -1;
//    }
//  });
//  console.log(sortedNum);//assending order
//  console.log(sortedNum.reverse());//desending order

// * filter() method

// const numbers = [1,2,3,4,5,6,7,8,9]
// const filterNum = numbers.filter((singleNum)=>{
//  return singleNum >4
// })
//console.log(numbers);
// console.log(filterNum);

// * practical ex 1
// const number = [5,6,7,9,11,2,3,8,4,12]
// console.log(number);
// const newSort = number.sort((a,b) => {
//      if (a>b){
//        return 1;
//      }else if (a===b) {
//        return 0;
//      } else{
//        return -1;
//      }
//    });
//    console.log(newSort);
//   const filter = newSort.filter((singleNum)=>{
//     return singleNum >7
//    })
//    console.log(filter);


// * practical ex 2
//  const personData = [
//     {id : 1, name :"ssp", contact : 555555, salary : 23000},
//     {id : 2, name :"bsp", contact : 655555, salary : 30000},
//     {id : 3, name :"ysp", contact : 5455555, salary : 12000},
//     {id : 4, name :"asp", contact : 955555, salary : 35000},
//     {id : 5, name :"ksp", contact : 125555, salary : 10000},
//     {id : 6, name :"csp", contact : 785555, salary : 24000}
//   ]
  //salary get
  // const mapArr = personData.map((person,index, persons)=> {
  //     return person.salary;
  //   })
    //console.log(mapArr);
    
  //salary greater than 20000
  // const filter = mapArr.filter((singleNum)=>{
  //       return singleNum >20000
  //      })
     //  console.log(filter);

  //whole object get whose salary greater than 20000     
  // const filterObj = filter.map((singleVal)=> {
  //   const getObj = personData.find((singleObj) =>{
  //     return singleObj.salary === singleVal;
  //   })
  //       return getObj;
        
  //     })
  //     console.log(filterObj);
    

  // * use of get element by id and event listener

//   const personData = [
//         {id : 1, name :"ssp", contact : 555555, salary : 23000},
//         {id : 2, name :"bsp", contact : 655555, salary : 30000},
//         {id : 3, name :"ysp", contact : 5455555, salary : 12000},
//         {id : 4, name :"asp", contact : 955555, salary : 35000},
//         {id : 5, name :"ksp", contact : 125555, salary : 10000},
//         {id : 6, name :"csp", contact : 785555, salary : 24000}
//       ]
//       //salary get
//       function fetchDataHandler(data, userInput) {
      
//         if (!userInput) {
//           alert("please enter a value")
//           return
//         }

//       const mapArr = data.map((person,index, persons)=> {
//           return person.salary;
//         })
//         //console.log(mapArr);
        
//       //salary greater than 20000
//       const filter = mapArr.filter((singleNum)=>{
//             return singleNum > userInput; //hardcode value pass here
//            })
//          //  console.log(filter);
    
//       //whole object get whose salary greater than 20000     
//       const filterObj = filter.map((singleVal)=> {
//         const getObj = data.find((singleObj) =>{
//           return singleObj.salary === singleVal;
//         })
//             return getObj;
            
//           })
//           console.log(filterObj);
//         }
// function handleData() {
//   const useRealVal = document.getElementById("input");
//   const userInput = useRealVal.value;
//   fetchDataHandler(personData, userInput);
// }

//    const eventClick = document.getElementById("btngetData");
//    eventClick.addEventListener("click", handleData);


// * callback function

// function firstAdd(values) {
//   console.log("result :", values);
// }
// function addition(a,b, number) {
//   let add = a + b;
//   number(add);
// }
// addition(5,7, firstAdd)


// * reducs method

// const nestedArr = [
//   [1,2,3],
//   [4,5,6],
//   [5,6,7]
// ];
//console.log(combineArr)
// const combineArr = nestedArr.reduce((previousVal, currentVal, index, wholeArr)=>{
//   console.log(currentVal)
// })



// const nestedArr = [1,2,3,4,5,6,5,6,7];
// const combineArr = nestedArr.reduce((previousVal, currentVal, index, wholeArr)=>{
//   console.log(currentVal)
// })

// * object destructing
//const obj = {
 // user : "ssp",
  //contact: 565665,
 // greeting: function() {
 //   alert("hi! " + this.user)
 // }
//}
//obj.greeting();
//const { user } = obj;
//console.log(user);


//  * DOM
// * Query selector

// const selectById = document.getElementById("ul")
// console.log(selectById);


// const selectByQuery = document.querySelector("ul")
// console.log(selectByQuery);

// const selectByQuery = document.querySelectorAll("ul")
// console.log(selectByQuery);


// const selectByTagName = document.getElementsByTagName('ul')
// console.log(selectByTagName);

//const selectUl = document.querySelector("ul")
//console.log(selectUl.children[0].innerText = "1");
//console.log(selectUl.className = "ul_name")
//console.log(selectUl.style.backgroundColor= "green")
//console.log(selectUl.className = "ul_background changecolor")


//const btn = document.getElementById("btn")
// btn.addEventListener("click", ()=>{
//    const selectBg = document.querySelector("ul")
//    selectBg.className='bgColor';
// })


// console.log(btn);


// const divBlock = document.querySelector(".divText")
// divBlock.innerText = "<p>hi i am sumo</p>"
// divBlock.innerHTML = "<p>hi i am sumo</p>"
// console.log(divBlock)

// const selectUl = document.querySelector("ul")
// const newLi = document.createElement("li")
// newLi.innerText = 3
// selectUl.append(newLi)
// console.log(newLi)


// const clickAct = document.querySelector(".btn")
// btn.addEventListener("click", ()=>{
//   const divBlock = document.querySelector(".divText")
//   divBlock.innerHTML = `
//   <div>
//      <form>
//          <label>Username</label>
//          <input type="text" />
//          <label>Password</label>
//          <input type="text" />
//          <button type="submit">login</button>
//      </form>
//  </div>
//   `
      
//    })
  


// * class and constructor

// * before
// class Bio{
//   constructor(){

//   }
// }
 


// * now 
// const Bio = function(){

// }



//class Bio{
 //   constructor(userNameVal ,ageVal){
  //   this.username = userNameVal
  //   this.age = ageVal;
     
  //  }
 // }

// const person1 = new Bio("ssp", 26);
// const person2 = new Bio("bsp", 22);
// console.log(person1,person2)


// * closure

// function outerFun() {
//   let greeting = "Hello Guys!"

//   function innerFun() {
//     console.log(greeting, "from inner function")
//   }
//   console.log("OuterFun")
//   return innerFun()
// }
// outerFun()


// * http request response

//JSON.parse     
//Converts a JavaScript Object Notation (JSON) string into an object.

//JSON.stringify
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.


// * bind method *

// const obj = {
//   userName : "ssp",
//   age : 26,
//   printInfo : function() {
//     alert(this.userName + this.age)
//   }
// }
// let bindMethod = obj.printInfo.bind(obj)
// setTimeout(bindMethod, 2000)


// * storage types *

//let storeLocal = localStorage.setItem("fName", "sumedha")    //local storage
// let storeSession = localStorage.getItem("fName")
// console.log(storeSession)

//sessionStorage.setItem("fName", "aaradhya")   //session storage

//storeLocal.clear();


// * security  *

















