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
    if (Voltage > 0.7) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (Voltage > 0.6) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . # # # .
                # # # # #
                `)
        } else {
            if (Voltage > 0.5) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . # # # .
                    # # # # #
                    `)
            } else {
                if (Voltage > 0.4) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
                        # # # # #
                        `)
                } else {
                    if (Voltage > 0.3) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            # # # # #
                            `)
                    } else if (Voltage > 0.2) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # # # .
                            `)
                    } else {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            `)
                    }
                }
            }
        }
    }
})
