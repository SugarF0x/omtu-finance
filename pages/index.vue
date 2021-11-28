<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import Rn from '@/components/calc/Rn.vue'
import Fn from '@/components/calc/Fn.vue'

const items: Vue.Component[] = [
  Rn,
  Fn
]

export default defineComponent({
  setup() {
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
