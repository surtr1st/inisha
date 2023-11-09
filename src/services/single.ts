import { computed, ref } from 'vue';
import { TListIntegrationOmit } from '../types';

type TSingleSelection = TListIntegrationOmit<'included'>;

export function useSingleSelection(integrations: TSingleSelection) {
     const list = ref<TSingleSelection>(integrations);
     const selection = ref<string>('');

     const items: Getter<TSingleSelection> = computed(() => list.value);

     const selected = () => selection.value;

     const update: Setter<string> = (target: string) => {
          selection.value = target;
     };

     return { items, selected, update };
}
