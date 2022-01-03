function heroes(input) { 
       let count = Number(input.shift());
       let actions = {
         'CastSpell' : castSpell,
         'TakeDamage' : takeDamage,
         'Recharge' : recharge,
         'Heal' : heal,
       };
       let collection = {};
       for(let i = 0;i<count;i++){
           let [name,hitPoints,manaPoints] = input.shift().split(' ');
           collection[name] = {
               hp : Number(hitPoints) ,
               mp : Number(manaPoints),
           };
       }
       while(input[0] !== 'End'){
           let [command,name,amount,spellName] = input.shift().split(' - ');
           let action = actions[command];
           action(name,amount,spellName);
        }
        function castSpell(name,mpPoints,spellName){
            mpPoints = Number(mpPoints);
            if(collection[name].mp >= mpPoints){
                collection[name].mp -= mpPoints;
                console.log(`${name} has successfully cast ${spellName} and now has ${collection[name].mp} MP!`);
            }else{
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        }
        function takeDamage(name,damage,attacker){
            damage = Number(damage);
           if(Object.keys(collection).includes(name)){
             collection[name].hp -= damage;
             if(collection[name].hp  <= 0){
                 console.log(`${name} has been killed by ${attacker}!`);
                 delete collection[name];
             }else{
                 console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${collection[name].hp} HP left!`);
             }
           }
        }
        function recharge(name,amount){
            amount = Number(amount);
            let recharged = 200 - collection[name].mp
            collection[name].mp += amount;
            if(collection[name].mp > 200){
                amount = recharged
                collection[name].mp = 200;
            }
            console.log(`${name} recharged for ${amount} MP!`);
        }
        
         function heal(name,amount){
            amount = Number(amount);
            let healed = 100 - collection[name].hp
            collection[name].hp += amount;
            if(collection[name].hp > 100){
                amount = healed
                collection[name].hp = 100;
            }
            console.log(`${name} healed for ${amount} HP!`);
         }
         let sorted = Object.entries(collection).sort(compare);
         function compare(a,b){
             let nameA = a[0];
             let nameB = b[0];

             let hpA = a[1].hp;
             let hpB = b[1].hp;

             return hpB - hpA || nameA.localeCompare(nameB);
         }
         for(let [name,specifications] of sorted){
             console.log(`${name}`);
             console.log(`  HP: ${specifications.hp}`);
             console.log(`  MP: ${specifications.mp}`);
         }
 
}
heroes(['4',
    'Adela 90 150',
   'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])