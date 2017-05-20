// Below code about finding sum of numbers passed to Fn using arguments array, return the sum & displaying in console.
// Defining Function.
function findSum() {
    var resStore = 0;
    for (var i=0; i < arguments.length; i++) {
        resStore += arguments[i];
    }
    return resStore;
} 
 // Passing three & ten level arguments
console.log("%c Sum of Three numbers is: " + findSum(1, 2, 3) + 
            " \n Sum of Ten numbers is: " + findSum(1,2,3,4,5,6,7,8,9,10) + " ", 'background: #095fa0; color: #ffffff;');