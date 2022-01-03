function pirates(input) {
    let cities = {};
    let actions = {
        'Plunder': plunder,
        'Prosper': prosper,
    };
    while (input[0] !== 'Sail') {
        let [city, population, gold] = input.shift().split('||');
        if (cities[city] === undefined) {
            cities[city] = {
                population: Number(population),
                gold: Number(gold),
            }
        } else {
            cities[city].population += Number(population);
            cities[city].gold += Number(gold);
        }
    }
    input.shift();
    while (input[0] !== 'End') {
        let [command,...rest] = input.shift().split('=>');
        let action = actions[command];
        action(...rest);
    }
    function plunder(town, people, gold) {
        if(cities[town] !== undefined){
        people = Number(people);
        gold = Number(gold);
        cities[town].population -= people;
        cities[town].gold -= gold;
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        if (cities[town].population <= 0 || cities[town].gold <= 0){
            console.log(`${town} has been wiped off the map!`);
            delete cities[town];
        }
        }

   }
    function prosper(town, gold) {
      gold = Number(gold);
      if(gold >= 0){
          cities[town].gold += gold;
          console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
      }else{
          console.log(`Gold added cannot be a negative number!`);
      }

    }
    if(Object.keys(cities).length !== 0){
        let sorted = Object.entries(cities).sort(compare);
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for(let [name,value] of sorted){
            console.log(`${name} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
        }
    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
    function compare(a,b){
        let goldA = a[1].gold;
        let goldB = b[1].gold;

        let nameA = a[0];
        let nameB = b[0];
        return goldB - goldA || nameA.localeCompare(nameB);
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
