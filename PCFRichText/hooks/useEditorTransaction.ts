import { useEffect } from 'react';
import { useEditorContext } from '../context/EditorProvider';
import { Editor, EditorEvents } from '@tiptap/core';
import { Transaction } from '@tiptap/pm/state';


export default function useEditorTransaction(onTransaction: (editor: Editor,transaction: Transaction) => void) {
    const editorCtx = useEditorContext();
    useEffect(() => {
        if(editorCtx){
            editorCtx.editor.on('transaction', (data)=> {
                onTransaction(data.editor,data.transaction);
            });
        }
    }, []);
}


