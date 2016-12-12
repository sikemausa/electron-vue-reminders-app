'use strict'

// Enable use of es2015 on required files
require('babel-register')({
  ignore: /node_modules/
})

// Attach Chai APIs to global scope
const expect = require('chai')
const should = require('chai')
const assert = require('chai')

// const { expect, should, assert } = require 'chai';

global.expect = expect
global.should = should
global.assert = assert

// Require all JS files in `./specs` for Mocha to consume
require('require-dir')('./specs')
