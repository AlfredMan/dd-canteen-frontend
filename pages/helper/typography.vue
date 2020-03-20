<template>
  <typography />
</template>

<script>
import Typography from '~/helper/Typography.vue'

export default {
  name: 'HelperTypography',
  components: {
    Typography
  },
  middleware ({ store, redirect }) {
    if (process.env.NODE_ENV!=='development') {
      return redirect('/')
    }
  }
}
</script>
