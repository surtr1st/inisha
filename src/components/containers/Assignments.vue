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

const { items } = defineProps<Partial<TAssignments>>();

const chips = ref(items);

const deleteSelectedChip = (index: number) => chips.value?.splice(index, 1);
</script>

<style scoped>
.chips {
   display: flex;
   gap: 5px;
}
</style>
