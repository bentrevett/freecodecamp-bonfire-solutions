function spinalCase(str) {

  var newstr='';
  
  if(str.indexOf(' ')==-1&&str.indexOf('_')==-1){
    for(i=0;i<str.length;i++){
      if(str[i]==str[i].toUpperCase()){
        newstr+=' '+str[i];
      }
      else{
        newstr+=str[i];
      }
    }
    return newstr.toLowerCase().replace(/ /g,'-');
  }
  
  return str.toLowerCase().replace(/ /g,'-').replace(/_/g,'-');
}

//changes a string into spinal case, all lowercase and words joined by dashes, also needs to do camel case
//spinalCase('This Is Spinal Tap');
//spinalCase('thisIsSpinalTap');
//spinalCase('The_Andy_Griffith_Show');
//spinalCase('Teletubbies say Eh-oh');