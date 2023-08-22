import { CommandBarButton, DirectionalHint, IOverflowSetItemProps, TooltipHost } from "@fluentui/react";
import * as React from 'react';

const onRenderItemStyles = {
    root: { padding: '10px' },
};

const MenuItem = (item: IOverflowSetItemProps) => {
    return (
        <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
            {item.onRender ? item.onRender(item) :
                <CommandBarButton
                    className={item.className}
                    aria-label={item.text}
                    text={item.iconOnly? undefined : item.text}
                    styles={onRenderItemStyles}
                    iconProps={item.iconProps}
                    onClick={item.onClick}
                    menuProps={item.subMenuProps ? item.subMenuProps : undefined}
                />
            }
        </TooltipHost>
    );
};

export default MenuItem;
