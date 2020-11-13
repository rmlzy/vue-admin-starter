<template>
  <div class="shzb">
    <div class="shzb__module">
      <template v-for="(item, index) in modules">
        <router-link :to="item.link" :class="{ module: true, active: activeModuleKey === item.key }" :key="item.key">
          <div class="module__icon">
            <a-icon :type="item.icon" />
          </div>
          <div class="module__name">{{ item.name }}</div>
        </router-link>
      </template>
    </div>
    <div :class="{ shzb__main: true, 'hide-sider': activeModuleKey === 'dashboard' }">
      <pro-layout
        :menus="menus"
        :collapsed="collapsed"
        :mediaQuery="query"
        :isMobile="isMobile"
        :handleMediaQuery="handleMediaQuery"
        :handleCollapse="handleCollapse"
        v-bind="settings"
      >
        <template v-slot:menuHeaderRender>
          <img src="../assets/logo.png" alt="" />
        </template>

        <template v-slot:rightContentRender>
          <right-content :top-menu="settings.layout === 'topmenu'" :is-mobile="isMobile" :theme="settings.theme" />
        </template>
        <template v-slot:footerRender>
          <span></span>
        </template>
        <router-view />
      </pro-layout>
    </div>
  </div>
</template>

<script>
import { SettingDrawer } from "@ant-design-vue/pro-layout";
import { mapState } from "vuex";
import { CONTENT_WIDTH_TYPE, SIDEBAR_TYPE, TOGGLE_MOBILE_TYPE } from "@/store/mutation-types";

import setting from "@/setting";
import RightContent from "@/components/GlobalHeader/RightContent";
import GlobalFooter from "@/components/GlobalFooter";
import Ads from "@/components/Other/CarbonAds";

export default {
  name: "BasicLayout",
  components: {
    SettingDrawer,
    RightContent,
    GlobalFooter,
    Ads,
  },
  data() {
    return {
      // base
      menus: [],
      // 侧栏收起状态
      collapsed: false,
      title: setting.title,
      settings: {
        layout: setting.layout,
        theme: setting.navTheme,
        primaryColor: setting.primaryColor,
        fixedHeader: setting.fixedHeader,
        fixSiderbar: setting.fixSiderbar,
        siderWidth: setting.siderWidth,
        colorWeak: setting.colorWeak,
        hideHintAlert: false,
        hideCopyButton: false,
      },
      // 媒体查询
      query: {},

      // 是否手机模式
      isMobile: false,

      activeModuleKey: "dashboard",
      modules: [
        { name: "仪表盘", icon: "dashboard", key: "dashboard", link: "/dashboard" },
        { name: "模块1", icon: "appstore", key: "module1", link: "/module1" },
        { name: "模块2", icon: "cloud-server", key: "module2", link: "/module2" },
        { name: "模块3", icon: "cluster", key: "module3", link: "/module3" },
      ],
    };
  },
  computed: {
    ...mapState({
      routes: (state) => state.app.routes,
    }),
  },
  watch: {
    $route(newVal) {
      this.setActiveModuleKey(newVal.path);
      this.setModuleRoutes();
    },
  },
  created() {
    // 处理侧栏收起状态
    this.$watch("collapsed", () => {
      this.$store.commit(SIDEBAR_TYPE, this.collapsed);
    });
    this.$watch("isMobile", () => {
      this.$store.commit(TOGGLE_MOBILE_TYPE, this.isMobile);
    });
  },
  mounted() {
    this.setActiveModuleKey(this.$route.path);
    this.setModuleRoutes();

    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Edge") > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed;
        setTimeout(() => {
          this.collapsed = !this.collapsed;
        }, 16);
      });
    }
  },
  methods: {
    setActiveModuleKey(path) {
      const names = path.split("/");
      if (names.length < 1) return;
      const keys = this.modules.map((item) => item.key);
      const topModuleName = names[1];
      if (keys.includes(topModuleName)) {
        this.activeModuleKey = topModuleName;
      }
    },

    setModuleRoutes() {
      const rootRoute = this.routes.find((item) => item.path === "/");
      (rootRoute.children || []).forEach((item) => {
        if (item.meta && item.meta.key === this.activeModuleKey) {
          this.menus = item.children || [];
        }
      });
    },

    handleMediaQuery(val) {
      this.query = val;
      if (this.isMobile && !val["screen-xs"]) {
        this.isMobile = false;
        return;
      }
      if (!this.isMobile && val["screen-xs"]) {
        this.isMobile = true;
        this.collapsed = false;
        this.settings.contentWidth = CONTENT_WIDTH_TYPE.Fluid;
        // this.settings.fixSiderbar = false
      }
    },
    handleCollapse(val) {
      this.collapsed = val;
    },
  },
};
</script>

<style lang="less">
@import "./BasicLayout.less";
</style>
