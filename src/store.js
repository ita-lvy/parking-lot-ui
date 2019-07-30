import Vue from 'vue';
import Vuex from 'vuex';
import auth from './store/auth';
import plStore from './store/plStore';
import pbStore from './store/pb';
import admin from './store/admin';
import userL from './store/userL';
import customer from './store/customerStore';
import order from './store/order';
import hrStore from './store/hr'
import manageOrdersStore from './store/manageOrderStore'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    plStore,
    pbStore,
    admin,
    userL,
    customer,
    order,
    hrStore,
    manageOrdersStore
  },
  state: {
    userName: '',
  },
  mutations: {
    setUserName(state, payload) {
      state.userName = payload;
    },
  },
  actions: {
    getUserName: state => {
      return state.userName;
    },
  },
});
