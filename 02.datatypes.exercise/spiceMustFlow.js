function spiceMustFlow(startingYield){
    let days = 0;
    let totalYield = 0;
  
      while(startingYield >= 100){
         totalYield += (startingYield - 26);
         days++;
         startingYield -= 10;
      }
      totalYield -= 26;
      if(totalYield < 0){
         totalYield = 0;
      }
            
      
      console.log(days);
      console.log(totalYield);
}
spiceMustFlow(450);