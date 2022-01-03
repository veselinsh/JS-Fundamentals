function blackFlag(input){
    let [daysOfPlunder,plunderForDay,endPlunder] = input.map(Number);
    let sum = 0;
    for(let i = 1;i<=daysOfPlunder;i++){
        sum += plunderForDay;
       if(i % 3 === 0){
           sum += plunderForDay * 0.5;
       }
       if(i % 5 === 0){
           sum -= sum * 0.3;
       }
    }
    let percentage = (sum / endPlunder) * 100;
    if(sum >= endPlunder){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    }else{
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["10",
"20",
"380"])
);