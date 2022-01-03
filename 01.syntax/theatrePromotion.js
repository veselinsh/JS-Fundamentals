function theatrePromotion(day,age){
    switch(day){
        case 'Weekday':
            if(age >= 0 && age <=18){
                console.log(`12$`);
                break;
            }else if(age > 18 && age <=64){
                console.log(`18$`);
                break;
            }else if(age > 64 && age <=122){
                console.log(`12$`);
                break;
            }
            break;
        case 'Weekend':
            if(age >= 0 && age <=18){
                console.log(`15$`);
                break;
            }else if(age > 18 && age <=64){
                console.log(`20$`);
                break;
            }else if(age > 64 && age <=122){
                console.log(`15$`);
                break;
                
            }
        case 'Holiday':
            if(age >= 0 && age <=18){
                console.log(`5$`);
                break;

            }else if(age > 18 && age <=64){
                console.log(`12$`);
                break;

            }else if(age > 64 && age <=122){
                console.log(`10$`);
                break;
            }
            default:
                console.log("Error!");
                break;
    }
}
theatrePromotion('Weekday', 42)