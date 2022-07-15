//webpack 打包的入口文件
import Vue from "vue"; //引入vue
import App from "./App.vue"; //引入根组件

let a = 1;

Vue.config.productionTip = false; //提示语句
//new 构造函数
new Vue({
  //生成一个实例
  render: (h) => h(App), //渲染 //h函数 //createElement
  //挂载到App身上
  //渲染App
}).$mount("#app");
