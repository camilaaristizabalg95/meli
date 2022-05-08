import { SignatureModel } from './signature.model'
import { BreadcrumbModel } from './breadcrumb.model';

export interface ItemSummaryModel{
    id: string;
    title: string;
    price: PriceModel;
    city: string;
    picture: string;
    free_shipping: boolean;
    condition: string;
    sold_quantity?: number;
    description?: string;
    categories: BreadcrumbModel[];
}

export interface ItemModel extends SignatureModel{
    item: ItemSummaryModel
}

export interface PriceModel{
    currency: string, 
    amount: number, 
    decimals: number
}
