<template>
  <v-col>
    <v-card
      elevation="4"
      color="grey"
    >
      <v-card-title class="d-flex align-center panel-header grey darken-1">
        <v-icon class="mr-2">
          mdi-pencil
        </v-icon> {{ title }}
      </v-card-title>
      <v-card-text class="mt-3">
        <div>
          {{ question }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success">
          Visualizar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    question: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
