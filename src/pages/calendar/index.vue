<template>
  <view>
    <view class="calendar">
      <Calendar :show-month=false></Calendar>
    </view>
    <view class="content-wrapper" :class='{toggle: isClicked}'>
      <view class="slide-button" @click='isClicked=!isClicked'>
        <image :src="picPath" class="downArrow"></image>
        <span>
          {{ isClicked === true ? '收起' : '展开' }}
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
      ],
      isClicked: false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.page-container {
  background-color: #fafafa;
  border:1px solid red;
  overflow-y: auto;
}
.content-wrapper {
  border: 1px solid red;
  position: absolute;
  width: 100%;
  top: 30%;
  transition: top 0.5s;
  background-color: #fafafa;

  &.toggle {
    top: 58%;

    .downArrow {
      transform: rotate(180deg);
    }
  }

  .slide-button {
    background-color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .downArrow {
      width: 15px;
      height: 15px;
    }
  }

}
</style>
