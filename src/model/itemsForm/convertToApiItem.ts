import {ItemsFormState} from "./ItemsForm";
import {ApiItem} from "../packingApi/request/ApiItem";

export const convertItemsFormStateToApiItems = (
    formState: ItemsFormState
): ApiItem[] => {
    return formState.rows.map((row) => {
        return {
            id: row.id,
            w: parseInt(row.width),
            h: parseInt(row.height),
            d: parseInt(row.depth),
            wg: parseInt(row.weight),
            vr: 1, //TODO
            q: parseInt(row.quantity),
            item_colors_schema: "default",
        }
    })
}
