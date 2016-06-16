<template>
  <div class="hand-div">
    <div class="hand hand-animate"></div>
  </div>
</template>

<script>
import Shake from 'shake.js'
export default {
  props: {
    stop: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: Number,
      default: 5
    },
    timeout: {
      type: Number,
      default: 2000
    }
  },
  ready () {
    const _this = this
    this._shake = new Shake({
      threshold: _this.threshold, // optional shake strength threshold
      timeout: _this.timeout // optional, determines the frequency of event generation
    })
    this._handler = function () {
      if (!_this.stop) {
        _this.$dispatch('on-shake')
      }
    }
    window.addEventListener('shake', this._handler, false)
    this._shake.start()
  },
  beforeDestroy () {
    window.removeEventListener('shake', this._handler, false)
  }
}
</script>

<style lang='scss' scoped>
  .hand-div{
    background-color: #3C3C3C;
    position: relative;
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .hand{
    width: 190px;
    height: 200px;
    background: url(../assets/hand.png) no-repeat;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -95px;
  }
  .hand-animate {
    -webkit-animation: hand_move infinite 2s;
  }
  @-webkit-keyframes hand_move {
    0% {
        -webkit-transform: rotate(0);
           -moz-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0); }
    50% {
        -webkit-transform: rotate(15deg);
           -moz-transform: rotate(15deg);
            -ms-transform: rotate(15deg);
             -o-transform: rotate(15deg);
                transform: rotate(15deg); }
    100% {
        -webkit-transform: rotate(0);
           -moz-transform: rotate(0);
            -ms-transform: rotate(0);
             -o-transform: rotate(0);
                transform: rotate(0); }
    }
    @-webkit-keyframes loading {
      0% {
          -webkit-transform: rotate(0);
             -moz-transform: rotate(0);
              -ms-transform: rotate(0);
               -o-transform: rotate(0);
                  transform: rotate(0); }
      100% {
          -webkit-transform: rotate(360deg);
             -moz-transform: rotate(360deg);
              -ms-transform: rotate(360deg);
               -o-transform: rotate(360deg);
                  transform: rotate(360deg); }
    }
</style>
