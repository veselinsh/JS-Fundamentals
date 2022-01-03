function partytime(guestList) {
    let vip = [];
    let regular = [];
    let list = ['1','2','3','4','5','6','7','8','9','0'];
    let indexOfParty = guestList.indexOf('PARTY');
    for(let i = 0;i<indexOfParty;i++){
        let current = guestList[i];
        if(list.includes(current[0])){
            vip.push(current);
        }else{
            regular.push(current);
        }
    }
    for(let i = indexOfParty + 1;i<guestList.length;i++){
        let current = guestList[i];
        if(list.includes(current[0])){
                let index = vip.indexOf(current);
                vip.splice(index,1);
        }else{
                let index = regular.indexOf(current);
                regular.splice(index,1);
        }
    }
    let result = vip.length + regular.length;
    console.log(result);
    for(let guest of vip){
        console.log(guest);
    }
    for(let guest of regular){
        console.log(guest);
    }
}
partytime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);