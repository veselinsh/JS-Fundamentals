function solve(commands){
    let result = [];
    let initialNumber = 1;
    for(let command of commands){
        if(command === 'add'){
           result.push(initialNumber);
        }else if(command === 'remove'){
           result.pop();
        }
        initialNumber++;
    }
    if(result.length === 0){
        console.log('Empty');
    }else{
        console.log(result.join(' '));
    }

}
solve(['add', 'add','remove', 'add', 'add'])