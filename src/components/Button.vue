<template>
   <button
      id="i__btn"
      :disabled="disabled">
      {{ title }}
   </button>
</template>

<script setup lang="ts">
import { TButton } from '../types';
import { components } from '../configs';
import { ref } from 'vue';

const { color, disabled } = defineProps<Partial<TButton>>();

const button = ref({
   background: '',
   hoverColor: '',
   color: components.color.default,
});

function handleStyle() {
   if (disabled) {
      button.value = {
         background: components.background.disabled,
         hoverColor: components.background.disabled,
         color: components.color.disabled,
      };
      return;
   }

   switch (color) {
      case 'primary':
         button.value.background = components.background.primary;
         button.value.hoverColor = components.hover.primary;
         break;
      case 'secondary':
         button.value.background = components.background.secondary;
         button.value.hoverColor = components.hover.secondary;
         break;
   }
}

handleStyle();
</script>

<style scoped>
#i__btn {
   width: auto;
   min-width: 95px;
   max-width: 150px;
   height: 50px;
   background: v-bind('button.background');
   border-radius: 10px;
   color: v-bind('button.color');
   border: none;
   font-size: 14px;
   font-weight: 600;
   transition: all 250ms;
   padding: 0.7rem;
   margin: 0.5rem 0.5rem 0.5rem 0;
}
#i__btn:hover {
   cursor: pointer;
   background: v-bind('button.hoverColor');
}
</style>
