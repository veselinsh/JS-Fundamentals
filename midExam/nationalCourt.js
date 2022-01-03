function nationalCourt(list){
    let eff1 = Number(list.shift());
    let eff2 = Number(list.shift());
    let eff3 = Number(list.shift());
    let countPeople = Number(list.shift());
    let hours = 0;
    while(countPeople > 0){
      hours++;
      countPeople -= (eff1 + eff2 + eff3);
      if(hours % 4 === 0){
          hours++;
      }
    }
    console.log(`Time needed: ${hours}h.`);

}
nationalCourt(['3','2','5','40']);