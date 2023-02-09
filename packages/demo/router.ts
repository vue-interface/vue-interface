import Home from './src/views/Home.vue';
import InputField from './src/views/InputField.vue';
import SelectField from './src/views/SelectField.vue';

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/input-field', component: InputField, name: 'input-field' },
    { path: '/select-field', component: SelectField, name: 'select-field' },
];