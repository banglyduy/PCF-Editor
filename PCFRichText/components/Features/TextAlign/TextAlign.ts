import { ICommandBarItemProps } from "@fluentui/react";
import { Editor } from "@tiptap/core";
import TextAlign from "@tiptap/extension-text-align";

const TextAlignItems = (editor: Editor): ICommandBarItemProps[] => {
    return [
        {
            key: 'alignleft',
            text: 'Align Left',
            iconOnly: true,
            iconProps: { iconName: 'AlignLeft' },
            onClick: () => editor.chain().focus().setTextAlign('left').run(),
            className: editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
          },
          {
            key: 'aligncenter',
            text: 'Align Center',
            iconOnly: true,
            iconProps: { iconName: 'AlignCenter' },
            onClick: () => editor.chain().focus().setTextAlign('center').run(),
            className: editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          },
          {
            key: 'alignright',
            text: 'Align Right',
            iconOnly: true,
            iconProps: { iconName: 'AlignRight' },
            onClick: () => editor.chain().focus().setTextAlign('right').run(),
            className: editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
          },
          {
            key: 'alignjustify',
            text: 'Align Justify',
            iconOnly: true,
            iconProps: { iconName: 'AlignJustify' },
            onClick: () => editor.chain().focus().setTextAlign('justify').run(),
            className: editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          }
    ]
}

export const TextAlignFeature = {
    toolbarItems: TextAlignItems,
    extensions: TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'left'
    })
}