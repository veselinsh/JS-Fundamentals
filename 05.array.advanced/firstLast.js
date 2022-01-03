function firstLast(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let result = last + first;
    return result;

}
let result = firstLast(['20', '30', '40']);
console.log(result);