import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home/Home.vue";

describe('Home', () => {
   it ('Home text has been rendered', async () => {

       const wrapper = await shallowMount(Home, {});

       await wrapper.vm.$nextTick(() => {
          expect(wrapper.find('span').text()).toBe('Home!');
       });
   });
});
