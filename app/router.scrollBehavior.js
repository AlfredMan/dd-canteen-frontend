export default async function (to, from, savedPosition) {
  // if (to.hash) {
  //   return {
  //     selector: to.hash
  //   }
  // }
  // if (savedPosition) {
  //   return savedPosition
  // } else {
  //   return { x: 0, y: 0 }
  // }
  // if (to.hash) {
  //   return { selector: to.hash }
  // } else {
  //   return { x: 0, y: 0 }
  // }

  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x = 0) => {
    return (
      document.querySelector(hash) ||
      new Promise((resolve) => {
        if (x > 50) {
          return resolve(document.querySelector('#app'))
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1))
        }, 50)
      })
    )
  }

  if (to.hash) {
    const el = await findEl(to.hash)
    const offset = 50
    if ('scrollBehavior' in document.documentElement.style) {
      // return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      return window.scrollTo({ top: el.offsetTop - offset, behavior: 'auto' })
    } else {
      return window.scrollTo(0, el.offsetTop - offset)
    }
  }

  return { x: 0, y: 0 }

  // console.log('scrollBehavior called', to, from)
  //
  // const defaultPosition = false
  // const scrollTopPosition = { x: 0, y: 0 }
  //
  // let position = defaultPosition
  // console.log({ to, from })
  // debugger
  // if (savedPosition) {
  //   position = savedPosition
  // } else if (to.matched.length < 2) {
  //   position = scrollTopPosition
  // } else if (to.matched.some(child => child.components.default.options.scrollToTop)) {
  //   position = scrollTopPosition
  // }
  //
  // return new Promise((resolve) => {
  //   window.$nuxt.$once('triggerScroll', () => {
  //     // debugger
  //     if (to.hash && document.querySelector(to.hash)) {
  //       position = {
  //         selector: to.hash,
  //         offset: { x: 0, y: 50 }
  //       }
  //     }
  //
  //     resolve(position)
  //   })
  // })
}
