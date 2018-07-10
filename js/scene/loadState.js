// import background from 'images/game-bg.jpg'
//
// import startBtn from 'images/begin-btn.png'
// import bad1 from 'images/bad1.png'
// import bad2 from 'images/bad2.png'
// import bad3 from 'images/bad3.png'
//
// import good1 from 'images/good1.png'
// import good2 from 'images/good2.png'
// import good3 from 'images/good3.png'
//
// import explode from 'images/explode.png'
// import finger from 'images/finger.png'
//
// import music from 'images/music.png'
// import normalback from 'images/normalback.mp3'
// import crash from 'images/crash.mp3'


let loadState = {
  preload() {
    let preloadSprite = this.game.add.sprite(10, this.game.height / 2, 'loading')
    this.game.load.setPreloadSprite(preloadSprite)
    this.game.load.image('background', 'images/game-bg.jpg')
    this.game.load.image('startBtn', 'images/begin-btn.png')
    this.game.load.image('bad1', 'images/bad1.png')
    this.game.load.image('bad2', 'images/bad2.png')
    this.game.load.image('bad3', 'images/bad3.png')
    this.game.load.image('good1', 'images/good1.png')
    this.game.load.image('good2', 'images/good2.png')
    this.game.load.image('good3', 'images/good3.png')
    // this.game.load.image('music', 'images/music.png')
    this.game.load.spritesheet('explode', 'images/explode.png', 238, 205, 3)
    this.game.load.spritesheet('finger', 'images/finger.png', 144, 212, 2)
    // this.game.load.audio('normalback', 'images/normalback.mp3')
    // this.game.load.audio('crash', 'images/crash.mp3')
  },
  create() {
    this.game.state.start('start')
  }
}

export default loadState
