const num1 = [10,-20,30,40];
const num2 = [100,200,300,400];

console.log(num1.concat(num2));


function checkPositve(arr){
    for(let i in arr){
        if (arr[i] < 0){
            return false;
        }
     
    }
    return true;
}
//  OR
let areAllPositive=num1.every(function(element,index,arr){
    return element>0;
});

console.log(areAllPositive);