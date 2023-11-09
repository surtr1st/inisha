<template>
     <div class="radio-group">
          <slot />
     </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';

const props = defineProps({
     modelValue: {
          required: true,
     },
});

const emit = defineEmits(['update:modelValue']);

provide(
     'radioModel',
     computed({
          get() {
               return props.modelValue;
          },
          set(value) {
               emit('update:modelValue', value);
          },
     }),
);
</script>

<style scoped>
.radio-group {
     display: flex;
     gap: 10px;
     margin: 0.5rem 0 0 0;
}
</style>
