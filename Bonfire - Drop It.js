function drop(arr, func) {
  // Drop them elements.
  var newarr=[];
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      newarr.push(arr[i]);
    }
  }
    return newarr;
}

//drops the elements from the array until the second argument (the function) returns true
//drop([1, 2, 3, 4], function(n) {return n >= 3; })