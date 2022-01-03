function plantDiscovery(input) {
        let countPlants = input.shift();
        countPlants = Number(countPlants);
        let plants = {};
        let counter = 0;
        for(let i = 0;i<countPlants;i++){
           let tokens = input.shift().split('<->');
           let plant = tokens[0];
           let rarity = Number(tokens[1]);
           if(!Object.keys(plant).includes(plant)){
             plants[plant] = {};
             plants[plant]['Rarity'] = rarity;
           }else{
            plants[plant]['Rarity'] = rarity;
           }
        }
      
      for(let i = 0;i<input.length;i++){
          if(input[i] === 'Exhibition'){
              break;
          }
          let [command,tokens] = input[i].split(': ');
          let [plant, rating] = tokens.split(' - ');
          let rate = Number(rating);
          if(command === 'Rate'){
           if(Object.keys(plants).includes(plant)){
            if(!Object.keys(plants[plant]).includes('Rating')){
                plants[plant]['Rating'] = rate;
            }else{
                let currentRate  =  (plants[plant]['Rating'] + rate)/2;
                plants[plant]['Rating'] = currentRate;
            }
           }else{
               console.log('error');
           }
          }else if(command === 'Update'){
            if(Object.keys(plants).includes(plant)){
               if(Object.keys(plants[plant]).includes('Rarity')){
                plants[plant]['Rarity'] = rate;
               }
            }else{
                console.log('error');
            }
          }else if(command === 'Reset'){
            if(Object.keys(plants).includes(plant)){
                if(Object.keys(plants[plant]).includes('Rating')){
                    plants[plant]['Rating'] = 0;
                }
            }else{
                console.log('error');
            }
          }
      }
      let nestedObject = Object.entries(plants).sort((a,b) => b[1]['Rating'] - a[1]['Rating']).sort((a,b) => b[1]['Rarity'] - a[1]['Rarity']);
      console.log('Plants for the exhibition:');
      for(let [name,add] of nestedObject){
          let value =  Object.values(add);
          console.log(`- ${name}; Rarity: ${value[0]}; Rating: ${(value[1]).toFixed(2)}`);
      }
        
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
     "Reset: Arnoldii",
    "Exhibition"])