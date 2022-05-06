import { ItemSummaryModel } from './item-summary.model';

export interface ItemResultModel{
    author: {
        name: string;
        lastname: string;
    },
    categories: string[],
    items: ItemSummaryModel[]
}
