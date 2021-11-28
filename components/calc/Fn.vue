<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Какая сумма будет накоплена вкладчиком через три года, если первоначальный взнос составляет 400 тыс. руб., проценты начисляются ежегодно по ставке 10%?'
const solution = '532.4 тыс. руб'

const fn = (P: number, r: number, n: number) => P*Math.pow(1+r,n)

export default defineComponent({
  title: 'Схема сложных процентов (Fn)',
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
    <fns-p-rn :fn="fn" />
  </div>
</template>

<style lang="scss" scoped>

</style>
