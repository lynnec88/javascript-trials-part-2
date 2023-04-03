'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(i); 
  }
}

printIndices([1, 2, 3, 4, 5]);

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  
  console.log(result);
}

everyOtherItem([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b).slice(0, n);

  console.log(sortedItems);
}

smallestNItems([1, 30, 4, 21, 100000])