<template>
  <ClientForm create/>
</template>

<script>
import ClientForm from '../../components/ClientForm.vue'

export default {
  components: {
    ClientForm
  },
  data () {
    return {
      create: true,
      update: false
    }
  }
}
</script>

<style lang="css" scoped>

</style>
