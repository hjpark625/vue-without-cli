<template>
  <div class="counter-wrapper">
    <button class="button" type="button" @click="onDecrease">-1</button>
    <span>{{ count }}</span>
    <button class="button" type="button" @click="onIncrease">+1</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const onIncrease = () => {
  count.value++
}

const onDecrease = () => {
  count.value--
}
</script>

<style lang="scss" scoped>
.counter-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  .button {
    cursor: pointer;
    margin: 0 1rem;
    border-radius: 4px;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border: 1px solid black;
  }
}
</style>
