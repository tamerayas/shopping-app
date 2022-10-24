import axios from "@/services/http";
import router from "@/router";

export default {
	state: {
		cart: []
	},
	mutations: {
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
			state.cart = state.cart.filter(data => data.id !== payload);
		},
		clearCart(state) {
			state.cart = [];
		},
		setAmount(state, payload) {
			const { id, amount } = payload;

			state.cart.find(data => data.id === id).amount = amount;
		},
		addToCart(state, payload) {
			const existSameItem = state.cart.find(item => item.id === payload.id);
			if (existSameItem) {
				existSameItem.amount += 1;
			}
			else {
				state.cart.unshift(payload);
			}
			router.push({ path: "/my-cart" });
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

			try {
				const response = await axios.post('/order', requestData);
				dispatch('notification/setNotification', {
					type: 'success',
					message: response.data.message,
					status: true,
				}, { root: true });

				commit('clearCart');
			} catch (error) {
				dispatch('notification/setNotification', {
					type: 'danger',
					message: 'Couldnot place an order!',
					status: true,
				}, { root: true });
			}
		}
	},
	namespaced: true
};
