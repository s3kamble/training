let para =document.getElementsByTagName("p");

let paraArray=Array.from(para);

paraArray.forEach((p)=>{
    console.log(p.innerHTML);
})