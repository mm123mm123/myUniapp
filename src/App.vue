<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "~@/style/reset.scss";
@import "~@/style/helper.scss";

.page-container {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
