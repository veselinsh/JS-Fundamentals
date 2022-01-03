function oddOccurances(input){
    let occurances = input.split(' ');
    let obj = {};
    let sorted = [];
    for(let word of occurances){
        let lowerCase = word.toLowerCase();
        if(!Object.keys(obj).includes(lowerCase)){
            obj[lowerCase] = 0;
        }
        obj[lowerCase] += 1;
    }
    for(let [key,value] of Object.entries(obj)){
        if(value % 2 !== 0){
            sorted.push(key);
        }
    }
    console.log(sorted.join(' '));

}
oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');