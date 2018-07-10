import Phaser from '../libs/phaser-wx.js'

// export default class PreloadState extends Phaser.State {
//   // 构造器
//   constructor(game) {
//     super('PreloadState');
//     this.game = game;
//   }
//
//   preload() {
//     this.game.load.image('bg', 'images/game-bg.jpg')
//   }
//
//   create() {
//     let bg = this.game.add.image(0, 0, 'bg')
//     console.log(bg)
//     bg.width = this.game.world.width
//     bg.height = this.game.world.height
//   }
// }


let preloadState = {
  preload() {
    this.game.load.image('loading', 'images/preloader.gif')
    if (!this.game.device.desktop) {
      this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    }
  },
  create() {
    this.game.state.start('load')
  }
}

export default preloadState
