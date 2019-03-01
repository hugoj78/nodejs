<template>
  <div>
    <v-table :data="projects" class="project">
      <thead slot="head">
          <th>Nom</th>
          <th>Description</th>
          <th>Date</th>
          <th>Prix</th>
          <th>Statut</th>
      </thead>
      <tbody slot="body" slot-scope="{displayData}">
          <tr v-for="project in projects" v-bind:key="project.id">
            <td>{{ project.name }}</td>
            <td>{{ project.description }}</td>
            <td>{{ 'Début : ' + project.start_date + ' | Fin : ' + project.end_date }}</td>
            <td>{{ project.price + '€' }}</td>
            <td>{{ project.status }}</td>
            <td><router-link class="register" tag="button" :to="{ name: 'showProject', query : { id: project._id }}">Voir</router-link></td>
            <td><router-link class="register" tag="button" :to="{ name: 'updateProject', query : { id: project._id }}">Modifier</router-link></td>
            <td><router-link class="register" tag="button" v-on:click.native="deleteProject(project._id)" :to="{ name: 'home'}">Supprimer</router-link></td>
          </tr>
      </tbody>
    </v-table>
    <router-link class="register new" tag="button" :to="{ name: 'createProject' }">Nouveau</router-link>
  </div>
</template>

<script>
import ProjectService from '../services/ProjectService.vue'

export default {
  data: function () {
    return {
      projects: []
    }
  },
  created: function () {
    ProjectService.get()
      .then((data) => {
        this.projects = data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    deleteProject: function (id) {
      ProjectService.deleteProject(id)
    }
  }
}
</script>

<style lang="css">

.project {
  margin-left: 10%;
}

</style>
