import { IEditorConfig } from "../Models";
import { IInputs } from "../generated/ManifestTypes";

export default function getEditorConfig(input: ComponentFramework.Context<IInputs>, notifyChanges: (content: string) => void): IEditorConfig {
    return {
        content: input.parameters.editorContent.raw || "",
        isEditable: input.parameters.isEditable.raw,
        notifyChanges
    }
}