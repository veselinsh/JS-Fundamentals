function oddTask(nums) {
    let result = nums.filter((x, i) => i % 2 !== 0).map(x => x * 2);

    console.log(result.reverse().join(' '));

}
oddTask([10, 15, 20, 25]);