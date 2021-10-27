export interface ContainersViewData {
    container: {
        id: string;
        width: number;
        height: number;
        depth: number;
        filledImageUrl: string;
    },
    stats: {
        packagedItems: number;
        spaceTakenPercentage: number;
        weightTakenPercentage: number;
    }
};
