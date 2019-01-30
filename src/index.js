import Button from './components/button';
import Input from './components/input';
const install = function(Vue) {
  if (install.installed) return;
  Vue.component(Button.name, Button);
  Vue.component(Input.name, Input);
};

// 有vue的话自动加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Input
};
