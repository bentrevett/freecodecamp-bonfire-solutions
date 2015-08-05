function pair(str) {
  str=str.split('');
  for(i=0;i<str.length;i++){
    str[i]=str[i].split('');
  }
  for(i=0;i<str.length;i++)
  {
    switch(str[i][0])
    {
      case "T":
        str[i].push("A");
        break;
      case "A":
        str[i].push("T");
        break;
      case "C":
        str[i].push("G");
        break;
      case "G":
        str[i].push("C");
    }
  }
  return str;
}

//matches the missing DNA strand pair and puts into 2D array
//pair("ATCGA");