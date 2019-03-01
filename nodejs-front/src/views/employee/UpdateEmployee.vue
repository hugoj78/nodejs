<template>
  <EmployeeForm update/>
</template>

<script>
import EmployeeForm from '../../components/EmployeeForm.vue'

export default {
  components: {
    EmployeeForm
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
