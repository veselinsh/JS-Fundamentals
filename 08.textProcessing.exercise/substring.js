function substring(word,text){
     text = text.split(' ');
     let isExist = true; 
     for(let match of text){
         match = match.toLowerCase();
         if(word === match){
             console.log(word);
             isExist = false;
             return;
         }
     }
     if(isExist){
         console.log(`${word} not found!`);
     }
}
substring('javascript',
'JavaScript is the best programming language'
);