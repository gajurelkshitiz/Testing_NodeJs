import {test, describe} from 'node:test';
import assert from 'node:assert/strict';
import * as mailer from '../mailer.js';
import { registerUser } from '../userService.js';


// here we are mocking the real function 'sendEmail'.

describe("User Function", () => {
    test('registerUser() should call sendEmail', () => {
        // Step 1: Create a flag variable
        let called = false;
    
        // Step 2: Replace the real function with the fake one
        const mockMailer = {
            sendEmail(email, msg) {
                called = true;  // mark that it was called
                assert.equal(email, 'test@example.com')     // verify argument
                assert.equal(msg, 'Welcome!');
            }
        }; 
            
    
        // Step 3: Run the function we want to test
        registerUser({ email: 'test@example.com' }, mockMailer);
    
        // Step 4: Verify that sendEmail() was called
        assert.ok(called, 'sendEmail should be called');
    });
})