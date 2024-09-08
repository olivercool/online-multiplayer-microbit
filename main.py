Player1from2screen: game.LedSprite = None

def on_received_number(receivedNumber):
    global Player1from2screen
    if receivedNumber == 1:
        Player1from2screen = game.create_sprite(0, 4)
    if receivedNumber == 2:
        Player1from2screen.set(LedSpriteProperty.X, 1)
    if receivedNumber == 3:
        Player1from2screen.set(LedSpriteProperty.X, 2)
radio.on_received_number(on_received_number)
