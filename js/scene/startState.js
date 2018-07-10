import gameIng from './gameIng'
import Phaser from '../libs/phaser-wx.js'

let startState = {
  preload() {

  },
  create() {
    // 设置背景
    let bg = this.game.add.image(0, 0, 'background')
    bg.width = this.game.world.width
    bg.height = this.game.world.height

    this.startBtn = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'startBtn')
    this.startBtn.anchor.setTo(.5)
    this.startBtn.scale.setTo(.5)
    this.startBtn.inputEnabled = true
    this.startBtn.events.onInputDown.add(this.genGame, this)
  },

  update() {
    if (this.startFlag) {
      gameIng.createBad.call(this)
      gameIng.createGood.call(this)
    }
  },

  render() {
    // this.game.debug.soundInfo(this.normalback, 20, 32)

    // this.game.debug.text('Time until event: ' + this.game.time.events.duration.toFixed(0), 32, 32)
    // this.game.debug.body(this.player)
    // let that = this
    // this.good.forEachAlive(function (good) {
    //   that.game.debug.body(good)
    // })
    // this.bad.forEachAlive(function (bad) {
    //   that.game.debug.body(bad)
    // })
  },

  genGame() {
    this.startBtn.destroy()
    // 开启游戏物理引擎
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // 音乐
    // this.normalback = this.game.add.audio('normalback', 1, true)
    // this.normalback.play()

    // this.music = this.game.add.sprite(this.game.world.width * .85, 25, 'music')
    // this.music.anchor.setTo(.5)
    // this.music.scale.setTo(.5)
    // this.music.inputEnabled = true
    // this.music.events.onInputDown.add(this.musicSwitch, this)
    // this.music.tween = this.game.add.tween(this.music).to({
    //   rotation: 2 * Math.PI
    // }, 1000, null, true, 0, -1);

    // 定义非环保组
    this.bad = this.game.add.group()
    this.bad.inputEnableChildren = true
    this.bad.onChildInputDown.add(gameIng.onBadClick, this)
    this.bad.genTime = 0

    // 定义环保组
    this.good = this.game.add.group()
    this.good.inputEnableChildren = true
    this.good.onChildInputDown.add(gameIng.onGoodClick, this)
    this.good.genTime = 0

    // 定义爆炸动画组
    this.clickAnimation = this.game.add.group()

    // 分数
    let style = {
      font: 'normal bold 20px MicrosoftYahei',
      fill: '#fff'
    }
    this.score = 0
    this.text = this.game.add.text(this.game.world.width * .77, this.game.world.height * .93, this.score, style)
    this.text.anchor.setTo(0.5, 0.5)


    // 倒计时
    this.countTime = 30
    this.game.time.events.repeat(Phaser.Timer.SECOND * 1, this.countTime, gameIng.updateCounter, this)
    this.game.time.events.add(Phaser.Timer.SECOND * this.countTime, gameIng.timeUp, this)
    style = {
      font: 'normal bold 20px MicrosoftYahei',
      fill: '#fff'
    }
    this.counter = this.game.add.text(this.game.world.width * .35, this.game.world.height * .93, this.countTime, style)
    this.counter.anchor.setTo(0.5, 0.5)

    this.startFlag = true
  },


  musicSwitch() {
    if (this.normalback.isPlaying) {
      this.music.tween.pause()
      this.normalback.pause()
    } else {
      this.music.tween.resume()
      this.normalback.resume()
    }

  }
}


export default startState
