import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Tasks from './components/tasksScreen.vue'
import MainSreen from './components/mainScreen.vue'
import InfoScreen from './components/infoScreen.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainSreen
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/info',
      component: InfoScreen
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
