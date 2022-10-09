export default {
	state: {
		cart: []
	},
	getters: {
		itemCount(state) {
			return state.cart.length;
		}
	},
	mutations: {
		addToCart(state, payload) {
			// If exist same item just update unit
			const existSameItem = state.cart.find(item => item.id === payload.id);
			if (existSameItem) {
				existSameItem.unit += 1;
			}
			else {
				state.cart.unshift(payload);
			}
		},
		increment(state, payload) {
			state.cart.find(item => item.id === payload).unit += 1;
		},
		decrement(state, payload) {
			const data = state.cart.find(item => item.id === payload);
			if (data.unit !== 1) {
				data.unit -= 1;
			}
		}
	},
	actions: {
	},
	namespaced: true
};
