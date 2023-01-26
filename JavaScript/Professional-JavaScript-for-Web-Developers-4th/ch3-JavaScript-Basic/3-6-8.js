let num = 0

outermostBreak:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermostBreak
        }
        num++
    }
}

console.log(num)

num = 0

outermostContinue:
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outermostContinue
        }
        num++
    }
}

console.log(num)