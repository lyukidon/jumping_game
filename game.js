let config = {
    width:750,
    height:404,
    backgroundColor: '#000000',
    scene: [Scene1],
    physics: {
        default: 'arcade',
        arcade: {
            debug:false,
        }
    }

}

let game = new Phaser.Game(config);