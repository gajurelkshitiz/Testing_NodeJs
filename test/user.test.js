import {test, describe, it} from 'node:test';
import assert from 'node:assert';
import { fetchData } from '../app.js';

describe("User Feature", () => {
    it('fetches the users data correctly', (t) => {
        const data = fetchData(123);

        t.assert.snapshot(data);
    })
})