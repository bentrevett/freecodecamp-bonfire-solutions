function convert(num) {
  roman = '';
  roman10to90 = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
  roman1to9 = ['','I', 'II','II','IV','V','VI','VII','VIII','IX'];
  
  var tens = Math.floor(num/10); console.log(tens);
  roman+=roman10to90[tens];
  
  var ones = num-(tens*10); console.log(ones);
  roman+=roman1to9[ones];
  
  return roman; 
}

//returns a number from 0 to 99 in roman numerals
//convert(36);