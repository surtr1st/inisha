<template>
     <label class="container">
          {{ title }}
          <input
               type="radio"
               name="radio"
               v-model="radioModel"
               :value="value" />
          <span class="checkmark"></span>
     </label>
</template>

<script setup lang="ts">
import { TRadio } from '../types';
import { components } from '../configs';
import { inject, ref } from 'vue';

defineProps<Partial<TRadio>>();

const radioModel = inject('radioModel');
const radio = ref({
     background: components.background.dark1,
     checkedColor: components.hover.primary,
});
</script>

<style scoped>
.container {
     display: block;
     position: relative;
     padding-left: 35px;
     margin-bottom: 12px;
     cursor: pointer;
     font-size: 22px;
     -webkit-user-select: none;
     -moz-user-select: none;
     -ms-user-select: none;
     user-select: none;
}

.container input {
     position: absolute;
     opacity: 0;
     cursor: pointer;
     height: 0;
     width: 0;
}

.checkmark {
     position: absolute;
     top: 0;
     left: 0;
     height: 25px;
     width: 25px;
     background-color: v-bind('radio.background');
     border-radius: 50%;
}

.container:hover input ~ .checkmark {
     background-color: v-bind('radio.checkedColor');
}

.container input:checked ~ .checkmark {
     background-color: v-bind('radio.checkedColor');
}

.checkmark:after {
     content: '';
     position: absolute;
     display: none;
}

.container input:checked ~ .checkmark:after {
     display: block;
}

.container .checkmark:after {
     top: 9px;
     left: 9px;
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: v-bind('radio.background');
}
</style>
