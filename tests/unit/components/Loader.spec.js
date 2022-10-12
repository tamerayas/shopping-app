import { shallowMount } from '@vue/test-utils';
import { store, axios } from '../../utils';
import router from "@/router";

import AxiosMockAdapter from 'axios-mock-adapter';
import Loader from '@/components/Loader.vue';

describe('Loader.vue', () => {
    let mock;
    let wrapper;

    beforeEach(async () => {
        mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
        wrapper = shallowMount(Loader, {
            global: {
                mocks: {
                    $store: store,
                    $router: router
                }
            },
        });
    });
    afterEach(function () {
        mock.reset();
    });

    it('Loader component control', async () => {

        expect(wrapper.exists()).toBeTruthy();

        expect(wrapper.findComponent({ name: 'Loader' }).exists());
    });
});
