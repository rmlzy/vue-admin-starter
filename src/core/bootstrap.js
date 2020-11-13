import store from "@/store";
import storage from "store";
import {
  ACCESS_TOKEN,
  TOGGLE_CONTENT_WIDTH,
  TOGGLE_FIXED_HEADER,
  TOGGLE_FIXED_SIDEBAR,
  TOGGLE_HIDE_HEADER,
  TOGGLE_LAYOUT,
  TOGGLE_NAV_THEME,
  TOGGLE_WEAK,
  TOGGLE_COLOR,
  TOGGLE_MULTI_TAB,
} from "@/store/mutation-types";
import setting from "@/setting";

export default function Initializer() {
  store.commit(TOGGLE_LAYOUT, storage.get(TOGGLE_LAYOUT, setting.layout));
  store.commit(TOGGLE_FIXED_HEADER, storage.get(TOGGLE_FIXED_HEADER, setting.fixedHeader));
  store.commit(TOGGLE_FIXED_SIDEBAR, storage.get(TOGGLE_FIXED_SIDEBAR, setting.fixSiderbar));
  store.commit(TOGGLE_CONTENT_WIDTH, storage.get(TOGGLE_CONTENT_WIDTH, setting.contentWidth));
  store.commit(TOGGLE_HIDE_HEADER, storage.get(TOGGLE_HIDE_HEADER, setting.autoHideHeader));
  store.commit(TOGGLE_NAV_THEME, storage.get(TOGGLE_NAV_THEME, setting.navTheme));
  store.commit(TOGGLE_WEAK, storage.get(TOGGLE_WEAK, setting.colorWeak));
  store.commit(TOGGLE_COLOR, storage.get(TOGGLE_COLOR, setting.primaryColor));
  store.commit(TOGGLE_MULTI_TAB, storage.get(TOGGLE_MULTI_TAB, setting.multiTab));
  store.commit("SET_TOKEN", storage.get(ACCESS_TOKEN));
}
