import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sleep = sec => new Promise(res => setTimeout(res, sec * 1000));

export default new Vuex.Store({
  // strict: true,
  state: {
    isLoggedIn: false,
    content: ""
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setContent(state, payload) {
      state.content = payload.content;
    }
  },
  actions: {
    login({ commit }) {
      return sleep(1).then(() => commit("login"));
    },
    logout({ commit }) {
      return sleep(1).then(() => commit("logout"));
    },
    getContent({ state, commit }, { content, onError }) {
      return sleep(1).then(() => {
        if (state.isLoggedIn) {
          commit("setContent", content + " Hello World!");
        } else {
          onError();
        }
      });
    }
  }
});
