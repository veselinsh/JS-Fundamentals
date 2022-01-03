function solve(input){
     let username = input.shift();
     let actions = {
         'Case' : print,
         'Reverse' : reverse,
         'Cut' : cut,
         'Replace' : replace,
         'Check' : check,
     }
     while(input[0] !== 'Sign up'){
       let [command,...params] = input.shift().split(' ');
       let action = actions[command];
       action(...params);
     }
     function print(type){
        if(type === 'lower'){
          username = username.toLowerCase();
        }else{
            username = username.toUpperCase();
        }
        console.log(username);
     }
     function reverse(startIndex,endIndex){
         startIndex = Number(startIndex);
         endIndex = Number(endIndex);
         let result = '';
         if(startIndex >= 0 && endIndex < username.length){
              result  = username.substring(startIndex,endIndex+1).split('').reverse().join('');
              console.log(result);
         }
        }
     function cut(substring){
         
        if(username.includes(substring)){
            let index = username.indexOf(substring);
            let result = '';
            if(index === 0){
            result = username.substring(index,index+substring.length)
            }else{
            result = username.substring(0,index) + username.substring(index+substring.length)
            }
            username = result;
            console.log(result);
        }else{
            console.log(`The word ${username} doesn't contain ${substring}.`);
        }
     }
     function replace(char){
         if(username.includes(char)){
            username = username.split(char).join('*');
         }
         console.log(username);
     }
     function check(char){
         if(!username.includes(char)){
             console.log(`Your username must contain ${char}.`);
         }else{
             console.log('Valid');
         }
     }
}
solve(["Peter",
"Case lower",
"Cut ES",
"Check @",
"Sign up"])

