function unite(arr1, arr2, arr3) {
  var newarr=[];
  newarr=arr1.concat(arr2).concat(arr3);
  arr1=[];
  for(i=0;i<newarr.length;i++)
    {
      if(newarr[i])
        {
          arr1.push(newarr[i]);
        }
    }
  
  for( i=0 ; i<arr1.length ; i++)
  {
    
    for(j=i+1; j<arr1.length;j++)
      {
        if(arr1[i]===arr1[j]){
          arr1.splice(j,1);  
        }
      }
  }
  
  console.log(arr1);
  return arr1;
}

//function takes two or more arrays and returns a new array of unique values in the order of the original arrays
//unique numbers sorted by their original order, final array not sorted by numerical order
//2d arrays should be flattened
//unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);