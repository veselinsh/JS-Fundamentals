function shooting(list) {
    let targets = list.shift().split(' ').map(Number);
    let counter = 0
    for (let i = 0; i < list.length - 1; i++) {
        let currentCommand = Number(list[i]);
        for (let j = 0; j < targets.length; j++) {
            if (currentCommand === j) {
                counter++;
                for (let k = 0; k < j; k++) {
                    if (targets[k] === -1) {
                        continue;
                    } else {
                        if (targets[k] > targets[j]) {
                            targets[k] -= targets[j];
                        } else {
                            targets[k] += targets[j];
                        }

                    }
                }
                for (let z = j + 1; z < targets.length; z++) {
                    if (targets[z] === -1) {
                        continue;
                    } else {
                        if (targets[z] > targets[j]) {
                            targets[z] -= targets[j];
                        } else {
                            targets[z] += targets[j];
                        }
                    }
                }
                targets[j] = -1;

            }
        }

    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);

}
shooting(['24 50 36 70', '0', '4', '3', '1', 'End']);