<template>
  <ProjectForm update/>
</template>

<script>
import ProjectForm from '../../components/ProjectForm.vue'

export default {
  components: {
    ProjectForm
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
