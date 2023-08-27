import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit';
import * as React from 'react';
import { EditorCommandBar } from './MenuBar/EditorMenu';
import TextAlign from '@tiptap/extension-text-align';
import { TextAlignFeature } from './Features';
import { useEditorContext } from '../context/EditorProvider';
import { useEditorCreate } from '../hooks';

// define your extension array




const TextEditor = () => {
    const htmlcontainer = React.useRef<HTMLHeadingElement>(null);
    useEditorCreate((editor) => htmlcontainer.current?.append(editor.options.element))

    return (
        <>
            <EditorCommandBar />
            <div ref={htmlcontainer} className={"Editor"}></div>
        </>

    )
}

export default TextEditor;