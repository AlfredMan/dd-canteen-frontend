export default async (ctx) => {
  ctx.store.dispatch('COOKIE_CHECK')
}
