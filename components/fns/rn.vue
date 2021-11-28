<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from '@nuxtjs/composition-api'
import { round } from "~/utils"

const rules: Array<(v: string) => boolean | string> = [
  v => !isNaN(Number(v)) || 'Значение может быть только числовым'
]

export default defineComponent({
  props: {
    fn: {
      type: Function as PropType<(r: number, n: number) => number>,
      required: true
    }
  },
  setup(props) {
    const { fn } = toRefs(props)

    const r = ref('')
    const n = ref('')

    const isDisabled = computed(() => {
      return !(
        r.value && !isNaN(Number(r.value)) &&
        n.value && !isNaN(Number(n.value))
      )
    })

    const calculate = () => {
      result.value = round(fn.value(Number(r.value), Number(n.value)))
    }

    const result = ref<null | number>(null)

    return {
      rules,
      r,
      n,
      isDisabled,
      calculate,
      result
    }
  }
})
</script>

<template>
  <div>
    <v-text-field v-model="r" :rules="rules" placeholder="r" label="Процентная ставка" />
    <v-text-field v-model="n" :rules="rules" placeholder="n" label="Число периодов" />

    <v-btn :disabled="isDisabled" @click="calculate">Посчитать</v-btn>

    <div class="mt-3">
      <strong>Результат: </strong>
      {{ result || '...' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
