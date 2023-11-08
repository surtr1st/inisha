<template>
     <div class="switch-box">
          <label class="switch">
               <input
                    type="checkbox"
                    :value="modelValue"
                    :checked="checked"
                    @change="$emit('update:modelValue', value)" />
               <span class="slider round"></span>
          </label>
          <h3>
               {{ title }}
          </h3>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { components } from '../configs';
import { TSwitch } from '../types';

defineProps<Partial<TSwitch>>();
defineEmits(['update:modelValue']);

const switcher = ref({
     background: components.background.dark1,
     inactiveBackground: components.background.danger,
     activeBackground: components.background.primary,
     color: components.color.default,
     borderColor: components.background.dark2,
});
</script>

<style scoped>
.switch-box {
     width: 300px;
     display: flex;
     justify-content: flex-start;
     gap: 25px;
     align-items: center;
     margin: 0.5rem 0 0.5rem 0;
}

.switch {
     position: relative;
     display: inline-block;
     width: 90px;
     height: 50px;
     outline: none;
}

.switch input {
     opacity: 0;
     width: 0;
     height: 0;
}

.slider {
     position: absolute;
     cursor: pointer;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: v-bind('switcher.inactiveBackground');
     -webkit-transition: 0.4s;
     transition: 0.4s;
     border: 5px solid v-bind('switcher.borderColor');
}

.slider:before {
     position: absolute;
     content: '';
     height: 40px;
     width: 40px;
     left: -1px;
     bottom: -1px;
     background-color: v-bind('switcher.background');
     -webkit-transition: 0.4s;
     transition: 0.4s;
     border: 1px solid v-bind('switcher.borderColor');
}

input:checked + .slider {
     background-color: v-bind('switcher.activeBackground');
}

input:focus + .slider {
     box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
     -webkit-transform: translateX(40px);
     -ms-transform: translateX(40px);
     transform: translateX(40px);
}
.slider.round {
     border-radius: 30px;
}

.slider.round:before {
     border-radius: 50%;
}
</style>
