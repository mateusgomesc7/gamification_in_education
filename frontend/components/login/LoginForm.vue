<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="success"
      dark
      flat
    >
      <v-toolbar-title>Entrar no Gamification</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Digite o usuário ou e-mail"
          name="login"
          prepend-icon="mdi-account"
          type="text"
        />
        <v-text-field
          id="password"
          label="Digite a senha"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="success" to="/home">
        Entrar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>
