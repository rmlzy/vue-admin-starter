<template>
  <div class="main">
    <a-form id="formLogin" class="user-layout-login" ref="formLogin" :form="form" @submit="handleSubmit">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px" message="账户或密码错误（admin/ant.design )" />
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="用户名"
          v-decorator="['username', { rules: [{ required: true, message: '请输入用户名' }], validateTrigger: 'change' }]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input-password
          size="large"
          placeholder="密码"
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]">自动登录</a-checkbox>
      </a-form-item>

      <a-form-item style="margin-top: 24px; margin-bottom: 15px">
        <a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="state.loginBtn" :disabled="state.loginBtn">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import setting from "@/setting";

export default {
  data() {
    return {
      loginBtn: false,
      title: setting.title,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false,
      },
    };
  },
  methods: {
    ...mapActions(["Login", "Logout"]),
    handleSubmit(e) {
      e.preventDefault();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less" scoped>
.user-layout-login {
  background: #fff;
  padding: 20px;
  border-radius: 3px;

  h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  label {
    font-size: 14px;
  }

  .logo {
    text-align: center;
    margin-bottom: 30px;

    img {
      height: 40px;
    }
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
    background-color: #ff8929;
    border-color: #ff8929;
  }
}
</style>
