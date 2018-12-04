import { shallowMount } from "@vue/test-utils";
import Message from "lib@/components/button/button.vue";

describe("Button", () => {
  it("renders props.msg when passed", () => {
    const msg = "随便写的";
    const wrapper = shallowMount(Message, {
      propsData: { msg }
    });
    expect(wrapper.find(".msg").text()).toBe(msg);
  });
});
