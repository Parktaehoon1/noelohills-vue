import axios from "axios";

const state = {
            mbMenuData : [],
            siteGnbData : []
        };
const actions = {
  fetchmbMenuData({commit}){
    axios.get('./data/mbmenudata.json')
    .then(response => {
      commit('MB_MENU_DATA', response.data)
    })
    .catch(err => console.log(err))
  },
  fetchSiteGnbData({commit}){
    axios.get('./data/sitegnb.json')
    .then(response => {
      commit('SITE_MENU_DATA', response.data)
    })
    .catch(err => console.log(err))
  }
};
const mutations = {
  MB_MENU_DATA(state, payload){
    state.mbMenuData = payload
  },
  SITE_MENU_DATA(state, payload){
    state.siteGnbData = payload
  }
};
const getters = {
            getmbMenuData(state){ // 무조건 state 
              // 여러가지 데이터를 원하는 값으로 정렬
                return state.mbMenuData;
              },
              getsiteMenuData(state){
                return state.siteGnbData;
              }
        };

export default {state, actions, mutations, getters};