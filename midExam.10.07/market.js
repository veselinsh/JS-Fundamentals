function supermarket(input){
    let listProducts = input.shift().split('|');
    for(let i = 0;i<input.length;i++){
        let command = input[i].split('%');
        if(input[i] === 'Shop!'){
            for(let j = 0;j<listProducts.length;j++){
                console.log(`${j + 1}. ${listProducts[j]}`);
            }
            return;
        }
        if(command[0] === 'Important'){
            if(listProducts.includes(command[1])){
                let index = listProducts.indexOf(command[1]);
                if(index === 0){
                   break;
                }else{
                    let slicced = listProducts.splice(index,1)
                   listProducts.unshift(slicced[0]);
                }
            }else{
                listProducts.unshift(command[1]);
            }

        }else if(command[0] === 'Add'){
            if(listProducts.includes(command[1])){
                console.log('The product is already in the list.');
            }else{
                listProducts.push(command[1]);
            }

        }else if(command[0] === 'Swap'){
            if(listProducts.includes(command[1]) && listProducts.includes(command[2])){
                let index1 = listProducts.indexOf(command[1]);
                let index2 = listProducts.indexOf(command[2]);
                let temp = listProducts[index1];;
                listProducts[index1] = listProducts[index2];
                listProducts[index2] = temp; 
            }else{
                if(!listProducts.includes(command[1])){
                    console.log(`Product ${command[1]} missing!`);
                }else{
                    console.log(`Product ${command[2]} missing!`);
                }
            }
        }else if(command[0] === 'Remove'){
            if(listProducts.includes(command[1])){
                let index = listProducts.indexOf(command[1]);
                listProducts.splice(index,1);
            }else{
                console.log(`Product ${command[1]} isn't in the list.`);
            }
        }
         if(input[i] === 'Reversed'){
            listProducts.reverse();
        }

    }

}
supermarket(["apple|cheese|salt|bananas",
"Remove%cheese",
"Add%shit",
"Swap%salt%bananas",
"Reversed",
"Shop!"]);

