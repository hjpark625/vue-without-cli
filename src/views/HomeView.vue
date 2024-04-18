<template>
  <h1 class="title">{{ message }}</h1>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const message = ref('Hello Vue3!')
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 32px;
  color: blue;
}
</style>
