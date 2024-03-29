function printOwing(invoice) {
    var banner = printBanner();
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printOwing({customer}) {
    let outstanding = calculateOutstanding();

    console.log(`name: ${customer}`);
    console.log(`amount: ${outstanding}`);
}


//------------------------------------------------------------


function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice(){
    let quantity = order.quantity;
    let price = order.itemPrice;

    let answer = quantity * price - Math.max()

    return quantity*price -
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

    switch
        case isDead:
            result =  deadAmount();
            return result;
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
    else if (name === 'width') {
        this._width = value
        return
    }
}


