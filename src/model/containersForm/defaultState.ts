import {ContainersFormRow, ContainersFormState} from "./ContainersForm";

const containersFormDefaultRowState: ContainersFormRow = {
    id: "Container1",
    width: "",
    depth: "",
    height: "",
    maxWeight: "",
}

export const containersFormDefaultState: ContainersFormState = {
    rows: [
        containersFormDefaultRowState
    ]
};


