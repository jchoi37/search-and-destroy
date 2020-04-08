'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	let midIdx= Math.floor(array.length/2)
	let midpoint = array[midIdx]

	if(array.length === 1){
		if(array[0] === target){
			return true
  	} else return false
	}

	else {
		if (target >= midpoint){
			let splitArr = array.slice(midIdx)
			return binarySearch(splitArr, target)
		}

		if(target < midpoint){
			let splitArr = array.slice(0, midIdx)
			return binarySearch(splitArr, target)
		}
  }
}

/* const binarySearch = (array, target) =>{
	let startIndex = 0
	let endIndex = array.length - 1
	let pointer = Math.floor((endIndex + startIndex)/2)
	let counter =0

	while(array[pointer] !== target && startIndex<endIndex && counter<= Math.ceil(array.length/2)){
		if (target >array[pointer]){
			startIndex = pointer +1
			counter ++
		} else if (target < array[pointer]){
			endIndex = pointer -1
			counter++
		} else if (target === array[pointer]){
			return true
		}
		pointer = Math.floor((endIndex + startIndex)/2)
	}
	console.log(array[pointer])
	return false
}

 */

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
