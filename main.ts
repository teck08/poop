namespace SpriteKind {
    export const poopman = SpriteKind.create()
    export const box = SpriteKind.create()
}
info.onScore(100, function () {
    pooop.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
	
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    pooop = sprites.create(assets.image`box`, SpriteKind.poopman)
    info.changeScoreBy(1)
})
let pooop: Sprite = null
scene.setBackgroundImage(assets.image`n`)
pooop = sprites.create(assets.image`pooop`, SpriteKind.Player)
info.setLife(3)
info.setScore(0)
