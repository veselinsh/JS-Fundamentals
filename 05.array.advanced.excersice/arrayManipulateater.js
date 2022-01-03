function manipulation(array, command) {
    for (let i = 0; i < command.length; i++) {
        let tokens = command[i].split(' ');
        if (tokens[0] === 'add') {
            let idx = Number(tokens[1]);
            let element = Number(tokens[2]);
            array.splice(idx, 0, element);

        } else if (tokens[0] === 'addMany') {
            let idx = Number(tokens[1]);
            tokens.splice(0, 2);
            let numberToAdd = tokens.map(Number);
            array.splice(idx, 0, ...numberToAdd)
        } else if (tokens[0] === 'contains') {
            let element = Number(tokens[1]);
            if (array.includes(element)) {
                console.log(array.indexOf(element));
            } else {
                console.log('-1');
            }

        } else if (tokens[0] === 'remove') {
            let idx = Number(tokens[1]);
            array.splice(idx, 1);

        } else if (tokens[0] === 'shift') {
            let position = Number(tokens[1]);
            for (let i = 0; i < position; i++) {
                array.push(array.shift());
            }

        } else if (tokens[0] === 'sumPairs') {
            let result = [];
            if (array.length % 2 !== 0) {
                array.push(0);
            }
            for (let i = 0; i < array.length - 1; i += 2) {
                let sum = array[i] + array[i + 1];
                result.push(sum);
            }
            array = result;
        } else if (tokens[0] === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            return;
        }
    }

}
manipulation([2, 2, 4, 2, 4]
    ,["add 1 4", "sumPairs", "print"]);