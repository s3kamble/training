const chars= ["A","B","c","d","f"];

let foundValue =chars.filter((element)=>{
    return element==="c";
});

foundValue=chars.find((element)=>{
    return element==="c";
});

console.log(foundValue);

//includes

let found = chars.includes("B");

console.log(found);