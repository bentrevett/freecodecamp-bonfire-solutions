function translate(str) {
  
  vowels = ['a','e','i','o','u'];
  
  if(vowels.indexOf(str.charAt(0))!=-1){
    return str+='way';
  }
  
  while(vowels.indexOf(str.charAt(0))===-1){
    str=str.substring(1)+str.charAt(0);
  }
  str+='ay';
  return str;
}

//pig latin translator
//translate("glove");