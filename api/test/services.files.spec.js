var expect = require('chai').expect;
var proxyquire = require('proxyquire');

describe('services/files.service', function () {
  it('processFiles should return only files with valid lines', function (done) {
    var fakeProvider = {
      getFileList: function () {
        return Promise.resolve(['good.csv', 'empty.csv', 'bad.csv']);
      },
      getFileContent: function (filename) {
        if (filename === 'good.csv') {
          return Promise.resolve(
            'file,text,number,hex\n' +
            'good.csv,Hello,123,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n' +
            'good.csv,World,456,bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\n'
          );
        }
        if (filename === 'empty.csv') return Promise.resolve('');
        if (filename === 'bad.csv') {
          return Promise.resolve(
            'file,text,number,hex\n' +
            'bad.csv,NoNumber,notanumber,cccccccccccccccccccccccccccccccc\n' +
            'bad.csv,ShortHex,1,abc\n'
          );
        }
      }
    };

    var service = proxyquire('../src/services/files.service', {
      '../providers/toolbox-provider': fakeProvider
    });

    service.processFiles().then(function (res) {
      expect(res).to.be.an('array');
      expect(res.length).to.equal(1);
      expect(res[0].file).to.equal('good.csv');
      expect(res[0].lines.length).to.equal(2);
      done();
    }).catch(done);
  });
});
