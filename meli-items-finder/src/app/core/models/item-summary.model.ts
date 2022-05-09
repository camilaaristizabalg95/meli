import { SignatureModel } from './signature.model'
import { BreadcrumbModel } from './breadcrumb.model';

export interface ItemSummaryModel{
    /**
     * id del item
     */
    id: string;
    /**
     * Título del item
     */
    title: string;
    /**
     * Propiedades de precio del item
     */
    price: PriceModel;
    /**
     * Ciudad de origen del item
     */
    city: string;
    /**
     * Foto del item
     */
    picture: string;
    /**
     * Descripción del envío del item
     */
    free_shipping: boolean;
    /**
     * Condición del item
     */
    condition: string;/**
     * Cantidad de ventas del vendedor del item
     */
    sold_quantity?: number;
    /**
     * Descripción extendida del item
     */
    description?: string;
    /**
     * Array de categorías del item
     */
    categories: BreadcrumbModel[];
}

export interface ItemModel extends SignatureModel{
    item: ItemSummaryModel
}

export interface PriceModel{
    /**
     * Moneda
     */
    currency: string, 
    /**
     * Valor
     */
    amount: number, 
    decimals: number
}
