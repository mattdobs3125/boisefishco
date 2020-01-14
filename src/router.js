import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from '@okta/okta-vue'
import Login from './views/Login.vue'
Vue.use(Router)

Vue.use(Auth, {
  issuer: 'https://dev-736323.okta.com/oauth2/default',
  client_id: '0oa2dxeoimUCKQKn9357',
  redirect_uri: 'http://localhost:8080/',
  scope: 'openid profile email'
})

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },

    {
      path: '/',
      component: Auth.handleCallback()
      
    },
   
  ]
})
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
