export default async (ctx) => {
  ctx.store.dispatch('getMapSpaces')
  ctx.store.dispatch('getMapHire')
  ctx.store.dispatch('getMapBuildings')
}
