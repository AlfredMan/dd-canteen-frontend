<template>
  <section class="block-image"
  v-if="block && block.fields.imageAsset[0]"
  >
    <lazy-image
    :src="block.fields.imageAsset[0].fields.file.url"
    :w="3000"
    />
  </section>
</template>

<script>
export default {
  props: ['block'],
}
</script>

<style lang="css">
</style>
