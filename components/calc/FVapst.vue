<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Пенсионный фонд «Мир» принимает взносы под 15% годовых с ежемесячным начислением процентов. Какая сумма будет накоплена к выходу на пенсию, если из зарплаты в конце месяца перечислять в фонд 100 руб., в течении 10 лет.'
const solution = '27521.6 руб'

const fn = (A: number, r: number, n: number) => A*((Math.pow(1+r,n)-1)/r)

export default defineComponent({
  title: 'Будущая стоимость аннуитета постнумерандо (FVapst)',
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
    <fns-a-rn :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
