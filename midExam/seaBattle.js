function seaWar(input) {
    let pirateShips = input.shift().split('>').map(Number);
    let warships = input.shift().split('>').map(Number);
    let maxCapacity = Number(input.shift());
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        if (command[0] === 'Fire') {
            let index = Number(command[1]);
            let damage = Number(command[2]);
            if (warships.includes(warships[index])) {
                warships[index] -= damage;
                if (warships[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }

        } else if (command[0] === 'Defend') {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);
            if (pirateShips.includes(pirateShips[startIndex]) && pirateShips.includes(pirateShips[endIndex])){
                for(let j = startIndex; j <= endIndex; j++) {
                    pirateShips[j] -= damage;
                    if(pirateShips[j] <= 0){
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }

        } else if (command[0] === 'Repair') {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if (pirateShips.includes(pirateShips[index])){
                pirateShips[index] += health;
                if(pirateShips[index] > maxCapacity){
                    pirateShips[index] = maxCapacity;
                }
            }
        } else if (command[0] === 'Status') {
             for(let j = 0;j< pirateShips.length;j++){
                if(pirateShips[j] < maxCapacity * 0.2){
                   counter++;
                }
             }
             console.log(`${counter} sections need repair.`);
        }
    }
    let sumPirate = 0;
    for(let digits of pirateShips){
       sumPirate += digits;
    }
    console.log(`Pirate ship status: ${sumPirate}`);
    let sumWar = 0;
    for(let digits of warships){
        sumWar += digits;
     }
     console.log(`Warship status: ${sumWar}`);
}
seaWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
;