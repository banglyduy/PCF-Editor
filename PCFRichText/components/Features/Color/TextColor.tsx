import { Editor } from "@tiptap/core";
import {
    IContextualMenuItem
} from '@fluentui/react/lib/ContextualMenu';
import * as React from 'react';
import { Color } from '@tiptap/extension-color';
import { IFeatures, IMenuItemProps } from "../../../Models";
import { ActionButton, FocusZoneDirection, HighContrastSelector, IButtonStyles, IconButton, mergeStyleSets } from "@fluentui/react";

const colors = ["BFEDD2",
    "FBEEB8",
    "F8CAC6",
    "ECCAFA",
    "C2E0F4",
    "2DC26B",
    "F1C40F",
    "E03E2D",
    "B96AD9",
    "3598DB",
    "169179",
    "E67E23",
    "BA372A",
    "843FA1",
    "236FA1",
    "ECF0F1",
    "CED4D9",
    "95A5A6",
    "7E8C8D",
    "34495E",
    "000000"]

const ColorButton = (item: IMenuItemProps,editor: Editor) => {
    let menuitems: any[] = [];
    colors.map((color) => menuitems.push({
        key: color, text: `#${color}`,
        className: classNames.item,
        onRender: (item: IContextualMenuItem, dismissMenu: () => void) => (
            <ActionButton
                className="ms-ContextualMenu-link"
                data-is-focusable
                onClick={() => {
                    editor.chain().focus().setColor(`#${color}`).run();
                    dismissMenu();
                }}
            >
                <svg className={classNames.svgbutton} role="img" aria-label="orange" viewBox={"0 0 20 20"} fill={item.text} focusable="false"><rect width={"100%"} height={"100%"}></rect></svg>
            </ActionButton>)
    }));

    return <IconButton
        split
        iconProps={{ iconName: "FontColorA" }}
        styles={customSplitButtonStyles}
        menuProps={{
            className: classNames.menu,
            focusZoneProps: { direction: FocusZoneDirection.bidirectional },
            items: menuitems
        }}
        ariaLabel="Text Color"
        onClick={() => editor.chain().focus().unsetColor().run()}
    />
};

const FormattingToolbarItem = (editor: Editor): IMenuItemProps[] => {
    return [{
        key: 'textColor',
        text: 'textColor',
        iconOnly: true,
        iconProps: { iconName: 'FontColor' },
        onRender: (props: IMenuItemProps) => ColorButton(props,editor)
    }];
}

const customSplitButtonStyles: IButtonStyles = {
    root: {
        selectors: {
            ['ms-Button-flexContainer']: {borderBottom: '0.2rem solid #ffffff'}
        }
    },
    splitButtonMenuButton: { backgroundColor: 'white', width: 28, border: 'none' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonFlexContainer: {borderBottom: '0.2rem solid #ffffff'},
    splitButtonDivider: { backgroundColor: '#c8c8c8', width: 1, right: 26, position: 'absolute', top: 4, bottom: 4 },
    splitButtonContainer: {
        selectors: {
            [HighContrastSelector]: { border: 'none' },
        },
    },
};

const classNames = mergeStyleSets({
    menu: {
        maxWidth: 160,
        minWidth: 160,
        selectors: {
            '.ms-ContextualMenu-item': {
                height: 'auto',
            },
        },
    },
    svgbutton: {
        width: "100%",
        height: "100%"
    },
    item: {
        display: 'inline-block',
        width: 40,
        height: 40,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer'
    }
});

export const TextColor: IFeatures = {
    toolbarItems: FormattingToolbarItem,
    extensions: Color
}