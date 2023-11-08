import { computed, ref } from 'vue';

export function useProject(): MutableList<string[], string> {
     const items = ref<string[]>(['Vue', 'React', 'Svelte']);
     const projects: Getter<string[]> = computed(() => items.value);

     const add: Setter<string> = (project: string) => {
          items.value.push(project);
     };

     return [projects, add];
}
