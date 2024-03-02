function statusLED(číslo: number) {
    for (let pořadí = 0; pořadí < 5; pořadí++) {
        led.plot(číslo, pořadí)
    }
}

radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "done") {
        statusLED(value)
    }
    
})
radio.setGroup(42)
basic.forever(function on_forever() {
    
})
