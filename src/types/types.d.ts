declare type Getter<T> = () => T | Promise<T>;
declare type Setter<T> = (value: T) => void | Promise<void>;
declare type EventHandler = () => void | Promise<void>;
declare type State<T> = [Getter<T>, Setter<T>];
declare type MutableList<T1 extends Array<unknown>, T2 extends T1[0]> = [
   Getter<T1>,
   Setter<T2>,
];
