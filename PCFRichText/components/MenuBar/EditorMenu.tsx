import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from '@fluentui/react/lib/Button';
import * as React from 'react';
import { Editor } from '@tiptap/core';
import { TextRoleFormatting } from "../Features/Formatting/TextRole";
import { DirectionalHint, OverflowSet, TooltipHost } from '@fluentui/react';
import MenuItem from './MenuItem';
import useEditorTransaction from '../../hooks/useEditorTransaction';
import { useEditorContext } from '../../context/EditorProvider';
import { TextAlignFeature, TextColor } from '../Features';
import { IMenuItemProps } from '../../Models';

export const EditorCommandBar = () => {
  const [barItems, setbarItems] = React.useState<IMenuItemProps[]>([]);
  const editorCtx = useEditorContext();
  React.useLayoutEffect(() => {
    if(editorCtx) setbarItems(_items(editorCtx.editor));
  },[]);
  useEditorTransaction((editor) => {
    setbarItems(_items(editor));
  })
  return (
    <OverflowSet
      items={barItems}
      overflowItems={[]}
      onRenderItem={MenuItem}
      onRenderOverflowButton={onRenderOverflowButton}
    />
  );
};



const onRenderOverflowButtonStyles = {
  root: { padding: '10px' },
  menuIcon: { fontSize: '16px' },
};


const onRenderOverflowButton = (overflowItems: any[] | undefined) => {
  return (
    <TooltipHost content="More items" directionalHint={DirectionalHint.rightCenter}>
      <CommandBarButton
        aria-label="More items"
        styles={onRenderOverflowButtonStyles}
        menuIconProps={{ iconName: 'More' }}
        menuProps={{ items: overflowItems! }}
        disabled={overflowItems?.length == 0}
      />
    </TooltipHost>
  );
};

function _items(editor: Editor): IMenuItemProps[] {
  let result: IMenuItemProps[] = [
    ...TextRoleFormatting.toolbarItems(editor),
    ...TextAlignFeature.toolbarItems(editor),
    ...TextColor.toolbarItems(editor),
    {
      key: 'bold',
      text: 'Bold',
      iconOnly: true,
      iconProps: { iconName: 'Bold' },
      onClick: () => editor.chain().focus().toggleBold().run(),
      className: editor.isActive('bold') ? 'is-active' : ''
    },
    {
      key: 'italic',
      text: 'Italic',
      iconOnly: true,
      iconProps: { iconName: 'Italic' },
      onClick: () => editor.chain().focus().toggleItalic().run(),
      className: editor.isActive('italic') ? 'is-active' : ''
    },
    {
      key: 'strike',
      text: 'Strikethrough',
      iconOnly: true,
      iconProps: { iconName: 'Strikethrough' },
      onClick: () => editor.chain().focus().toggleStrike().run(),
      className: editor.isActive('strike') ? 'is-active' : ''
    },
    {
      key: 'bulletedlist',
      text: 'Bulleted List',
      iconOnly: true,
      iconProps: { iconName: 'BulletedList' },
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      className: editor.isActive('bulletList') ? 'is-active' : ''
    },
    {
      key: 'numberedlist',
      text: 'NumberedList',
      iconOnly: true,
      iconProps: { iconName: 'NumberedList' },
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      className: editor.isActive('orderedList') ? 'is-active' : ''
    },
    {
      key: 'blockquote',
      text: 'Blockquote',
      iconOnly: true,
      iconProps: { iconName: 'RightDoubleQuote' },
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      className: editor.isActive('blockquote') ? 'is-active' : ''
    }
  ]
  return result;
}

