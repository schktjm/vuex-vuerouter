import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sleep = sec => new Promise(res => setTimeout(res, sec * 1000));

export default new Vuex.Store({
  // strict: true,
  state: {
    isLoggedIn: false,
    greet: null
  },
  getters: {
    getGreet: state => content => {
      return state.greet != null ? state.greet[content] : undefined;
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setGreet(state, { content, greet }) {
      state.greet = { ...state.greet, [content]: greet };
    }
  },
  actions: {
    login({ commit }) {
      return sleep(1).then(() => commit("login"));
    },
    logout({ commit }) {
      return sleep(1).then(() => commit("logout"));
    },
    setGreet({ state, commit }, { content, onError }) {
      return sleep(1).then(() => {
        if (state.isLoggedIn) {
          commit("setGreet", { content: content, greet: content + " Hello World!" });
        } else {
          onError();
        }
      });
    }
  }
});
