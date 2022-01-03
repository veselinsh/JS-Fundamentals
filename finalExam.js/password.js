function password(input){
    let password = input.shift();
    let rawPassword = '';
    let operations = {
        'TakeOdd' : takeOdd,
        'Substitute' : substitute,
        'Cut' : cut,
    }
    while(input[0] !== 'Done'){
        let [command,index,length] = input.shift().split(' ');
        let operation = operations[command];
        operation(index,length)
    }
    function takeOdd(){
        let rawPassword = '';
         for(let i = 1;i<password.length;i+=2){
          rawPassword += password[i];
         }
         password = rawPassword;
         console.log(password);
    }
    function substitute(substring,substitute){
        if(password.includes(substring)){
              let pattern = new RegExp(substring,'g');
        password = password.replace(pattern,substitute);
        console.log(password);
        }else{
            console.log(`Nothing to replace!`);
        }
    }
    function cut(index,length){
        let cutted = '';
        index = Number(index);
        length = Number(length);
        cutted += password.substring(0,index) + password.substring(index + length);
        password = cutted;
        console.log(cutted);
    }
    console.log(`Your password is: ${password}`);

}
password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);