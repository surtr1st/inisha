declare type Getter<T> = import('vue').ComputedRef<T | Awaited<Promise<T>>>;
declare type Setter<T> = (value: T) => void | Promise<void>;
declare type EventHandler = () => void | Promise<void>;
declare type State<T> = [Getter<T>, Setter<T>];
declare type MutableList<T1 extends Array<unknown>, T2> = [
   Getter<T1>,
   Setter<T2>,
];
declare type TClientIntegrations =
   | 'typescript'
   | 'prettier'
   | 'eslint'
   | 'tailwindcss';
