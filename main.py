def statusLED(číslo: number):
    for pořadí in range(5):
        led.plot(číslo, pořadí)
    for index in range(2):
        music.play(music.tone_playable(melodie[číslo], music.beat(BeatFraction.HALF)),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.tone_playable(659, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
def readTeplota():
    dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P1, True, False, True)
    return teplotaPodminka(dht11_dht22.read_data(dataType.TEMPERATURE))
def teplotaPodminka(teplota: number):
    if teplota > 30:
        return 1
    return 0

def on_received_value(name, value):
    if name == "done":
        statusLED(value)
radio.on_received_value(on_received_value)

melodie: List[number] = []
melodie.append(440)
melodie.append(494)
melodie.append(523)
melodie.append(587)
radio.set_group(42)

def on_forever():
    if readTeplota() == 1:
        radio.send_value("done", 4)
basic.forever(on_forever)
