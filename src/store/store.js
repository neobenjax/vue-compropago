import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	temporadas: [],
	errors: [],
}

const mutations = {
	setVisto(state,temp,ep) {
		state.temporadas[temp].episodio[ep].visto;
	}
}

const actions = {
	
	getTemporadas: ({ commit, state }) => {
		axios.get('https://www.mocky.io/v2/5957fe7b120000c801db7c85')
	    .then((response) => {
	      let temporadasData = response.data.response.seasons;
	      for (let i = 0, n = temporadasData.length; i < n; i += 1) {
	        for (let j = 0, m = temporadasData[i].episodes.length; j < m; j += 1) {
	          temporadasData[i].episodes[j].visto = false;
	        }
	      }
	      state.temporadas = temporadasData;
	    })
	    .catch((e) => {
	      state.errors.push(e);
	    });
	},
	setVisto: ({ commit, state }) => {
		
	}

}

export default new Vuex.Store({
	state,
	mutations,
	actions
})