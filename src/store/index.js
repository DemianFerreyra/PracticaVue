import { createStore } from 'vuex'
import axios from 'axios'

const apikey = "92891eeae11c448296c0a2307d178f18"

export default createStore({
  state: {
    cards:[]
  },
  getters: {
  },
  mutations: {
    getGames: (state, games) => state.cards = games,
  },
  actions: {
    async getGames({commit}){
      const response = await axios.get(`https://api.rawg.io/api/games?key=${apikey}`)
      console.log("hola", response)
      commit("getGames", response.data.results);
    }
  },
  modules: {
  }
})
