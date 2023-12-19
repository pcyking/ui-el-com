import { Component, App } from 'vue';
import DpButton from './button';
import ElementPlus from 'element-plus';

// 存储组件列表

const components: {
  [propName: string]: Component;
} = {
  DpButton,
}; // components

const installComponents: any = (app: App) => {
  console.log('dfdf');

  app.use(ElementPlus);

  for (const key in components) {
    app.component(key, components[key]);
  }
};

// 全局动态添加组件
const install = (app: App): void => {
  installComponents(app);
};

// 按需引入
export { DpButton };
export default {
  install,
};
