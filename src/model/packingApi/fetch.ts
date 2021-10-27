import {config} from "../../config";
import {ApiContainer} from "./request/ApiContainer";
import {ApiItem} from "./request/ApiItem";
import {ApiResponse} from "./response/ApiResponse";

interface ApiData {
    username: string;
    api_key: string;
    bins: ApiContainer[];
    items: ApiItem[];
    params: {
        images_sbs: 1 | 0;
        images_complete: 1 | 0;
        images_separated: 1 | 0;
        images_format: "png" | "svg";
        images_width: number;
        images_height: number;
        images_source: "file";
        stats: 1 | 0;
    }
}

export const fetchPackingApi = async (
    bins: ApiContainer[],
    items: ApiItem[]
): Promise<ApiResponse> => {
    const data: ApiData = {
        username: config.packingApi.username,
        api_key: config.packingApi.apiKey,
        bins,
        items,
        params: {
            images_complete: 1,
            images_sbs: 1,
            images_separated: 1,
            images_format: "png",
            images_width: 100,
            images_height: 100,
            images_source: "file",
            stats: 1,
        }
    };

    const response = await fetch(
        config.packingApi.url,
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    )

    return response.json();
}
