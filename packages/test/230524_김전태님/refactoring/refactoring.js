function printOwing(invoice) {
    printBanner()
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printOwing({customer}) {
    printBanner();
    const amount = calculateOutstanding();

    // print details
    console.log(`name: ${customer}`)
    console.log(`amount: ${amount}`)
}


//------------------------------------------------------------


function getPrice() {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice(){
    const { quantity, itemPrice } = order;
    const maxQuantity = Math.max(0, quantity - 500);
    const minPrice = Math.min(quantity * itemPrice * 0.1, 100);
    const priceValue = itemPrice * 0.05;

    return quantity * itemPrice - maxQuantity * priceValue + minPrice;
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
    if (isDead) {
        return deadAmount();
    } else {
        if (isSeparated) {
            return separatedAmount();
        } else {
            if (isRetired) {
                return retiredAmount();
            } else {
                return normalPayAmount();
            }
        }
    }
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


