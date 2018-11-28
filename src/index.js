import Button from "./components/button";
const install = function(Vue) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button
};
