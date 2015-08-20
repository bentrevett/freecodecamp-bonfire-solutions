function every(collection, pre) {
  // Does everyone have one of these?
  for(i=0;i<collection.length;i++){
    if(!collection[0].hasOwnProperty(pre)){
      return false;
    }
  }
  return true;
}

//check if the second argument returns true (defined) for all elements in the collection (first argument)
//every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');