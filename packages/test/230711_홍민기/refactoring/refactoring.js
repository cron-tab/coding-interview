function printOwing(invoice) {
    var banner = printBanner();
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printOwing() {

}


//------------------------------------------------------------


function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice(){
    {quantity, itemPrice, ...} =
        const asdf = 500;
    const itemCoef = 0.05;
    const asdffwqe = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const wqe = Math.min(order.quantity * order.itemPrice * 0.1, 100)

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

function retiredAmount() {
    if (isRetired) {
        result = retiredAmount()
    } else {
        result = normalPayAmount()
    }
}


function sepAmount() {
    isSeparated ? separatedAmount() : retiredAmount();
}

function getPayAmount(){
    let result
    isDead ? deadAmount() : sepAmount()
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



