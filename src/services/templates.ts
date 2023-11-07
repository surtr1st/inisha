import { TItemBox } from '../types';
import { useRouter } from 'vue-router';

export function useTemplates(): TItemBox[] {
   const router = useRouter();

   const createVueTemplate = () => {
      router.replace({ path: '/select/@vue' });
   };

   const createReactTemplate = () => {
      router.replace({ path: '/select/@react' });
   };

   return [
      {
         label: 'Vue',
         image: '',
         event: createVueTemplate,
      },
      {
         label: 'React',
         image: '',
         event: createReactTemplate,
      },
   ];
}
