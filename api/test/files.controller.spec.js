var expect = require('chai').expect;

describe('controllers/filesController', function () {
  var controller;
  var fakeService;
  var servicePath = require.resolve('../src/services/files.service.js');
  var originalService = require.cache[servicePath];

  beforeEach(function () {
    delete require.cache[require.resolve('../src/controllers/filesController.js')];

    fakeService = {
      processFiles: function () {
        return Promise.resolve([
          {
            file: 'mock.csv',
            lines: [{ text: 'abc', number: 123, hex: 'a'.repeat(32) }]
          }
        ]);
      }
    };

    // Mock del módulo service
    require.cache[servicePath] = {
      id: servicePath,
      filename: servicePath,
      loaded: true,
      exports: fakeService
    };

    controller = require('../src/controllers/filesController.js');
  });

  afterEach(function () {
    if (originalService) {
      require.cache[servicePath] = originalService;
    } else {
      delete require.cache[servicePath];
    }
  });

  it('getProcessedFiles should respond with JSON from service', function (done) {
    var req = {};
    var res = {
      statusCode: null,
      body: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (obj) {
        this.body = obj;
      }
    };

    controller.getProcessedFiles(req, res, function () {});

    setTimeout(function () {
      expect(res.statusCode).to.equal(200);
      expect(res.body[0].file).to.equal('mock.csv');
      expect(res.body[0].lines[0].text).to.equal('abc');
      done();
    }, 20);
  });
});
