function Trap3 () {
    Trap_Lists3 = []
    for (let index = 0; index < 3; index++) {
        Trap_Lists3.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainPlayer.vy == 0 || count < 2) {
        MainPlayer.vy = -100
        MainPlayer.ay = 200
        count += 1
    }
})
function Reminder () {
    Remainder_Lists = []
    for (let index = 0; index < 3; index++) {
        Remainder_Lists.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . e e e e e e e e e e e e . . 
            . . e e e e e e e e e e e e . . 
            . . e e 1 1 1 1 1 1 1 1 e e . . 
            . . e e 1 1 1 1 1 1 1 1 e e . . 
            . . e e 1 1 1 1 1 1 1 1 e e . . 
            . . e e 1 1 1 1 1 1 1 1 e e . . 
            . . e e 1 1 1 1 1 1 1 1 e e . . 
            . . e e e e e e e e e e e e . . 
            . . e e e e e e e e e e e e . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            . . . . . . . e e . . . . . . . 
            7 . . . 7 . . e e . . . . . . . 
            7 7 . 7 7 7 . e e . 7 7 . . 7 . 
            7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 
            `, SpriteKind.Projectile))
    }
    tiles.placeOnTile(Remainder_Lists[0], tiles.getTileLocation(15, 27))
    tiles.placeOnTile(Remainder_Lists[1], tiles.getTileLocation(22, 27))
    tiles.placeOnTile(Remainder_Lists[2], tiles.getTileLocation(22, 23))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e 1 1 1 1 1 1 1 1 e e . . 
        . . e e 1 1 1 1 1 1 1 1 e e . . 
        . . e e 1 1 1 1 1 1 1 1 e e . . 
        . . e e 1 1 1 1 1 1 1 1 e e . . 
        . . e e 1 1 1 1 1 1 1 1 e e . . 
        . . e e e e e e e e e e e e . . 
        . . e e e e e e e e e e e e . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        7 . . . 7 . . e e . . . . . . . 
        7 7 . 7 7 7 . e e . 7 7 . . 7 . 
        7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 
        `)) {
        if (MainPlayer.tilemapLocation().column == 15 && (25 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 27)) {
            Remainder_Lists[0].sayText("Don't walk or run.Jump!!!", 500, false)
        } else if (MainPlayer.tilemapLocation().column == 22 && (25 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 27)) {
            Remainder_Lists[1].sayText("I told you, Boomer", 500, false)
        } else if (MainPlayer.tilemapLocation().column == 22 && (21 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 24)) {
            Remainder_Lists[2].sayText("45 6e 6a 6f 79", 500, false)
        }
    }
})
function Trap1 () {
    Trap_Lists = []
    for (let index = 0; index < 4; index++) {
        Trap_Lists.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy))
    }
    tiles.placeOnTile(Trap_Lists[0], tiles.getTileLocation(21, 29))
    tiles.placeOnTile(Trap_Lists[1], tiles.getTileLocation(20, 29))
    tiles.placeOnTile(Trap_Lists[2], tiles.getTileLocation(20, 29))
    tiles.placeOnTile(Trap_Lists[2], tiles.getTileLocation(20, 29))
}
function Trap2 () {
    Trap_Lists2 = []
    for (let index = 0; index < 2; index++) {
        Trap_Lists2.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy))
    }
    tiles.placeOnTile(Trap_Lists2[0], tiles.getTileLocation(2, 6))
    tiles.placeOnTile(Trap_Lists2[1], tiles.getTileLocation(2, 5))
}
function mainplayer1 () {
    MainPlayer = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(MainPlayer)
    controller.moveSprite(MainPlayer, 100, 0)
    MainPlayer.ay = 200
    Flag = sprites.create(img`
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 1 1 2 2 2 2 2 2 . . . . . 
        . . . 1 1 2 2 2 2 2 2 2 2 . . . 
        . . . 1 1 2 2 2 2 2 2 2 2 2 2 2 
        . . . 1 1 2 2 2 2 2 2 2 2 2 2 2 
        . . . 1 1 2 2 2 2 2 2 2 2 2 2 . 
        . . . 1 1 2 2 2 2 2 2 2 2 . . . 
        . . . 1 1 2 2 2 2 2 2 . . . . . 
        . . . 1 1 2 2 2 2 2 . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(Flag, tiles.getTileLocation(1, 27))
    tiles.placeOnTile(MainPlayer, tiles.getTileLocation(1, 27))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let Flag: Sprite = null
let Trap_Lists2: Sprite[] = []
let Trap_Lists: Sprite[] = []
let Remainder_Lists: Sprite[] = []
let count = 0
let MainPlayer: Sprite = null
let Trap_Lists3: Sprite[] = []
tiles.setTilemap(tilemap`level1`)
mainplayer1()
Trap1()
Trap2()
Reminder()
game.onUpdate(function () {
    if (MainPlayer.vy == 0) {
        count = 0
    }
})
game.onUpdate(function () {
    if (MainPlayer.tilemapLocation().column >= 19 && MainPlayer.tilemapLocation().column <= 22) {
        if (25 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 27) {
            Trap_Lists[0].setImage(img`
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `)
            Trap_Lists[1].setImage(img`
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `)
            Trap_Lists[2].setImage(img`
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . . 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `)
            if (MainPlayer.tilemapLocation().column == 20) {
                Trap_Lists[2].setVelocity(0, -200)
            }
        } else if (21 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 24) {
            tiles.setWallAt(tiles.getTileLocation(20, 24), false)
            tiles.setWallAt(tiles.getTileLocation(21, 24), false)
        }
    } else if (MainPlayer.tilemapLocation().column >= 3 && MainPlayer.tilemapLocation().column <= 12) {
        if (3 <= MainPlayer.tilemapLocation().row && MainPlayer.tilemapLocation().row <= 6) {
            Trap_Lists2[0].setImage(img`
                1 1 . . . . . . . . . . . . . . 
                1 1 1 1 . . . . . . . . . . . . 
                1 1 1 1 1 1 . . . . . . . . . . 
                1 1 1 1 1 1 1 1 . . . . . . . . 
                1 1 1 1 1 1 1 1 1 1 . . . . . . 
                1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                1 1 1 1 1 1 1 1 1 1 . . . . . . 
                1 1 1 1 1 1 1 1 . . . . . . . . 
                1 1 1 1 1 1 . . . . . . . . . . 
                1 1 1 1 . . . . . . . . . . . . 
                1 1 . . . . . . . . . . . . . . 
                `)
            Trap_Lists2[1].setImage(img`
                1 1 . . . . . . . . . . . . . . 
                1 1 1 1 . . . . . . . . . . . . 
                1 1 1 1 1 1 . . . . . . . . . . 
                1 1 1 1 1 1 1 1 . . . . . . . . 
                1 1 1 1 1 1 1 1 1 1 . . . . . . 
                1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
                1 1 1 1 1 1 1 1 1 1 . . . . . . 
                1 1 1 1 1 1 1 1 . . . . . . . . 
                1 1 1 1 1 1 . . . . . . . . . . 
                1 1 1 1 . . . . . . . . . . . . 
                1 1 . . . . . . . . . . . . . . 
                `)
            Trap_Lists2[0].setVelocity(200, 0)
            Trap_Lists2[1].setVelocity(200, 0)
            if (28 >= Trap_Lists2[0].tilemapLocation().row) {
                tiles.setWallAt(tiles.getTileLocation(29, 6), false)
                tiles.setWallAt(tiles.getTileLocation(29, 5), false)
            }
        }
    } else if (false) {
    	
    }
})
