import {ContainersFormState} from "./ContainersForm";
import {ApiContainer} from "../packingApi/request/ApiContainer";

export const convertToApiContainer = (
    formState: ContainersFormState
): ApiContainer[] => {
    return formState.rows.map((row) => {
        return {
            id: row.id,
            w: parseInt(row.width),
            h: parseInt(row.height),
            d: parseInt(row.depth),
            max_wg: parseInt(row.maxWeight),
        }
    })
}
