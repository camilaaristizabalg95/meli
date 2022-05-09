import { ItemSummaryModel } from './item-summary.model';
import { SignatureModel } from './signature.model';
import { BreadcrumbModel } from './breadcrumb.model';

export interface ItemResultModel extends SignatureModel{
    /**
     * Categorías asociadas a la categoría más
     * repetida para esa búsqueda
     */
    categories: BreadcrumbModel[],
    /**
     * Lista de items retornados para una búsqueda
     */
    items: ItemSummaryModel[]
}
