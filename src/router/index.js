import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/components/pages/Shopmall'
// import Main from '@/components/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopMall',
      component: ShopMall
    }
  ]
})