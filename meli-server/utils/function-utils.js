/**
 * Obtiene el item más repetido en un arreglo
 * @param arr arreglo con items
 * @returns Valor del item más repetido
 */
const getMostRepeatedItem = (arr) => {
    const countArr = arr.reduce((acc,key)=> {
        if(acc.some(item => item.key === key)) 
        {
            acc[acc.findIndex(item => item.key === key)].count++
            return acc;
        }
        else {
            acc.push({key, count: 1})
            return acc
        }
    },[])
    return countArr.sort((a,b)=> b.count - a.count)[0].key

}

/**
 * Agrega la firma a un objeto dato
 * @param obj objeto que se desea firmar
 * @returns objeto firmado
 */
const addSignature = (obj) => {
    return ({
        ...obj, 
        author: {
            name: 'Camila',
            lastname: 'Aristizabal'
        }
    })
}

/**
 * Mapea los valores necesarios del item
 * retornado por la API de MeLi
 * @param item item con todas las propiedades
 * retornadas por la app de MeLi
 * @returns item con las propiedades necesarias
 */
const mapItem = (item) =>{
    return ({
        id: item.id,
        title: item.title,
        price: {
            amount: Math.floor(item.price),
            currency: item.currency_id,
            decimals: item.price - Math.floor(item.price)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        city: item.address ? item.address.city_name : '',
        sold_quantity: item.sold_quantity,
        category_id: item.category_id
    })
}

/**
 * Dados dos arreglos ordena el arreglo 2 en
 * base al arreglo 2
 * @param array1 arreglo ordenado
 * @param array2 arreglo a ser ordenado
 */
const reOrderCategoriesArray = (array1, array2) => {
    return array1.map(
        category => ({
            description: category.name, 
            link: array2.find(cat => cat.id === category.id).link
        })
    )
} 

module.exports = {getMostRepeatedItem, addSignature, mapItem, reOrderCategoriesArray};