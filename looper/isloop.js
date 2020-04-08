'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let tortise = linkedlist.head
  let hare = linkedlist.head

  console.log('runnning', hare.next.next)
  while(hare && hare.next)
    tortise = tortise.next
    console.log(tortise, "TORT")
    hare = hare.next.next
    console.log(hare, "HARE")
    if(tortise.next === hare.next.next){
      return true
    }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
