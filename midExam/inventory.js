function workshop(commands) {
    let collectedItems = commands.shift().split(', ');
    for(let i = 0;i<commands.length;i++){
        let command = commands[i].split(' - ');
        if (command[0] === 'Collect') {
            if(!collectedItems.includes(command[1])){
                collectedItems.push(command[1]);
            }
        } else if (command[0] === 'Drop') {
            if (collectedItems.includes(command[1])) {
                let index = collectedItems.indexOf(command[1]);
                collectedItems.splice(index, 1);
            }
        } else if (command[0] === 'Combine Items') {
            let combined = command[1].split(':');
            if (collectedItems.includes(combined[0])) {
                let index = collectedItems.indexOf(combined[0]);
                collectedItems.splice(index + 1, 0, combined[1]);
            }

        } else if (command[0] === 'Renew') {
            if (collectedItems.includes(command[1])) {
                let index = collectedItems.indexOf(command[1]);
                let removed = collectedItems.splice(index, 1);
                collectedItems.push(removed);
            }

        }
    }
    console.log(collectedItems.join(', '));
}
workshop([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);