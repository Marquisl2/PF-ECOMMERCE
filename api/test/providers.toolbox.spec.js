var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('providers/toolbox-provider', function () {
  var axios;
  var provider;

  beforeEach(function () {
    delete require.cache[require.resolve('../src/providers/toolbox-provider')];
    axios = require('axios');
  });

  afterEach(function () {
    if (axios.create.restore) axios.create.restore();
  });

  it('getFileList should return data.files from axios', function (done) {
    var fakeList = ['file1.csv', 'file2.csv'];

    // simulamos axios.create() que devuelve un objeto con get()
    var getStub = sinon.stub().resolves({ data: { files: fakeList } });
    sinon.stub(axios, 'create').returns({ get: getStub });

    provider = require('../src/providers/toolbox-provider');

    provider.getFileList().then(function (res) {
      expect(res).to.deep.equal(fakeList);
      done();
    }).catch(done);
  });

  it('getFileContent should return file content', function (done) {
    var fakeData = 'file,text,number,hex\nfile.csv,a,1,aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    var getStub = sinon.stub().resolves({ data: fakeData });
    sinon.stub(axios, 'create').returns({ get: getStub });

    provider = require('../src/providers/toolbox-provider');

    provider.getFileContent('file.csv').then(function (res) {
      expect(res).to.be.a('string');
      expect(res).to.contain('file,text,number,hex');
      done();
    }).catch(done);
  });
});
