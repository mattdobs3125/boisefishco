<template>
  <v-app>
    <v-content>
      <v-container>
        <button type="button" class="v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light elevation-0 v-size--default deep-purple--text text--accent-4" undefined="true">
          <span class="v-btn__content">
            <span>Click Me</span>
            </span>
            </button>
      </v-container>
    </v-content>
  </v-app>
    

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      activeUser: null
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.activeUser = await this.$auth.getUser()
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    }
  }
}
</script>