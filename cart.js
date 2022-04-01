///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE Needs work

const summedPrice = cart.reduce(function(acc,elem){
    elem = cart
    acc = 0
    return acc + cart.price
})

//console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return ((cartTotal * (1+tax))-couponValue)
}
console.log(calcFinalPrice(120,10,.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
I would create a class including first name, last name, email address,customer id, and phone number slot with an optional address location for delivery. Name is included for obvious reasons, email is included so you can email receipts. Phone number is included so that updates and other information can be sent. Address is included so deliveries can be taken to the correct address. Lasly customer ID so that there is a unique identifier
*/


/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(firstName,lastName,email,phone,address,id) {
        this.firstName;
        this.lastName;
        this.email;
        this.phone;
        this.address;
        this.id;
    }
}