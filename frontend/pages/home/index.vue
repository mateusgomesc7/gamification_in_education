<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        class="pa-2"
        md="8"
      >
        <v-row>
          <v-col>
            <cardWhatQuestion />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <cardQuestion />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <cardQuestion />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <cardQuestion />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        class="pa-2"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardWhatQuestion from '~/components/home/cardWhatQuestion.vue'
import cardQuestion from '~/components/home/cardQuestion.vue'

export default {
  components: {
    cardWhatQuestion,
    cardQuestion
  }
}
</script>

<style>

</style>
