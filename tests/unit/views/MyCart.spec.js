import { shallowMount, flushPromises } from '@vue/test-utils';
import { axios, store } from '../../utils';
import router from "@/router";

import AxiosMockAdapter from 'axios-mock-adapter';
import MyCart from '@/views/MyCart.vue';
import { outOfStockData } from './../../dummy';

describe('MyCart.vue', () => {
	let mock;
	let wrapper;

	beforeEach(async () => {
		mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
		wrapper = shallowMount(MyCart, {
			global: {
				mocks: {
					$store: store,
					$router: router
				}
			}
		});
	});

	afterEach(function () {
		mock.reset();
	});

	it('MyCart component control', async () => {
		await flushPromises();

		expect(wrapper.exists()).toBeTruthy();

		expect(wrapper.findComponent({ name: 'MyCart' }).exists());
	});

	it('When click CONTINUE SHOPPING button routes right page control', async () => {

		wrapper.find('.continue-button').trigger('click');

		expect(router.currentRoute._value.fullPath).toBe('/');
	});

	it('If cart is empty PLACE ORDER button is disabled control', async () => {

		wrapper.find('.place-order-button').trigger('click');

		expect(store.state.cart.cart).toHaveLength(0);
	});

	it('Out of stock data control', async () => {
	
		mock.onPost("/order", { outOfStockData }).replyOnce(404);
	});
});
