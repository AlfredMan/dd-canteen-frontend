export default ({ app, store }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // do something to validate
    // console.log(store)
    // console.log('route plugin beforeEach')
    // a
    console.log(from.query, to.query)
    console.log(from, to)

    store.dispatch('addRouteHistory', { from: from })

    // if is map
    if ((from.query && from.query.building) || (to.query && to.query.building)) {
      next()
      return
    }

    // if is map
    if ((from.path === to.path) && to.path.indexOf('/workspace')>=0) {
      // if ((from.query && from.query['space-type']) || (to.query && to.query['space-type'])) {
        next()
        return
      // }
    }

    // if route changes on the same page
    // disable transition effect
    if ((from.path === to.path)) {
      next()
      return
    }

    store.dispatch('routeTransitionStart')
    const delay = store.state.transition.delay
    const count = store.state.transition.count
    if (count < 1) {
      store.dispatch('routeTransitionInc')
      next()
    } else {
      setTimeout(() => {
        // console.log('beforeEach next ...', delay)
        store.dispatch('routeTransitionInc')
        next()
      }, delay)
      // next()
    }
  })

  // app.router.beforeResolve((to, from) => {
  //
  // })

  app.router.afterEach((to, from) => {
    // do something to validate
    // console.log('route plugin afterEach')
    store.dispatch('routeTransitionEnd')
  })
}
