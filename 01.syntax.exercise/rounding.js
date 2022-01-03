function rounding(roundNumber,precision){
    let result = '';
      if(precision > 15){
          precision = 15;
      }
    result = roundNumber.toFixed(precision);
    result = parseFloat(result);
    console.log(result);

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);