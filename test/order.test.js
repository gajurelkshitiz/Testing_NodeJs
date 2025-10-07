import {describe, test, mock} from "node:test";
import assert from "node:assert";
import { processOrder } from "../app.js";


describe("Order Feature", () => {
    test("that it process the order correctly", () => {
        // AAA
        const mockedProcessPayment = mock.fn((amount) => {
            // don't call any api or No side-effects

            console.log("Mocked Process Payment..");
            return {id: '123', amount: amount}
        });

        const expected = {id: '123', amount:100};

        assert.strictEqual(mockedProcessPayment.mock.callCount(), 0);  
        const result = processOrder({ amount: 100 }, { processPayment: mockedProcessPayment });

        assert.deepStrictEqual(result, expected);
        assert.strictEqual(mockedProcessPayment.mock.callCount(), 1);    // SPY the function count, how many time is a function called.

        const call = mockedProcessPayment.mock.calls[0];
        assert.deepStrictEqual(call.arguments, [100]);
    })
})