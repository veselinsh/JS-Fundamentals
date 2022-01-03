function weekday(num){
   let weekday = ["Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"];
    let index = num - 1;
    if(index < 0 || index > 6){
        console.log("Invalid day!");
    }else{
        console.log(weekday[index]);
    }

}
weekday(3);