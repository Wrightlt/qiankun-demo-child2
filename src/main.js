import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';
import './public-path'

Vue.config.productionTip = false;
Vue.use(VueRouter);


// 声明变量管理vue及路由实例
let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    base: window.__POWERED_BY_QIANKUN__ ? "bbb" : "/",
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#appTwo') : '#appTwo');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// 导出子应用生命周期 挂载前
export async function bootstrap(props) {
  console.log('[vue] vue app bootstraped', props);
}

// 导出子应用生命周期 挂载前 挂载后
// **注意，实例化路由时，判断当运行在qiankun环境时，路由要添加前缀，前缀与主应用注册子应用函数genActiveRule("/aaa")内的参数一致**
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

