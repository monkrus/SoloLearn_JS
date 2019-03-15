/**
 *
 * ParsFloating (parseFloat) is a built in JS method which
 * converts a string to a floating-point number.
 *
 * In our case if the string will contain "FF"
 * it will return NaN.
 * 
 * The rule is:
 * If the string does not contain a numeral value  or 
 * If the first character of the string is not a Number 
 * then it returns NaN.
 */

var a=parseFloat("FF2");
console.log(a); // Result NaN

var a=parseFloat("2FF");
console.log(a); // Result 2

//More examples. 
parseFloat(" 100 ") = 100
parseFloat("2018@geeksforgeeks") = 2018
parseFloat("geeksforgeeks@2018") = NaN
parseFloat("3.14") = 3.14
parseFloat("22 7 2018") = 22  
//Only returns the first number in last example.


