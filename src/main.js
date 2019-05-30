import Vue from 'vue';
import App from './App.vue';
// this is the entry point of this application
Vue.config.productionTip = false;
// create new vue instance
new Vue({
  render: h => h(App), // render App component
}).$mount('#app');

/*
const World=Vue.component(
  'World',
  {template:'<span>World</span>'}
);

new Vue({
  template:'<div>Hello<World/></div>',
  el:'#app',
})
World component is a global component
Global Components Limitation
1.It is easy to cause naming conflicts for global variables
2.It use String templates and all html has to be put in a Javascript
 string that means you get no highlighting and need
to do a lot of escaping
3.Although it can encapsulate html and component logic
CSS is not encapsulated and you need to rely on global css styling
4.Has no build-time compilation support
you can not do any sort of preprossing with things like babel


*/
