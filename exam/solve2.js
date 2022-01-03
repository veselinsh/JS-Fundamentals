function solve(input){
    let count = Number(input.shift());
    let result = [];
    let pattern = /U\$([A-Z][a-z]{2,})U\$P@\$([a-zA-Z]{5,}[0-9]+)P@\$/;
    for(let i = 0;i<count;i++){
        let match = pattern.exec(input[i]);
        if(match !== null){
          console.log(`Registration was successful`);
          console.log(`Username: ${match[1]}, Password: ${match[2]}`);
          result.push(match);
        }else{
          console.log(`Invalid username or password`);
        }
    }

        console.log(`Successful registrations: ${result.length}`);
 
}
solve(["3",
"U$myU$-->P@$asdqwe123P@$",
"Sara 1232412",
"U$NameU$P@$Pass234P@$"]);
