'use strict';

var utils = require('./utils');

function Language(token, projectId, data) {
    Object.defineProperties(this, {
        __token: { value: token },
        __projectId: { value: projectId },
        name: { value: data.name, enumerable: true },
        code: { value: data.code, enumerable: true },
        percentage: { value: data.percentage, enumerable: true }
    });
}

Language.prototype.delete = function() {
    return utils.call(this.__token, { action: 'delete_language', id: this.__projectId, language: this.code }).then(function(response) {
        return null;
    }.bind(this));
};

module.exports = Language;