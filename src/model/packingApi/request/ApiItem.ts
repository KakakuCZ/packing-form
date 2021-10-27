export interface ApiItem {
    id: string;
    w: number
    h: number;
    d: number;
    wg: number;
    vr: 1 | 0;
    q: number;
    item_colors_schema: "default";
    item_fill_color?: string;
    item_border_color?: string;
}
