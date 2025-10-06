import {test, suite} from "node:test";
import assert from "node:assert";
import {greet, greetInNepali} from "../app.js"

suite('Greeting Functions', () => {
    test("greet returns the correct greeting", () => {
        // AAA
        /*
            * Arrange
            * Act
            * Assert
        */
    
        const expected = 'Hello, World!';
        const actual = greet('World');
    
        assert.strictEqual(actual, expected);
        
    })


    test("greet returns the correct greeting in Nepali", () => {
        // AAA
        /*
            * Arrange
            * Act
            * Assert
        */
    
        const expected = 'नमस्ते, संसार!';
        const actual = greetInNepali('संसार');
    
        assert.strictEqual(actual, expected);
        
    })

})
