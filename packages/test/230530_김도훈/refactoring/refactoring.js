function printOwning(invoice) {
    printBanner()
    let outstanding = calculateOutstanding()

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

function printNameAndAmount({ customer }) {
    printBanner(); //
    let outstanding = calculateOutstanding();

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}

print고객_이름_양({  })


//------------------------------------------------------------


function getPrice(order) {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

function getPrice(order){
    const { quantity, itemPrice } = order;


    return quantity * itemPrice
}

function getDiscount(order) {
    return Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
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
    if (isDead) {
        return deadAmount();
    }

    if (isSeparated) {
        return se();
    }

    if ()
}

function isDeadAmout()

//------------------------------------------------------------


function setDimension(name, value) {
    Object(obj).
    this[name] =
}







