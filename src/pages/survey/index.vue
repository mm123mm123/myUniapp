<template>
  <view>
    <radio-group>
      <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
        <view>
          <radio :value="item.value" :checked="index === current" />
        </view>
        <view>{{item.name}}</view>
      </label>
    </radio-group>
  </view>
</template>
<script>

</script>
<style lang="scss" scoped>

</style>
