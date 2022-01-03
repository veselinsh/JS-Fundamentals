function needForSpeed(input) {
        let count = Number(input.shift());
        let actions = {
          'Drive': drive,
          'Refuel': refuel,
          'Revert': revert,
        }
        let collection = {};
        for(let i = 0;i<count;i++){
            let [model,mileage,fuel] = input.shift().split('|');
            collection[model] = {
            mileage : Number(mileage),
            fuel : Number(fuel),       
        }
        }
        while(input[0] !== 'Stop'){
            let [command,name,kilometers,fuel] = input.shift().split(' : ');
            let action = actions[command];
            action(name,kilometers,fuel);
        }
        function drive(name,kilometers,fuel){
            kilometers = Number(kilometers);
            fuel = Number(fuel);
            if(collection[name].fuel - fuel <= 0){
                console.log('Not enough fuel to make that ride');
            }else{
                collection[name].mileage += kilometers;
                collection[name].fuel -= fuel;
                console.log(`${name} driven for ${kilometers} kilometers. ${fuel} liters of fuel consumed.`);
                if( collection[name].mileage >= 100000){
                    console.log(`Time to sell the ${name}!`);
                    delete collection[name];
                }
            }
        }
        
        function refuel(name,fuel){
            fuel = Number(fuel);
            let partTank = 75 - collection[name].fuel
            collection[name].fuel += fuel;
            if(collection[name].fuel > 75){
                fuel = partTank
                collection[name].fuel = 75;
            }
            console.log(`${name} refueled with ${fuel} liters`);
        }
        function revert(name,kilometers){
            kilometers = Number(kilometers);
            collection[name].mileage -=kilometers;
            if(collection[name].mileage < 10000){
                collection[name].mileage = 10000;
            }else{
                  console.log(`${name} mileage decreased by ${kilometers} kilometers`);
            }
        }
       let sorted = Object.entries(collection).sort(compare);
       function compare(a,b){
         let mileageA = a[1].mileage;
         let mileageB = b[1].mileage;
         let nameA = a[0];
         let nameB = b[0];  

         return mileageB - mileageA || nameB.localeComapre(nameA);

       }
        for(let [name,adds] of sorted){
            console.log(`${name} -> Mileage: ${adds.mileage} kms, Fuel in the tank: ${adds.fuel} lt.`);
       }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])