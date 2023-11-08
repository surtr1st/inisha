<template>
     <label :for="to">{{ value }}</label>
     <div class="title-wrapper">
          <slot />
     </div>
</template>

<script setup lang="ts">
import { TTitle } from '../types';

defineProps<Partial<TTitle>>();
</script>

<style scoped>
.title-wrapper {
     width: 100%;
     margin: 0.5rem 0 2.2rem 0;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     flex-wrap: wrap;
     overflow-x: hidden;
     overflow-y: auto;
}
</style>
