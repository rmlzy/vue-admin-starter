const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install(Vue, instance) {
    if (this.installed) {
      return;
    }
    this.installed = true;

    if (!instance) {
      return;
    }

    Vue.axios = instance;

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance;
        },
      },
      $http: {
        get: function get() {
          return instance;
        },
      },
    });
  },
};

export { VueAxios };
