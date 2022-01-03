function cafe(list) {
    let arrayOfNumber = list.map(Number);
    let order = list.shift();
    let sum = 0;
    for (let i = 0; i < order; i++) {
        let pricePerCapsule = list.shift();
        let days = list.shift();
        let capsuleCount = list.shift();
        let result = ((days * capsuleCount) * pricePerCapsule);
        console.log(`The price for the coffee is: $${result.toFixed(2)}`);
         sum += result;
    }  
    console.log(`Total: $${sum.toFixed(2)}`);
}
cafe(["2", "4.99", "31", "3", "0.35", "31", "5"]) 
