function statusLED(číslo: number) {
    for (let pořadí = 0; pořadí < 5; pořadí++) {
        led.plot(číslo, pořadí)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(melodie[číslo], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}

function readTeplota(): number {
    dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P1, true, false, true)
    return teplotaPodminka(dht11_dht22.readData(dataType.temperature))
}

function teplotaPodminka(teplota: number): number {
    if (teplota > 30) {
        return 1
    }
    
    return 0
}

radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "done") {
        statusLED(value)
    }
    
})
let melodie : number[] = []
melodie.push(440)
melodie.push(494)
melodie.push(523)
melodie.push(587)
radio.setGroup(42)
basic.forever(function on_forever() {
    if (readTeplota() == 1) {
        radio.sendValue("done", 4)
    }
    
})
