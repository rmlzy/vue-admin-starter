import Vue from "vue";

// base library
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

// ext library
import MultiTab from "@/components/MultiTab";
import PageLoading from "@/components/PageLoading";

Vue.use(Antd);
Vue.use(MultiTab);
Vue.use(PageLoading);
