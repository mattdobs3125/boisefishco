<template>
  <v-app>
  <HelloWorld />
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
import HelloWorld from '../components/HelloWorld';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
};
</script>
¸˛