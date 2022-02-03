
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr = [1,2,34,3,4,5,7,23,12]) {
   let count = 0;
    
    for(let i = 0; i < arr.length; i++){
       if (arr[i] % 2 == 1){
          
           count++;
     
       } else {
           count = 0;
       }
        if (count == 3) {
             
            return true
        }
     }

    return false
}



/*
QUESTION #1550: Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

EXAMPLE: Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.


 */