import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import * as React from 'react';
import { createContext, useContext } from "react";
import { TextAlignFeature } from '../components/Features';

const extensions = [
  StarterKit,
  TextAlignFeature.extensions
]


export type EditorContextType = {
  editor: Editor;
};

const EditorContext = createContext<EditorContextType | null>(null);
const content = '<p>Hello World!</p>'

const EditorProvider: React.FC = ({ children }) => {
  const [editor, setEditor] = React.useState(new Editor({
    extensions,
    content
  }));

  return (
    <EditorContext.Provider value={{editor}}>
      {children}
    </EditorContext.Provider>
  );
};


export const useEditorContext = () => useContext(EditorContext);

export default EditorProvider;