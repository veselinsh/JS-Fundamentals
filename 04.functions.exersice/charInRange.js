function charInRange(firstChar, secondChar) {
    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);
    if (min > max) {
        min = secondChar.charCodeAt(0);
        max = firstChar.charCodeAt(0);
    }
    let result = '';
    for (let i = min + 1; i < max; i++) {
       result += `${String.fromCharCode(i)} `;
    }
    return result;

}
let result = charInRange('a', 'd');
console.log(result);