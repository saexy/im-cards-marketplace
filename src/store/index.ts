import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    modal: {
      title: "",
      size: "",
      component: null,
      show: false,
    },
  },
  getters: {},
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    storeModal(state, data) {
      state.modal = data;
    },
  },
  actions: {
    openModal({ commit }, data) {
      commit("storeModal", { ...data, show: true });
    },
    closeModal({ state, commit }) {
      commit("storeModal", { ...state.modal, show: false });
      setTimeout(() => {
        commit("storeModal", {
          ...state.modal,
          title: "",
          size: "",
          component: null,
        });
      }, 300);
    },
  },
  modules: {},
});
