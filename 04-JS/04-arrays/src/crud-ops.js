let addButton = document.getElementById("addEmployee");
let teamDiv = document.getElementById("team");
const Team = [];
//constructor fn

function Employee(firstName, lastName, company){
    this.empId = faker.random.uuid();
    this.firstName = firstName || faker.name.firstName();
    this.lastName = lastName || faker.name.lastName();
    this.company = company || faker.company.companyName();
    this.email = `${this.firstName}.${this.lastName}@${this.company}@gmail.com`;
}

const addEmployee = () => {
    let employee =new Employee();
    // Team.push(new Employee);
    displayOnDOM(createDiv(employee));
    // displayOnDOM(createDiv(Team[Team.length-1]);

}


addButton.addEventListener("click",addEmployee);

const createDiv = (e) =>{
    const card = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${e.firstName} ${e.lastName}</h5>
      <h6>${e.company}</h6>
      <a href="#" class="btn btn-primary">View More</a>
      <a href="#" class="btn btn-primary">Delete</a>

    </div>
  </div>`;
  return card;
}

const displayOnDOM = (markup) => {
    teamDiv.innerHTML += markup;
};

