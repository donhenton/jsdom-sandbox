require('rootpath')();
var assert = require('chai').assert;
var expect = require('chai').expect;
var jsdom = require('jsdom');

var scripts = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/underscore/underscore.js'];

describe('basic test', function () {

  var doc = {};
  beforeEach(function (done) {

    jsdom.env({
      html: '<html><body><h3>Get a job1</h3></body></html>',
      scripts: scripts,
      done: function(errs,window)
      {
        doc.window = window;
        doc.$ = window.$;
        doc.document = window.document;
        done();
      }
    });

  });
  before(function () {

  });
  afterEach(function () {

  });
  after(function () {

  });


  it('it should do something', function () {
    assert.strictEqual(55, 50 + 5);
  });


  it('jsdom should work', function () {
     assert.isDefined(doc.$);
     assert.isDefined(doc.document);
     assert.isDefined(doc.document.documentElement.innerHTML);
     var stuff = doc.$('html').text();
     assert.equal(stuff,'Get a job1');
  });




});


