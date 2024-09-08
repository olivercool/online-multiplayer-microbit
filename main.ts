let Player1from2screen: game.LedSprite = null
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        Player1from2screen = game.createSprite(0, 4)
    }
    if (receivedNumber == 1) {
        Player1from2screen.set(LedSpriteProperty.X, 0)
    }
    if (receivedNumber == 2) {
        Player1from2screen.set(LedSpriteProperty.X, 1)
    }
    if (receivedNumber == 3) {
        Player1from2screen.set(LedSpriteProperty.X, 2)
    }
})
