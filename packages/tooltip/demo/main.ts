import { createApp } from 'vue';
import TooltipPlugin from '../src/TooltipPlugin';
import App from './App.vue';

createApp(App)
    .use(TooltipPlugin)
    .mount('#app'); 