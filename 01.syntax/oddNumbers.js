function oddNumbers(n){
    let number = 1;
    let result = 0;
for(let i=1;i<=n;i++){
    result += number;
    console.log(number);
    number += 2;
}
console.log(`Sum: ${result}`);
}
oddNumbers(5);