function isPrime(number){
    if(number===0||number===1){
      return false;
    }
  
    for(i=2;i<number;i++){
      if(number%i===0)
        return false;
    }
    return true;
  }

function sumPrimes(num){
  var sum = 0;
  for(n=0;n<=num;n++){
    if(isPrime(n)){
      sum+=n;
    }
  }
  return sum;
}

//sum all prime numbers up to and including the given number
// sumPrimes(10);