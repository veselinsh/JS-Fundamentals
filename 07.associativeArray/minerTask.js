function minerTask(input) {
    let mine = {};
    for (let i = 0; i < input.length - 1; i += 2) {
       let resource = input[i];
       let quantity = Number(input[i+1]);
        if(!Object.keys(mine).includes(resource)){
          mine[resource] = 0;
        }
        mine[resource] += quantity
    }
    for(let [key,value] of Object.entries(mine)){
        console.log(`${key} -> ${value}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);