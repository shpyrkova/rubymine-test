import chai from 'chai';
import { one, nine } from 'helpers/context';

describe('Testing tests', async function () {
    before(async function () {
    });

    it('Check sum', async function () {
        chai.expect(one + nine).to.equal(10);
    });
});



