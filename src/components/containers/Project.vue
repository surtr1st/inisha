<template>
   <div id="project">
      <h3>{{ name }}</h3>
      <div class="project-tech"></div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { components } from '../../configs';
import { TProject } from '../../types';

defineProps<Partial<TProject>>();

const project = ref({
   background: components.background.dark,
   color: components.color.default,
   hoverColor: components.hover.dark,
});
</script>

<style scoped>
#project {
   display: grid;
   place-items: center;
   width: 200px;
   height: 200px;
   border-radius: 10px;
   background: v-bind('project.background');
   transition: all 250ms;
}

#project:hover {
   cursor: pointer;
   background: v-bind('project.hoverColor');
}

.project-tech {
   position: absolute;
}
</style>
