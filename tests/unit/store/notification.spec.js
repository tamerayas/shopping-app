import { default as notificationStore } from '@/store/notification';

describe('Notification Store', () => {
	describe('actions', () => {
		it('setNotification Action', async () => {
			const commit = jest.fn();
			const data = {
				status: true,
				type: 'danger',
				message: 'Unknown Error!'
			};
			notificationStore.actions.setNotification({ commit }, data);

			expect(commit).toHaveBeenCalledWith('updateNotification', { ...data });
			expect(commit).toHaveBeenCalledWith('hideNotification');
		});
	});
	describe('mutations', () => {
		it('updateNotification mutation', async () => {
			const state = {
				notification: {}
			};
			const payload = {
				status: true,
				type: 'danger',
				message: 'Unknown Error!'
			};
			notificationStore.mutations.updateNotification(state, payload);
			expect(state.notification).toEqual(payload);
		});

		it('hideNotification mutation', async () => {
			const state = {
				notification: {
					status: true,
					type: 'danger',
					message: 'Unknown Error!'
				}
			};

			notificationStore.mutations.hideNotification(state);

			setTimeout(() => {
				expect(state.notification.status).toEqual(false);
			}, 3000);
		});
	});
});
