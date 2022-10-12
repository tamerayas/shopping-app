export default {
	state: {
		notification: {}
	},
	mutations: {
		updateNotification(state, payload) {
			state.notification.status = payload.status;
			state.notification.type = payload.type;
			state.notification.message = payload.message;
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