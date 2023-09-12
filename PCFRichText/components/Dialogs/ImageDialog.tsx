import { DefaultButton, Dialog, DialogFooter, DialogType, IModalProps, Position, PrimaryButton, SpinButton, Stack, TextField } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import * as React from 'react';

export interface IImageDialogProps {
    hideDialog: boolean;
    toggleDialog: () => void;
    onInsert: (ImageUrl: string) => void
}

const TableDialog = (props: IImageDialogProps) => {

    const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');

    const [firstTextFieldValue, setFirstTextFieldValue] = React.useState('');
    const onChangeFirstTextFieldValue = React.useCallback(
        (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setFirstTextFieldValue(newValue || '');
        },
        []);

    const modalProps: IModalProps = React.useMemo(
        () => ({
            titleAriaId: labelId,
            subtitleAriaId: subTextId,
            isBlocking: false,
        }),
        [isDraggable, labelId, subTextId],
    );

    const dialogContentProps = {
        type: DialogType.normal,
        title: 'Select Image Url'
    };

    return (
        <Dialog
            hidden={props.hideDialog}
            onDismiss={props.toggleDialog}
            dialogContentProps={dialogContentProps}
            modalProps={modalProps}
        >
            <Stack>
                <TextField label="Image Url"
                    value={firstTextFieldValue}
                    onChange={onChangeFirstTextFieldValue}
                />
            </Stack>

            <DialogFooter>
                <PrimaryButton onClick={() => props.onInsert(firstTextFieldValue)} text="Insert Image" />
                <DefaultButton onClick={props.toggleDialog} text="Cancel" />
            </DialogFooter>
        </Dialog>
    )
}

export default TableDialog;