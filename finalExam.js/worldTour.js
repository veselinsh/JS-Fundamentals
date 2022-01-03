function worldTour(input) {
    let destination = input.shift();
    for(let i = 0;i<input.length;i++){
        if(input[i] === 'Travel'){
            break;
        }
        let tokens = input[i].split(':');
        if(tokens[0] === 'Add Stop'){
          let index = Number(tokens[1]);
          if(index >= 0 && index <= destination.length){
              let firstPart = destination.substring(0,index);
              firstPart += tokens[2];
              firstPart += destination.substring(index);
              destination = firstPart;
               console.log(destination); 
          }else{
              break;
          }
        }else if(tokens[0] === 'Remove Stop'){
          let startIndex = Number(tokens[1]);
          let endIndex = Number(tokens[2]);
          if((startIndex >= 0 && startIndex <= destination.length) && (endIndex >= 0 && endIndex <= destination.length)){
              destination = destination.split('');
              let result = [];
              for(let j = 0;j<destination.length;j++){
                   if(j < startIndex || j > endIndex){
                      result.push(destination[j]);
                   }
              }
              destination = result.join('')
              console.log(destination);
          }
        }else if(tokens[0] === 'Switch'){
           if(destination.includes(tokens[1])){
               let found = destination.indexOf(tokens[1]);
               while (found !== -1){
                  let replaced = destination.replace(tokens[1],tokens[2]); 
                  destination = replaced;
                  found = destination.indexOf(tokens[1]);
               }
            
              console.log(destination);
            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
