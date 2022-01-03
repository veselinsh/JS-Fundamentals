function bar(input) {
   let sum = 0;
    let pattern = /^%(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.\d+)?)\$$/;
    while(input[0] !== 'end of shift'){
         let total = 0;
        let line = input.shift();
        let match = pattern.exec(line);
        if(match !== null){
                  let [_ , name,product,count,price] = match;
        count = Number(count);
        price = Number(price);
        total = count * price;
        console.log(`${name}: ${product} - ${total.toFixed(2)}`);
        sum += total;
        }
  
     }
     console.log(`Total income: ${sum.toFixed(2)}`);
}
bar(["%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift"])