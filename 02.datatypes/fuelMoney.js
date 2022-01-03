function fuelMoney(distance,passengers,price1Liter){
    let neededFuel = (distance / 100) * 7;
       neededFuel += passengers * 0.100;
    let money = neededFuel * price1Liter; 
    console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(260, 9, 2.49);