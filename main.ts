/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Jan 2026
 * This program moves a servo when something is within 10cm of a sonar
*/


// variables
const servoNumber1 = robotbit.Servos.S1
let distanceToObject = 0
let servoMoved = false

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// continuously check distance
basic.forever(function () {

    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // only if the distance is greater than 0
    if (distanceToObject > 0) {

        // If object is close and servo has not moved yet
        if (distanceToObject < 10) {
            if (servoMoved == false) {
                robotbit.Servo(servoNumber1, 150)
                basic.showIcon(IconNames.No)
                servoMoved = true
            }
        } else {
            // reset servo when object moves away
            if (servoMoved == true) {
                robotbit.Servo(servoNumber1, 0)
                basic.showIcon(IconNames.Happy)
                servoMoved = false
            }
        }
    }

    basic.pause(1000)
})