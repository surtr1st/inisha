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
