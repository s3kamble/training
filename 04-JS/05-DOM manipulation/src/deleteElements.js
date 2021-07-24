let heading = document.querySelector("h1");
heading.remove();

let li = Array.from(document.querySelectorAll("li"));
const printElementDetails = (event) => {
    console.log("This element is selected",event.target.innerHTML);
    event.target.remove();
}

li.forEach((list)=>{
        list.addEventListener("click",printElementDetails);
});