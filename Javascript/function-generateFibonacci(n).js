function generateFibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return "The Fibonacci sequence up to " + n + " is: " + sequence.join(', ');
  };
  
  n = 10;
    console.log(generateFibonacci(n));

 


