import { Editor } from "@tiptap/core";
import { IMenuItemProps } from "./IMenuItemProps";

export interface IFeatures {
    toolbarItems: (editor: Editor) => IMenuItemProps[];
    extensions?: any;
}