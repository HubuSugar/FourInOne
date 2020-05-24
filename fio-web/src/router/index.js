import Vue from 'vue'
import Router from 'vue-router'

import routes from '../router/router-list'

Vue.use(Router);


let router = new Router({
  routes:routes
});

export default router
