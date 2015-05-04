var fs = require('fs');
var crawlers = require('../../crawlers/crawlers');

var mHillDetailRingSilver;
fs.readFile('./test/crawlers/micheall-hill-detail-ring-silver.html', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    mHillDetailRingSilver = data;
});
describe('crawlers', function () {
    describe('#getTitle(dom)', function () {
        var title = crawlers.getTitle(mHillDetailRingSilver);

        it('should use og:title', function () {
            assert.equal(title, 'Ring with Enhanced Black Diamonds in Sterling Silver')
        })
    })
});
