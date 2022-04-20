let sprite = game.createSprite(5, 0)
for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, 1)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    basic.clearScreen()
    sprite.delete()
    sprite = game.createSprite(5, 0)
}
basic.forever(function () {
	
})
