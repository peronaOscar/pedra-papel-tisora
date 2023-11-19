function PrintCorrect () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    Input = 1
    basic.clearScreen()
    CheckInput()
})
input.onGesture(Gesture.Shake, function () {
    Input = randint(1, 3)
    if (Input == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Input == 2) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    CheckInput()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    Input = 3
    basic.clearScreen()
    CheckInput()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    Input = 2
    basic.clearScreen()
    CheckInput()
})
function CheckInput () {
    if (Answer == 1) {
        if (true) {
            PrintCorrect()
        } else {
            PrintIncorrect()
        }
    } else if (Answer == 2) {
        if (Input == 3) {
            PrintCorrect()
        } else {
            PrintIncorrect()
        }
    } else {
        if (Input == 1) {
            PrintCorrect()
        } else {
            PrintIncorrect()
        }
    }
}
function PrintIncorrect () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
}
let Input = 0
let Answer = 0
Answer = randint(1, 3)
