declare type Getter<T> = () => T | Promise<T>;
declare type EventHandler = () => void | Promise<void>;
