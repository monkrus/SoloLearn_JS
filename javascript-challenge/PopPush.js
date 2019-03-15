/**
 * We have an array `Lang`.
 *
 * As a rule, pop() method will remove and then return 
 * the last element from array,
 * in our case it is `python`
 *
 * So x will be always = 'python'
 *
 * We know that push() method
 * is adding new element to the end of an array
 * and returns a NEW length.
 *
 * in our case y will be always = 5
 *
 * so in console log 'kotlin' will be always at the end
 *
 */

var Lang = ["java", "C", "С++", "C#", "python"];
var x = Lang.pop();
//pop() - delete and return the last element from an array
var y = Lang.push("kotlin");
//push returns the length of an array
console.log(y + x); //5python

//NB! If you call pop() method on an empty array, it returns as undefined.