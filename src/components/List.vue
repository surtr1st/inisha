<template>
   <ul>
      <li
         v-for="item in items"
         @click="item.event">
         <h5>{{ item.label }}</h5>
      </li>
   </ul>
</template>

<script setup lang="ts">
import { TList } from '../types';
import { components } from '../configs';
import { ref } from 'vue';

defineProps<Partial<TList>>();

const list = ref({
   background: components.background.darker,
   color: components.color.default,
   hoverColor: components.hover.dark,
});
</script>

<style scoped>
ul {
   width: 100%;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   background: inherit;
}

li {
   width: 100px;
   height: 100px;
   background: v-bind('list.background');
   color: v-bind('list.color');
   border-radius: 10px;
   display: grid;
   place-items: center;
   transition: all 250ms;
}

li:hover {
   cursor: pointer;
   background: v-bind('list.hoverColor');
}
</style>
