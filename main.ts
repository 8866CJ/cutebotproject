function wiggle () {
    for (let index = 0; index < 4; index++) {
        cuteBot.setServo(cuteBot.ServoList.S2, 0)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S2, 45)
    }
}
function pickUpVial () {
    cuteBot.setServo(cuteBot.ServoList.S1, 120)
    basic.pause(2000)
    cuteBot.setServo(cuteBot.ServoList.S1, 100)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 90)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 80)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 70)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 60)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 50)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 40)
    basic.pause(200)
    cuteBot.setServo(cuteBot.ServoList.S1, 30)
    basic.pause(200)
    wiggle()
}
function ServoToggle () {
    if (servostate == 0) {
        servostate = 1
    } else {
        servostate = 0
    }
    servoChange()
}
function lingonhoolio () {
    if (skibidi == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        basic.pause(3000)
    } else if (skibidi == 2) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
        basic.pause(3000)
    } else if (skibidi == 3) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        basic.pause(3000)
    } else if (skibidi == 4) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        basic.pause(3000)
    } else if (skibidi == 5) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
        basic.pause(3000)
    } else if (skibidi == 6) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff00ff)
        basic.pause(3000)
    } else {
        basic.clearScreen()
        basic.showIcon(IconNames.Skull)
    }
}
function servoStartUp () {
    cuteBot.setServo(cuteBot.ServoList.S1, 0)
    cuteBot.setServo(cuteBot.ServoList.S2, 45)
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
    basic.showNumber(servostate)
    if (servostate == 0) {
        servoStartUp()
    } else if (true) {
        pickUpVial()
    }
}
function pathTwo () {
    Nurse_to_Cardiac()
    basic.pause(300)
    cardi_room1()
}
function wassup () {
    if (skibidi < 6) {
        skibidi += 1
    } else {
        skibidi = 1
    }
    lingonhoolio()
}
function pathOne () {
    Nurse_to_Cardiac()
    basic.pause(300)
    Cardi_ER()
}
function Cardi_ER () {
    forwards(0.4)
    _90left(0.8)
    forwards(1.15)
    turn_right(1.5)
}
input.onButtonPressed(Button.B, function () {
	
})
function forwards (times: number) {
    cuteBot.stopcar()
    cuteBot.motors(51, 51.95)
    basic.pause(888 * times)
    cuteBot.stopcar()
    basic.pause(100)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wassup()
})
function cardi_room1 () {
    forwards(1.3)
    turn_right(0.85)
    forwards(0.8)
}
function turn_right (multiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.right, 56, 0.14 * multiplier)
    cuteBot.stopcar()
    basic.pause(100)
}
function _90left (mmultiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.left, 60.5, 0.128 * mmultiplier)
}
let skibidi = 0
let servostate = 0
let mmultiplier = 0
let multiplier = 0
let distance = 0
servostate = 0
skibidi = 0
servoChange()
