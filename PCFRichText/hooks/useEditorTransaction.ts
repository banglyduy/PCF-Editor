import { useEffect, useLayoutEffect } from 'react';
import { useEditorContext } from '../context/EditorProvider';
import { Editor, EditorEvents } from '@tiptap/core';
import { Transaction } from '@tiptap/pm/state';


export function useEditorTransaction(
    onTransaction: (editor: Editor,transaction: Transaction) => void) {
    const editorCtx = useEditorContext();
    useLayoutEffect(() => {
        editorCtx?.editor.on('transaction', (data)=> {
            onTransaction(data.editor,data.transaction);
        });
    }, []);
}

export function useEditorCreate(
    onCreate: (editor: Editor) => void) {
    const editorCtx = useEditorContext();
    useLayoutEffect(() => {
        editorCtx?.editor.on('create', (data)=> {
            onCreate(data.editor);
        });
    }, []);
}


