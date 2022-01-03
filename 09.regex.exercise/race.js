function race(input) {
    let participants = input.shift().split(', ');
    let racers = {};
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /[0-9]/g;
   
    for(let racer of participants){
        racers[racer] = 0;
    }
    while(input[0] !== 'end of race'){
         let sum = 0;
        let line = input.shift();
        let letters = line.match(namePattern);
        let num = line.match(distancePattern);
        let name = letters.join('');
        let distance =  num.map(Number);
        for(let dist of distance){
          sum += dist;
        }
        if(Object.keys(racers).includes(name)){
            racers[name] += sum;
        }
    }
    let sorted = Object.entries(racers).sort((a,b)=> b[1]-a[1]);
    if(sorted[0]){
        console.log(`1st place: ${sorted[0][0]}`);
    }
    if(sorted[1]){
        console.log(`2nd place: ${sorted[1][0]}`);
    }
    if(sorted[2]){
        console.log(`3rd place: ${sorted[2][0]}`);
    }
}

race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]);