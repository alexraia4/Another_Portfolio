
const table = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}



function romanToNumber(roman) {
  let numsArray = []
  roman.split("").forEach(character => {
    numsArray.push(table[character])
  })
  let sum = 0
  // numsArray[numsArray.length -1]
  for (let i = 0; i < numsArray.length; i++){
    if(numsArray[i] < numsArray[i+1]){
      sum -= numsArray[i]
    }
    else {
      sum += numsArray[i]
    }
  }
  return sum;
}

console.log(romanToNumber('IM'))
