export interface ApiResponse {
    response: {
        bins_packed: {
            bin_data: {
                w: number;
                h: number;
                d: number;
                id: string;
                used_space: number;
                used_weight: number;
            };
            items: {
                d: number;
                h: number;
                id: string;
                w: number;
                wg: number;
            }[];
            not_packed_items: {
                id: string;
                q: number;
            }[];
            image_complete: string;
        }[]
    }
}
