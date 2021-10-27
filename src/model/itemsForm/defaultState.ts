import {ItemsFormRow, ItemsFormState} from "./ItemsForm";

export const itemsFormDefaultRowState: ItemsFormRow = {
    id: "Item1",
    width: "",
    depth: "",
    height: "",
    quantity: "",
    weight: "",
}

export const itemsFormDefaultState: ItemsFormState = {
    rows: [
        itemsFormDefaultRowState
    ]
};
