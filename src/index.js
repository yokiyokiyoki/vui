import Button from './components/button';
import Input from './components/input';
import Collapse from './components/collapse';
import Card from './components/card';
import Icon from './components/icon';

const components = [Button, Input, Collapse, Card, Icon];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 有vue的话自动加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Input,
  Collapse,
  Card,
  Icon
};
