<template>
   <div class="chips">
      <Chip
         v-for="(item, index) in chips"
         :key="item"
         :label="item"
         @close="deleteSelectedChip(index)" />
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TAssignments } from '../../types';
import Chip from '../Chip.vue';
import { components } from '../../configs';

const { items } = defineProps<Partial<TAssignments>>();

const chips = ref(items);
const assignments = ref({
   background: components.background.dark,
   color: components.color.default,
});

const deleteSelectedChip = (index: number) => chips.value?.splice(index, 1);
</script>

<style scoped>
.chips {
   display: flex;
   gap: 5px;
   width: 100%;
   height: 300px;
   max-height: 350px;
   overflow-x: hidden;
   overflow-y: auto;
   background: v-bind('assignments.background');
   color: v-bind('assignments.color');
   padding: 15px;
   transition: all 250ms;
}
</style>
