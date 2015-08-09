function steamroller(arr) {
  // I'm a steamroller, baby
  var newarr=[];
  
  function flatten(somearray){
    for(var i=0;i<somearray.length;i++){
      if(!Array.isArray(somearray[i])){
        newarr.push(somearray[i]);
      }
      else{
        flatten(somearray[i]);
      }
    }
  }  
  
  for(var j=0;j<arr.length;j++){
      if(!Array.isArray(arr[j])){
        newarr.push(arr[j]);
      }
      else{
        flatten(arr[j]);
      }
    }
  
  console.log(newarr);
  return newarr;
}

//flatten nested arrays
//steamroller([1, [2], [3, [[4]]]]);