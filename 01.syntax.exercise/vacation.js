function vacation(countPeople,group,dayOfWeek){
    let result = 0;
    if (group === 'Business' && countPeople >= 100){
        countPeople -= 10;
    }
     if(group === "Students" && dayOfWeek === "Friday"){
       result = countPeople * 8.45;
     }else if(group === "Business" && dayOfWeek === "Friday"){
        result = countPeople * 10.90;
     }else if(group === "Regular" && dayOfWeek === "Friday"){
        result = countPeople * 15;
     }else if(group === "Students" && dayOfWeek === "Saturday"){
        result = countPeople * 9.80;
     }else if(group === "Business" && dayOfWeek === "Saturday"){
        result = countPeople * 15.60;
     }else if(group === "Regular" && dayOfWeek === "Saturday"){
        result = countPeople * 20;
     }else if(group === "Students" && dayOfWeek === "Sunday"){
        result = countPeople * 10.46;
     }else if(group === "Business" && dayOfWeek === "Sunday"){
        result = countPeople * 16;
     }else if(group === "Regular" && dayOfWeek === "Sunday"){
        result = countPeople * 22.50;
     }
     if(group === "Students" && countPeople >= 30){
         result *= 0.85;
     }
     if(group === "Regular" && countPeople >= 10 && countPeople <= 20){
         result *= 0.95;
     }
     console.log(`Total price: ${result.toFixed(2)}`);

    }
vacation(40,
    "Regular",
    "Saturday"
    )