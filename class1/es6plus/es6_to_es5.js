// const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)


function packIt(a, b, c, d, e, f) {
    console.log(Object.values(arguments))
}
