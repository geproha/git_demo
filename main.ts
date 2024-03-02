function statusLED (číslo: number) {
    for (let pořadí = 0; pořadí <= 4; pořadí++) {
        led.plot(číslo, pořadí)
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "done") {
        statusLED(value)
    }
})
radio.setGroup(42)
basic.forever(function () {
	
})
