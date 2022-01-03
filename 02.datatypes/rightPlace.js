function rightPlace(str, char, result) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            temp += char;
        } else {
           temp += str[i];
        }
    }

    if (temp === result) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');