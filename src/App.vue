<template>
  <div>
    <shake @shake="on-shake" :threshold="10" v-show="shakeShow"></shake>
    <dialog :show.sync="show" class="dialog">
      <p class="dialog-title">{{title}}</p>
      <div class="img-box">
        <img :src.sync="img" style="max-width:100%">
      </div>
      <span class="vux-close" @click="hideDialog"></span>
    </dialog>
    <alert :show.sync="show2" title="fail" button-text="再来">
      <p style="text-align:center;" @click="show2=false">确定</p>
    </alert>
    <loading :show.sync="showLading" :text="加载中"></loading>
  </div>
</template>

<script>
import Shake from 'components/Shake'
import {Dialog, Alert, Loading} from 'components/vux'

export default {
  components: {
    Shake,
    Dialog,
    Alert,
    Loading
  },
  data () {
    return {
      shakeShow: true,
      show: false,
      show2: false,
      showLading: false,
      title: '',
      img: ''
    }
  },
  methods: {
    hideDialog () {
      this.show = false
      this.shakeShow = true
    }
  },
  events: {
    'on-shake' () {
      this.showLading = true
      this.shakeShow = false
      this.$http({url: 'http://api.huceo.com/meinv/?key=c3bc793769491a0d46c84ca936dc3498&num=1&rand=1', method: 'GET'}).then((response) => {
        this.showLading = false
        let data = response.data && response.data.newslist && response.data.newslist[0]
        this.img = data.picUrl
        this.title = data.title
        this.show = true
      }, (response) => {
        this.showLading = false
        this.show2 = true
      })
    }
  },
  ready () {

  }
}
</script>

<style lang='scss'>
  @import '~vux/dist/vux.css';
  .dialog {
    .weui_dialog{
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      max-height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 24px;
      height: 24px;
      overflow: hidden;
      color: #ccc;
      &:before{
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:after{
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
      &:before,&:after{
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        top: 50%;
        left: 0;
        background: #98979d;
      }
    }
  }
</style>
