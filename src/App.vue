<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Modal from './components/Modal.vue';
import List from './components/List.vue';
import Switch from './components/Switch.vue';
import Assignments from './components/containers/Assignments.vue';
import { TItemBox } from './types';

const openModal = ref(false);
const items = ref<TItemBox[]>([
   {
      label: 'Vue',
      image: '',
      event: () => console.log('Vue'),
   },
   {
      label: 'React',
      image: '',
      event: () => console.log('React'),
   },
   {
      label: 'Express',
      image: '',
      event: () => console.log('Express'),
   },
]);
const switches = ref<{ title: string; mark: () => void }[]>([
   {
      title: 'Integrate Tailwind',
      mark: () => console.log('Tailwind'),
   },
   {
      title: 'Integrate ESLint',
      mark: () => console.log('ESLint'),
   },
   {
      title: 'Integrate Prettier',
      mark: () => console.log('Prettier'),
   },
]);

const chips = ['A', 'Du', 'Dark', 'Wa', 'Di', 'Thoi'];
</script>

<template>
   <Button
      title="Test Button 1"
      color="primary"
      @click="openModal = !openModal" />
   <Button
      title="Test Button 2"
      color="secondary" />
   <Button
      disabled
      title="Test Button 2"
      color="secondary" />
   <Input />

   <Modal
      title="Test Modal 1"
      :open="openModal"
      @close="() => (openModal = !openModal)">
      <List :items="items" />
   </Modal>
   <Switch
      v-for="(item, index) in switches"
      :key="index"
      :title="item.title"
      @mark="item.mark" />
   <Assignments :items="chips" />
</template>
