import Phaser from 'libs/phaser-wx.js'
import preloadState from 'scene/preloadState'
import loadState from 'scene/loadState'
import startState from 'scene/startState'

// import DataBus from './databus'
// let databus = new DataBus()

export default class Main {
  constructor() {
    this.game = new Phaser.Game({renderer: Phaser.CANVAS, canvas: canvas, width: canvas.width, height: canvas.height});
    this.init()
  }

  init() {
    this.game.state.add('preload', preloadState)
    this.game.state.add('load', loadState)
    this.game.state.add('start', startState)
    this.game.state.start('preload')
  }
}
// let game;
// game = new Phaser.Game({
//    wxgame修改
//    渲染类型
//   renderer: Phaser.CANVAS,
//   canvas: canvas,
//    界面宽度，单位像素
//   width: canvas.width,
//    界面高度
//   height: canvas.height
// });
//
// game.state.add('preload', new PreloadState(game));
// game.state.start('preload')
