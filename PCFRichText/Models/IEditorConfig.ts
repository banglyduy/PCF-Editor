export interface IEditorConfig {
    content: string,
    isEditable: boolean,
    notifyChanges: (content: string) => void
}