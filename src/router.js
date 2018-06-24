import Vue from 'vue'
import Router from 'vue-router'
import Registration from './views/Registration'
import Login from './views/Login'
import LostPassword from './views/LostPassword'
import ResetPassword from './views/ResetPassword'
import TimeReporter from './views/TimeReporter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/lost-password',
      name: 'Lost Password',
      component: LostPassword
    },
    {
      path: '/reset-password/:id',
      name: 'Reset password',
      component: ResetPassword
    },
    {
      path: '/time-reporter',
      name: 'Time reporter',
      component: TimeReporter
    }
  ]
})
