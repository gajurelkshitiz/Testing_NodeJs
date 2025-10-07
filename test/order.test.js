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
        const result = processOrder({ amount: 100 })

        assert.deepStrictEqual(result, expected);
    })
})