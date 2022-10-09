import axios from "@/services/http";

export default {
	state: {
		products: {},
		isLoading: false
	},
	getters: {
	},
	mutations: {
		updateProducts(state, payload) {
			state.products = payload;
		},
		setIsLoading(state, payload) {
			state.isLoading = payload;
		},
	},
	actions: {
		async fetchProducts({ commit }) {
			const products = await axios.get('/listing');
			commit('updateProducts', products);
			commit('setIsLoading', false);
		}
	},
	namespaced: true
};