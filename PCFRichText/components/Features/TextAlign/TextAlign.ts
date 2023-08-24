import { IMenuItemProps } from './../../../Models/IMenuItemProps';
import { ICommandBarItemProps } from "@fluentui/react";
import { Editor } from "@tiptap/core";
import TextAlign from "@tiptap/extension-text-align";
import { IFeatures } from "../../../Models";

const TextAlignItems: IMenuItemProps[] = [
  {
    key: 'alignleft',
    text: 'Align Left',
    iconOnly: true,
    iconProps: { iconName: 'AlignLeft' },
    onClick: (editor: Editor) => editor.chain().focus().setTextAlign('left').run(),
    activeCheck: { textAlign: 'left' }
  },
  {
    key: 'aligncenter',
    text: 'Align Center',
    iconOnly: true,
    iconProps: { iconName: 'AlignCenter' },
    onClick: (editor: Editor) => editor.chain().focus().setTextAlign('center').run(),
    activeCheck: { textAlign: 'center' }
  },
  {
    key: 'alignright',
    text: 'Align Right',
    iconOnly: true,
    iconProps: { iconName: 'AlignRight' },
    onClick: (editor: Editor) => editor.chain().focus().setTextAlign('right').run(),
    activeCheck: { textAlign: 'right' }
  },
  {
    key: 'alignjustify',
    text: 'Align Justify',
    iconOnly: true,
    iconProps: { iconName: 'AlignJustify' },
    onClick: (editor: Editor) => editor.chain().focus().setTextAlign('justify').run(),
    activeCheck: { textAlign: 'justify' }
  }
];

export const TextAlignFeature: IFeatures = {
  toolbarItems: TextAlignItems,
  extensions: TextAlign.configure({
    types: ['heading', 'paragraph'],
    alignments: ['left', 'center', 'right', 'justify'],
    defaultAlignment: 'left'
  })
}