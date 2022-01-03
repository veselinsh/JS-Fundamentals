function monster(list){
    let health = 100;
    let coins = 0;
    
    let arr = list[0].split('|');
    for(let i = 0;i<arr.length;i++){
        let current = arr[i].split(' ');
        for(let j = 0;j<1;j++){
            let type = current[j];
            let num =  Number(current[++j]);
            switch(type){
                case 'chest':
                  coins += num;
                  console.log(`You found ${num} coins.`);
                  break;
                case 'potion':
                    health += num;
                    if(health > 100){
                       health = 100;
                    }
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    break;
                    default:
                        health -= num;
                        if(health <= 0){
                            console.log(`You died! Killed by ${type}.`);
                            console.log(`Best room: ${i+1}`);
                            return;
                        }else{
                            console.log(`You slayed ${type}.`);
                            break;
                        }
            }
        }
      
    }
console.log(`You've made it!`);  
console.log(`Coins: ${coins}`);  
console.log(`Health: ${health}`);
   
    
}
monster(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);