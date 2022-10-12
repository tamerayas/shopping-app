import axios from "@/services/http";

export default {
	state: {
		products: {},
		isLoading: true
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
		async fetchProducts({ state, commit }) {
			if (state.products?.data?.length > 0)
				return;

			commit('setIsLoading', true);
			const products = await axios.get('/listing');
			commit('updateProducts', products.data);
			commit('setIsLoading', false);
		}
	},
	namespaced: true
};