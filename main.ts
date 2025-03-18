function AvoidanceProtocol () {
    while (true) {
        SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        if (SR04 <= 15) {
            turn_right(0.5)
            SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
            if (SR04 <= 15) {
                cuteBot.moveTime(cuteBot.Direction.right, 15, 2)
                basic.pause(100)
                SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
                if (SR04 <= 15) {
                    cuteBot.moveTime(cuteBot.Direction.right, 15, 2)
                    basic.pause(100)
                    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
                    if (SR04 <= 15) {
                        cuteBot.motors(-15, 15)
                        music.playTone(262, music.beat(BeatFraction.Whole))
                    } else {
                        cuteBot.motors(15, 15)
                    }
                } else {
                    cuteBot.motors(15, 15)
                }
            } else {
                cuteBot.motors(151, 15)
            }
        } else {
            cuteBot.motors(15, 15)
        }
    }
}
// Call the SonarVisualize function continuously
function ServoToggle () {
    if (servostate == 0) {
        servostate = 1
    } else {
        servostate = 0
    }
    servoChange()
}
function Sonar () {
    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.showNumber(SR04)
    if (SR04 <= 20) {
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.motors(0, 20)
        Sonar()
    } else {
        cuteBot.motors(25, 25)
        Sonar()
    }
}
function specialEd (times: number) {
    cuteBot.motors(50, 50)
    basic.pause(1000 * times)
    cuteBot.stopcar()
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    ServoToggle()
})
function servoChange () {
    if (servostate == 0) {
        cuteBot.setServo(cuteBot.ServoList.S1, 0)
        cuteBot.setServo(cuteBot.ServoList.S2, 10)
        basic.showNumber(0)
    } else if (servostate == 1) {
        cuteBot.setServo(cuteBot.ServoList.S1, 20)
        cuteBot.setServo(cuteBot.ServoList.S2, 0)
        basic.showNumber(1)
    }
}
function WeeWoo () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
}
input.onButtonPressed(Button.B, function () {
    cuteBot.setServo(cuteBot.ServoList.S1, 0)
    cuteBot.setServo(cuteBot.ServoList.S2, 0)
})
function turn_right (multiplier: number) {
    multiplier = 0
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.right, 50, 0.158 * multiplier)
}
function SonarVisual () {
    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.clearScreen()
    if (SR04 <= 5) {
        led.plot(2, 4)
    } else if (SR04 <= 10) {
        led.plot(2, 3)
    } else if (SR04 <= 15) {
        led.plot(2, 2)
    } else if (SR04 <= 20) {
        led.plot(2, 1)
    } else if (SR04 <= 25) {
        led.plot(2, 0)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (SR04 <= 10) {
        led.plot(1, 4)
        led.plot(3, 4)
    }
    basic.pause(100)
}
function _90left (mmultiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.left, 50, 0.158 * mmultiplier)
}
let multiplier = 0
let SR04 = 0
let servostate = 0
let multiplier23 = 0
let distance = 0
let multiplier22 = 0
let multiplier2 = 0
servostate = 0
specialEd(1)
basic.pause(1000)
_90left(1)
basic.pause(200)
turn_right(3)
basic.pause(200)
specialEd(1)
basic.pause(1000)
_90left(1)
basic.pause(200)
specialEd(1)
// def on_every_interval():
// SonarVisual()
// loops.every_interval(500, on_every_interval)
basic.forever(function () {
	
})
