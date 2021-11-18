import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import HomeComponent from './HomeComponent.vue'
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'
import DashboardComponent from './DashboardComponent.vue'

createApp(App).use(router).mount('#app')
