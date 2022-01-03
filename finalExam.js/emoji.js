function emoji ([input]){
    
    let digits = input.match(/\d/g).map(Number);
    let treshold = 1;
    let result = [];
    let match = input.match(/([::**]{2})([A-Z][a-z]{2,})\1/g);
    for(let digit of digits){
        treshold *=  digit;
    }
    if(match !== null){
       for(let emoji of match){
        let coolness = 0;
       let chars = emoji.slice(2,-2);
       for(let char of chars){
          coolness += char.charCodeAt(0);
       }
       if(coolness >= treshold){
         result.push(emoji);
       }
    }
    }
  
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${match ? match.length : 0} emojis found in the text. The cool ones are:`);
       for(let emoji of result){
           console.log(emoji);
       } 
   
    
   
}
emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);