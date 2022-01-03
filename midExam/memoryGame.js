function brainGame(input){
    let sequence= input.shift().split(' ');
    for(let i = 0;i<input.length;i++){
        let [index1,index2] = input[i].split(' ').map(Number);
        let max = Math.max(index1,index2);
        let min = Math.min(index1,index2);
        if(input[i] === 'end'){
            break;
        }
        if(index1 === index2 || index2 < 0 || index1 < 0 || index1 > sequence.length || index2 > sequence.length){
            let middle =  (sequence.length/ 2);
            sequence.splice(middle,0,`-${i+1}a`,`-${i+1}a`);
            console.log('Invalid input! Adding additional elements to the board');
            continue;
        }
        if(sequence[index1] === sequence[index2]){
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence.splice(min,1);
            sequence.splice(max - 1,1);
        }else if(sequence[index1] !== sequence[index2]){
            console.log("Try again!");
        }
        if(sequence.length === 0){
            console.log(`You have won in ${i + 1} turns!`);
            return;
        }
        
    }
    if(sequence.length !== 0){
        console.log('Sorry you lose :(');
        console.log(`${sequence.join(' ')}`); 
    }

}
brainGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"]);