<template>
  <div>
    <form action="" method="get">
      <fieldset v-if="create">
        <legend>Création d'un nouveau projet</legend>
        <input type="text" v-model="name" name="name" placeholder="Projet" required>
        <input type="text" v-model="description" name="description" placeholder="Description" required>
        <input type="date" v-model="startDate" name="startDate" placeholder="Date de début" required>
        <input type="date" v-model="endDate" name="endDate" placeholder="Date de fin" required>
        <input type="text" v-model="price" name="price" placeholder="Prix" required>
        <input type="text" v-model="status" name="status" placeholder="Statut" required>
        <br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="createProject(name, description, startDate, endDate, price, status)" :to="{ name: 'projects'}">Créer</router-link>
      </fieldset>
      <fieldset v-else>
        <legend>Mise à jour d'un projet</legend>
        <input type="text" v-model="project.name" name="name" required>
        <input type="text" v-model="project.description" name="description" required>
        <input type="date" v-model="project.start_date" name="start_date" required>
        <input type="date" v-model="project.end_date" name="end_date" required>
        <input type="text" v-model="project.price" name="price" required>
        <input type="text" v-model="project.status" name="status" required>
        <br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="updateProject(project._id, project.name, project.description, project.start_date, project.end_date, project.price, project.status)" :to="{ name: 'home'}">Modifier</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ProjectService from '../services/ProjectService.vue'

export default {
  props: {
    create: Boolean,
    update: Boolean
  },
  data () {
    return {
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      price: '',
      status: '',
      project: [],
      id: ''
    }
  },
  methods: {
    createProject: function (name, description, startDate, endDate, price, status) {
      ProjectService.createProject(name, description, startDate, endDate, price, status)
    },
    updateProject: function (id, name, description, startDate, endDate, price, status) {
      ProjectService.updateProject(id, name, description, startDate, endDate, price, status)
    }
  },
  created: function () {
    const idProject = this.$route.query.id
    ProjectService.getProject(idProject)
      .then((data) => {
        this.project = data
        this.id = idProject
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
