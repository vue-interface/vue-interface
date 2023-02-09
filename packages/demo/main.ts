import { ActivityIndicatorPlugin, Dots, Pulse, Spinner } from '@vue-interface/activity-indicator';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router';
import App from './src/App.vue';

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes
    }))
    .use(ActivityIndicatorPlugin, {
        indicators: {
            Dots,
            Pulse,
            Spinner
        }
    })
    .mount('#app');