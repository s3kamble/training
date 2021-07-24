let num =[10,2,30,40,50]

const sumOfElements = (arr) => {
    let sum = 0;
    arr.forEach((e)=>{
        sum=sum+e;
    });
    return sum;
}

let result = num.reduce((sum,e,i,arr)=>{
    return sum + e;
});

const factorial = (n) => {
    
}