function personInfo(firstName, lastName, age){
      let myObj = {
         firstName: firstName,
         lastName: lastName,
         age:age
      };
      return myObj;
}
let result = personInfo("Peter",  "Pan", "20" );
console.log(result);