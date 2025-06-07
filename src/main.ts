import './style.css'
import "./flags.css";
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppState from './plugins/appState.js';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'
import ProgressBar from 'primevue/progressbar'
import Avatar from 'primevue/avatar'
import Aura from '@primeuix/themes/aura';
import Carousel from 'primevue/carousel';



const app = createApp(App)

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
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
app.component('Carousel', Carousel)
app.mount('#app')