<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте суммарную текущую стоимость денежного потока, возникающего в конце года, если ставка дисконта равна 12%. Денежный поток: Первый год – 200 т.р., второй год – 0, третий год – 500 т.р., четвертый год – 900 т.р.'
const solution = '1106.41 тыс. руб'

const fn = (C: number[], r: number) => C.reduce((acc, val, k) => acc+(val/Math.pow(1+r,k+1)), 0)

export default defineComponent({
  title: 'Суммарная текущая стоимость потока (PVpst)',
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
    <fns-c-r :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
