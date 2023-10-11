import { Editor } from "@tiptap/core";
import {
    DirectionalHint
} from '@fluentui/react/lib/ContextualMenu';
import * as React from 'react';
import { IconButton } from "@fluentui/react";
import { IFeatures, IMenuItemProps } from "../../../Models";
import { useEditorContext } from "../../../context/EditorProvider";
import { useBoolean } from '@fluentui/react-hooks'
import Image from '@tiptap/extension-image'
import ImageDialog from "../../Dialogs/ImageDialog";

const TextButton = (item: IMenuItemProps) => {
    let EditorCtx = useEditorContext();
    let editor = EditorCtx?.editor;
    const [hideDialog, { toggle: toggleDialog }] = useBoolean(true);
    return <>
        <IconButton
            aria-label={item.text}
            iconProps={item.iconProps}
            onClick={toggleDialog}
        />
        <ImageDialog hideDialog={hideDialog} toggleDialog={toggleDialog} onInsert={(url) => {
            if (url) {
                editor?.chain().focus().setImage({ src: url }).run()
            } toggleDialog();
        }} />
    </>
};



const FormattingToolbarItem: IMenuItemProps[] = [{
    key: 'image',
    text: 'image',
    iconOnly: true,
    iconProps: { iconName: 'ImageDiff' },
    onRender: TextButton
}];

export const ImageFeature: IFeatures = {
    toolbarItems: FormattingToolbarItem,
    extensions: [
        Image.configure({
            HTMLAttributes: {
                width: '100%',
                height: 'auto',
                class: 'ms-Image'
            },
            inline: true
        })
    ]
}
