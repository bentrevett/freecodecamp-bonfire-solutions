function sumFibs(num) {
  var first=0;
  var second=1;
  var sum = 1;
  var next=0;
  
  while(first+second<=num){
    next=first+second;
    if(next%2!==0){
      sum+=next;
    }
    first=second;
    second=next;
  }
  
  return sum;
}

//returns sum of all fibonacci numbers up to and including the argument, if it is a fibonacci number
//sumFibs(4);