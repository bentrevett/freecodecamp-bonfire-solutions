function replace(str, before, after) {
  var re = new RegExp(before);
  var upper = /^[A-Z]/; 
  
  if(upper.test(before)){ //true if before contains a capital
    after=after[0].toUpperCase()+after.substring(1);
  }
  else{
    after=after[0].toLowerCase()+after.substring(1);
  }
  
  str = str.replace(re, after); 
  return str;
}

//search and replaces on the string using the two arguments
//replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");