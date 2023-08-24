import { BaseButton, IComponentAs, IContextualMenuProps, IIconProps, IOverflowSetItemProps } from "@fluentui/react";
import { Editor } from "@tiptap/core";
import { JSX } from 'react';
export interface IMenuItemProps extends IOverflowSetItemProps {
    text?: string;
    className?: string;
    iconOnly?: boolean;
    iconProps?: IIconProps;
    isSplit?: boolean;
    onClick?: (editor: Editor) => void;
    menuProps?: IContextualMenuProps;
    activeCheck?: string | {};
    onRender?: (item: IMenuItemProps) => JSX.Element;
}