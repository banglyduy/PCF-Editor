import { BaseButton, IComponentAs, IContextualMenuProps, IIconProps, IOverflowSetItemProps } from "@fluentui/react";

export interface IMenuItemProps extends IOverflowSetItemProps {
    text?: string;
    className?: string;
    iconOnly?: boolean;
    iconProps?: IIconProps;
    isSplit?: boolean;
    onClick?: () => void;
    menuProps?: IContextualMenuProps;
}