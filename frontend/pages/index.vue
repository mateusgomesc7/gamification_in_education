<template>
  <v-app id="inspire">
    <v-main
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <LoginForm />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from '~/components/login/LoginForm.vue'

export default {
  layout: 'login',
  components: {
    LoginForm
  },
  props: {
    source: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
