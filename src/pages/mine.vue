<template>
  <view class="page-container">
    <view class="bcg-pic">
      <view class="self-msg-box">
        <ol>
          <li>
            <view>姓名</view>
            <view>ls</view>
          </li>
          <li>
            <view>区域</view>
            <view>朝阳区</view>
          </li>
          <li>
            <view>关于</view>
            <view class="arrow"></view>
          </li>
          <li>
            <view>缓存</view>
            <view>0</view>
          </li>
        </ol>
      </view>
      <button>退出登录</button>
    </view>
  </view>

</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.page-container {
  background-color: #f5f5f5;
}

.bcg-pic {
  background: url("../static/header_bg@2x.png") top center no-repeat;
  background-size: 100%;
  padding-top: 20px;
}

.self-msg-box {
  background-color: #ffffff;
  border-radius: 15px;
  margin: 0 20px;
  font-size: 16px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom: 1px solid #f1f1f1;
  }
}


button {
  position: absolute;
  font-size: 16px;
  width: 300px;
  left: 0;
  right: 0;
  bottom: 100px;
  border-radius: 78px;
  background-color: #15bb72;
  color: #ffffff;
}


</style>
