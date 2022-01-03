function solve(input) {
    let actions = {
      'Add': add,
      'Attack' : attack,
      'Delete' : cut,
    }
    let persons = {};
    while(input[0] !== 'Results'){
        let [command,...params] = input.shift().split(':');
        let action = actions[command];
        action(...params);
    }
    function add(name,health,energy){
        health = Number(health);
        energy = Number(energy);
        if(persons[name] === undefined){
            persons[name] = {
                health : health,
                energy : energy,
            }
        }else{
            persons[name].health += health;
        }
    }
    function attack(attacker,defender,damage){
        damage = Number(damage);
        if(persons[attacker] !== undefined && persons[defender] !== undefined) {
            persons[defender].health -= damage;
            persons[attacker].energy -= 1;
            if(persons[defender].health <= 0){
                console.log(`${defender} was disqualified!`);
                delete persons[defender];
            }
            if(persons[attacker].energy <= 0){
                console.log(`${attacker} was disqualified!`);
                delete persons[attacker];
            }
        }
    }
    function cut(name){
       if(name === 'All'){
           for(let person of Object.keys(persons)){
            delete persons[person];
        }  
       }else{
          delete persons[name];
       }
    }
    let sorted = Object.entries(persons).sort(compare);
    console.log(`People count: ${sorted.length}`);
    function compare(a,b){
      let healthA = a[1].health;
      let healthB = b[1].health;

      let nameA = a[0];
      let nameB = b[0];
      return  healthB -  healthA || nameA.localeCompare(nameB);
    }
    for(let [name,other] of sorted){
        console.log(`${name} - ${other.health} - ${other.energy}`);
    }
 
}
solve(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Results"])


