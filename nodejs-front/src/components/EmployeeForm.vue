<template>
  <div>
    <form action="" method="get">
      <fieldset v-if="create">
        <legend>Création d'un nouvel employé</legend>
        <input type="text" v-model="name" name="name" placeholder="Nom" required>
        <input type="text" v-model="firstname" name="firstname" placeholder="Prénom" required>
        <input type="text" v-model="username" name="username" placeholder="Nom d'utilisateur" required>
        <input type="date" v-model="birthday" name="birthday" placeholder="Date de naissance" required>
        <input type="text" v-model="street" name="street" placeholder="Adresse" required>
        <input type="text" v-model="cp" name="cp" placeholder="Code Postal" required>
        <input type="text" v-model="city" name="city" placeholder="Ville" required>
        <input type="tel" v-model="phone" name="phone" placeholder="N° de téléphone" required>
        <input type="mail" v-model="mail" name="mail" placeholder="E-mail" required>
        <input type="text" v-model="job" name="job" placeholder="Poste" required>
        <br><br><br><br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="createEmployee(name, firstname, username, birthday, street, cp, city, phone, mail, job)" :to="{ name: 'employees'}">Créer</router-link>
      </fieldset>
      <fieldset v-else>
        <legend>Mise à jour d'un employé</legend>
        <input type="text" v-model="employee.name" name="name" required>
        <input type="text" v-model="employee.firstname" name="firstname" required>
        <input type="text" v-model="employee.username" name="username" required>
        <input type="date" v-model="employee.birthday" name="birthday" required>
        <input type="text" v-model="employee.street" name="street" required>
        <input type="text" v-model="employee.cp" name="cp" required>
        <input type="text" v-model="employee.city" name="city" required>
        <input type="tel" v-model="employee.phone" name="phone" required>
        <input type="mail" v-model="employee.mail" name="mail" required>
        <input type="text" v-model="employee.job" name="job" required>
        <br><br><br><br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="updateEmployee(employee._id, employee.name, employee.firstname, employee.username, employee.birthday, employee.street, employee.cp, employee.city, employee.phone, employee.mail, employee.job)" :to="{ name: 'home'}">Modifier</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService.vue'

export default {
  props: {
    create: Boolean,
    update: Boolean
  },
  data () {
    return {
      name: '',
      firstname: '',
      username: '',
      birthday: '',
      street: '',
      cp: '',
      city: '',
      phone: '',
      mail: '',
      job: '',
      employee: [],
      id: ''
    }
  },
  methods: {
    createEmployee: function (name, firstname, username, birthday, street, cp, city, phone, mail, job) {
      EmployeeService.createEmployee(name, firstname, username, birthday, street, cp, city, phone, mail, job)
    },
    updateEmployee: function (id, name, firstname, username, birthday, street, cp, city, phone, mail, job) {
      EmployeeService.updateEmployee(id, name, firstname, username, birthday, street, cp, city, phone, mail, job)
    }
  },
  created: function () {
    const idEmployee = this.$route.query.id
    EmployeeService.getEmployee(idEmployee)
      .then((data) => {
        this.employee = data
        this.id = idEmployee
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped>
input {
  width: 40%;
  float: left;
  margin: 10px;
  padding: 14.5px 0px 14.5px 30px;
  border: 2px solid #ccc;
  appearance: unset;
  outline: none;
  border-radius: 27.5px;
font-family: 'Nunito', sans-serif;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2)
}
</style>
