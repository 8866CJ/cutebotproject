# def AvoidanceProtocol():
# global SR04
# while True:
# SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
# if SR04 <= 15:
# turn_right(0.5)
# SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
# if SR04 <= 15:
# cuteBot.move_time(cuteBot.Direction.RIGHT, 15, 2)
# basic.pause(100)
# SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
# if SR04 <= 15:
# cuteBot.move_time(cuteBot.Direction.RIGHT, 15, 2)
# basic.pause(100)
# SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
# if SR04 <= 15:
# cuteBot.motors(-15, 15)
# music.play_tone(262, music.beat(BeatFraction.WHOLE))
# else:
# cuteBot.motors(15, 15)
# else:
# cuteBot.motors(15, 15)
# else:
# cuteBot.motors(151, 15)
# else:
# cuteBot.motors(15, 15)
# def attemptAuto():
# global SR04
# while True:
# SR04 = cutebot.ultras
def ServoToggle():
    global servostate
    if servostate == 0:
        servostate = 1
    else:
        servostate = 0
    servoChange()
def Sonar():
    global SR04
    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    basic.show_number(SR04)
    if SR04 <= 20:
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.motors(0, 20)
        Sonar()
    else:
        cuteBot.motors(25, 25)
        Sonar()

def on_button_pressed_a():
    basic.clear_screen()
    ServoToggle()
input.on_button_pressed(Button.A, on_button_pressed_a)

def servoChange():
    if servostate == 0:
        cuteBot.set_servo(cuteBot.ServoList.S1, 0)
        cuteBot.set_servo(cuteBot.ServoList.S2, 10)
        basic.show_number(0)
    elif servostate == 1:
        cuteBot.set_servo(cuteBot.ServoList.S1, 20)
        cuteBot.set_servo(cuteBot.ServoList.S2, 0)
        basic.show_number(1)
def WeeWoo():
    cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0x0000ff)
    cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x0000ff)
    cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)

def on_button_pressed_ab():
    forwards(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    cuteBot.set_servo(cuteBot.ServoList.S1, 0)
    cuteBot.set_servo(cuteBot.ServoList.S2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def forwards(times: number):
    cuteBot.motors(50, 50.05)
    basic.pause(500 * times)
    cuteBot.stopcar()
def turn_right(multiplier: number):
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.move_time(cuteBot.Direction.RIGHT, 50, 0.158 * multiplier)
def SonarVisual():
    global SR04
    SR04 = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
    basic.clear_screen()
    if SR04 <= 5:
        led.plot(2, 4)
    elif SR04 <= 10:
        led.plot(2, 3)
    elif SR04 <= 15:
        led.plot(2, 2)
    elif SR04 <= 20:
        led.plot(2, 1)
    elif SR04 <= 25:
        led.plot(2, 0)
    else:
        basic.show_icon(IconNames.NO)
    if SR04 <= 10:
        led.plot(1, 4)
        led.plot(3, 4)
    basic.pause(100)
def _90left(mmultiplier: number):
    cuteBot.stopcar()
    basic.pause(100)
    cuteBot.move_time(cuteBot.Direction.LEFT, 50, 0.158 * mmultiplier)
SR04 = 0
servostate = 0
servostate = 0
mmultiplier = 0
multiplier = 0
distance = 0
# specialEd(1)
# basic.pause(1000)
# _90left(1)
# basic.pause(200)
# turn_right(3)
# basic.pause(200)
# specialEd(1)
# basic.pause(1000)
# _90left(1)
# basic.pause(200)
# specialEd(1)
# def on_every_interval():
# SonarVisual()
# loops.every_interval(500, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
