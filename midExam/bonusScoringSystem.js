function bonusScoringSystem(list){
  let students = Number(list.shift());
  let lectures = Number(list.shift());
  let additionalBonus = Number(list.shift());
  let biggestResult = 0;
  let index = 0;

  for(let i = 0;i<list.length;i++){
      let totalResult = 0;
      let attendance = Number(list[i]);
      totalResult = attendance / lectures * (5 + additionalBonus);
      if(totalResult >= biggestResult){
          biggestResult = totalResult;
          index = i;
      }
  }
  console.log(`Max Bonus: ${Math.round(biggestResult)}.`);
  console.log(`The student has attended ${list[index]} lectures.`);
    
    

}
bonusScoringSystem( [ '5',  '25', '30', '12', '19', '24', '16', '20']);
 