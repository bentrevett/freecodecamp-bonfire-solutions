function convert(str) {
  // &colon;&rpar;
 str=str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
  console.log(str);
  return str;
}

//converts the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities
//convert('Dolce & Gabbana');