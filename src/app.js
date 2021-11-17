import { createApp } from 'vue'
import HomeComponent from './HomeComponent.vue'
import LoginComponent from './LoginComponent.vue'
import RegisterComponent from './RegisterComponent.vue'
import './index.css'

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent }
]

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute]
    }
  }
}
createApp(LoginComponent).mount('#app')
