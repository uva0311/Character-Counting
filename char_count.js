function countLetters(str){
  var obj = {};
  // count how many unique characters in the string (not counting spaces)
  // count the occurance of each unique characters
  // convert the unique characters > keys ; occurance > key value

  for(var i = 0; i < str.length; i++) {
    if(str[i] !== " " && obj[str[i]] >= 1) {
      addCount();
    } else if(str[i] !== " ") {
      obj[str[i]] = 1;
    }
  }

  function addCount() {
    obj[str[i]]++;
  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));