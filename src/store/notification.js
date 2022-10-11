export default {
	state: {
		notification: {}
	},
	mutations: {
		updateNotification(state, payload) {
			state.notification.status = payload.status;
			state.notification.message = payload.message,
				state.notification.type = payload.type;
		},
		hideNotification(state) {
			setTimeout(() => {
				state.notification.status = false;
			}, 3000);
		}
	},
	actions: {
		setNotification({ commit }, payload) {
			commit('updateNotification', payload);
			commit('hideNotification');
		}
	},
	namespaced: true
};