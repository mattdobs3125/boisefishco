<template>
  <v-app>
  <HelloWorld />
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
import HelloWorld from '../components/HelloWorld';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
};
</script>
¸˛