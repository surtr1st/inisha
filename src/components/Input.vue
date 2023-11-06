<template>
   <input id="i__input" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { components } from '../configs';

const input = ref({
   background: components.background.dark,
   hoverColor: components.hover.dark,
});
</script>

<style scoped>
#i__input {
   width: 100%;
   height: 75px;
   border-radius: 10px;
   border: none;
   outline: none;
   background: v-bind('input.background');
   color: white;
   font-size: 18px;
   padding-left: 15px;
   transition: all 250ms;
}
#i__input:hover {
   background: v-bind('input.hoverColor');
}
</style>
