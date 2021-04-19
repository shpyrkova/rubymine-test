require('app-module-path').addPath(__dirname + '/..');

const chai = require('chai');
const chaiSubset = require('chai-subset');
const chaiExclude = require('chai-exclude');
const chaiJsonSchema = require('chai-json-schema');

chai.use(chaiSubset);
chai.use(chaiExclude);
chai.use(chaiJsonSchema);
