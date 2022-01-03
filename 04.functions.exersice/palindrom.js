function palindrom(listOfNumbers){
    for(let number of listOfNumbers){
      let numberAsString = number.toString();
      let reverseNumber = numberAsString.split('').reverse().join('');
      if(numberAsString === reverseNumber){
          console.log('true');
      }else{
          console.log('false');
      }
    }
}
palindrom([123,323,421,121]);