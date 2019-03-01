<template>
  <div>
    <v-table :data="clients" class="client">
      <thead slot="head">
          <th>Company Name</th>
          <th>Adresse</th>
          <th>Contact Référent</th>
          <th>Secteur d'activité</th>
      </thead>
      <tbody slot="body" slot-scope="{displayData}">
          <tr v-for="client in clients" v-bind:key="client._id">
            <td>{{ client.company_name }}</td>
            <td>{{ client.street }} {{ client.cp }} {{ client.city }}</td>
            <td>{{ client.ref_name }} {{ client.ref_firstname }} {{ client.ref_phone }} {{ client.ref_mail }}</td>
            <td>{{ client.activity_area }}</td>
            <td><router-link class="register" tag="button" :to="{ name: 'showClient', query : { id: client._id }}">Voir</router-link></td>
            <td><router-link class="register" tag="button" :to="{ name: 'updateClient', query : { id: client._id }}">Modifier</router-link></td>
            <td><router-link class="register" tag="button" v-on:click.native="deleteClient(client._id)" :to="{ name: 'home'}">Supprimer</router-link></td>
          </tr>
      </tbody>
    </v-table>
    <router-link class="register new" tag="button" :to="{ name: 'createClient' }">Nouveau</router-link>
  </div>
</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {
  data: function () {
    return {
      clients: []
    }
  },
  created: function () {
    ClientService.get()
      .then((data) => {
        this.clients = data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    deleteClient: function (id) {
      ClientService.deleteClient(id)
    }
  }
}
</script>

<style lang="css">

.client {
  margin-left: 4%;
}
</style>
