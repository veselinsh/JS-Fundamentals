function solve(list){
     let step = Number(list.pop());
     let result = [];
     for(let i = 0;i<list.length;i += step){
         if(typeof list[i] === 'number'){
             result.push(Number(list[i]));
         }else{
            result.push(list[i]);
         }
         
     }
     console.log(result.join(' '));
}
solve(['dsa', 'asd', 'test', 'test', '2']);