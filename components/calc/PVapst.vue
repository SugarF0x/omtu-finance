<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Рассчитайте текущую стоимость потока арендных платежей, возникающих в конце года, если годовой арендный платеж первые четыре года составляет 400 т.р., затем он уменьшится на 150 т.р. и сохранится в течении трех лет, после чего возрастет на 350 т.р. и будет поступать еще два года. Ставка дисконта – 10%.'
const solution = '2227.1 тыс. руб'

const fn = (A: number, r: number, n: number) => A*((1-Math.pow(1+r,-n))/r)

export default defineComponent({
  title: 'Текущая стоимость аннуитета постнумерандо (PVapst)',
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
    <p>
      <i>Считает один блок. При разнице во взносах необходимо считать отдельно. Чтобы посчитать то, на что умножить ставку, можно поставить в аннуитет 1.</i>
    </p>
    <fns-a-rn :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
