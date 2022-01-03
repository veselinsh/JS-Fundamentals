function storeProvision(currentStock,products){
    let store = [];
     for(let i = 0;i< currentStock.length - 1;i+=2){
          let product = currentStock[i];
          let  quantity = Number(currentStock[i + 1]);
          let object  = {
              product,
              quantity,
          }
          store.push(object);
     }
     for(let i = 0;i< products.length - 1;i+=2){
        let product = products[i];
        let  quantity = Number(products[i + 1]);
        let object  = {
            product,
            quantity,
        }
        let indexOfProduct = store.findIndex(x => x.product === product);
        if(indexOfProduct === -1){
            store.push(object);
        }else{
            store[indexOfProduct].quantity += object.quantity;
        }
     }
     for(let prod of store){
         console.log(`${prod.product} -> ${prod.quantity}`);
     }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);