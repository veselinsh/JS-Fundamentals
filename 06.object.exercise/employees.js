function workers(input){
    for(let employee of input){
        let person = {
            name : employee,
            personalNumber : employee.length,
        };
        console.log(`Name: ${person.name} -- Personal Number: ${person['personalNumber']}`);
    }

}
workers(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);