function fearNotLetter(str) {
  
  for(i=str.charCodeAt(0),j=0;j<str.length-1;i++,j++)
    {
      if(str.charCodeAt(j+1)!=str.charCodeAt(j)+1)
        {
          return String.fromCharCode(i+1);
        }
    }
  
  return undefined;
}

//return the missing letter in a string of characters in alphabetical order, if none is missing, return undefined
//fearNotLetter('abcdefghjklmno');