// function hashtag(input){
//       input = input.split(' ');
//       let result = [];
//       for(let word of input){
//           if(word[0] === '#' && word.length > 1 )[
//               result.push(word.substring(1)),
//           ]
//       }
//       for(let word of result){
//           for(let i = 0;i<word.length;i++){
//               if(word[i].charCodeAt(0)>= 65 && word[i].charCodeAt(0)<= 90 || (word[i].charCodeAt(0)>= 97 && word[i].charCodeAt(0)<= 122)){

//               }else{
//                   let index = result.indexOf(word);
//                    result.splice(index,1);
//               }
//           }
//       }
//       console.log(result.join('\n'));
// }
function hashtag(text){
    let result = [];
    let collecting = false;
    let currentWord = '';
    for(let char of text){
       
       if(collecting){
          if(char === ' '){
              collecting = false;
              if(currentWord.length>0){
                  result.push(currentWord);
                 
              } 
              currentWord = '';
          }else {
              let code = char.charCodeAt(0);
           if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
                currentWord += char;
           } else{
              collecting = false;
           }
          }
       }else{
           if(char === '#'){
           collecting = true;
       }
       }
    }
    if(collecting && currentWord.length>0){
              result.push(currentWord);
   }
    for(let word of result){
        console.log(word);
    }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');