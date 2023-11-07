<template>
   <main>
      <section class="home-header">
         <h1>YOUR PROJECTS</h1>
         <div class="home-toolbar">
            <Button
               title="Create"
               color="primary"
               @click="open = !open" />
            <Button
               title="Switch"
               color="primary" />
         </div>
         <Modal
            :open="open"
            title="Create project"
            @close="closeModal">
            <List :items="items" />
         </Modal>
      </section>
      <section class="home-body">
         <Project
            v-for="project in projects"
            :key="project"
            :name="project" />
      </section>
   </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';
import Project from '../components/containers/Project.vue';
import List from '../components/List.vue';
import { TItemBox } from '../types';

const projects = ['Vue-Test', 'XXX-D', 'Adudarkwa'];
const open = ref(false);
const items = ref<TItemBox[]>([
   {
      label: 'Vue',
      image: '',
      event: () => console.log(),
   },
   {
      label: 'React',
      image: '',
      event: () => console.log(),
   },
   {
      label: 'Express',
      image: '',
      event: () => console.log(),
   },
   {
      label: 'Nuxt',
      image: '',
      event: () => console.log(),
   },
   {
      label: 'Nest',
      image: '',
      event: () => console.log(),
   },
   {
      label: 'Next',
      image: '',
      event: () => console.log(),
   },
]);

const closeModal = () => (open.value = !open.value);
</script>

<style scoped>
.home-header {
   height: 10vh;
   text-align: center;
   margin-bottom: 0.5rem;
}

.home-body {
   height: 80vh;
   display: flex;
   justify-content: flex-start;
   align-items: flex-start;
   gap: 15px;
   padding: 1rem;
}

.home-toolbar {
   width: 100%;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 10px;
   padding-right: 1rem;
}
</style>
