<template>
  <div>{{ message }}</div>
  <main-counter />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainCounter from '@/components/MainCounter.vue'

const message = ref('Hello Vue 3!')
</script>
