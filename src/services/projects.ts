import { ref } from 'vue';

export function useProject(): MutableList<string[], string> {
     const items = ref<string[]>(['Vue', 'React', 'Svelte']);
     const projects: Getter<string[]> = () => items.value;

     const addProject: Setter<string> = (project: string) => {
          items.value.push(project);
     };

     return [projects, addProject];
}
