import { createApp } from 'vue';
import { Quasar } from 'quasar';

import { pinia, router, villus } from './modules';
import App from './App.vue';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// Import Quasar css
import 'quasar/src/css/index.sass';
import './assets/global.css';
import './style.css';
import 'uno.css';

const app = createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .use(villus)
  .use(router)
  .use(pinia);

app.mount('#app');
