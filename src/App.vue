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

.page-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #0ab368;
}
</style>
