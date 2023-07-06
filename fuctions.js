// function defination

function test() {
    let a = 5,
        b = 6
    let c = a + b
    console.log(c)
}
test()
    // function having two perameter and printing their addtion

function add(a, b) {
    let c = a + b
    console.log(c)


}
add(5, 6) //passing 5,6 as  arguement
    /**
     * @description function having two perameter ans returning their addtion
     */
function test2(a, b) {
    let c = a + b
    return c
}
// let d = test2(4, 3)
console.log(test2(4, 3))
    /**
     * @description function having three perameter two inter and one string returning addtion with concatinated string
     */
function test3(a, b, c) {
    // let d = a + b + 'ankit' + c
    let d = `${a+b}ankit${c}`
    return d
}

let e = test3(2, 3, 'ankit')

console.log(e)


/**
 * @description function having three perameter with default value and one string returning addtion with concatinated string
 */
function test4(a, b, c = 'abhi') {
    // let d = a + b + 'ankit' + c
    let d = `${a+b}${c}`
    return d
}

let f = test4(2, 4, 'ankit')

console.log(f)