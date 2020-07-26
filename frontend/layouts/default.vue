<template>
  <v-app dark>
    <TopBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import TopBar from '~/components/util/TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>
