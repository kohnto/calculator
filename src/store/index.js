import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calcTitle: '',
    showingOnScreen: 0,
    calcGrid: {},
    lastButtonPressed:{}
  },
  getters: {//use to get states (we can do with the state whatever we want)
    getCalcTitle (state){
      return state.calcTitle;
    },
    getShowingOnScreen (state){
      return state.showingOnScreen;
    },
    getCalcGrid (state){
      return state.calcGrid;
    }
  },
  mutations: {//dont allow async functions, need to use with commit. use to change states
    setCalcTitle(state, payload) {
      state.calcTitle = payload.title;
    },
    setShowingOnScreen(state, payload) {
      state.showingOnScreen = payload.showingOnScreen;
    },
    setCalcGrid (state, payload){
      state.calcGrid = payload.calcGrid;
    },
    setLastButtonPressed(state, payload){
      state.lastButtonPressed = payload.lastButtonPressed;
    }
  },
  actions: {//allow async functions, need to use with dispatch
    lastButtonPressed(context,payload){
      setTimeout(() => {
        context.commit('setLastButtonPressed',payload);
      },2000);
    }
  },
  modules: {
  }
})


//we can use mapGetters inside computed
//we can use mapActions inside methods