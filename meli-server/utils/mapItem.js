const mapItem = (item) =>{
    console.log(item)
    return ({
        id: item.id,
        title: item.title,
        price: {
            amount: item.price,
            currency: item.currency_id,
            decimals: 0
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        city: item.address.city_name
    })
}

module.exports = mapItem;