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
  

  methods: {

  }
}
 
</script>
