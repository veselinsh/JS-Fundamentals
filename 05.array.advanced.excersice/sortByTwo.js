function twoCriteria(list){
    list.sort((a,b) =>  {  return a.length - b.length || a.localeCompare(b);
      });
   console.log(list.join('\n'));
}
twoCriteria(["alpha", "beta", "gamma"]);