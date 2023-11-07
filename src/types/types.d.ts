declare type Getter<T> = () => T | Promise<T>;
declare type Setter<T> = (value: T) => void | Promise<void>
declare type EventHandler = () => void | Promise<void>
