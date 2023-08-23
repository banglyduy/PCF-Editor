import { CommandBarButton, DirectionalHint, IOverflowSetItemProps, TooltipHost } from "@fluentui/react";
import * as React from 'react';
import { IMenuItemProps } from "../../Models";

const onRenderItemStyles = {
    root: { padding: '10px' },
};

const MenuItem = (item: IMenuItemProps) => {

    return item.onRender ? item.onRender(item) :
        <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
            <CommandBarButton
                className={item.className}
                aria-label={item.text}
                text={item.iconOnly ? undefined : item.text}
                styles={onRenderItemStyles}
                iconProps={item.iconProps}
                onClick={item.onClick}
                menuProps={item.menuProps ? item.menuProps : undefined}
                menuAs={item.menuAs}
            />
        </TooltipHost>
};

export default MenuItem;
