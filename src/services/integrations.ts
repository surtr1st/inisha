import { computed, ref } from 'vue';
import { TIntegration } from '../types';

export function useIntegrations(
     integrations: TIntegration[],
): MutableList<TIntegration[], number> {
     const list = ref<TIntegration[]>(integrations);

     const integrates = computed(() => list.value);

     const update: Setter<number> = (index: number) => {
          const target = list.value[index];
          if (target.included) {
               list.value[index].included = false;
               return;
          }
          list.value[index].included = true;
     };

     return [integrates, update];
}
