import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import * as React from 'react';
import { createContext, useContext } from "react";
import { TextAlignFeature, TextColor } from '../components/Features';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style'

const extensions = [
  StarterKit,
  TextAlignFeature.extensions,
  Color,
  TextStyle
]


export type EditorContextType = {
  editor: Editor;
  activeColor: string;
  setColor: any;
};

const EditorContext = createContext<EditorContextType>({});
const content = '<p>Hello World!</p>'

const EditorProvider: React.FC = ({ children }) => {
  const [activeColor, setColor] = React.useState("#ffffff");
  const [editor, setEditor] = React.useState(new Editor({
    extensions,
    content
  }));

  return (
    <EditorContext.Provider value={{ editor, activeColor, setColor }}>
      {children}
    </EditorContext.Provider>
  );
};


export const useEditorContext = () => useContext(EditorContext);

export default EditorProvider;