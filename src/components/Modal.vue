<template>
     <Teleport to="#app">
          <div
               v-if="open"
               id="modal">
               <div class="modal-header">
                    <h4>{{ title }}</h4>
                    <span @click="onClose">&times;</span>
               </div>
               <div class="modal-body">
                    <slot />
               </div>
          </div>
          <div
               v-if="open"
               id="backdrop"
               @click="onClose"></div>
     </Teleport>
</template>

<script setup lang="ts">
import { TModal } from '../types';
import { components } from '../configs';
import { ref } from 'vue';

const { open, onClose } = defineProps<Partial<TModal>>();

const modal = ref({
     background: components.background.dark,
     color: components.color.default,
});
</script>

<style scoped>
#modal {
     min-width: 300px;
     max-width: 500px;
     min-height: 300px;
     max-height: 500px;
     border-radius: 10px;
     background: v-bind('modal.background');
     color: v-bind('modal.color');
     position: absolute;
     top: 50%;
     left: 50%;
     translate: -50% -50%;
     z-index: 10000;
     transition: all 250ms;
}

.modal-header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 0.5rem 0.5rem 0 0.7rem;
     padding: 0 0 0 0.5rem;
     height: 50px;
}

.modal-header > span {
     width: 50px;
     height: inherit;
     display: grid;
     place-items: center;
     border-radius: 10px;
     transition: all 250ms;
}
.modal-header > span:hover {
     cursor: pointer;
     background: v-bind('components.hover.dark');
}

.modal-body {
     display: grid;
     place-items: center;
     margin: 1.1rem;
}

#backdrop {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100vh;
     background: rgba(0, 0, 0, 0.7);
     z-index: 1000;
     transition: all 250ms;
}
</style>
