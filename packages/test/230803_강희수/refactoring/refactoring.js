function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}



function getPrice(){

}


//------------------------------------------------------------


function getPayAmount() {
    let result
    if (isDead) {
        result = deadAmount()
    } else {
        if (isSeparated) {
            result = separatedAmount()
        } else {
            if (isRetired) {
                result = retiredAmount()
            } else {
                result = normalPayAmount()
            }
        }
    }
    return result
}

function getPayAmount(){

}

//------------------------------------------------------------


function setDimension(name, value) {
    if (name === 'height') {
        this._height = value
        return
    }
    if (name === 'width') {
        this._width = value
        return
    }
}

function setDimension(name, value) {

}

