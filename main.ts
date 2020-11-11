let x = 0
input.onButtonPressed(Button.A, function () {
    x = -1
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 3; j++) {
            led.plot(x ** Math.max(3 - j, j) * i + 2, x ** j * i + 2)
            basic.pause(200)
        }
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 3; j++) {
            x = -1
            x = x ** j * i + 2
            if (j % 3 == 0) {
                led.plot(2, x)
            } else {
                led.plot(x, 2)
            }
            basic.pause(200)
        }
    }
    basic.pause(500)
    basic.clearScreen()
})
