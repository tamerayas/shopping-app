import axios from "@/services/http";

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
			// If exist same item just update amount
			const existSameItem = state.cart.find(item => item.id === payload.id);
			if (existSameItem) {
				existSameItem.amount += 1;
			}
			else {
				state.cart.unshift(payload);
			}
		},
		increment(state, payload) {
			state.cart.find(item => item.id === payload).amount += 1;
		},
		decrement(state, payload) {
			const data = state.cart.find(item => item.id === payload);
			if (data.amount !== 1) {
				data.amount -= 1;
			}
		},
		removeItem(state, payload) {
			const index = state.cart.findIndex(data => data.id === payload);
			state.cart.splice(index, 1);
		},
		clearCart(state) {
			state.cart = [];
		}
	},
	actions: {
		async submitOrder({ state, dispatch, commit }) {
			const requestData = state.cart.map(value => {
				return {
					id: value.id,
					amount: value.amount
				};
			});

			const response = await axios.post('/order', requestData);

			if (response) {
        dispatch('notification/setNotification', {
					type: 'success',
					message: response.data.message,
      		status: true,
				}, {root: true});

				commit('clearCart');
			}
		}
	},
	namespaced: true
};
