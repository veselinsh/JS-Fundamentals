function revealWord(words,sentence){
    sentence = ` ${sentence} `;
    words = words.split(', ');
    for(let word of words){
      
        let searched = ` ${'*'.repeat( word.length)} `; 
         word = ` ${word} `;
        sentence = sentence.replace(searched,word);
       
    }   
    console.log(sentence.trim());

}
revealWord('great','softuni is ***** place for learning new programming languages');