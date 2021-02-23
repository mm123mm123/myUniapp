<template>
  <view class="card-wrapper">
    <view class="head">
      <view class="enterpriseName">{{ enterpriseName }}</view>
      <view class="status">{{ status }}</view>
    </view>
    <view class="body">
      <span class="category">{{ category }}</span>
    </view>
    <view class="footer">
      <button>历史</button>
      <button>查看</button>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    enterpriseName: '',
    status: '',
    category: ''
  }
}
</script>
<style lang="scss" scoped>
.card-wrapper {
  font-size: 16px;
  padding: 15px 15px 10px 15px;
  background-color: #ffffff;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(211, 211, 211, 0.21);

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .body {
    border-bottom: 2px solid #f8f8f8;
    padding: 12px 0;

    .category {
      padding: 0 8px;
      border-radius: 18px;
      background-color: #f8f8f8;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;

    button {
      margin-left: 15px;
      padding: 4px 14px;
      border-radius: 56px;
      background-color: #ffffff;
      border: 1px solid #cccccc;
      color: #666666;
      font-size: 12px;
    }
  }
}

</style>
