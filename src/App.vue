<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
        <router-link to="/" tag="button" id='home-button'> Home </router-link>
        <v-btn v-if='authenticated' v-on:click='logout' id='logout-button'>logout</v-btn>
        <v-btn v-else v-on:click='login' id='login-button'>logout</v-btn>

      <div class="d-flex align-center">
   
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

// import axios from 'axios'
export default {
  name: 'app',
  data: function () {
    return {
      authenticated: false
    }
  },
  created () {
    this.isAuthenticated()
  },
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    login () {
      this.$auth.loginRedirect('/')
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()

      // Navigate back to home
      this.$router.push({ path: '/' })
    },
    // async created () {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${await this.$auth.getAccessToken()}`
    // try {
    //   const response = await axios.get(`http://localhost:8082/api/messages`)
    //   this.posts = response.data
    // } catch (e) {
    //   console.log(`Errors! ${e}`)
    // }
  
    // }
  }
}
 
</script>
