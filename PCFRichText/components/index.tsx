import * as React from 'react';
import EditorProvider from '../context/EditorProvider';
import TextEditor from "./Editor";

export default function PCFEditor() {
    return (
        <EditorProvider><TextEditor /></EditorProvider>
    )
}
