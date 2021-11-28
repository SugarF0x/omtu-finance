<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import Rn from '@/components/calc/Rn.vue'

const items: Vue.Component[] = [
  Rn
]

export default defineComponent({
  setup() {
    console.log(items)

    return {
      items
    }
  }
})
</script>

<template>
  <v-expansion-panels>
    <Method v-for="item in items" :key="item._scopeId" :title="item.title">
      <component :is="item" />
    </Method>
  </v-expansion-panels>
</template>
