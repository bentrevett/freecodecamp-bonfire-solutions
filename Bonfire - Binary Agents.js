function binaryAgent(str) {
  var sum=0;
  str=str.split(' ');
  
  for(i=0;i<str.length;i++){
    sum=0;
    for(j=0;j<str[i].length;j++){
      console.log(str[i].charAt(j));
      if(str[i].charAt(j)==1){
        sum+=Math.pow(2,str[i].length-j-1);
      }
    }
    str[i]=String.fromCharCode(sum);
  }

  return str.join('');
}

//returns an english sentence from the binary string
//binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');