<template>
 <v-app>
   <router-view/>
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
    
    '$route': 'isAuthenticated'
  },
  methods: {

  }
}
 
</script>
