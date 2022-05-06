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
        description: item.plain_text ? item.plain_text : ''
    })
}

module.exports = mapItem;