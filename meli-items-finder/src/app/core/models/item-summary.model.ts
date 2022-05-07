import { SignatureModel } from './signature.model'

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
    categories: string[];
}

export interface ItemModel extends SignatureModel{
    item: ItemSummaryModel
}

export interface PriceModel{
    currency: string, 
    amount: number, 
    decimals: number
}
