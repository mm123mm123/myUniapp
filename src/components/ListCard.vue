<template>
  <view class="card">
    <view class="pic">
      <image :src="`/../static/${picPath}`"></image>
    </view>
    <view class="text">{{ text }}</view>
  </view>
</template>
<script>
export default {
  props: {
    picPath: '',
    text: ''
  },
}
</script>
<style lang="scss" scoped>
.card {
  display: inline-flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: #ffffff;
  border-radius: 15px;

  uni-image {
    width: 26px;
    height: 26px;
  }

  .text {
    width: 80px;
    text-align: center;
  }
}


</style>
