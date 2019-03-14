/**
 * Explanation in progress
 * We have an array `Lang`
 *
 * From theory we know that pop() will delete and return Number of the latest element from array
 * in our case it is `python`
 *
 * so x will be always = 'python'
 *
 * We know that push() is adding element to the end of an array
 *
 * and also push() return length of the new array
 *
 * in our case y will be always = 5
 *
 * so in console log 'kotlin' will be always at the end
 *
 */

var Lang = ["java", "C", "С++", "C#", "python"];
var x = Lang.pop();
//pop() - delete and return the latest element from an array
var y = Lang.push("kotlin");
//push return length of an array
console.log(y + x);
