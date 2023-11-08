//Ans3
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      
      start++;
      end--;
    }
  }
  
  const inputArray = [2, -5, 6, 5, -8, 7, 5, 4, 6];
  reverseArray(inputArray);
  console.log(inputArray); 
  