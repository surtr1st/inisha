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
export type TSwitch = {
   title: string;
   value: string;
   modelValue: string;
   checked: boolean;
   onMark: EventHandler;
};
export type TChip = {
   label: string;
   onClose: Getter<void>;
};
export type TAssignments = {
   items: string[];
};
export type TProject = {
   name: string;
};
export type TInput = {
   name: string;
   modelValue: string;
   placeholder: string;
};
export type TIntegration = {
   alias: string;
   value: string;
   included: boolean;
};
