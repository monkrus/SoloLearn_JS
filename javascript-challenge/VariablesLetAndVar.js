/**
 *
 * The variables 'let' and 'const' are similar to
 * 'var', except that they are block-scoped.
 * So if you declare them inside a loop, they are not
 * accessible outside of it. Base on this knowledge, what is the output
 * of the console.log outside of the loop?
 * */

(function variables() {
    //let variable have access inside the loop
    for (let i = 0; i < 3; i++) {
        console.log(i * 2)
    }
    console.log(i)
})();


/**
 //return error because second (i) outside for loop is not accessible/definedz
 * */

(function variables() {
    //var variable have access outside the loop
    for (var i = 0; i < 3; i++) {
        console.log(i * 2)
    }
    console.log(i)
})();

/** return 0
 // 2
 // 4
 // 3
 // 0
 // 2
 // 4
 // 3
 */
