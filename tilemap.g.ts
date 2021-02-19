// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0f0018000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080707070707070707070707070707070404050504040405040404040504040405040504040405040405040304040304040404040405040504040405050504040305040405040404050504050405050404050504040505040405040202020202020202020202020202020101010a0a01010101010a0a0101010101010a0a01010101010a0a0101010101010a0a01010101010a0a0101010101010a0a01010101010a0a0101010606060b0b06060606060b0b060606090909090909090909090909090909090909090909090909090909090909`, img`
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile4,sprites.castle.tileDarkGrass3,myTiles.tile5,sprites.builtin.brick,myTiles.tile7,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile":
            case "tile5":return tile5;
            case "road0":
            case "tile1":return tile1;
            case "road1":
            case "tile2":return tile2;
            case "road2":
            case "tile4":return tile4;
            case "road3":
            case "tile7":return tile7;
            case "road4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.