function wordtracker(input) {
    let searchedWords = input.shift().split(' ');
    let dictionary = {}; 
    for(let word of searchedWords){
       dictionary[word] = 0;
    }
    for(let word of input){
        if(Object.keys(dictionary).includes(word)){
            dictionary[word] += 1;
        }
    }
    let sorted = Object.entries(dictionary).sort((a,b) => b[1] - a[1]);
    for(let [key,value] of sorted){
        console.log(`${key} - ${value}`);
    }

}
wordtracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])