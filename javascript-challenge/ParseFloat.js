/**
 *
 * ParsFloating is method which
 * Converts a string to a floating-point number
 *
 * but in our case if the string will contains "FF"
 * it will return NaN
 */

var a=parseFloat("FF2");
console.log(a); // Result NaN

var a=parseFloat("2FF");
console.log(a); // Result 2



