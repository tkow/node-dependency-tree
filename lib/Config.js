'use strict';

const path = require('path');
const debug = require('debug')('tree');

class Config {
  constructor(options) {
    this.filename = options.filename;
    this.directory = options.directory || options.root;
    this.visited = options.visited || {};
    this.nonExistent = options.nonExistent || [];
    this.isListForm = options.isListForm;
    this.requireConfig = options.config || options.requireConfig;
    this.webpackConfig = options.webpackConfig;
    this.nodeModulesConfig = options.nodeModulesConfig;
    this.detectiveConfig = options.detective || options.detectiveConfig || {};

    this.filter = options.filter;

    if (!this.filename) { throw new Error('filename not given'); }
    if (!this.directory) { throw new Error('directory not given'); }
    if (this.filter && typeof this.filter !== 'function') { throw new Error('filter must be a function'); }

    debug('given filename: ' + this.filename);

    this.filename = path.resolve(process.cwd(), this.filename);

    debug('resolved filename: ' + this.filename);
    debug('visited: ', this.visited);
  }

  clone () {
    return new Config(this);
  }
}

module.exports = Config;
