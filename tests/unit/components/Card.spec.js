import { shallowMount } from '@vue/test-utils';
import { store, axios } from '../../utils';
import { productList } from './../../dummy';
import router from "@/router";

import AxiosMockAdapter from 'axios-mock-adapter';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
    let mock;
    let wrapper;

    beforeEach(async () => {
        mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
        wrapper = shallowMount(Card, {
            global: {
                mocks: {
                    $store: store,
                    $router: router
                }
            },
            props: {
                data: productList
            }
        });
    });
    afterEach(function () {
        mock.reset();
    });

    it('Card component control', async () => {

        expect(wrapper.exists()).toBeTruthy();

        expect(wrapper.findComponent({ name: 'Card' }).exists());
    });

    it('Update cart store when click add to cart button control', async () => {
        
        expect(store.state.cart.cart.length).toBe(0);

        await wrapper.find('button').trigger('click');

        expect(store.state.cart.cart.length).toBe(1);
    });
    it('When click ADD BASKET button it routes to right page control', async () => {

        await wrapper.find('button').trigger('click');

        expect(router.currentRoute._value.fullPath).toBe('/my-cart');
        
	});
});
