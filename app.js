// Dependency Injection..

export function processOrder(data, dependencies) {
    // some random logic...

    const paymentInfo = dependencies.processPayment(data.amount);

    return paymentInfo;
}

function processPayment(amount) {
    // External API call to the Payment Gateway.

    console.log("Original Process Payment..");
    return {id: '123', amount: amount}
}

export function greet(name) {
    return `Hello, ${name}!`
}

export function greetInNepali(name) {
    return `नमस्ते, ${name}!`
}