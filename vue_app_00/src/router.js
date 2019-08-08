import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import cebian from './components/cicomponents/cebian'
import login from './components/cicomponents/login'
import zhuce from './components/cicomponents/zhuce'
import key1 from './components/keycomponents/key1'
import tiezi from './components/cicomponents/tiezi'
import guanzhu from './components/keycomponents/guanzhu'

Vue.use(Router)

export default new Router({

  base: process.env.BASE_URL,
  routes: [
    {path: '/',component:home},
    {path: '/tiezi',name:"tiezi",component:tiezi},
    {path: '/key1',component:key1},
    {path: '/cebian',component:cebian},
    {path: '/login',component:login},
    {path: '/zhuce',component:zhuce},
    {path: '/guanzhu',component:guanzhu},
   
  ]
})
