function smallestCommons(arr) {
  var found = false;
  var lcm=1;
  if(arr[0]>arr[1]){
    max=arr[0];
    min=arr[1];
  }
  else{
    max=arr[1];
    min=arr[0];
  }
  
  for(i=1;arr.length<max;i++){
    arr.push(max-i);
  }
  arr.sort(function(a, b){return a-b;});
  
  console.log(arr);
  
  while(!found){
    var count=0;
    for(i=0;i<arr.length;i++){
      if(lcm%arr[i]===0){
        count++;
      }
      if(count==arr.length){
        found=true;
      }
    }
    lcm++;
  }
  return lcm-1;
}

//return smallest number that is evenly divisible by all numbers in provided range
//smallestCommons(1,5);