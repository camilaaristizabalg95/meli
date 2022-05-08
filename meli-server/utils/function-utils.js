var FetchWrapper = require('../utils/fetchWrapper');

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

const getCategoriesNameAndLink = (categories) => {
    const api = new FetchWrapper('http://localhost:3000', false)
    let categoriesLinks = []
    let resolvedPetitions = 0
    return new Promise (
        (resolve) => categories.forEach((category,index) => {
        api.get(`categories/info/${category.id}`)
        .then(data => {
            categoriesLinks.push(data)
            resolvedPetitions ++;
            if(resolvedPetitions === categories.length) {
                resolve(
                    categories.map(
                        category => ({
                            description: category.name, 
                            link: categoriesLinks.find(cat => cat.id === category.id).link
                        })
                    )
                );
            }
        })
         })
    )
}

const addSignature = (obj) => {
    return ({
        ...obj, 
        author: {
            name: 'Camila',
            lastname: 'Aristizabal'
        }
    })
}


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
        description: item.plain_text ? item.plain_text : '',
        sold_quantity: item.sold_quantity
    })
}

module.exports = {getMostRepeatedItem, addSignature, getCategoriesNameAndLink, mapItem};