function repeatedElements(nums){
    let result = [];
    let repeating = [];
    for(let i = 0;i<nums.length;i++){
        let currentNumber = nums[i];
        if(!result.includes(currentNumber)){
          result.push(currentNumber);
        }
      
    }
    console.log(result.join(' '));

}
repeatedElements([1, 2, 3, 4]);