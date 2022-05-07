import { ItemSummaryModel } from './item-summary.model';
import { SignatureModel } from './signature.model';

export interface ItemResultModel extends SignatureModel{
    categories: string[],
    items: ItemSummaryModel[]
}
