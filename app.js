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


export function fetchData(userId) {
    return {
        id: userId,
        name: "John Doe",
        roles: ['user', 'admin'],
        lastLogin: new Date('2023-01-01T12:00:00Z').toISOString(),
        prefernces: {
            notifications: true,
            theme: 'dark'
        }
    }
}

export function greet(name) {
    return `Hello, ${name}!`
}

export function greetInNepali(name) {
    return `नमस्ते, ${name}!`
}