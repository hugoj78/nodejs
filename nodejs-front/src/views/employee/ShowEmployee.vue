<template>
  <div class="employee-detail">
    <p>{{ employee.name + ' ' + employee.firstname }}</p>
    <p>{{ employee.username }}</p>
    <p>{{ employee.job }}</p>
    <p>{{ employee.street + ' ' + employee.cp + ' ' + employee.city}}</p>
    <p>{{ employee.phone  + ' ' + employee.mail}}</p>
    <p>{{ employee.birthday }}</p>
    <router-link class="register new" tag="button" :to="{ name: 'employees' }">Retour</router-link>
  </div>
</template>

<script>
import EmployeeService from '../../services/EmployeeService.vue'

export default {
  data () {
    return {
      employee: []
    }
  },
  created: function () {
    let params = this.$route.query.id
    EmployeeService.getEmployee(params)
      .then((data) => {
        console.log(data)
        this.employee = data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped>

</style>
