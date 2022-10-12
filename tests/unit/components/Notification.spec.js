import { shallowMount } from '@vue/test-utils';
import { store, axios } from '../../utils';
import router from "@/router";

import AxiosMockAdapter from 'axios-mock-adapter';
import Notification from '@/components/Notification.vue';

describe('Notification.vue', () => {
    let mock;
    let wrapper;

    beforeEach(async () => {
        mock = new AxiosMockAdapter(axios, { delayResponse: 2000 });
        wrapper = shallowMount(Notification, {
            global: {
                mocks: {
                    $store: store,
                    $router: router
                }
            },
            props: {
                message: "İşlem Başarılı!",
                type: "success"
            }
        });
    });
    afterEach(function () {
        mock.reset();
    });

    it('Notification component control', async () => {

        expect(wrapper.exists()).toBeTruthy();

        expect(wrapper.findComponent({ name: 'Notification' }).exists());
    });
});
