<template>
  <div class="client-detail">
    <p>{{ client.company_name }}</p>
    <p>{{ client.street + ' ' + client.cp + ' ' + client.city}}</p>
    <p>{{ client.ref_name  + ' ' + client.ref_firstname + ' ' + client.ref_mail + ' ' + client.ref_phone}}</p>
    <p>{{ client.activity_area }}</p>
    <router-link class="register new" tag="button" :to="{ name: 'clients' }">Retour</router-link>
  </div>
</template>

<script>
import ClientService from '../../services/ClientService.vue'

export default {
  data () {
    return {
      client: []
    }
  },
  created: function () {
    let params = this.$route.query.id
    ClientService.getClient(params)
      .then((data) => {
        console.log(data)
        this.client = data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped>

</style>
