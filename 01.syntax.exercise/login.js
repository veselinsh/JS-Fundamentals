function login(list){
     let username = list.shift();
     let passwordAsList = username.split('');
     let passwordAsListReverse = passwordAsList.reverse();
     let password = passwordAsListReverse.join('');
     let count = 0;

     while(true){ 
         let trypassword = list.shift();
         count++;
         if(count === 4){
             console.log(`User ${username} blocked!`);
             break;
         }
         if(trypassword === password){
             console.log(`User ${username} logged in.`);
             break;
         }else{
             console.log('Incorrect password. Try again.');
         }
         
         
     }
}
login(['sunny','rainy','cloudy','sunny','not sunny']);