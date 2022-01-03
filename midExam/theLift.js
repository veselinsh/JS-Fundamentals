function lift(input){
    let waitingPeople = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);
   for(let i = 0;i<wagons.length;i++){
       while(wagons[i] < 4){
           if(waitingPeople === 0){
               break;
           }
           wagons[i]++;
           waitingPeople--;
       }
   }
   for(let wagon of wagons){
       if(wagon !== 4){
           console.log('The lift has empty spots!');
           console.log(wagons.join(' '));
           return;
       }
   }
   if(waitingPeople !== 0){
       console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
       console.log(wagons.join(' '));
   }
}
lift(["15","0 0 0 0 0"]);