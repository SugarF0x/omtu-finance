<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from '@nuxtjs/composition-api'
import { round } from "~/utils"

const rulesArray: Array<(v: string) => boolean | string> = [
  v => v.split(',').every(e => !isNaN(Number(e))) || 'Значение может быть только числовым'
]
const rules: Array<(v: string) => boolean | string> = [
  v => !isNaN(Number(v)) || 'Значение может быть только числовым'
]

export default defineComponent({
  props: {
    fn: {
      type: Function as PropType<(C: number[], r: number) => number>,
      required: true
    }
  },
  setup(props) {
    const { fn } = toRefs(props)

    const C = ref('')
    const r = ref('')

    const isDisabled = computed(() => {
      return !(
        C.value && C.value.split(',').every(e => !isNaN(Number(e))) &&
        r.value && !isNaN(Number(r.value))
      )
    })

    const calculate = () => {
      result.value = round(fn.value(C.value.split(',').map(e=>Number(e)), Number(r.value)))
    }

    const result = ref<null | number>(null)

    return {
      rulesArray,
      rules,
      C,
      r,
      isDisabled,
      calculate,
      result
    }
  }
})
</script>

<template>
  <div>
    <v-text-field v-model="C" :rules="rulesArray" placeholder="C" label="Сумма (разделять запятой)" />
    <v-text-field v-model="r" :rules="rules" placeholder="r" label="Процентная ставка" />

    <v-btn :disabled="isDisabled" @click="calculate">Посчитать</v-btn>

    <div class="mt-3">
      <strong>Результат: </strong>
      {{ result || '...' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
