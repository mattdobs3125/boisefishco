import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from '@okta/okta-vue'
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
      path: '/implicit/callback',
      component: Auth.handleCallback()
      
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
