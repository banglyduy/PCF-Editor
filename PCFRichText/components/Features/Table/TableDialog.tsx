import { DefaultButton, Dialog, DialogFooter, DialogType, IModalProps, PrimaryButton, SpinButton, Stack } from '@fluentui/react';
import { useBoolean, useId} from '@fluentui/react-hooks';
import * as React from 'react';

export interface ITableDialogProps{
    hideDialog: boolean;
    toggleDialog: () => void;
    onCreate: (row: number, column: number) => void
}

const TableDialog = (props: ITableDialogProps) => {

    const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
    const labelId: string = useId('dialogLabel');
    const subTextId: string = useId('subTextLabel');

    const [rowNo, setRowVal] = React.useState(0);
    const [colNo, setColVal] = React.useState(0);

    const onRowChange = React.useCallback((event: React.SyntheticEvent<HTMLElement>, newValue?: string) => {
      if (newValue !== undefined) {
        // In reality this might have some additional validation or other special handling
        setRowVal(Number(newValue));
      }
    }, []);

    const onColChange = React.useCallback((event: React.SyntheticEvent<HTMLElement>, newValue?: string) => {
      if (newValue !== undefined) {
        // In reality this might have some additional validation or other special handling
        setColVal(Number(newValue));
      }
    }, []);

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
        title: 'Add Table',
        subText: 'Choose table size before add',
    };  

    return (
        <Dialog
            hidden={props.hideDialog}
            onDismiss={props.toggleDialog}
            dialogContentProps={dialogContentProps}
            modalProps={modalProps}
        >
            <Stack>
                <SpinButton
                    label="Table Row"
                    defaultValue='0'
                    value={`${rowNo}`}
                    min={0}
                    max={20}
                    step={1}
                    onChange={onRowChange}
                    incrementButtonAriaLabel="Increase value by 1"
                    decrementButtonAriaLabel="Decrease value by 1"
                />
                <SpinButton
                    label="Table Column"
                    defaultValue='0'
                    value={`${colNo}`}
                    min={0}
                    max={20}
                    step={1}
                    onChange={onColChange}
                    incrementButtonAriaLabel="Increase value by 1"
                    decrementButtonAriaLabel="Decrease value by 1"
                />
            </Stack>

            <DialogFooter>
                <PrimaryButton onClick={() => props.onCreate(colNo,rowNo)} text="Create" />
                <DefaultButton onClick={props.toggleDialog} text="Cancel" />
            </DialogFooter>
        </Dialog>
    )
}

export default TableDialog;