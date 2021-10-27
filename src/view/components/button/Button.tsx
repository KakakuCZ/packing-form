interface Props {
    onClick: (e: React.MouseEvent) => void;
    children: React.ReactNode;
}

export const Button: React.FunctionComponent<Props> = (
    props
) => {
    return <button
        onClick={(e) => {
            e.preventDefault();
            props.onClick(e);
        }}
    >
        {props.children}
    </button>
}
