function bitcoinMining(list){
      let dayMining = 0;
      let bitcoin = 0;
      let day = 0;
      let flag = 1;
      let result = 0;
    for(let i = 1;i<=3;i++){
       dayMining = list.shift();
       if(dayMining === undefined){
         break;
       }
       if(i === 3){
         dayMining *= 0.70
       }
       result = result + (dayMining * 67.51);
       while(result >= 11949.16 ){
         if(i === 1 && flag === 1){
           day=1;
           flag = 0;
         }else if(i === 2 && flag === 1){
          day=2;
          flag = 0;
         }else if(i === 3 && flag === 1){
          day=3;
          flag = 0;
         }
         result -= 11949.16 ;
         bitcoin++;
       } 
         

    }
    
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin !== 0){
         console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${result.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
