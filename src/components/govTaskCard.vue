<template>
  <view class="card-wrapper">
    <view class="head">
      <view class="date">{{ date }}</view>
      <view class="verifier">{{ verifier }}</view>
    </view>
    <view class="body">
      <span class="location">{{ location }}</span>
      <span class="type">{{type}}</span>
    </view>
    <view class="footer">
      <button>修改</button>
      <button>查看</button>
    </view>
  </view></template>
<script>
export default {
  props: {
    date: '',
    verifier: '',
    location: '',
    type:''
  }
}
</script>
<style lang="scss" scoped>

</style>
