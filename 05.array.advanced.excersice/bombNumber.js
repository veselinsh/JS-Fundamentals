function bombNumbers(array, bombs) {
  let [bomb, power] = bombs;

  while(array.includes(bomb)) {
      let bombIndex = array.indexOf(bomb);
      let startIndex = Math.max(bombIndex - power, 0);
      array.splice(bombIndex, power + 1);
      array.splice(startIndex, power)

  }
  let sum = 0;

  for (let num of array) {
      sum += num;
  }
 console.log(sum);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);