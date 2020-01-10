<template>
  <v-app>
    <!-- <NavBar/> -->
    <v-content>
      <v-container>
         <button v-on:click='logout' type="button" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light elevation-0 v-size--default orange--text text--accent-4" >
          <span class="v-btn__content">
            <span>Logout</span>
            </span>
            </button>
        <button type="button" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light elevation-0 v-size--default orange--text text--accent-4" >
          <span class="v-btn__content">
            <span>Login</span>
            </span>
            </button>
      </v-container>
    </v-content>
  </v-app>
    

</template>

<script>
// import NavBar from '../components/NavBar';

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
    }
  }
}
</script>