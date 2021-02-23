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
  border: 1px solid red;
  padding: 15px 15px 10px 15px;

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
