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


/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
