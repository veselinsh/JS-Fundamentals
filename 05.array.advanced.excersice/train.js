function trainCapacity(array){
    let wagons = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());
    for(let command of array){
       let tokens = command.split(' ');
     
      
        if(tokens[0]==='Add'){
           wagons.push(Number(tokens[1]));
        }else{
           let passengers = Number(tokens[0]);
           for(let i = 0;i<wagons.length;i++){
               if(passengers + wagons[i] <= capacity){
                   wagons[i]+=passengers;
                   break;
               }
           }
        }
    }
    console.log(wagons.join(' '));
}
trainCapacity(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])