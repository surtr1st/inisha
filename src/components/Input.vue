<template>
     <input
          type="text"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          @input="
               $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value,
               )
          " />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { components } from '../configs';
import { TInput } from '../types';

defineProps<Partial<TInput>>();
defineEmits(['update:modelValue']);

const input = ref({
     background: components.background.dark,
     hoverColor: components.hover.dark,
     color: components.color.default,
});
</script>

<style scoped>
input {
     width: 100%;
     height: 75px;
     border-radius: 10px;
     border: none;
     outline: none;
     background: v-bind('input.background');
     color: v-bind('input.color');
     font-size: 18px;
     padding-left: 15px;
     transition: all 250ms;
}
input:hover {
     background: v-bind('input.hoverColor');
}
</style>
