function pianist(input) {
    let pieces = {};
    let countOfPieces = Number(input.shift());
    for(let i = 0;i<countOfPieces;i++){
        let [piece,composer,key] = input[i].split('|');
        if(!Object.keys(pieces).includes(piece)){
            pieces[piece] = {};
        }
        if(!Object.keys(pieces[piece]).includes(composer)){
            pieces[piece][composer] = key;
        } 
    }
    for(let i = countOfPieces;i<input.length;i++){
        if(input[i] === 'Stop'){
            break;
        }
        let tokens = input[i].split('|');
        if(tokens[0] === 'Add') {
            if(Object.keys(pieces).includes(tokens[1])){
                console.log(`${tokens[1]} is already in the collection!`);
            }else{
                pieces[tokens[1]] = {};
                pieces[tokens[1]][tokens[2]] = tokens[3];
                console.log(`${tokens[1]} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        }else if(tokens[0] === 'Remove'){
            if(Object.keys(pieces).includes(tokens[1])){
                let piece = tokens[1];
                delete pieces[piece];
                console.log(`Successfully removed ${tokens[1]}!`);
            }else{
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
            }
        }else if(tokens[0] === 'ChangeKey'){
            if(Object.keys(pieces).includes(tokens[1])){
                let pianist = Object.keys(pieces[tokens[1]])[0];
                pieces[tokens[1]][pianist] = tokens[2];
               console.log(`Changed the key of ${tokens[1]} to ${tokens[2]}!`);
            }else{
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(pieces).sort((a,b)=>a[0].localeCompare(b[0]));
    for(let [sort,add] of sorted){
        let key = Object.keys(add);
        let value = Object.values(add);
        console.log(`${sort} -> Composer: ${key}, Key: ${value}`);
    }

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
     'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
     'ChangeKey|Moonlight Sonata|C# Major',
     'Stop'
])