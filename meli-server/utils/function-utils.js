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

const addSignature = (obj) => {
    return ({
        ...obj, 
        author: {
            name: 'Camila',
            lastname: 'Aristizabal'
        }
    })
}

module.exports = {getMostRepeatedItem, addSignature};