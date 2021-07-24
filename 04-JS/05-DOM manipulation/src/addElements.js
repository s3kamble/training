let rootDiv = document.getElementById("root");

const createNav = (noLinks) =>{
    let ul = document.createElement("ul");
    ul.classList.add("nav-container");
    for (let i = 0; i<noLinks; i++){
        let li = document.createElement("li");
        li.classList.add("nav-item");
        let a =document.createElement("a");
        a.classList.add("nav-link");
        li.appendChild(a);
        ul.appendChild(li);
    }
    rootDiv.appendChild(ul);
};

const createLogo = (imagePath,alt) => {
    let div = document.createElement("div");
    div.classList.add("logo");
    let img =document.createElement("img");
    img.src=imagePath;
    img.alt=alt;
    div.appendChild(img);
    rootDiv.appendChild(div);
}

const createFooter = () => {
    let div =document.createElement("div");
    div.classList.add("footer");
    div.style="border:1px solid blue ; height:10vh";
    // let footerLogo= createLogo("../img/SurfboardIndia.png");
    // div.appendChild(footerLogo);

    rootDiv.appendChild(div);
}

createLogo("../img/SurfboardIndia.png","Surfboard Logo");
createNav(5);
createFooter();