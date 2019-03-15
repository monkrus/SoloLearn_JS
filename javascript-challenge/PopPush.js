/**
 * We have an array `Lang`.
 * 
 * pop() method removes the last element from an array 
 * and returns that element (in our case it is `python`)
 * This method changes the length of the array.(`now it has 4 elements`),
 * 
 *
 * We know that push() method
 * is adding new element to the end of an array
 * and returns a NEW length of the array,
 * (in our case y will  be  `5` because one more element was added)
 *
 * 
 *
 */

var Lang = ["java", "C", "С++", "C#", "python"];
var x = Lang.pop();
//pop() - DELETES and RETURNS the LAST ELEMENT from an array
var y = Lang.push("kotlin");
//push() is adding new element to the array and RETURNS the new array LENGTH 
console.log(y + x); //5python

//By the way,  If you call pop() method on an empty array, it returns as undefined.