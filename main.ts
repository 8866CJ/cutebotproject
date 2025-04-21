let skibidi = 0
let servostate = 0
let distance = 0
let multiplier = 0
let mmultiplier = 0

servostate = 0
skibidi = 0
servoChange()

input.onButtonPressed(Button.A, function () {
    ServoToggle()
})

input.onButtonPressed(Button.B, function () {
    forwards(1)
    _90left(1)
    turn_right(1)
    turn_right(2)
    forwards(1)
})


input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    wassup()
})

function forwards(times: number) {
    cuteBot.stopcar()
    basic.pause(100)
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    cuteBot.motors(51.6, 51.95)
    basic.pause(800 * times)
    cuteBot.stopcar()
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    basic.pause(100)
}

function turn_right(multiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.right, 100, 0.116 * multiplier)
    cuteBot.stopcar()
    basic.pause(100)
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    basic.pause(100)
}

function _90left(mmultiplier: number) {
    cuteBot.stopcar()
    basic.pause(100)
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    basic.pause(100)
    cuteBot.moveTime(cuteBot.Direction.left, 100, 0.117 * mmultiplier)
    cuteBot.stopcar()
    basic.pause(100)
    led.plotBarGraph(
        input.acceleration(Dimension.X),
        1023
    )
    basic.pause(100)
}

function Nurse_to_Cardiac() {
    forwards(0.5)
    turn_right(1.1)
    forwards(1.5)
    turn_right(1.2)
    turn_right(1.25)
}

function nursing_to_pharmacy() {
    forwards(0.4)
    _90left(1.24)
    forwards(1)
    _90left(1.24)
    forwards(0.3)
    turn_right(1.1)
    forwards(0.5)
    turn_right(1.2)
    turn_right(1.2)
}

function nursing_to_respiratory() {
    forwards(0.56)
    _90left(1.2)
    forwards(0.8)
    _90left(1.25)
    forwards(2.3)
    turn_right(2)
}

function pharmacy_to_ER() {
    forwards(0.7)
    turn_right(1.1)
    forwards(0.6)
    _90left(1.2)
    forwards(1.8)
    turn_right(1.1)
    forwards(0.5)
}

function pharmacy_to_room1() {
    forwards(1)
    _90left(1.3)
    forwards(1.5)
    turn_right(1)
    turn_right(1)
}

function respiratory_to_ER() {
    turn_right(0.8)
    forwards(0.8)
    turn_right(0.35)
    forwards(1.6)
    turn_right(1.4)
    forwards(1.5)
}

function respiratory_to_room1() {
    forwards(3)
    turn_right(1.1)
    turn_right(1.1)
}

function Cardi_ER() {
    forwards(0.8)
    _90left(1.57)
    forwards(1.8)
}

function cardi_room1() {
    forwards(1.9)
    turn_right(1)
    forwards(0.5)
}

function pathOne() {
    Nurse_to_Cardiac()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    Cardi_ER()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function pathTwo() {
    Nurse_to_Cardiac()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    cardi_room1()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function pathThree() {
    nursing_to_respiratory()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    respiratory_to_ER()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function pathFour() {
    nursing_to_respiratory()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    respiratory_to_room1()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function pathFive() {
    nursing_to_pharmacy()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    pharmacy_to_ER()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function pathSix() {
    nursing_to_pharmacy()
    basic.pause(300)
    pickUp()
    basic.pause(300)
    pharmacy_to_room1()
    basic.pause(300)
    wiggle()
    ServoToggle()
}

function servoStartUp() {
    cuteBot.setServo(cuteBot.ServoList.S1, 0)
    cuteBot.setServo(cuteBot.ServoList.S2, 60)
}

function pickUp() {
    cuteBot.setServo(cuteBot.ServoList.S1, 120)
    basic.pause(2000)
    cuteBot.setServo(cuteBot.ServoList.S1, 100)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 90)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 80)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 70)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 60)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 50)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 40)
    basic.pause(50)
    cuteBot.setServo(cuteBot.ServoList.S1, 30)
    basic.pause(200)

}

function wiggle() {
    for (let index = 0; index < 4; index++) {
        cuteBot.setServo(cuteBot.ServoList.S2, 0)
        basic.pause(200)
        cuteBot.setServo(cuteBot.ServoList.S2, 60)
        basic.pause(200)
    }
}

function ServoToggle() {
    if (servostate == 0) {
        servostate = 1
    }
    else {
        servostate = 0
    }
    servoChange()
}

function servoChange() {
    basic.showNumber(servostate)
    if (servostate == 0) {
        servoStartUp()
    }
    else {
        pickUp()
    }
}

function lingonhoolio() {
    basic.pause(3000)
    if (skibidi == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        pathOne()
    }
    else if (skibidi == 2) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
        pathTwo()
    }
    else if (skibidi == 3) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        pathThree()
    }
    else if (skibidi == 4) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        pathFour()
    }
    else if (skibidi == 5) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x007fff)
        pathFive()
    }
    else if (skibidi == 6) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff00ff)
        pathSix()
    }
}

function wassup() {
    if (skibidi < 6) {
        skibidi += 1
    }
    else {
        skibidi = 1
    }
    basic.showNumber(skibidi)
    lingonhoolio()
}