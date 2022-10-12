import { shallowMount } from '@vue/test-utils';
import { store } from '../../utils';
import axios from "@/services/http";
import { productList } from './../../dummy';

import AxiosMockAdapter from 'axios-mock-adapter';
import ProductList from '@/views/ProductList.vue';

describe('ProductList.vue', () => {
	let mock;
	let wrapper;

	beforeEach(async () => {
		mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
		wrapper = shallowMount(ProductList, {
			global: {
				mocks: {
					$store: store,
				}
			}
		});
	});
	afterEach(function () {
		mock.reset();
	});

	it('ProductList component control', async () => {

		expect(wrapper.exists()).toBeTruthy();

		expect(wrapper.findComponent({ name: 'ProductList' }).exists());
	});

	it('ProductList component fetchs all products successfully control', async () => {
		await mock.onGet('/listing').replyOnce(200, {
			productList
		});
	});
}); 
