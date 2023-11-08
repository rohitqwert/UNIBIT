//Ans-2

function isPrime(N) {
    if (N <= 1) {
      return "NotPrime";
    }
    if (N <= 3) {
      return "Prime";
    }
    if (N % 2 === 0 || N % 3 === 0) {
      return "NotPrime";
    }
  
    for (let i = 5; i * i <= N; i += 6) {
      if (N % i === 0 || N % (i + 2) === 0) {
        return "NotPrime";
      }
    }
  
    return "Prime";
  }
  

  const N = 17; 
  const result = isPrime(N);
  console.log(result);
  