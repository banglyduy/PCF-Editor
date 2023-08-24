import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from '@fluentui/react/lib/Button';
import * as React from 'react';
import { Editor } from '@tiptap/core';
//import { TextRoleFormatting } from "../Features/Formatting/TextRole";
import { DirectionalHint, OverflowSet, TooltipHost } from '@fluentui/react';
import MenuItem from './MenuItem';
import { useEditorTransaction } from '../../hooks';
import { useEditorContext } from '../../context/EditorProvider';
import { TextAlignFeature, TextColor, TextRoleFormatting, TableFormatting } from '../Features';
import { IMenuItemProps } from '../../Models';

export const EditorCommandBar = () => {
  const [barItems, setbarItems] = React.useState<IMenuItemProps[]>([]);
  React.useLayoutEffect(() => {
    setbarItems(_items());
  }, []);
  useEditorTransaction(() => {
    setbarItems(_items());
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

function _items(): IMenuItemProps[] {
  let result: IMenuItemProps[] = [
    ...TextColor.toolbarItems,
    ...TextAlignFeature.toolbarItems,
    ...TextRoleFormatting.toolbarItems,
    ...TableFormatting.toolbarItems,
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

