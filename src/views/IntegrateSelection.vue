<template>
     <main>
          <section class="template-header">
               <h1>INTEGRATE SELECTION</h1>
          </section>
          <section class="template-body">
               <div class="template-selection">
                    <Input
                         name="project-name"
                         placeholder="Name"
                         v-model="projectName" />
                    <div class="project-integrates">
                         <Switch
                              v-for="(integrate, index) in integrates"
                              :key="index"
                              :title="integrate.alias"
                              :value="integrate.value"
                              :checked="integrate.included"
                              v-model="selectedIntegrate" />
                    </div>
               </div>
               <div class="template-extra">
                    <Input
                         name="project-extra-deps"
                         placeholder="Dependency" />
                    <Assignments />
               </div>
               <div class="template-buttons">
                    <Button
                         title="Back"
                         color="secondary"
                         @click="replace('/')" />
                    <Button
                         title="Next"
                         color="primary"
                         @click="replace('/')" />
               </div>
          </section>
     </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { GLOBAL_INTEGRATIONS, PACKAGE_MANAGERS } from '../data/index.js';
import { useIntegrations } from '../services/index.js';
import Input from '../components/Input.vue.js';
import Button from '../components/Button.vue.js';
import Assignments from '../components/containers/Assignments.vue.js';
import Switch from '../components/Switch.vue.js';

const { replace } = useRouter();
const [integrates, update] = useIntegrations([
     ...GLOBAL_INTEGRATIONS,
     ...PACKAGE_MANAGERS,
]);
const projectName = ref('');
const selectedIntegrate = ref('');

watch(selectedIntegrate, () => {
     if (selectedIntegrate.value === '') return;
     const index = integrates.value.findIndex(
          (integrate) => integrate.value === selectedIntegrate.value,
     );
     update(index);
     selectedIntegrate.value = '';
});
</script>

<style scoped>
.template-header {
     height: 7vh;
     text-align: center;
     margin: 2.1rem 0 0.5rem 0;
}

.template-header > h1 {
     font-size: 48px;
}

.template-body {
     height: 80vh;
     margin: 2.1px;
     overflow-x: hidden;
     overflow-y: auto;
     display: grid;
     grid-template:
          'selection selection selection extra extra extra'
          'selection selection selection extra extra extra'
          'selection selection selection extra extra extra'
          'footer footer footer footer footer footer';
     place-items: center;
}

.project-integrates {
     width: 100%;
     display: flex;
     justify-content: space-around;
     flex-direction: column;
}

.template-selection,
.template-extra {
     width: 30vw;
}

.template-selection {
     grid-area: selection;
}
.template-extra {
     grid-area: extra;
}

.template-buttons {
     grid-area: footer;
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: center;
     gap: 10px;
     padding-right: 1rem;
}
</style>
../services
