<template>
  <ClientForm update/>
</template>

<script>
import ClientForm from '../../components/ClientForm.vue'

export default {
  components: {
    ClientForm
  },
  data () {
    return {
      create: false,
      update: true
    }
  }
}
</script>

<style lang="css" scoped>

</style>
