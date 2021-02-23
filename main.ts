input.onButtonPressed(Button.A, function () {
    radio.sendString("ping")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("pong")
})
radio.setGroup(1)
