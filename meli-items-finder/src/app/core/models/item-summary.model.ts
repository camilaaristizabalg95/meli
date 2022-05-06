export interface ItemSummaryModel{
    id: string;
    title: string;
    price: {
        currency: string, 
        amount: number, 
        decimals: number
    };
    city: string;
    picture: string;
    free_shipping: boolean;
    condition: string;
}
