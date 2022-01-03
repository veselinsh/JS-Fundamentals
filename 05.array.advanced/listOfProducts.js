function listOfProducts(array){
    let sorted = array.sort();
    let i = 1;
   for(let fruits of sorted){
       
       console.log(`${i}.${fruits}`);
       i++
   }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);