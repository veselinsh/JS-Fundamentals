function cardGame(list){
    let points = {J:11,Q:12,K:13,A:14,S:4,H:3,D:2,C:1};
    let players = {};
    let results = {};
    for(let player of list){
        let tokens = player.split(': '); 
        let name = tokens[0];
        let cards =  tokens[1].split(', ');
        if(!Object.keys(players).includes(name)){
           players[name] = [];
        }
        
        players[name] = players[name].concat(cards);  
    }
    for(let [name,cards] of Object.entries(players)){
        results[name] = 0;
        for(let i = 0;i<cards.length;i++){
           let card = cards[i];
            if(cards.indexOf(card) === i){
            let current = card.split('');
            let type = current.pop();
            let power = current.join('');
            let cardPoints = 0;
            if(Object.keys(points).includes(power)){
                cardPoints =  points[power] * points[type]; 
            }else{
                cardPoints = Number(power) * points[type];
            }
            results[name] += cardPoints;
        }
     }
    }
    for(let [player,points] of Object.entries(results)){
        console.log(`${player}: ${points}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);