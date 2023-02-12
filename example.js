const rate = 1.1

let token_one = 1
let token_two = 1

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('time: ' + i)
        let gain  = (token_one * rate - token_one) / 2
        token_one = token_one + gain
        token_two = token_two + gain
    } else {
        console.log('time: ' + i)
        let gain  = (token_two * rate - token_two) / 2
        token_two = token_two + gain
        token_one = token_one + gain
    }
    // if (i % 2 == 0) {
    //     token_one = token_one * 10 / 11
    //     token_two = token_two * 10 / 11
    // }
    console.log(token_one)
    console.log(token_two)
}