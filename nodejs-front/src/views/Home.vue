<template>
  <div class="home">
    <Counter
      v-for="tab in tabs"
      v-bind:key="tab.msg"
      v-bind:msg="tab.msg"
      v-bind:count="tab.count"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'
import ClientService from '../services/ClientService.vue'
import EmployeeService from '../services/EmployeeService.vue'
import ProjectService from '../services/ProjectService.vue'

export default {
  name: 'home',
  components: {
    Counter
  },
  data: function () {
    return {
      tabs: [
        { msg: 'salariés', count: 0 },
        { msg: 'projets', count: 0 },
        { msg: 'clients', count: 0 }
      ]
    }
  },
  created: function () {
    EmployeeService.get()
      .then((data) => {
        this.tabs[0].count = data.length
      })
      .catch(error => {
        console.log(error)
      })
    ProjectService.get()
      .then((data) => {
        this.tabs[1].count = data.length
      })
      .catch(error => {
        console.log(error)
      })
    ClientService.get()
      .then((data) => {
        this.tabs[2].count = data.length
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
