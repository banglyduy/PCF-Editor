import StarterKit from "@tiptap/starter-kit";
import { TextAlignFeature } from "./TextAlign/TextAlign";
import { Editor } from "@tiptap/core";
import { IMenuItemProps } from "../../Models";
import { TextColor } from "./TextColor/TextColor";
import { TextRoleFormatting } from "./Formatting/TextRole";
import { TableFormatting } from "./Table/Table";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import { ImageFeature } from "./Images/Image";

export * from "./TextAlign/TextAlign";
export * from "./Formatting/TextRole";
export * from "./TextColor/TextColor";
export * from "./Table/Table";

export function getMenuItems(): IMenuItemProps[] {
    let result: IMenuItemProps[] = [
        ...TextColor.toolbarItems,
        ...TextAlignFeature.toolbarItems,
        ...TextRoleFormatting.toolbarItems,
        ...TableFormatting.toolbarItems,
        ...ImageFeature.toolbarItems,
        {
            key: 'bold',
            text: 'Bold',
            iconOnly: true,
            iconProps: { iconName: 'Bold' },
            onClick: (editor: Editor) => editor.chain().focus().toggleBold().run(),
            activeCheck: 'bold'
        },
        {
            key: 'italic',
            text: 'Italic',
            iconOnly: true,
            iconProps: { iconName: 'Italic' },
            onClick: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
            activeCheck: 'italic'
        },
        {
            key: 'strike',
            text: 'Strikethrough',
            iconOnly: true,
            iconProps: { iconName: 'Strikethrough' },
            onClick: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
            activeCheck: 'strike'
        },
        {
            key: 'bulletedlist',
            text: 'Bulleted List',
            iconOnly: true,
            iconProps: { iconName: 'BulletedList' },
            onClick: (editor: Editor) => editor.chain().focus().toggleBulletList().run(),
            activeCheck: 'bulletList'
        },
        {
            key: 'numberedlist',
            text: 'NumberedList',
            iconOnly: true,
            iconProps: { iconName: 'NumberedList' },
            onClick: (editor: Editor) => editor.chain().focus().toggleOrderedList().run(),
            activeCheck: 'orderedList'
        },
        {
            key: 'blockquote',
            text: 'Blockquote',
            iconOnly: true,
            iconProps: { iconName: 'RightDoubleQuote' },
            onClick: (editor: Editor) => editor.chain().focus().toggleBlockquote().run(),
            activeCheck: 'blockquote'
        }
    ]
    return result;
}

export const extensions = [
    StarterKit,
    ...TextAlignFeature.extensions,
    Color,
    TextStyle,
    ...ImageFeature.extensions,
    Table.configure({
        resizable: true,
        allowTableNodeSelection: true,
    }),
    TableRow,
    TableHeader,
    TableCell
]