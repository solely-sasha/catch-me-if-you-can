
// 1a

function sum(x, y) {
    // check data types first and throw error if data type is not a number
    if (Number.isInteger(x, y)) {
        return x + y;
    }
    try {
        sum("1", "2")
        throw "we need numbers here"
    } catch (err) {
        console.log(err)
    }

}


// 1b Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.
