'use strict';

// Complete this algo
const minJumps = arr => {
  let jumpNum = 1
  let max = arr[0]
  let step = arr[0]

  if(max >= arr.length-1){
    return jumpNum
  }
  for (let i = 1; i < arr.length; i++) {
    if (i == arr.length -1){
      return jumpNum
    }
    if (i +arr[i] > max){
      max = i + arr[i]
      step --
    }
    if (step == 0 ) {
      jumpNum ++
      step = max - i
    }
  }
  return jumpNum

};

module.exports = minJumps

