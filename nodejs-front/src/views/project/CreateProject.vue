<template>
  <ProjectForm create/>
</template>

<script>
import ProjectForm from '../../components/ProjectForm.vue'

export default {
  components: {
    ProjectForm
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
