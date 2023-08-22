import { Editor } from "@tiptap/core";
import {
    IContextualMenuItem,
    IContextualMenuItemProps,
    ContextualMenuItem,
    IContextualMenuItemStyles,
    IContextualMenuStyles
} from '@fluentui/react/lib/ContextualMenu';
import * as React from 'react';
import { ICommandBarItemProps } from "@fluentui/react";

const itemStyles: Partial<IContextualMenuItemStyles> = {
    label: { fontSize: 18 }
};

const menuStyles: Partial<IContextualMenuStyles> = {
    subComponentStyles: { menuItem: itemStyles, callout: {} },
};

const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
    // Due to ContextualMenu implementation quirks, passing styles or onClick here doesn't work.
    // The onClick handler must be on the ICommandBarItemProps item instead (_overflowItems in this example).
    return <ContextualMenuItem {...props} />;
};

const _styleItems = (editor: Editor): IContextualMenuItem[] => {
    return [
        { key: 'paragraph', text: 'Paragraph', onClick: () => editor.chain().focus().setParagraph().run() },
        { key: 'Heading1', text: 'Heading 1', onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
        { key: 'Heading2', text: 'Heading 2', onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
        { key: 'Heading3', text: 'Heading 3', onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
        { key: 'Heading4', text: 'Heading 4', onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run() },
        { key: 'Heading5', text: 'Heading 5', onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run() },
        { key: 'Heading6', text: 'Heading 6', onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run() },
    ]
}

const textRole = (editor: Editor) =>{
    if(editor.isActive('heading', { level: 1 })) return 'Heading 1';
    if(editor.isActive('heading', { level: 2 })) return 'Heading 2';
    if(editor.isActive('heading', { level: 3 })) return 'Heading 3';
    if(editor.isActive('heading', { level: 4 })) return 'Heading 4';
    if(editor.isActive('heading', { level: 5 })) return 'Heading 5';
    if(editor.isActive('heading', { level: 6 })) return 'Heading 6';
    return 'Paragraph';
}

const FormattingToolbarItem = (editor: Editor): ICommandBarItemProps[] => {
    return [{
        key: 'textRole',
        text: textRole(editor),
        subMenuProps: {
            // Must specify the menu item type for submenus too!
            contextualMenuItemAs: CustomMenuItem,
            // Styles are passed through to menu items here
            styles: menuStyles,
            items: _styleItems(editor),
        }
    }];
}

export const TextRoleFormatting = {
    toolbarItems: FormattingToolbarItem
}