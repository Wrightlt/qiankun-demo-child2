const routes = [
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "./views/Home.vue")
  },
  {
    path: "/content",
    name: "content",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "content" */ "./views/Content.vue")
  }
]
export default routes