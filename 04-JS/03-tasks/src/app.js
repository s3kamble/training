
// let names=[];

// function generate() {
//     let Firstname= faker.name.firstName();
//     let Lastname= faker.name.lastName(); 
//     names.push(Firstname + " " +Lastname);
//     console.log(names);
// }

//-----------------------------------------------------------------------------------------------------//



const Employees = [];
//attach eventlistener to the button using JS
let addButton = document.getElementById("addButton");
if(addButton!=null){
    addButton.addEventListener("click", createEmployee);
}
else{
    console.log("Error");
}



function createEmployee(event) {
  Employees.push(`${faker.name.firstName()} ${faker.name.lastName()}`);
  //   display Employees
  console.log(Employees);
}




 // ----------------------------------------------task 2-------------------------------------------------//
// write a function to take an object and return another object with all the keys
// in that object. single level nesting
// person ===> function findKeys ===> [name, company ,empId]
const person = {
    name: "name of theperson",
    company: "Com",
    empId: " id ",
    address:{
        street:01,
    }
  };
  

function findKeys (obj1){
    let obj2=(Object.keys(obj1));
    obj2.name="kkk";
    return (obj2);
}

let keysFound=findKeys(person);
console.log(keysFound);
console.log(person);

//............................................Task 2a..................................................//
// task 2a
// Extend the function to consider a nested object

const employee = {
    name: "name of theperson",
    company: "Com",
    empId: " id ",
    address: {
      street: "Name",
      pincode: 435231,
      road: " roadname",
      apartment: {
        building: "",
        flatNumber: "",
      },
    },
  };

 
  const findNestedKeys = (obj, storeKeys=[ ] ) => {
  
    Object.keys(obj).forEach(element => {    
       if(typeof obj[element]!== 'object'){
          storeKeys.push(element);
       }else if(typeof obj[element] === 'object'){
          findNestedKeys(obj[element],storeKeys);
       }
    });
    return storeKeys;
 };
 console.log(findNestedKeys(employee));



//-----------------------------------------------Task3-----------------------------------------------------//
// write a function that takes an object as input and creates a copy
// the copy and the original object should not have same reference. (two separate objects)
// let obj1 ={ };

// function replicateObj (obj){
//     let obj2 =Object.assign(obj1,obj);
//     obj2.name="Shreya";
//     return (obj2);
// }

// let copy=replicateObj(person);
// console.log(copy);
// console.log(person);
