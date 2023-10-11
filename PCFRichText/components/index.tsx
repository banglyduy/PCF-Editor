import * as React from 'react';
import EditorProvider from '../context/EditorProvider';
import TextEditor from "./Editor";
import { IEditorConfig } from '../Models';

interface EditorProps{
    config: IEditorConfig
}

export default function PCFEditor(props: EditorProps) {
    return (
        <EditorProvider config={props.config}>
            <TextEditor />
        </EditorProvider>
    )
}
