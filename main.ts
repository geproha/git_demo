function statusLED (číslo: number) {
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
        statusLED(value)
    }
})
let melodie: number[] = []
melodie.push(440)
melodie.push(494)
melodie.push(523)
melodie.push(587)
radio.setGroup(42)
