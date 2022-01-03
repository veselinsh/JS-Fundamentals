function imitation(input) {
    let operations = {
        'Move' : move,
        'ChangeAll' : changeAll,
        'Insert' : insert,
    }
    let message = input.shift();
    while(input[0] !== 'Decode'){
        let tokens = input.shift().split('|');
        let action = operations[tokens[0]];
        action(tokens[1],tokens[2]);
    }
    function move(countOfLetters){
      countOfLetters = Number(countOfLetters)
     let left = message.substring(0,countOfLetters);
     let right = message.substring(countOfLetters); 
     message = right + left;
    }
    function changeAll(substring,replace){
     message = message.split(substring).join(replace);
    }
    function insert(index,value){
      index = Number(index)
      let left = message.substring(0,index);
      let right = message.substring(index); 
      message = left + value + right;
    }
    console.log(`The decrypted message is: ${message}`);
}
imitation([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode'
]
)