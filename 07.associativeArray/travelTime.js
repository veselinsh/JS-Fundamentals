function travelTime(input) {
    let destination = {};
    for(let element of input){
        let [country,city,cost] = element.split(' > ');
        if(!Object.keys(destination).includes(country)){
           destination[country] = {};
        }
        if(!Object.keys(destination[country]).includes(city)){
            destination[country][city] = Number(cost);
        }

        if(Number(cost) < destination[country][city]){
            destination[country][city] = Number(cost);
        }
    }
    let sorted = Object
    .entries(destination)
    .sort((a,b) => a[0].localeCompare(b[0]) || Object.values(a[1]).reduce((x,y) => x + y) -  Object.values(b[1]).reduce((x,y) => x + y) );
    for(let [country,town] of sorted){
        let entriesAsString = Object.entries(town).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${entriesAsString.join(' ')}`);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);