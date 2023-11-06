<template>
   <span class="chip-box">
      <span id="chip">
         <p>{{ label }}</p>
         <span
            @click="onClose"
            class="close-button"
            >&times;</span
         >
      </span>
   </span>
</template>

<script setup lang="ts">
import { TChip } from '../types';
import { components } from '../configs';
import { ref } from 'vue';

defineProps<Partial<TChip>>();

const chip = ref({
   background: components.background.dark2,
   color: components.color.default,
   closeBackground: components.background.dark1,
   closeHoverBackground: components.background.darker,
});
</script>

<style scoped>
#chip {
   border-radius: 30px;
   padding: 0.7rem;
   width: auto;
   height: 20px;
   background: v-bind('chip.background');
   color: v-bind('chip.color');
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 10px;
}

.close-button {
   border-radius: 100%;
   width: 30px;
   height: 30px;
   background: v-bind('chip.closeBackground');
   display: grid;
   place-items: center;
   transition: all 250ms;
}
.close-button:hover {
   cursor: pointer;
   background: v-bind('chip.closeHoverBackground');
}
</style>
