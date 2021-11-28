<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

import Rn from '@/components/calc/Rn.vue'
import Fn from '@/components/calc/Fn.vue'
import PV from '@/components/calc/PV.vue'

import FM4 from '@/components/calc/FM4.vue'
import FM3 from '@/components/calc/FM3.vue'

import FVapst from '@/components/calc/FVapst.vue'
import PVapst from '@/components/calc/PVapst.vue'

const items: Vue.Component[] = [
  Rn,
  Fn,
  PV,

  FM4,
  FM3,

  FVapst,
  PVapst,
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
