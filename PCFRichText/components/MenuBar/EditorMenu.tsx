import { CommandBarButton} from '@fluentui/react/lib/Button';
import * as React from 'react';
import { Editor } from '@tiptap/core';
import { DirectionalHint, OverflowSet, TooltipHost } from '@fluentui/react';
import MenuItem from './MenuItem';
import { useEditorTransaction } from '../../hooks';
import { getMenuItems } from '../Features';
import { IMenuItemProps } from '../../Models';

export const EditorCommandBar = () => {
  const [barItems, setbarItems] = React.useState<IMenuItemProps[]>(getMenuItems());
  useEditorTransaction(() => {
    setbarItems(getMenuItems());
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


