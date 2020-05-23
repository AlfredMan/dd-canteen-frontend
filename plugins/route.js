export default ({ app, store }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // do something to validate
    // console.log(store)
    // console.log('route plugin beforeEach')
    // a
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
