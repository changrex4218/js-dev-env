import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
/* eslint-disable no-constant-condition*/
describe('Our first first test', () => {
    if ('should pass', () => {
        expect(true).to.equal(false);
    });

});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hi");
            done();
            window.close();
        });
    });
});
