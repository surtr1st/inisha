<template>
     <main>
          <section class="template-header">
               <h1>INTEGRATE SELECTION</h1>
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
          <section class="template-body">
               <div class="template-selection">
                    <Title
                         class="project-name"
                         value="Project Name"
                         to="project-name">
                         <Input
                              name="project-name"
                              placeholder="Name"
                              v-model="projectName" />
                    </Title>
                    <Title value="Version">
                         <RadioGroup v-model="radioModel">
                              <Radio
                                   v-for="(version, index) in items"
                                   :key="index"
                                   :value="version.value"
                                   :title="version.alias" />
                         </RadioGroup>
                    </Title>
                    <Title
                         value="Integrations"
                         class="project-integrates">
                         <Switch
                              v-for="(integrate, index) in integrates"
                              :key="index"
                              :title="integrate.alias"
                              :value="integrate.value"
                              :checked="integrate.included"
                              v-model="selectedIntegrate" />
                    </Title>
                    <Title
                         value="Package Managers"
                         class="project-managers">
                         <Switch
                              v-for="(manager, index) in packageManagers"
                              :key="index"
                              :title="manager.alias"
                              :value="manager.value"
                              :checked="manager.included"
                              v-model="selectedManager" />
                    </Title>
               </div>
               <div class="template-extra">
                    <Title
                         value="Extra Dependencies"
                         to="project-extra-deps">
                         <Input
                              name="project-extra-deps"
                              placeholder="Dependency" />
                         <Assignments />
                    </Title>
               </div>
          </section>
     </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
     GLOBAL_INTEGRATIONS,
     PACKAGE_MANAGERS,
     VUE_VERSIONS,
     VUE_OPTIONS,
} from '../data';
import { useIntegrations, useSingleSelection } from '../services';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import Assignments from '../components/containers/Assignments.vue';
import Switch from '../components/Switch.vue';
import Title from '../components/Title.vue';
import RadioGroup from '../components/RadioGroup.vue';
import Radio from '../components/Radio.vue';

const { replace } = useRouter();
const { params } = useRoute();
const [integrates, updateIntegrate] = useIntegrations(selectIntegratesFromId());
const [packageManagers, updatePackageManager] =
     useIntegrations(PACKAGE_MANAGERS);
const { items, update } = useSingleSelection(VUE_VERSIONS);

const projectName = ref('');
const selectedIntegrate = ref('');
const selectedManager = ref('');
const radioModel = ref('');

function selectIntegratesFromId() {
     const id = params.template;
     switch (id) {
          case '@vue':
               return [...GLOBAL_INTEGRATIONS, ...VUE_OPTIONS];
          default:
               return GLOBAL_INTEGRATIONS;
     }
}

watch(selectedIntegrate, () => {
     if (selectedIntegrate.value === '') return;
     const index = integrates.value.findIndex(
          (integrate) => integrate.value === selectedIntegrate.value,
     );
     updateIntegrate(index);
     selectedIntegrate.value = '';
});

watch(selectedManager, () => {
     if (selectedManager.value === '') return;
     const index = packageManagers.value.findIndex(
          (manager) => manager.value === selectedManager.value,
     );
     updatePackageManager(index);
     selectedManager.value = '';
});

watch(radioModel, () => update(radioModel.value));
</script>

<style scoped>
.template-header {
     height: 12vh;
     text-align: center;
     margin: 2.1rem 0 0.5rem 0;
}

.template-body {
     height: 80vh;
     margin: 0 2rem 0 2rem;
     overflow-x: hidden;
     overflow-y: auto;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     column-gap: 10px;
     grid-template-areas:
          'ni ni extra extra'
          'it pm extra extra'
          'it pm extra extra';
}

.project-name {
     grid-area: ni;
}

.project-integrates {
     grid-area: it;
}

.project-managers {
     grid-area: pm;
}

.template-selection {
     grid-area: ni;
     place-self: normal start;
     width: 100%;
}
.template-extra {
     grid-area: extra;
     width: 80%;
     place-self: normal end;
}

.template-buttons {
     width: 100%;
     display: flex;
     justify-content: flex-end;
     align-items: center;
     gap: 10px;
     padding-right: 1rem;
}
</style>
