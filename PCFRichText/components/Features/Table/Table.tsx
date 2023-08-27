import { Editor } from "@tiptap/core";
import {
    IContextualMenuItemProps,
    ContextualMenuItem,
    DirectionalHint
} from '@fluentui/react/lib/ContextualMenu';
import * as React from 'react';
import { FocusZoneDirection, IconButton } from "@fluentui/react";
import { IFeatures, IMenuItemProps } from "../../../Models";
import { useEditorContext } from "../../../context/EditorProvider";
import { useConst } from '@fluentui/react-hooks';
import { ContextualMenuItemType, IContextualMenuProps } from '@fluentui/react/lib/ContextualMenu';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import { customSplitButtonStyles, classNames } from './Table.styles';
import { useBoolean } from '@fluentui/react-hooks'
import TableDialog from "./TableDialog";

const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
    // Due to ContextualMenu implementation quirks, passing styles or onClick here doesn't work.
    // The onClick handler must be on the ICommandBarItemProps item instead (_overflowItems in this example).
    return <ContextualMenuItem {...props} />;
};

const TextButton = (item: IMenuItemProps) => {
    let EditorCtx = useEditorContext();
    let editor = EditorCtx?.editor;
    const menuProps = useConst<IContextualMenuProps>(() => {
        return {
            shouldFocusOnMount: true,
            directionalHint: DirectionalHint.bottomLeftEdge,
            className: classNames.menu,
            items: [
                { key: 'mergecell', text: 'Merge Cells', onClick: () => editor?.chain().focus().mergeCells().run() },
                { key: 'splicell', text: 'Split Cells', onClick: () => editor?.chain().focus().splitCell().run() },
                { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
                {
                    key: 'insert',
                    text: 'Insert',
                    subMenuProps: {
                        focusZoneProps: { direction: FocusZoneDirection.bidirectional },
                        items: [
                            { key: 'addcolbefore', text: 'Add Column Before', onClick: () => editor?.chain().focus().addColumnBefore().run() },
                            { key: 'addcolafter', text: 'Add Column After', onClick: () => editor?.chain().focus().addColumnAfter().run() },
                            { key: 'addrowbefore', text: 'Add Row Before', onClick: () => editor?.chain().focus().addRowBefore().run() },
                            { key: 'addrowafter', text: 'Add Row After', onClick: () => editor?.chain().focus().addRowAfter().run() },
                        ],
                    },
                },
                {
                    key: 'delete',
                    text: 'delete',
                    subMenuProps: {
                        focusZoneProps: { direction: FocusZoneDirection.bidirectional },
                        items: [
                            { key: 'deleterow', text: 'Delete Row', onClick: () => editor?.chain().focus().deleteRow().run() },
                            { key: 'deletecolumn', text: 'Delete Column', onClick: () => editor?.chain().focus().deleteColumn().run() },
                            { key: 'deletetable', text: 'Delete Table', onClick: () => editor?.chain().focus().deleteTable().run() },
                        ],
                    },
                },
            ],
        }
    });
    const [hideDialog, { toggle: toggleDialog }] = useBoolean(true);
    return <>
        <IconButton
            split
            aria-label={item.text}
            iconProps={item.iconProps}
            styles={customSplitButtonStyles}
            menuProps={menuProps}
            onClick={toggleDialog}
        />
        <TableDialog hideDialog={hideDialog} toggleDialog={toggleDialog} onCreate={(rows, cols) => { editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run(); toggleDialog(); }} />
    </>
};



const FormattingToolbarItem: IMenuItemProps[] = [{
    key: 'table',
    text: 'table',
    iconOnly: true,
    iconProps: { iconName: 'Table' },
    onRender: TextButton
}];

export const TableFormatting: IFeatures = {
    toolbarItems: FormattingToolbarItem,
    extensions: [
        Table.configure({
            resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
    ]
}
