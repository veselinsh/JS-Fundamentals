function mirrorWords(input) {
    let pattern = /([@#])(?<word>[a-zA-Z]{3,})\1([@#])([A-Za-z]{3,})\1/g;
    let result = [];
    let match = input[0].match(pattern);
    if (match !== null) {
        for (let i = 0; i < match.length; i++) {
            let splitted = '';
            if (match[i].includes('@')) {
                splitted = match[i].split('@');
            } else {
                splitted = match[i].split('#');
            }
            let [_, word1, empty, word2] = splitted;
            let backwords = '';
            for (let j = word2.length - 1; j >= 0; j--) {
                backwords += word2[j];
            }
            if (word1 === backwords) {
                result.push(word1);
                result.push(word2);
            }
        }
    }

    if (match === null) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${match.length} word pairs found!`);
    }
    if (result.length !== 0) {
        console.log(`The mirror words are:`);
        for (let i = 0; i < result.length - 1; i += 2) {
            if (result.length - 2 === i) {
                console.log(`${result[i]} <=> ${result[i + 1]}`);
            } else {
                console.log(`${result[i]} <=> ${result[i + 1]}, `);
            }

        }
    } else {
        console.log('No mirror words!');
    }


}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);