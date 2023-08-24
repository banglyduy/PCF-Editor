import { CommandBarButton, DirectionalHint, Spinner, SpinnerSize, TooltipHost } from "@fluentui/react";
import * as React from 'react';
import { IMenuItemProps } from "../../Models";
import { useEditorContext } from "../../context/EditorProvider";

const onRenderItemStyles = {
    root: { padding: '10px' },
};

const MenuItem: React.FC<IMenuItemProps> = (item: IMenuItemProps) => {
    let EditorContext = useEditorContext();
    return EditorContext?.editor ?
        <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
            {item.onRender ? item.onRender(item) :
                <CommandBarButton
                    className={item.className}
                    aria-label={item.text}
                    text={item.iconOnly ? undefined : item.text}
                    styles={onRenderItemStyles}
                    iconProps={item.iconProps}
                    onClick={() => {
                        if (item.onClick && EditorContext?.editor) item.onClick(EditorContext?.editor);
                    }}
                    menuProps={item.menuProps ? item.menuProps : undefined}
                    menuAs={item.menuAs}
                    checked={item.activeCheck ? EditorContext?.editor.isActive(item.activeCheck) : undefined}
                />}
        </TooltipHost> : <Spinner size={SpinnerSize.small} />

};

export default MenuItem;
