<template>
  <EmployeeForm create/>
</template>

<script>
import EmployeeForm from '../../components/EmployeeForm.vue'

export default {
  components: {
    EmployeeForm
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
