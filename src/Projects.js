'use strict';

var assign = require('object-assign');
var Project = require('./Project');
var utils = require('./utils');

function Projects(token) {
    Object.defineProperties(this, {
        __token: { value: token }
    });
}

Projects.prototype.upload = function(options) {
    var params = assign({}, options, { action: 'projects/upload' });
    return utils.call(this.__token, params).then(function(response) {
        return response.result;
    });
};

Projects.prototype.export = function(options) {
    var params = assign({}, options, { action: 'projects/export' });
    return utils.call(this.__token, params).then(function(response) {
        return response.result;
    });
};

module.exports = Projects;
