function infected(days) {
    if (days < 0) {
      return 0;
    }
    if (days === 0) {
      return 1;
    }
  
    let infectedCount = 1;
  
    for (let currentDay = 1; currentDay <= days; currentDay++) {
      infectedCount *= 2;
  
      if (currentDay % 3 === 0) {
        const patchedComputers = Math.ceil(infectedCount * 0.20);
        infectedCount -= patchedComputers;
      }
    }
    return infectedCount;
  }
  
  
  console.log(infected(1));
  console.log(infected(15));
  console.log(infected(25));