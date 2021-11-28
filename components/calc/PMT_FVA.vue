<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте ежегодный платеж в погашение кредита в сумму 75 т.р., выданного на семь лет под 33%.'
const solution = '28.6395 тыс. руб'

const fn = (FVA: number, r: number, n: number) => FVA*(r/(1-Math.pow(1+r,-n)))

export default defineComponent({
  title: 'Ежегодный платёж (PMT/FVA)',
  setup() {

    return {
      example,
      solution,
      fn
    }
  },
})
</script>

<template>
  <div>
    <Sample :example="example" :solution="solution" />
    <fns-v-a-rn :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
