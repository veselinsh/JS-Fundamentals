function barcodes(input){
    let count = Number(input.shift());
      let pattern = /@(#+)([A-Z][\w]+[A-Z])([@#])/g;
      let result = [];
      let digits = ['0','1','2','3','4','5','6','7','8','9'];
      for(let i = 0;i<count;i++){
          let line = input.shift();
          let match = pattern.exec(line);
          if(match !== null){
           result.push(match[2]);
          }
      }
      
      if(result.length !== 0){
          for(let digit of result){
              let groupCounter = '';
             for(let i =0;i<digit.length;i++){
               if(digits.includes(digit[i])){
                  groupCounter += digit[i]
               }
             }
             if(groupCounter.length === 0){
                   console.log(`Product group: 00`);
             }else{
                console.log(`Product group: ${Number(groupCounter)}`);
             }
          }
      }   
}
barcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
