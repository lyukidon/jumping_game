class Scene1 extends Phaser.Scene{
    constructor(){
        super('bootGame');
    }

    preload(){
        this.load.image('background', 'assets/images/background.png');

        let spaceKey;
    }

    create(){
        this.add.text(config.width/2,config.height/2,'Loading Game...');
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0,0);

        //Player
        this.player = this.physics.add.sprite(config.width/2-300, config.height/2, 'player');
        this.player.play('thrust');
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        //spacebar
        // this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update(){
        this.background.tilePositionX += 0.3;

        //SPACEBAR
        // if (this.spaceKey.isDown){
        //     player
        // }
    }

}