function furniture(input) {
    let stock = [];             
    let total = 0;
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    while(input[0] !== 'Purchase'){
        let line = input.shift();
        let match = pattern.exec(line);
        if(match !== null){
            let {name,price,qty}= match.groups;
            price = Number(price);
            qty = Number(qty);
            stock.push(name);
            total += price * qty;
        }
    }
    console.log('Bought furniture:');
    for(let element of stock){
        console.log(element);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"])