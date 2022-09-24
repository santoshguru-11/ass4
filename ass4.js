const matchHouses = (n) => {
    if (n === 0) {
      return "Step 0 returns 0 matchsticks."
    } else if (n < 0 || typeof n !== "number") {
      return "The input (step) will always be a non-negative integer."
    } else {
      let a;
      a = (5 * n) + 1;
      return a;
    }
    
  };

const n= parseInt(prompt('Enter a positive integer: '));
console.log(matchHouses(n))
