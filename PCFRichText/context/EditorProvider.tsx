import { Editor } from '@tiptap/core';
import * as React from 'react';
import { createContext, useContext } from "react";
import { extensions } from '../components/Features';
import { IEditorConfig } from '../Models';

export type EditorContextType = {
  editor: Editor;
};

interface EditorProviderProps {
  config: IEditorConfig,
  children: React.ReactNode
}

const EditorContext = createContext<EditorContextType | null>(null);

const EditorProvider: React.FC<EditorProviderProps> = (props) => {
  const [editor, setEditor] = React.useState(new Editor({
    onBlur({ editor }) {
      props.config.notifyChanges(editor.getHTML());
    },
    extensions,
    content: props.config.content,
  }));

  React.useEffect(() => {
    editor.commands.setContent(props.config.content, false);
    editor.setEditable(props.config.isEditable);
  },
    [props.config.content, props.config.isEditable]);

  React.useEffect(() => {
    return () => {
      editor.destroy();
      console.log('******************* UNMOUNTED');
    };
  }, []);

  return (
    <EditorContext.Provider value={{ editor }}>
      {props.children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);

export default EditorProvider;