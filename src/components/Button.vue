<template>
   <button
      id="i__btn"
      class="">
      {{ title }}
   </button>
</template>

<script setup lang="ts">
import { TButton } from '../types';
import { colors, hoverColors } from '../configs';
import { ref } from 'vue';
const { color } = defineProps<Partial<TButton>>();

const button = ref({
   color: '',
   hoverColor: '',
});

switch (color) {
   case 'primary':
      button.value = {
         color: colors.primary,
         hoverColor: hoverColors.primary,
      };
      break;
   case 'secondary':
      button.value = {
         color: colors.secondary,
         hoverColor: hoverColors.secondary,
      };
      break;
}
</script>

<style scoped>
#i__btn {
   width: auto;
   min-width: 95px;
   max-width: 150px;
   height: 50px;
   background: v-bind('button.color');
   border-radius: 10px;
   color: white;
   border: none;
   font-size: 14px;
   font-weight: 600;
   transition: all 250ms;
   padding: 0.7rem;
   margin: 0.5rem;
}
#i__btn:hover {
   cursor: pointer;
   background: v-bind('button.hoverColor');
}
</style>
