const team = ["Nirav","Nida","Shreya","Pawan","Dheeraj","Juilee","Kulsum","Saima","Aayushi"];


let members=team.map((member)=>{
    return `<p>${member}</p>`
}
);

console.log(members);