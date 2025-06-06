import './style.css'
import "./flags.css";
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppState from './plugins/appState.js';
import PrimeVue from 'primevue/config'
import Noir from './presets/Noir.js'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'
import ProgressBar from 'primevue/progressbar'
import Avatar from 'primevue/avatar'


const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(AppState)
app.component('Button', Button)
app.component('Card', Card)
app.component('Chip', Chip)
app.component('Divider', Divider)
app.component('ProgressBar', ProgressBar)
app.component('Avatar', Avatar)
app.mount('#app')