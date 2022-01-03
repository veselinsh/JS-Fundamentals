function secretChat(input) {
       let message = input.shift();
       for(let i = 0;i<input.length;i++){
           if(input[i] === 'Reveal'){
               break;
           }
           let tokens = input[i].split(':|:');
           let command = tokens[0];
           if(command === 'InsertSpace'){
            let index = Number(tokens[1]);
            let sliced = message.substring(0,index);
            sliced += ' ';
            sliced += message.substring(index);
            message = sliced;
            console.log(message);
         
           }else if(command === 'Reverse'){
               let substring = tokens[1]
             if(message.indexOf(substring) !== -1){
                let index = message.indexOf(substring);
                let sliced =  message.substring(index,index + substring.length).split('').reverse().join('');
                let finalPart = message.substring(0,index) + message.substring(index + substring.length);
                finalPart += sliced;
                message = finalPart;
            console.log(message);
                
                
             }else{
                 console.log('error');
             }
           }else if(command === 'ChangeAll'){
              let substring = tokens[1];
              let replacement = tokens[2];
              let found = message.indexOf(substring);
              while (found !== -1){
                  let replacedText = message.replace(substring,replacement);
                   message = replacedText;
                  found = message.indexOf(substring);
              }
            console.log(message);
             
           }
        }
        console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);