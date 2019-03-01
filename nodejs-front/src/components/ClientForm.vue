<template>
  <div id="form">
    <form action="" method="get">
      <fieldset v-if="create">
        <legend>Création d'un nouveau client</legend>
        <input type="text" v-model="companyName" name="companyName" placeholder="Entreprise" required>
        <input type="text" v-model="street" name="street" placeholder="Adresse" required>
        <input type="text" v-model="cp" name="cp" placeholder="Code Postal" required>
        <input type="text" v-model="city" name="city" placeholder="Ville" required>
        <input type="text" v-model="refName" name="refName" placeholder="Nom du référent" required>
        <input type="text" v-model="refFirstname" name="refFirstname" placeholder="Prénom du référent" required>
        <input type="tel" v-model="refPhone" name="refPhone" placeholder="Téléphone du référent" required>
        <input type="email" v-model="refMail" name="refMail" placeholder="E-mail du référent" required>
        <input type="text" v-model="activityArea" name="activityArea" placeholder="Secteur d'activité" required>
        <br><br><br><br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="createClient(companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea)" :to="{ name: 'clients'}">Créer</router-link>
      </fieldset>
      <fieldset v-else>
        <legend>Mise à jour d'un client</legend>
        <input type="text" v-model="client.company_name" name="companyName" required>
        <input type="text" v-model="client.street" name="street" required>
        <input type="text" v-model="client.cp" name="cp" required>
        <input type="text" v-model="client.city" name="city" required>
        <input type="text" v-model="client.ref_name" name="refName" required>
        <input type="text" v-model="client.ref_firstname" name="refFirstname" required>
        <input type="tel" v-model="client.ref_phone" name="refPhone" required>
        <input type="email" v-model="client.ref_mail" name="refMail" required>
        <input type="text" v-model="client.activity_area" name="activityArea" required>
        <br><br><br><br><br><br><br>
        <router-link class="register new" tag="button" v-on:click.native="updateClient(client._id, client.company_name, client.street, client.city, client.cp, client.ref_name, client.ref_firstname, client.ref_phone, client.ref_mail, client.activity_area)" :to="{ name: 'home'}">Modifier</router-link>
      </fieldset>
    </form>
  </div>
</template>

<script>
import ClientService from '../services/ClientService.vue'

export default {
  props: {
    create: Boolean,
    update: Boolean
  },
  data () {
    return {
      companyName: '',
      street: '',
      city: '',
      cp: '',
      refName: '',
      refFirstname: '',
      refPhone: '',
      refMail: '',
      activityArea: '',
      client: [],
      id: ''
    }
  },
  methods: {
    createClient: function (companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea) {
      ClientService.createClient(companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea)
    },
    updateClient: function (id, companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea) {
      ClientService.updateClient(id, companyName, street, city, cp, refName, refFirstname, refPhone, refMail, activityArea)
    }
  },
  created: function () {
    const idClient = this.$route.query.id
    ClientService.getClient(idClient)
      .then((data) => {
        this.client = data
        this.id = idClient
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
