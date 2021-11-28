<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте суммарную будущую стоимость денежного потока, накапливаемого под 8% годовых. Денежный поток возникает в конце года. Первый год – 100 т.р., второй год – 800 т.р., третий год – 0, четвертый год – 300 т.р'
const solution = '1359.09 тыс. руб'

const fn = (C: number[], r: number) => C.reduce((acc, val, k) => acc+(val*Math.pow(1+r,C.length-1-k)), 0)

export default defineComponent({
  title: 'Суммарная будущая стоимость потока (FVpst)',
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
