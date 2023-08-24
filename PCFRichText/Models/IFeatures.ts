import { Editor } from "@tiptap/core";
import { IMenuItemProps } from "./IMenuItemProps";

export interface IFeatures {
    toolbarItems: IMenuItemProps[];
    getToolbarItems?: (editor?: Editor) => IMenuItemProps[];
    extensions?: any;
}