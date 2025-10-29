import type React from "react";

export type ModalStyle =
| "base"
| "glass"
| "dark"
| "gray"
| "red"
| "orange"
| "amber"
| "yellow"
| "green"
| "blue"
| "violet";


export type ModalProps = {
open: boolean;
onClose: () => void;
title?: string;
closeOnBackdrop?: boolean;
labelledBy?: string;
children: React.ReactNode;
blur?: boolean; 
style?: ModalStyle; 
};