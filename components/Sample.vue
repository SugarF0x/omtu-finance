<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    example: String,
    solution: String
  },
  setup() {

  },
})
</script>

<template>
  <div>
    <strong class="d-block">Пример:</strong>
    <p> {{ example }} </p>

    <strong class="d-block">Ответ:</strong>
    <p> {{ solution }} </p>
  </div>
</template>

<style lang="scss" scoped>

</style>
