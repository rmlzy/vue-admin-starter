<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import setting from "@/setting";
import { deviceMixin } from "@/store/device-mixin";

export default {
  name: "UserLayout",
  mixins: [deviceMixin],
  data() {
    return {
      title: setting.title,
    };
  },
  mounted() {
    document.body.classList.add("userLayout");
  },
  beforeDestroy() {
    document.body.classList.remove("userLayout");
  },
};
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;
  background-color: #1f2325;
  background-image: url("../assets/login-bg.jpg");
  background-size: cover;

  .container {
    width: 100%;
    min-height: 100%;
    padding: 0 200px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    .main {
      min-width: 260px;
      width: 368px;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
