<template>
  <view class="page-container">
    <view class="userNameForm form">
      <image src="../../static/account@2x.png"></image>
      <input class="uni-input" name="input"
             placeholder="登录账号" v-model="userForm.username"/>
    </view>
    <view class="passwordForm form">
      <image src="../../static/password@2x.png"></image>
      <input class="uni-input" name="input" placeholder="登录密码" v-model="userForm.password"/>
    </view>
    <view class="button-wrapper">
      <button class="login-button" type="default" @click="login()">
        登录
      </button>
    </view>
    <view class="bg l-t"></view>
    <view class="bg r-m"></view>
    <view class="bg r-b"></view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      userForm: {
        username: 'ls',
        password: 'ls1234'
      }
    }
  },
  methods: {
    login() {
      if (!this.userForm.username) {
        uni.showToast({
          title: '请输入用户名',
          icon: 'none'
        })
      } else if (!this.userForm.password) {
        uni.showToast({
          title: '请输入密码',
          icon: 'none'
        })
      } else {
        this.$api.post('auth/appLogin', this.userForm).then(
            () => {
              uni.navigateTo({
                url: '/pages/index/index'
              })
            }, () => {
              this.userForm = {
                username: '',
                password: ''
              }
            })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-container {
  background-color: #0ab368;
}

.form {
  display: flex;
  align-items: center;
  margin: 0 auto 20px auto;
  width: 270px;
  padding: 0 20px;
  border-radius: 20px;
  background-color: #0BA660;

  &.userNameForm {
    margin-top: 240px
  }

  .uni-input {
    .input-placeholder {
      font-size: 16px;
      color: #a9beb4;
    }

    margin: 14px 0 14px 18px;
  }
}

uni-image {
  height: 18px;
  width: 18px;
}

.bg {
  background-color: #20b874;
  border-radius: 50%;

  &.l-t {
    position: absolute;
    width: 220px;
    height: 220px;
    top: -60px;
    left: -60px;
  }

  &.r-m {
    position: absolute;
    width: 300px;
    height: 400px;
    top: 50%;
    right: -150px;
    z-index: -1;
  }
}

.button-wrapper {
  .login-button {
    color: #a9beb4;
    background-color: #0ba660;
    font-size: 15px;
    width: 70px;
    height: 35px;
    line-height: 35px;
    margin: auto;
  }
}


</style>
