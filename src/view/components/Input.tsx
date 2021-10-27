import * as React from "react";

interface Props {
    type: "number" | "text";
    value: string | number;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<Props> = (props) => {
    return <input
        type={props.type}
        value={props.value}
        required={!!props.required}
        onChange={props.onChange}
    />
}

