<template>
  <section class="p-4 mt-24" v-if="block">
    <div class="cap-max-w">
      <h1 v-if="block.fields.heading">{{block.fields.heading}}</h1>
      <h4 class="max-w-2xl w-full" v-if="block.fields.subheading">{{block.fields.subheading}}</h4>
      <callToAction v-if="block.fields.callToAction" :callToAction="block.fields.callToAction"/>
    </div>
  </section>
</template>

<script>
// import ComponentCallToAction from '~/components/blocks/ComponentCallToAction'
export default {
  props: ['block'],

  // components: { ComponentCallToAction }
}
</script>

<style lang="scss" scoped>
section {
  overflow-x: hidden;
}
</style>
