const num=[10,20,30,1,4,7,3,40,50,2,4,1,9,70];

// team.forEach(function(member){
//     console.log(`${[member]} welcome to the team!`);
// });

let greaterThanTen=[];

num.forEach(function(element){
    if(element >10){
        greaterThanTen.push(element);
    }
});

console.log(greaterThanTen);

let lessThanTen = num.filter(function(element){
    return element<10;
});

console.log(lessThanTen);

let chars=[10,20,"A",40,"B",90];

// let characters=chars.filter(function(e){
//     return typeof e === "string";
// });

let characters=chars.filter((e)=>{
    return typeof e === "string";
});

console.log(characters)

const someName = (e)=>{
// es6 fn logic
};

()=>{
    //Anonymous Es6 fn logic 
}

