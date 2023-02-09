import Vue from 'vue'
import VueRouter from 'vue-router'

//아래에 연결할 서브페이지(컴포넌트)를 불러온다.
import MainContent from '../components/MainContent.vue';
import Sub1Content from '../components/Sub1Content.vue';
import Sub2Content from '../components/Sub2Content.vue';
import Sub3Content from '../components/Sub3Content.vue';
import Sub4Content from '../components/Sub4Content.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/vue/', name:'index', component: MainContent},
  { path: '/vue/main', name:'main', component: MainContent},
  { path: '/vue/sub1', name:'sub1', component: Sub1Content},
  { path: '/vue/sub2', name:'sub2', component: Sub2Content},
  { path: '/vue/sub3', name:'sub3', component: Sub3Content},
  { path: '/vue/sub4', name:'sub4', component: Sub4Content}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
