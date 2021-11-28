<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте фактор будущей стоимости обычного аннуитета возникающего 14 раз, ставка дисконта 6%.'
const solution = '21.0151'

const fn = (r: number, n: number) => (Math.pow(1+r,n)-1)/r

export default defineComponent({
  title: 'Фактор будущей стоимости обычного аннуитета (FM3)',
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
