const findEmployeeNumber = (company) => {
    // return number of emps
    return team.filter((emp) => {
      return emp.company === company;
    }).length;
    // return array ... array.length
  };
  function Employee(name, company) {
    this.name = name;
    this.assignEmpId = (company) => {
      let count;
      switch (company) {
        case "Raw Engineering":
          // find how many RE employees
          count = findEmployeeNumber(company);
          this.empid = `RE${count + 1}`;
          this.company = company;
          break;
        case "Contentstack":
          count = findEmployeeNumber(company);
          this.empid = `CS${count + 1}`;
          this.company = company;
          break;
        case "Surfboard":
          count = findEmployeeNumber(company);
          this.empid = `SB${count + 1}`;
          this.company = company;
          break;
        default:
          throw new Error("Invalid company Name");
          break;
      }
    };
    // call the function
    this.assignEmpId(company);
  }
  const createEmployee = (name, company) => {
    const employee = new Employee(name, company);
    team.push(employee);
    return employee;
  };
  // read what details
  // ID or by name, company
  // get all employees of RE, CS ,SB
  // get details of emp with id RE1
  // get employee details with name == "Some"
  
  const getByEmployeeID = (id) => {
    let employee = team.filter((member) => {
      return member.empid === id;
    });
    // what if id is invalid
    if (employee.length) {
      return employee;
    }
    return "Invalid ID ";
  };


  const getEmployeeByCompany = (company) => {
    const validCompanies = ["Raw Engineering", "Contentstack", "Surfboard"];
    if (!validCompanies.includes(company)) {
      return "Invalid Company Name";
    }
    let employees = team.filter((member) => {
      return member.company === company;
    });
    return employees;
  };
  // const getEmployeeDetails = () => {};
  // getEmployeeDetails(id);
  // getEmployeeDetails(company);
  // getEmployeeByCompany(id, company); -->
  // getEmployeeByCompany(company, id); ---> and or operation

  
  const getEmployeeDetails = (id="0",company="Raw Engineering") => {

         if(id!=0){
             if(id.charAt[0] === company.charAt[0]){
                 
                return (getByEmployeeID(id));
             }
             else
             {
                 let resultId=getByEmployeeID(id);
                 let resultCompany=getEmployeeByCompany(company);

                 if ((resultId !="Invalid ID" && resultCompany != "Invalid Company Name") ){
                    //  console.log(resultId);
                     return resultId;
                 }
                 else if(resultId ==="Invalid ID"){
                     console.log(resultCompany);
                     return resultCompany;
                 }
                 else{
                     return "NO results found";
                 }
             }

         }
         else{
             getEmployeeByCompany(company);
         }
              
  }

  let e1 =getEmployeeDetails("CS1","Contenstack");

  const updateById = (request) => {
    // find if request is valid if it contains "BOTH" the properties
    // if not return invalid
    const validProperties = ["empid", "body"];
    // number of properties of request should be same as validProperties
    // and
    // every key in request should be present in validProperties or vice versa
    let isRequestValid = false;
    let requestKeys = Object.keys(request);
    if (requestKeys.length === validProperties.length) {
      isRequestValid = validProperties.every((key) => {
        return requestKeys.includes(key);
      });
    }
    if (!isRequestValid) {
      return "Invalid Request";
    }
    // request.body can contain any one of the properties
    // if not return invalid
    const validUpdatePropeties = ["name", "phoneNumber"];
    // filter based on empid
    // find the rigth employee
    // update the relevant properties
    return "Reached the end";
  };
  