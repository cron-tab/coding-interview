function printOwing(invoice) {
    var banner = printBanner();
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printOwing({customer}) {
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${customer}`)
    console.log(`amount: ${outstanding}`)

}


//------------------------------------------------------------


function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice({order}){
    const {quantity, itemPrice} = order

    const maxQuantity = Math.max(0, quantity - 500)
    const minQuantity = Math.min(quantity * itemPrice * 0.1, 100)

    return (quantity * itemPrice) -
        ma * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
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
    let result

    if (isDead) {
        result = deadAmount()
        return result
    }
    if (isSeparated) {
        result = separatedAmount()
        return result
    }
    if (isRetired) {
        result = retiredAmount()
        return result
    }
    result = normalPayAmount()

    return result
}

//------------------------------------------------------------


function setDimension(name, value) {



    switch (name) {
        case 'height':
            this._height = value
            return
        case 'width':
            this._width = value
            return
    }
}


