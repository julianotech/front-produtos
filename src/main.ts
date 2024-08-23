import { createApp } from 'vue';
import { Quasar } from 'quasar';

import { pinia, router, villus } from './modules';
import App from './App.vue';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import './assets/global.css';
import './style.css';
import 'uno.css';

import '@quasar/extras/material-icons/material-icons.css';
import './assets/global.css';
import './style.css';
import 'uno.css';
import 'quasar/src/css/index.sass';
const app = createApp(App)
  .use(Quasar, {
    plugins: {},
  })
  .use(villus)
  .use(router)
  .use(pinia);

app.mount('#app');
