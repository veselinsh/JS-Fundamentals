function muOnline(input){
    let initialHealth = 100;
    let initialBitcoin = 0;
    let command = input.split('|');
    let counter = 0;
    for(let i = 0;i<command.length;i++){
        let tokens = command[i].split(' ');
        let power = Number(tokens[1]);
        switch(tokens[0]){
            case 'potion':
                if(initialHealth === 100){
                   console.log(`You healed for 0 hp.`);
                   console.log(`Current health: ${initialHealth} hp.`);
                }else{
                    if(initialHealth + power > 100){
                           while(initialHealth !== 100){
                        initialHealth++;
                        counter++
                    }
                    console.log(`You healed for ${counter} hp.`);
                    console.log(`Current health: ${initialHealth} hp.`);
                    }else{
                        initialHealth += power;
                        console.log(`You healed for ${power} hp.`);
                         console.log(`Current health: ${initialHealth} hp.`);
                    }
                 
                }
                counter = 0;
                break;
            case 'chest':
                initialBitcoin += power;
                console.log(`You found ${power} bitcoins.`);
                break;
            default:
                initialHealth -= power;
                if(initialHealth > 0){
                    console.log(`You slayed ${tokens[0]}.`);
                }else{
                    console.log(`You died! Killed by ${tokens[0]}.`);
                    console.log(`Best room: ${i+1}`);
                    return;
                }
                break;
        }
    }
    console.log(`You've made it!`); 
    console.log(`Bitcoins: ${initialBitcoin}`); 
    console.log(`Health: ${initialHealth}`);
}
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');