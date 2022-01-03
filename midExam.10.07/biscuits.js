function cookies(list){
    let nameOfCookies = list.shift().split(', ');
    let length = nameOfCookies.length
    for(let i = 0;i<list.length;i++){
       let command = list[i].split(' ');
       if(command[0] === 'OutOfStock'){
           for(let i = 0;i<length;i++){
             if(nameOfCookies[i] === command[1]) {
             let index = nameOfCookies.indexOf(command[1]);
             nameOfCookies.splice(index,1);
             nameOfCookies.splice(index,0,"None");
            }
           }
       }else if(command[0] === 'Required'){
           let index = Number(command[2]);
           if(index < 0 || index >= nameOfCookies.length || nameOfCookies[index] === 'None'){
               break;
           }else{
               nameOfCookies.splice(index,1);
               nameOfCookies.splice(index,0,command[1]);
           }
       }else if(command[0] === 'Last'){
           nameOfCookies.push(command[1]);
       }

       
    }
    let fillterArray = nameOfCookies.filter(x => x !== 'None');
    console.log(fillterArray.join(' '));

}
cookies(["Vanilla, Chocolate, Raspberry, Chocolate",
"OutOfStock Chocolate",
"Required BBB 3",
"No More Money"])


