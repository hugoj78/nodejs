<template>
  <div class="project-detail">
    <p>{{ project.name }}</p>
    <p>{{ project.description }}</p>
    <p>{{ 'Début : ' + project.start_date + ' | Fin : ' + project.end_date }}</p>
    <p>{{ project.price + '€' }}</p>
    <p>{{ project.status }}</p>
    <router-link class="register new" tag="button" :to="{ name: 'projects' }">Retour</router-link>
  </div>
</template>

<script>
import ProjectService from '../../services/ProjectService.vue'

export default {
  data () {
    return {
      project: []
    }
  },
  created: function () {
    let params = this.$route.query.id
    ProjectService.getProject(params)
      .then((data) => {
        console.log(data)
        this.project = data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped>

</style>
