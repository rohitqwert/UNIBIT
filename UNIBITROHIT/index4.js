//Ans 4 
function findPairsWithSumAndDouble(arr, target) {
    const pairs = [];
    
    //pairs with the target value and store in pairs array
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    //Sort the pairs in ascending order
    pairs.sort((a, b) => a[0] - b[0]);
  
    //Double the target value
    const doubledTarget = 2 * target;
    const combinations = [];
    const set = new Set();
    
    //combinations that sum up to the doubled target value
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          for (let l = k + 1; l < arr.length; l++) {
            if (arr[i] + arr[j] + arr[k] + arr[l] === doubledTarget) {
              const combination = [arr[i], arr[j], arr[k], arr[l]];
              combination.sort((a, b) => a - b);
              const combinationStr = combination.join(',');
              if (!set.has(combinationStr)) {
                combinations.push(combination);
                set.add(combinationStr);
              }
            }
          }
        }
      }
    }
    
    return [pairs, combinations];
  }
  
  const inputArray = [1, 3, 2, 2, -4, -6, -2, 8];
  const targetValue = 4;
  
  const result = findPairsWithSumAndDouble(inputArray, targetValue);
  console.log("First Combination For " + targetValue + ":", result[0]);
  const mergedArray = result[0].reduce((acc, pair) => acc.concat(pair), []);
  mergedArray.sort((a, b) => a - b);
  console.log("Merge Into a single Array:", mergedArray);
  console.log("Second Combination For " + (2 * targetValue) + ":", result[1]);
  