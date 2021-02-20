<template>
  <view class="screen">
    <swiper class="swiper" @change="nextPage" :current="this.index">
      <swiper-item>
        <view>
          <image src="../../static/boot/1.jpg"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view>
          <image src="../../static/boot/2.jpg"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view>
          <image src="../../static/boot/3.jpg"></image>
        </view>
      </swiper-item>
    </swiper>
    <button @click='btnClick'>{{ btnTitle }}</button>
  </view>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      btnTitle:'下一页'
    }
  },
  methods: {
    nextPage(e) {
      this.index = e.detail.current
      this.btnTitle=this.index===2?'立即进入':'下一页'
    },
    btnClick() {
      if(this.index<2){
        this.index++
      }else if(this.index===2){
        uni.navigateTo({
          url:'/pages/login/index'
        })
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.screen {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

uni-swiper {
  height: 100%;
}

uni-view {
  height: 100%;
}

uni-image {
  width: 100%;
  height: 100%;
}

uni-button {
  background-color: #0faf69;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 999;
}
</style>
