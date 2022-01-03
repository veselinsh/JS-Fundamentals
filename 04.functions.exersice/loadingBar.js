function loadingBar(n){
    if(n === 100){
        console.log(`100% Complete!`);  
        console.log('[%%%%%%%%%%]');   
        return;   
    }
    let result = '';
    let counter = 0;
    for(let i = 0;i<100;i += 10){
        if(n === i){
            break;
        }else{
          result += '%';
          counter++;
        }
    }
    for(let i = counter;i<10;i++){
        result += '.';
    }
    console.log(`${n}% [${result}]`);
    console.log('Still loading...');

}
loadingBar(50);