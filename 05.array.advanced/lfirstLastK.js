function firstLastTask(numbers){
    let k = numbers.shift();
    let firstPart = numbers.slice(0,k);
    let lastPart = numbers.slice(-k);
    console.log(firstPart.join(' '));
    console.log(lastPart.join(' '));

}
firstLastTask([2, 7, 8, 9]);