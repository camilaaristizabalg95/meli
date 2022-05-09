const rxjs = require('rxjs')
var FetchWrapper = require('../http/fetchWrapper');
var CustomError = require('../../utils/customError')
var utilsFunctions = require('../../utils/function-utils');

/**
 * Clase encargada de manejar la comunicación
 * con la API de MeLi
 */
class Meli{

    /**
     * Arreglo temporal para ser recorrido posteriormente
     * para obtener los links de las root categories
     */
    categories = [];
    /**
     * Stream que emite el último valor de la lista
     * de items que correspondieron a una búsqueda
     */
    _items$ = new rxjs.Subject()
    /**
     * Stream que emite el último valor del item
     * obtenido de la búsqueda por id
     */
    _item$ = new rxjs.Subject()
    /**
     * Stream que emite el último valor de las 
     * categorías con su link
     */
    _categoriesInfo$ = new rxjs.Subject()
    /**
     * Stream que emite el último valor de la 
     * descripcioón obtenida para un item
     */
    _itemDescription$ = new rxjs.Subject()

    /**
     * Stream que emite errores en el servicio
     */
    error$ = new rxjs.Subject()

    /**
     * Crea una nueva instancia de FetchWrapper
     * para el llamado de peticiones http
     */
    constructor(){
        this.api = new FetchWrapper('https://api.mercadolibre.com');
    }

    /**
     * @returns Stream de _item$
     */
    getItem$(){
        return this._item$;
    }

    /**
     * @returns Stream de la combinación
     * de _items$ y _categoriesInfo$. Es un
     * zip debido a que no queremos emitir valores
     * hasta no completar las dos peticiones
     */
    getItemsResult$(){
        return rxjs.zip(
            this._items$, 
            this._categoriesInfo$,
            (items, categories)=>({
                items: items,
                categories: categories
            })
        )
    }

    /**
     * @returns Stream de la combinación
     * de _item$, _categoriesInfo$ e _itemDescription$. 
     * Es un zip debido a que no queremos emitir valores
     * hasta no completar las tres peticiones
     */
    getItemInfo$(){
        return rxjs.zip(
            this._item$, 
            this._itemDescription$,
            this._categoriesInfo$,
            (item, description, categories)=>({
                item: {
                    ...item,
                    categories: categories,
                    description: description,
                }
            })
        )
    }

    /**
     * Dispara la búsqueda de items que coincidan
     * con el query. Una vez esto termine procede a llamar
     * al método que realiza la buúsqueda de los root categories
     * de la categoría más encontrada.
     * @param query Término a buscar
     * @param limit Limite de items que la API debe devolver
     */
    searchItemsByQuery(query = '', limit = 4){
        this.api.get(`sites/MLA/search?q=${query}&limit=${limit}`)
        .then(data => {
            if(!data.results.length) {
                throw new CustomError('Not found', 404)
            }
            const mostRepeatedCategory = utilsFunctions.getMostRepeatedItem(data.results.map(result => result.category_id));
            this._items$.next(data.results.map(result => utilsFunctions.mapItem(result)));
            this.searchCategoryPathRoot(mostRepeatedCategory);
        }).catch(error => this.error$.next(error))
    }

    /**
     * Dispara la búsqueda de item por id.
     * @param id id del item que se desea buscar
     */
    searchItemById(id = ''){
        this.api.get(`items/${id}`)
        .then(data => {
            if(data.error) throw new CustomError('Not found', 404)
            this._item$.next(utilsFunctions.mapItem(data))
        }).catch(error => this.error$.next(error))
    }

    /**
     * Dispara la búsqueda de la descripción
     * de un item dado un id de item.
     * @param id id del item del cual se
     * desea obtener la descripción
     */
    searchItemDescription(id = ''){
        this.api.get(`items/${id}/description`)
        .then(data => {
            this._itemDescription$.next(data.plain_text)
        })
    }

    /**
     * Busca el path root de una categoría
     * específica y luego lanza la búsqueda
     * del link para cada una de ellas
     * @param categoryId categoría de la cual
     * se desea obtener el path root
     */
    searchCategoryPathRoot(categoryId){
        this.api.get(`categories/${categoryId}`)
        .then(data => {
            this.categories = [...data.path_from_root];
            this.searchCategoriesLink(this.categories);
        }).catch(error => this.error$.next(error))
    }

    /**
     * Busca los links de todas las categorías
     * root de una categoría específica
     * @param categories Lista de categorías
     */
    searchCategoriesLink(categories){
        let categoriesInfo = [];
        let results = 0;
        const infoResults = new Promise((resolve)=> 
            categories.forEach(
                async(category) =>{
                    const result = await this.api.get(`categories/${category.id}`);
                    results++;
                    categoriesInfo.push({id: result.id, link: result.permalink});
                    if(results === categories.length) resolve();
                })
        )
        infoResults.then(()=>{
            this._categoriesInfo$.next(utilsFunctions.reOrderCategoriesArray(categories, categoriesInfo))
        })
    }
}

module.exports = Meli