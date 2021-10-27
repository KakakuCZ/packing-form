import {ApiResponse} from "../packingApi/response/ApiResponse";
import {ContainersViewData} from "./ContainersView";

export const convertResponsePayloadToViewData = (response: ApiResponse): ContainersViewData[] => {
    return response.response.bins_packed.map((bin): ContainersViewData => {
        return {
            container: {
                id: bin.bin_data.id,
                width: bin.bin_data.w,
                height: bin.bin_data.h,
                depth: bin.bin_data.d,
                filledImageUrl: bin.image_complete,
            },
            stats: {
                packagedItems: bin.items.length,
                spaceTakenPercentage: bin.bin_data.used_space,
                weightTakenPercentage: bin.bin_data.used_weight,
            }
        }
    })
};
