export type TButton = {
   title: string;
   color: Color;
   disabled: boolean;
   onClick: EventHandler;
};
export type TModal = {
   open: boolean;
   onClose: Getter<boolean>;
   title: string;
};
export type TList = {
   items: TItemBox[];
};
export type TItemBox = {
   label: string;
   image: string;
   event: Getter<void>;
};
