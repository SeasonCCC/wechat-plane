import Phaser from '../libs/phaser-wx.js'

let gamePublic = {
  createBad() {
    let now = new Date().getTime()
    if (now - this.bad.genTime > Math.random() * 1000 + 600) {

      let rand = this.game.rnd.between(1, 3),
        key = ''
      switch (rand) {
        case 1:
          key = 'bad1'
          break;
        case 2:
          key = 'bad2'
          break;
        case 3:
          key = 'bad3'
          break;
      }

      let badWidth = this.game.cache.getImage(key).width,
        badHeight = this.game.cache.getImage(key).height

      let x = this.game.rnd.integerInRange(badWidth / 2, this.game.width - badWidth / 2)
      let bad = this.bad.getFirstExists(false, true, x, 100, key)

      bad.outOfBoundsKill = true
      bad.checkWorldBounds = true
      bad.anchor.setTo(0.5, 0.5)
      bad.scale.setTo(0.3, 0.3)
      this.game.physics.arcade.enable(bad)
      if (this.countTime > 20) {
        bad.body.velocity.y = 150
      } else if(this.countTime <= 20 && this.countTime > 10) {
        bad.body.velocity.y = 250
      } else if(this.countTime <= 10 && this.countTime > 0) {
        bad.body.velocity.y = 400
      }
      bad.body.setSize(badWidth, badHeight)

      this.bad.genTime = now
    }
  },

  onBadClick(item) {
    item.kill()
    let explode = this.clickAnimation.getFirstExists(false, true, item.x, item.y, 'explode')
    explode.scale.setTo(0.3, 0.3)
    explode.anchor.setTo(0.5, 0.5)
    let anim = explode.animations.add('animation')
    anim.play(10, false, true)
    this.text.setText(this.score)
    // this.crash.play()
  },

  createGood() {
    let now = new Date().getTime()
    if (now - this.good.genTime > Math.random() * 1000 + 400) {

      let rand = this.game.rnd.between(1, 3),
        key = ''
      switch (rand) {
        case 1:
          key = 'good1'
          break;
        case 2:
          key = 'good2'
          break;
        case 3:
          key = 'good3'
          break;
      }

      let goodWidth = this.game.cache.getImage(key).width,
        goodHeight = this.game.cache.getImage(key).height

      let x = this.game.rnd.integerInRange(goodWidth / 4, this.game.width - goodWidth / 4)
      let good = this.good.getFirstExists(false, true, x, 100, key)

      good.outOfBoundsKill = true
      good.checkWorldBounds = true
      good.anchor.setTo(0.5, 0.5)
      good.scale.setTo(0.3, 0.3)
      this.game.physics.arcade.enable(good)
      if (this.countTime > 20) {
        good.body.velocity.y = 150
      } else if(this.countTime <= 20 && this.countTime > 10) {
        good.body.velocity.y = 250
      } else if(this.countTime <= 10 && this.countTime > 0) {
        good.body.velocity.y = 400
      }
      good.body.setSize(goodWidth, goodHeight)

      this.good.genTime = now
    }
  },

  onGoodClick(item) {
    item.kill()
    let finger = this.clickAnimation.getFirstExists(false, true, item.x, item.y, 'finger')
    finger.scale.setTo(0.3, 0.3)
    finger.anchor.setTo(0.5, 0.5)
    let anim = finger.animations.add('animation')
    anim.play(7, false, true)
    this.score += 5
    this.text.setText(this.score)
  },

  updateCounter() {
    if (this.startFlag) {
      this.counter.setText(--this.countTime)
    }
  },

  timeUp() {
    this.startFlag = false
    // this.normalback.stop()
    // this.music.tween.stop()
    // this.game.options.end.call(this, this.score)
  }
}

export default gamePublic
