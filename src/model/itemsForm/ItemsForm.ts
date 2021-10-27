export interface ItemsFormState {
    rows: ItemsFormRow[];
}

export interface ItemsFormRow {
    id: string;
    width: string;
    height: string;
    depth: string;
    weight: string;
    quantity: string;
}

export type ItemsFormRowKeys = keyof ItemsFormRow;
