function printOwing(invoice) {
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printCustomer(invoice) {
    console.log(`name: ${invoice.customer}`)
}
function printOutstanding() {
    console.log(`amount: ${calculateOutstanding()}`)
}

function printOwing(invoice) {
    printCustomer(invoice)
    printOutstanding()
}


//------------------------------------------------------------


function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice(){
    if (!order) throw Error('No Order')

    const max = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const min = Math.min(order.quantity * order.itemPrice * 0.1, 100)
    const price = order.quantity * order.itemPrice - max + min

    if (price < 0) throw Error('Invalid Price')
    return price
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
    if (isDead) return deadAmount()
    if (isSeparated) return separatedAmount()
    if (isRetired) return retiredAmount()
    return normalPayAmount()
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
    switch (name) {
        case 'height': {

            break;
        }
        case 'width': {
            break;
        }
    }
}



