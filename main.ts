function statusOut (číslo: number) {
    for (let pořadí = 0; pořadí <= 4; pořadí++) {
        led.plot(číslo, pořadí)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(melodie[číslo], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "done") {
        statusOut(value)
    }
})
function teplotaCheck () {
    if (smarthome.dht11Sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_temperature_C) > 30) {
        return 1
    } else {
        return 0
    }
}
let melodie: number[] = []
melodie.push(440)
melodie.push(494)
melodie.push(523)
melodie.push(587)
radio.setGroup(42)
basic.forever(function () {
    if (teplotaCheck() == 1) {
        radio.sendValue("done", 4)
    } else {
    	
    }
})
