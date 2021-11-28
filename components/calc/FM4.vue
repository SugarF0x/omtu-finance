<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте фактор текущей стоимости обычного аннуитета возникающего 10 раз, ставка дисконта 24 %.'
const solution = '3.6819'

const fn = (r: number, n: number) => (1-Math.pow(1+r,-n))/r

export default defineComponent({
  title: 'Фактор текущей стоимости обычного аннуитета (FM4)',
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
    <fns-rn :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
