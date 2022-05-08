const rxjs = require('rxjs')
var FetchWrapper = require('../http/fetchWrapper');
var CustomError = require('../../utils/customError')
var utilsFunctions = require('../../utils/function-utils');

class Meli{

    categories = [];
    _items$ = new rxjs.Subject()
    _item$ = new rxjs.Subject()
    _categoriesInfo$ = new rxjs.Subject()
    _itemDescription$ = new rxjs.Subject()

    error$ = new rxjs.Subject()

    
    constructor(){
        this.api = new FetchWrapper('https://api.mercadolibre.com');
    }

    getItem$(){
        return this._item$;
    }

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

    searchItemById(id = ''){
        this.api.get(`items/${id}`)
        .then(data => {
            if(data.error) throw new CustomError('Not found', 404)
            this._item$.next(utilsFunctions.mapItem(data))
        }).catch(error => this.error$.next(error))
    }

    searchItemDescription(id = ''){
        this.api.get(`items/${id}/description`)
        .then(data => {
            this._itemDescription$.next(data.plain_text)
        })
    }

    searchCategoryPathRoot(categoryId){
        this.api.get(`categories/${categoryId}`)
        .then(data => {
            this.categories = [...data.path_from_root];
            this.searchCategoriesLink(this.categories);
        }).catch(error => this.error$.next(error))
    }

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