export interface ItemSummaryModel{
    id: string;
    title: string;
    price: PriceModel;
    city: string;
    picture: string;
    free_shipping: boolean;
    condition: string;
}

export interface ItemModel extends ItemSummaryModel{
    sold_quantity: number;
    description: string;
}

export interface PriceModel{
    currency: string, 
    amount: number, 
    decimals: number
}
