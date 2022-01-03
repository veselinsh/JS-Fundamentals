function destination(input){
      let pattern = /([=\/])(?<destination>[A-Z][a-z]{3,})+\1/g;
      let result = [];
      let travelPoints = 0;
      let match = pattern.exec(input);

      while(match !== null){
        result.push(match[2]);
        travelPoints += match[2].length;
        match = pattern.exec(input);
      }
          
      console.log(`Destinations: ${result.join(', ')}`);
       console.log(`Travel Points: ${travelPoints}`);

}
destination('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');