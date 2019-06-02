import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'iview/dist/styles/iview.css';
import {
  Button,
  Row,
  Col,
  Checkbox,
  Divider,
  Modal,
  Input,
  Card,
  Icon,
  Badge,
} from 'iview';

Vue.component('Button', Button);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Checkbox', Checkbox);
Vue.component('Divider', Divider);
Vue.component('Modal', Modal);
Vue.component('Input', Input);
Vue.component('Card', Card);
Vue.component('Icon', Icon);
Vue.component('Badge', Badge);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
