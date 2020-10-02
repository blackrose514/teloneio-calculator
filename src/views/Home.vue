<template>
  <div class="container mt-4">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-one-third">
        <Calculator />
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calculator from '@/components/Calculator.vue'

export default defineComponent({
  components: {
    Calculator,
  },
  created() {
    document.title = 'TC - Home'
  },
})
</script>
