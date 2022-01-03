function piccolo(carList) {
    let register = [];
    for (let command of carList) {
        let [direction, carNumber] = command.split(', ');
        if (direction === 'IN') {
            if (!register.includes(carNumber)) {
                register.push(carNumber);
            }
        } else if (direction === 'OUT') {
            if (register.includes(carNumber)) {
                let index = register.indexOf(carNumber)
                register.splice(index, 1);
            }
        }
    }
    let sorted = register.sort((a, b) => a.localeCompare(b));
    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sorted.join('\n'));
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
