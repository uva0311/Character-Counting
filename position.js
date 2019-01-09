//Counting character position and return as object array

function countLetters(str){
  var obj = {};

  for(var i = 0; i < str.length; i++) {
    if(str[i] !== " " && str[i] in obj) {
      addCount();
    } else if(str[i] !== " ") {
      obj[str[i]] = [i];
    }
  }

  function addCount() {
    obj[str[i]].push(i);
  }

  return obj;
}

console.log(countLetters("lighthouse in the house"));

