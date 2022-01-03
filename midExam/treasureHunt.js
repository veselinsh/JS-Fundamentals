function searchingForTreasure(input) {
    let initialTreasure = input.shift().split('|');
    let removedItems = [];
    let score = 0;
    let counter = 0;
    let finalScore = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let command = input[i].split(' ');
        if (command[0] === 'Loot') {
            for (let j = 1; j < command.length; j++) {
                if (!initialTreasure.includes(command[j])) {
                    initialTreasure.unshift(command[j]);
                }
            }
        } else if (command[0] === 'Drop') {
            let idx = Number(command[1]);
            if (idx < 0 || idx > initialTreasure.length) {
                continue;
            } else {
                let sliceditem = initialTreasure.splice(idx, 1);
                initialTreasure.push(sliceditem);
            }

        } else if (command[0] === 'Steal') {
            let count = Number(command[1]);
            let stealItems = initialTreasure.splice(-count);
            console.log(`${stealItems.join(', ')}`);

        }

    }
    for (let i = 0; i < initialTreasure.length; i++) {
        score += initialTreasure[i].length;
        counter++;
    }
    finalScore = score / counter;


    if (score === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${finalScore.toFixed(2)} pirate credits.`);
    }
}


searchingForTreasure(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);