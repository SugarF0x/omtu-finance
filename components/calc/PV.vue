<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

const example = 'Сколько надо положить на счет в банк под 20,0% годовых, чтобы через 10 лет купить квартиру за 400 тыс.?'
const solution = '64.6 тыс. руб'

const fn = (P: number, r: number, n: number) => P/Math.pow(1+r,n)

export default defineComponent({
  title: 'Дисконтирование (PV)',
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
    <fns-p-rn :fn="fn" p-label="Планируемый к n-году доход" />
  </div>
</template>

<style lang="scss" scoped>

</style>
