function repeatingChars(input){
    input = input.split('');
    let result = '';
    for(let i = 1;i<input.length;i++){
       if(input[i-1] != input[i]){
           result += input[i-1];
       }
    }
    console.log(result);

}
repeatingChars('aaaaabbbbbcdddeeeedssaa');