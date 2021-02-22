<template>
  <view class="page-container">
    <view class="title">
      世纪大千
    </view>
    <view class="user-msg-box">
      <ul class="ul">
        <li>
          <span class="user-name first-item">li</span>
          <span class="phone-number">7087111</span>
          <view class="arrow" @click="nextPage('/pages/mine')"></view>
        </li>
        <li class="li">
          <span class="area first-item">区域</span>
          <span class="area-name">朝阳</span>
        </li>
      </ul>
      <view class="calendar">
        <view class="calendar-pic">
          <image src="/../static/calendar@2x.png"></image>
        </view>
        <view>我的日程表</view>
      </view>
    </view>

    <view v-for="cardListTitle in Object.keys(cardList)" class="card-box">
      <view class="card-box-title">{{ cardListTitle }}</view>
      <view class="card-list">
        <ListCard v-for="cardPath in Object.keys(cardList[cardListTitle])"
                  :pic-path="`${cardPath}@2x.png`" :text="cardList[cardListTitle][cardPath]"></ListCard>
      </view>
    </view>

  </view>
</template>

<script>
import ListCard from "@/components/ListCard";

export default {
  components: {ListCard},
  data() {
    return {
      cardList: {
        '勘察、巡查': {'qukancha': '去勘察', 'daigengxin': '已更新', 'yibohui': '已驳回', 'quanbuqiye': '全部企业'},
        '政府临时任务': {'tibao': '提报', 'tibaojilu': '提报记录'},
        '临时任务': {'daitianbao': '待填报', 'yibohui': '已驳回', 'yitongguo': '已通过', 'lsrw-dsh': '待审核'}
      }
    }
  },
  onLoad() {

  },
  methods: {
    nextPage(path){
      console.log(path);
      uni.navigateTo({
        url:path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  background-color: #f5f5f5;

  .title {
    margin-top: 10px;
    text-align: center;
  }
}

.user-msg-box {
  font-size: 16px;
  border-radius: 15px;
  margin: 10px 10px 0 10px;
  padding: 1px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(211, 211, 211, 0.21);

  li {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .first-item {
      margin-left: 20px;
      width: 50px
    }

    .phone-number {
      margin-left: 40px;
      width: 120px;
    }

    .area-name {
      margin-left: 40px;
      width: 80px;
    }

    .arrow {
      margin-left: 90px;
    }
  }

  .calendar {
    font-size: 13px;
    border: 2px solid #05af64;
    color: #05af64;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 26px;
    margin: 20px 0 20px 20px;

    .calendar-pic {
      display: flex;
      align-items: center;
      margin: 5px 5px 5px 0;

      uni-image {
        width: 14px;
        height: 14px
      }
    }
  }
}

.card-box {

  .card-box-title {
    font-size: 16px;
    margin: 20px 0 20px 10px;
  }

  .card-list {
    .card {
      margin-left: 10px;
    }
  }

}
</style>
