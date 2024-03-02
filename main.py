def statusLED(číslo: number):
    for pořadí in range(5):
        led.plot(číslo, pořadí)

def on_received_value(name, value):
    if name == "done":
        statusLED(value)
radio.on_received_value(on_received_value)

radio.set_group(42)

def on_forever():
    pass
basic.forever(on_forever)
