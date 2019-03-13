/**
 *
 * The variables 'let' and 'const' are similar to
 * 'var', except that they are block-scoped.
 * So if you declare them inside a loop, they are not
 * accessible outside of it. Base on this knowledge, what is the output
 * of the console.log outside of the loop?
 * */

function variables() {
    //let variable have access inside the loop
    for (let i = 0; i < 3; i++) {
        console.log(i * 2)
    }
    console.log(i)
}

variables();

/// returns error because second (i) outside for loop is not accessible/defined

function variables() {
    //var variable has access outside the loop
    for (var i = 0; i < 3; i++) {
        console.log(i * 2)
    }
    console.log(i)
}

variables();

// return 0
// 2
// 4
// 3
// 0
// 2
// 4
// 3
