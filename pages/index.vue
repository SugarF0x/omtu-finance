<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

import Rn from '@/components/calc/Rn.vue'
import Fn from '@/components/calc/Fn.vue'
import PV from '@/components/calc/PV.vue'

import FVpst from '@/components/calc/FVpst.vue'
import PVpst from '@/components/calc/PVpst.vue'

import FM4 from '@/components/calc/FM4.vue'
import FM3 from '@/components/calc/FM3.vue'

import FVapst from '@/components/calc/FVapst.vue'
import PVapst from '@/components/calc/PVapst.vue'

import PMT_FVA from "@/components/calc/PMT_FVA.vue"

const items: Vue.Component[] = [
  Rn,
  Fn,
  PV,

  FVpst,
  PVpst,

  FM4,
  FM3,

  FVapst,
  PVapst,

  PMT_FVA
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
