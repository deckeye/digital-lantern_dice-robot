/**
 * デジタルランタンモード関係のプログラミングは右にまとめました →
 */
input.onGesture(Gesture.ScreenUp, function () {
    if (モード == 1) {
        basic.showIcon(IconNames.Angry)
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.servoWritePin(AnalogPin.P15, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P14, 0)
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.showIcon(IconNames.Happy)
    }
})
function デジタルランタンモード () {
    モード = 0
    LEDテープ = neopixel.create(DigitalPin.P0, 21, NeoPixelMode.RGB)
    繰り返し用カウンター = 0
    LEDテープ.showColor(neopixel.colors(NeoPixelColors.Orange))
}
input.onButtonPressed(Button.A, function () {
    デジタルランタンモード()
})
/**
 * ↓ サイコロロボットモード関係のプログラミングは下にまとめました ↓
 */
function サイコロロボットモード () {
    モード = 1
    basic.showIcon(IconNames.Happy)
    pins.servoWritePin(AnalogPin.P13, 90)
    pins.servoWritePin(AnalogPin.P14, 0)
    pins.servoWritePin(AnalogPin.P15, 180)
}
/**
 * ←ボタン「B」を押すと、どちらのモードになるでしょうか？
 * 
 * ↓のブロックを1行ずつ読んで動きを確認してみましょう。
 */
input.onButtonPressed(Button.B, function () {
    サイコロロボットモード()
})
/**
 * ← 電源をONにしたままか、ボタンAを押すと、「デジタルランタンモード」になります。
 * 
 * 中身は右にある「関数 デジタルランタンモード」の中にあります →
 */
let 繰り返し用カウンター = 0
let LEDテープ: neopixel.Strip = null
let モード = 0
デジタルランタンモード()
basic.forever(function () {
    if (モード == 0) {
        繰り返し用カウンター = 0
        for (let index = 0; index < 10; index++) {
            LEDテープ.setBrightness(20 * 繰り返し用カウンター)
            LEDテープ.show()
            basic.pause(500)
            繰り返し用カウンター += 1
        }
        繰り返し用カウンター = 0
        for (let index = 0; index < 10; index++) {
            LEDテープ.setBrightness(20 - 20 * 繰り返し用カウンター)
            LEDテープ.show()
            basic.pause(500)
            繰り返し用カウンター += 1
        }
    }
})
basic.forever(function () {
    if (モード == 1) {
        pins.servoWritePin(AnalogPin.P13, 90 - input.rotation(Rotation.Roll))
    }
})
