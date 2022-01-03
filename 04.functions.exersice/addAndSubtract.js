function addAndSubtract(first,second,third){
    function sum(first,second){
       let result = first + second;
       return result;
    }
    function substract(second,third){
        let result = second - third;
        return result;
    }
    let num = sum(first,second);
    let result =  substract(num,third);
    return result;

}
let result = addAndSubtract(23, 6, 10);
console.log(result);