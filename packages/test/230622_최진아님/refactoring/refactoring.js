function printOwing(invoice) {
    var banner = printBanner();
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printOwing(customer) {
    const outstanding = calculateOutstanding()
    // print details
    console.log(`name: ${customer}`)
    console.log(`amount: ${outstanding}`)
}


//------------------------------------------------------------


function getPrice() {
    const { quantity, itemPrice } = order;
    const temp1 = Math.max(0, quantity - 500);
    return quantity * itemPrice -
        temp1 * itemPrice * 0.05 +
        Math.min(quantity * itemPrice * 0.1, 100)
}

function getPrice(){

}


//------------------------------------------------------------


function getPayAmount() {
    if(isDead) return deadAmount();

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


function setDimension({name, value}) {
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



