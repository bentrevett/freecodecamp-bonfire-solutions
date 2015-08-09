function find(arr, func) {
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
}

//function that looks through array and returns first element in the array that passes function 
//find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

