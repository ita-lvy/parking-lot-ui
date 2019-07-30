import * as customerService from '../services/customerService';

const customerOrder = {
  state: {
    customerOrderList: [],
    fetchingOrder: null,
    parkingOrder: null,
  },
  mutations: {
    SET_ORDER_LIST(state, orderList) {
      state.customerOrderList = orderList;
    },
    SET_FETCHING_ORDER(state, order) {
      state.fetchingOrder = order;
    },
    CLEAR_FETCHING_ORDER(state) {
      state.fetchingOrder = null;
    },
    SET_PARKING_ORDER(state, order) {
      state.parkingOrder = order;
    },
    CLEAR_PARKING_ORDER(state) {
      state.parkingOrder = null;
    },
  },
  actions: {
    getFetchableOrderList({ commit, getters }) {
      return customerService.fetchFetchableOrderList(getters['customer/getCustomer'].id)
        .then(orderList => {
          commit('SET_ORDER_LIST', orderList);
          return orderList;
        });
    },
    customerFetchCar({ commit }, orderId) {
      return customerService.customerFetchCar(orderId)
        .then(order => {
          commit('SET_FETCHING_ORDER', order);
          return order;
        });
    },
    fetchFetchingOrder({ commit }, orderId) {
      return customerService.fetchById(orderId)
        .then(res => {
          commit('SET_FETCHING_ORDER', res);
          return res;
        });
    },
    clearFetchOrder({ commit }) {
      return new Promise(resolve => {
        commit('CLEAR_FETCHING_ORDER');
        resolve();
      });
    },
  },
  getters: {
    fetchingOrder(state) {
      return state.fetchingOrder;
    },
    customerOrderList(state) {
      return state.customerOrderList;
    },
  },
};

export default customerOrder;
