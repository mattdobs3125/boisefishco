<template>
  <v-app>
  
  <NavBar/>
    <v-content>
      <v-container>
        <v-img
        scr="https://wallpaperplay.com/walls/full/c/5/e/273056.jpg"
        max-width="500"
      max-height="300"
      aspect-ratio = "1"
        ></v-img>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import NavBar from '../components/NavBar';

export default {
  name: 'Home',

  components: {
    
    NavBar
  },
};
</script>
¸˛