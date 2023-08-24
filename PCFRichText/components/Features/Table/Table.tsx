import { Editor } from "@tiptap/core";
import {
    IContextualMenuItem,
    IContextualMenuItemProps,
    ContextualMenuItem,
    IContextualMenuItemStyles,
    IContextualMenuStyles
} from '@fluentui/react/lib/ContextualMenu';
import * as React from 'react';
import { CommandBarButton, DefaultButton, Dialog, DialogFooter, DialogType, HighContrastSelector, IButtonStyles, ICommandBarItemProps, IconButton, PrimaryButton } from "@fluentui/react";
import { IFeatures, IMenuItemProps } from "../../../Models";
import { useEditorContext } from "../../../context/EditorProvider";
const onRenderItemStyles = {
    root: { padding: '10px' },
};

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

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Add Table',
    subText: 'Choose table size before add',
};

const modelProps = {
    isBlocking: true,
    styles: { main: { maxWidth: 450 } },
};

const TextButton = (item: IMenuItemProps) => {
    let EditorCtx = useEditorContext();
    let [hideDialog, setHide] = React.useState(false);

    const _styleItems = (): IContextualMenuItem[] => {
        if (EditorCtx?.editor) {
            let editor = EditorCtx?.editor;
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
        return [];
    }

    return <>
        <IconButton
            split
            aria-label={item.text}
            iconProps={item.iconProps}
            styles={customSplitButtonStyles}
            menuProps={{
                contextualMenuItemAs: CustomMenuItem,
                styles: menuStyles,
                items: _styleItems()
            }}
            onClick={() => setHide(true)}
        />
        <Dialog
            hidden={hideDialog}
            onDismiss={() => setHide(false)}
            dialogContentProps={dialogContentProps}
            modalProps={modelProps}
        >
            <DialogFooter>
                <PrimaryButton onClick={() => setHide(false)} text="Add" />
                <DefaultButton onClick={() => setHide(false)} text="Cancel" />
            </DialogFooter>
        </Dialog>
    </>
};

const customSplitButtonStyles: IButtonStyles = {
    root: {
        selectors: {
            ['ms-Button-flexContainer']: { borderBottom: '0.2rem solid #ffffff' }
        }
    },
    splitButtonMenuButton: { backgroundColor: 'white', width: 28, border: 'none' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonFlexContainer: { borderBottom: '0.2rem solid #ffffff' },
    splitButtonDivider: { backgroundColor: '#c8c8c8', width: 1, right: 26, position: 'absolute', top: 4, bottom: 4 },
    splitButtonContainer: {
        selectors: {
            [HighContrastSelector]: { border: 'none' },
        },
    },
};

const FormattingToolbarItem: IMenuItemProps[] = [{
    key: 'table',
    text: 'table',
    iconOnly: true,
    iconProps: { iconName: 'Table' },
    onRender: TextButton
}];


export const TableFormatting: IFeatures = {
    toolbarItems: FormattingToolbarItem
}