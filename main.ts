controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_state == "start") {
        if (controller.up.isPressed()) {
            if (!(princess.isHittingTile(CollisionDirection.Top))) {
                tiles.placeOnTile(princess, tiles.locationInDirection(tiles.locationOfSprite(princess), CollisionDirection.Top))
            }
        } else if (controller.left.isPressed()) {
            if (!(princess.isHittingTile(CollisionDirection.Left))) {
                if (tiles.locationXY(tiles.locationOfSprite(princess), tiles.XY.column) > 3) {
                    tiles.placeOnTile(princess, tiles.locationInDirection(tiles.locationOfSprite(princess), CollisionDirection.Left))
                }
            }
        } else if (controller.right.isPressed()) {
            if (!(princess.isHittingTile(CollisionDirection.Right))) {
                if (tiles.locationXY(tiles.locationOfSprite(princess), tiles.XY.column) < 11) {
                    tiles.placeOnTile(princess, tiles.locationInDirection(tiles.locationOfSprite(princess), CollisionDirection.Right))
                }
            }
        } else if (controller.down.isPressed()) {
            if (!(princess.isHittingTile(CollisionDirection.Bottom))) {
                tiles.placeOnTile(princess, tiles.locationInDirection(tiles.locationOfSprite(princess), CollisionDirection.Bottom))
            }
        }
    }
})
function spawn_car () {
    if (Math.percentChance(50)) {
        car = sprites.create(img`
            . . . . . . 3 3 3 3 3 3 3 3 . . 
            . . . . . 3 c 3 3 3 3 3 3 d 3 . 
            . . . . 3 c c 3 3 3 3 3 3 d c 3 
            . . d 3 d c c 3 d d d d d d c c 
            . d 3 3 d c b a a a a a a a 3 c 
            . 3 3 3 d b a a b b b a b b a 3 
            . 3 3 3 3 3 a b b b b a b b b a 
            . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
            . 3 d d 3 a f a a a f a a a a a 
            . d d 3 a a a f a a f a a a a a 
            . a a a a a a a f f f a a a a a 
            . a a a a f f f a a a a f f f f 
            . . . a f f f f f a a f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(car, tiles.getTileLocation(15, 17 + randint(0, 2) * 2))
        car.vx = -20
    } else {
        car = sprites.create(img`
            . . . 3 3 3 3 3 3 3 3 . . . . . 
            . . 3 d 3 3 3 3 3 3 c 3 . . . . 
            . 3 c d 3 3 3 3 3 3 c c 3 . . . 
            3 c c d d d d d d 3 c c d 3 d . 
            3 c 3 a a a a a a a b c d 3 3 . 
            3 3 a b b a b b b a a b d 3 3 . 
            3 a b b b a b b b b a 3 3 3 3 . 
            a a 3 3 3 a 3 3 3 3 3 a 3 3 3 . 
            a a a a a a f a a a f a 3 d d . 
            a a a a a a f a a f a a a 3 d . 
            a a a a a a f f f a a a a a a . 
            a f f f f a a a a f f f a a a . 
            . f f f f f a a f f f f f a . . 
            . . f f f . . . . f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(car, tiles.getTileLocation(-1, 18 + randint(0, 1) * 2))
        car.vx = 20
    }
    car.setFlag(SpriteFlag.DestroyOnWall, true)
}
let car: Sprite = null
let princess: Sprite = null
let game_state = ""
game_state = "loading"
tiles.setTilemap(tilemap`level1`)
princess = sprites.create(assets.image`princess1`, SpriteKind.Player)
tiles.placeOnTile(princess, tiles.getTileLocation(7, 22))
princess.setStayInScreen(true)
game_state = "start"
game.onUpdate(function () {
    tiles.centerCameraOnTile(tiles.getTileLocation(7, tiles.locationXY(tiles.locationOfSprite(princess), tiles.XY.row)))
})
game.onUpdateInterval(1000, function () {
    if (game_state == "start") {
        spawn_car()
    }
})
