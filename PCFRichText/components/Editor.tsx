import { Editor } from '@tiptap/core'
import * as React from 'react';
import { EditorCommandBar } from './MenuBar/EditorMenu';
import { useEditorCreate } from '../hooks';

// define your extension array
const TextEditor = () => {
    const htmlcontainer = React.useRef<HTMLHeadingElement>(null);
    useEditorCreate((editor) => htmlcontainer.current?.append(editor.options.element))

    return (
        <div className={'Editor-Container'}>
            <EditorCommandBar />
            <div ref={htmlcontainer} className={"Editor"}></div>
        </div>

    )
}

export default TextEditor;