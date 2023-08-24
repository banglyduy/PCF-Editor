import { useState } from "react";

export function useTextColor() {
    const [value, setValue] = useState("#ffffff");

    function handleChange(newColor: string) {
        setValue(newColor);
    }

    const inputProps = {
        value: value,
        onChange: handleChange
    };

    return inputProps;
}