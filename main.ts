let Voltage = 0
basic.clearScreen()
basic.forever(function () {
    Voltage = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    3.3
    )
    basic.showNumber(Voltage,75)
basic.pause(200)
    basic.showString("V")
})
