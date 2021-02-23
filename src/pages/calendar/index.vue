<template>
  <view>
    <view class="calendar">
      <Calendar></Calendar>
    </view>
    <view class="content-wrapper">
      <view class="slide-button">
        <image :src="picPath" class="downArrow"></image>
        <span>
          {{ btnText }}
        </span>
      </view>
      <view class="content">
        <SurveyCard v-for="card in cardList"
                    :enterpriseName="card.enterpriseName"
                    :status="card.status" :category="card.category">
        </SurveyCard>
      </view>
    </view>
  </view>
</template>
<script>
import Calendar from '@dcloudio/uni-ui/lib/uni-calendar/uni-calendar.vue'
import SurveyCard from "@/components/SurveyCard";

export default {
  components: {
    Calendar,
    SurveyCard
  },
  data() {
    return {
      btnText: '展开',
      picPath: '../../static/down@2x.png',
      cardList: [
        {enterpriseName: '黑狼口', status: '已驳回', category: '医疗卫生机构'},
        {enterpriseName: '王麻子村', status: '已驳回', category: '村庄'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrapper {
  border: 1px solid blue;

  .slide-button {
    border: 1px solid red;
    text-align: center;

    .downArrow {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
