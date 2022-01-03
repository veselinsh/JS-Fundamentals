function activation(input) {
   let key = input.shift();
   let actions = {
       'Contains' : contains,
       'Flip' : flip,
       'Slice' : cut,
   };
   while(input[0] !== 'Generate'){
      let [command,...rest] = input.shift().split('>>>');
      let action = actions[command];
      action(...rest);
   }
   function contains(substring){
       if(key.includes(substring)){
           console.log(`${key} contains ${substring}`);
       }else{
           console.log('Substring not found!');
       }
   }
   function flip(type,startIndex,endIndex){
       startIndex = Number(startIndex);
       endIndex = Number(endIndex);
       if(type === 'Upper'){
           let sliced = key.substring(0,startIndex) + key.substring(startIndex,endIndex).toUpperCase() + key.substring(endIndex);
           console.log(sliced);
           key = sliced;
       }else{
        let sliced = key.substring(0,startIndex) + key.substring(startIndex,endIndex).toLowerCase() + key.substring(endIndex);
        console.log(sliced);
        key = sliced;
       }
      
   }
   function cut(startIndex,endIndex){
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    let sliced = key.substring(0,startIndex) +  key.substring(endIndex);
    console.log(sliced);
    key = sliced;
   }
   console.log(`Your activation key is: ${key}`);
}
activation(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
