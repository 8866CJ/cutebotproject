function wiggle () {
    cuteBot.setServo(cuteBot.ServoList.S2, 0)
    basic.pause(500)
    cuteBot.setServo(cuteBot.ServoList.S2, 45)
}
function pickUpVial () {
    cuteBot.setServo(cuteBot.ServoList.S1, 120)
    basic.pause(2000)
    cuteBot.setServo(cuteBot.ServoList.S1, 100)
    basic.pause(500)
    cuteBot.setServo(cuteBot.ServoList.S1, 60)
    basic.pause(500)
    cuteBot.setServo(cuteBot.ServoList.S1, 34)
    cuteBot.setServo(cuteBot.ServoList.S2, 4)
}
function ServoToggle () {
    if (servostate == 0) {
        servostate = 1
    } else {
        servostate = 0
    }
    servoChange()
}
function servoIncrease () {
    let servoangle = 0
    if (servoangle == 180) {
    	
    }
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
function Nurse_to_Cardiac () {
    forwards(0.5)
    turn_right(0.85)
    forwards(1.1)
    turn_right(1.5)
}
input.onButtonPressed(Button.A, function () {
    ServoToggle()
})
function performPath (path: number) {
    if (path == 3) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        cuteBot.stopcar()
        basic.showIcon(IconNames.No)
    }
}
function servoChange () {
    if (servostate == 0) {
        cuteBot.setServo(cuteBot.ServoList.S1, 0)
        cuteBot.setServo(cuteBot.ServoList.S2, 0)
        basic.showNumber(0)
    } else if (servostate == 1) {
        cuteBot.setServo(cuteBot.ServoList.S1, 10)
        cuteBot.setServo(cuteBot.ServoList.S1, 10)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 20)
        cuteBot.setServo(cuteBot.ServoList.S1, 20)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 30)
        cuteBot.setServo(cuteBot.ServoList.S1, 30)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 40)
        cuteBot.setServo(cuteBot.ServoList.S1, 40)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 50)
        cuteBot.setServo(cuteBot.ServoList.S1, 50)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 60)
        cuteBot.setServo(cuteBot.ServoList.S1, 60)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S1, 70)
        cuteBot.setServo(cuteBot.ServoList.S1, 70)
        basic.showNumber(1)
    }
}
function checkSonarNForward () {
    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
}
function WeeWoo () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
}
input.onButtonPressed(Button.AB, function () {
    Nurse_to_Cardiac()
    Cardi_ER()
})
function Cardi_ER () {
    forwards(0.4)
    _90left(0.8)
    forwards(1.15)
    turn_right(1.5)
}
input.onButtonPressed(Button.B, function () {
    Nurse_to_Cardiac()
    cardi_room1()
})
function forwards (times: number) {
    cuteBot.stopcar()
    cuteBot.motors(50, 50.05)
    basic.pause(777 * times)
    cuteBot.stopcar()
    basic.pause(100)
}
function cardi_room1 () {
    forwards(1.3)
    turn_right(0.85)
    forwards(0.8)
}
function turn_right (multiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.right, 50, 0.158 * multiplier)
    cuteBot.stopcar()
    basic.pause(100)
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
let SR04 = 0
let servostate = 0
let mmultiplier = 0
let multiplier = 0
let distance = 0
servostate = 0
servoChange()
basic.forever(function () {
	
})
