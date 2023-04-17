import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    signIn: async (context, payload) => {
      let user = { username: payload.username, password: payload.password };
      await fetch("fetch/user-service/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      });
    },
  },
  modules: {},
});
