export default async (ctx) => {
  await ctx.store.dispatch('getMapSpaces')
  await ctx.store.dispatch('getMapHire')
  await ctx.store.dispatch('getMapBuildings')
  await ctx.store.dispatch('getArchitectureStudios')
}
