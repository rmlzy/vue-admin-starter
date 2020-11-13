const user = {
  state: {
    token: "",
    name: "",
    welcome: "",
    avatar: "",
    roles: [],
    info: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name;
      state.welcome = welcome;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {});
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {});
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {});
    },
  },
};

export default user;
