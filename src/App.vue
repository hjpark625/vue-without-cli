<template>
  <div>{{ message }}</div>
  <counter />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'

const message = ref('Hello Vue 3!')
</script>
