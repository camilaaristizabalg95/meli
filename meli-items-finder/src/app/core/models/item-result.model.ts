import { ItemSummaryModel } from './item-summary.model';
import { SignatureModel } from './signature.model';
import { BreadcrumbModel } from './breadcrumb.model';

export interface ItemResultModel extends SignatureModel{
    categories: BreadcrumbModel[],
    items: ItemSummaryModel[]
}
