import { HighContrastSelector, IButtonStyles, IContextualMenuItemStyles, IContextualMenuStyles, mergeStyleSets } from "@fluentui/react";

export const classNames = mergeStyleSets({
    menu: {
        textAlign: 'center',
        maxWidth: 180,
        selectors: {
            '.ms-ContextualMenu-item': {
                height: 'auto',
            },
        },
    },
    item: {
        display: 'inline-block',
        width: 40,
        height: 40,
        lineHeight: 40,
        textAlign: 'center',
        verticalAlign: 'middle',
        marginBottom: 8,
        cursor: 'pointer',
        selectors: {
            '&:hover': {
                backgroundColor: '#eaeaea',
            },
        },
    },
    categoriesList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    button: {
        width: '40%',
        margin: '2%',
    },
});

const onRenderItemStyles = {
    root: { padding: '10px' },
};

const itemStyles: Partial<IContextualMenuItemStyles> = {
    label: { fontSize: 18 }
};

export const menuStyles: Partial<IContextualMenuStyles> = {
    subComponentStyles: { menuItem: itemStyles, callout: {} },
};

export const customSplitButtonStyles: IButtonStyles = {
    root: {
        selectors: {
            ['ms-Button-flexContainer']: { borderBottom: '0.2rem solid #ffffff' }
        }
    },
    splitButtonMenuButton: { backgroundColor: 'white', width: 28, border: 'none' },
    splitButtonMenuIcon: { fontSize: '7px' },
    splitButtonFlexContainer: { borderBottom: '0.2rem solid #ffffff' },
    splitButtonDivider: { backgroundColor: '#c8c8c8', width: 1, right: 26, position: 'absolute', top: 4, bottom: 4 },
    splitButtonContainer: {
        selectors: {
            [HighContrastSelector]: { border: 'none' },
        },
    },
};
