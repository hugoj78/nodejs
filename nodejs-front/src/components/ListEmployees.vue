<template>
  <div>
    <v-table :data="employees" class="employee">
      <thead slot="head">
          <th>Name</th>
          <th>Username</th>
          <th>Job</th>
          <th>Addresse</th>
          <th>Contact</th>
          <th>Birthday</th>
      </thead>
      <tbody slot="body" slot-scope="{displayData}">
          <tr v-for="employee in employees" v-bind:key="employee._id">
            <td>{{ employee.name }} {{ employee.firstname }}</td>
            <td>{{ employee.username }}</td>
            <td>{{ employee.job }}</td>
            <td>{{ employee.street }} {{ employee.cp }} {{ employee.city }}</td>
            <td>{{ employee.phone }} {{ employee.mail }}</td>
            <td>{{ employee.birthday }}</td>
            <td><router-link class="register" tag="button" :to="{ name: 'showEmployee', query : { id: employee._id }}">Voir</router-link></td>
            <td><router-link class="register" tag="button" :to="{ name: 'updateEmployee', query : { id: employee._id }}">Modifier</router-link></td>
            <td><router-link class="register" tag="button" v-on:click.native="deleteEmployee(employee._id)" :to="{ name: 'home'}">Supprimer</router-link></td>
          </tr>
      </tbody>
    </v-table>
    <router-link class="register new" tag="button" :to="{ name: 'createEmployee' }">Nouveau</router-link>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService.vue'

export default {
  name: 'TheBasics',
  data: function () {
    return {
      employees: []
    }
  },
  created: function () {
    EmployeeService.get()
      .then((data) => {
        this.employees = data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    deleteEmployee: function (id) {
      EmployeeService.deleteEmployee(id)
    }
  }
}
</script>

<style lang="css">

td {
  padding: 10px;
}

.employee {
  margin-left: 2%;
}

.register {
background: #396BB4;
border-radius: 25px;
width: 100%;
height: 25px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
border: none;
cursor: pointer;
font-family: 'Nunito', sans-serif;
color: #fff;
font-weight: 700;
font-size: 16px;
}

.new {
width: 80px;
}
.register:hover {
background: #22406C;
}
</style>
