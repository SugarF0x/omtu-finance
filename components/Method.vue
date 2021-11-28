<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String
  },
  setup() {

  }
})
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped>

</style>
