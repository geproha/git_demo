def statusOut(číslo: number):
    for pořadí in range(5):
        led.plot(číslo, pořadí)
    for index in range(2):
        music.play(music.tone_playable(melodie[číslo], music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)

def on_received_value(name, value):
    if name == "done":
        statusOut(value)
radio.on_received_value(on_received_value)

def teplotaCheck():
    if smarthome.dht11_sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_TEMPERATURE_C) > 30:
        return 1
    else:
        return 0

melodie: List[number] = []
melodie.append(440)
melodie.append(494)
melodie.append(523)
melodie.append(587)
radio.set_group(42)

def on_forever():
    if teplotaCheck() == 1:
        radio.send_value("done", 4)
    else:
        pass
        
basic.forever(on_forever)
