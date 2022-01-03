function party(input){
    let list = [];
    for(let i = 0;i<input.length;i++){
        let currentGuest = input[i].split(' ');
        if(currentGuest[2]==='going!'){
            if(list.includes(currentGuest[0])){
               console.log(`${currentGuest[0]} is already in the list!`);
            }else{
                list.push(currentGuest[0]);
            }
            
        }else if(currentGuest[2]==='not'){
            if(list.includes(currentGuest[0])){
                let index = list.indexOf(currentGuest[0]);
                list.splice(index,1);
            }else{
                console.log(`${currentGuest[0]} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
     
}
party(['Allie is going!','George is going!','John is not going!','George is not going!'])