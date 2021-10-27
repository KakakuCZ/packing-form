export interface ContainersFormState {
    rows: ContainersFormRow[];
}

export interface ContainersFormRow {
    id: string;
    width: string;
    height: string;
    depth: string;
    maxWeight: string;
}

export type ContainersFormRowKeys = keyof ContainersFormRow;
