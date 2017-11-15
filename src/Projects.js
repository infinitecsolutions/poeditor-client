'use strict';

var assign = require('object-assign');
var Project = require('./Project');
var utils = require('./utils');

function Projects(token) {
    Object.defineProperties(this, {
        __token: { value: token }
    });
}

Projects.prototype.list = function() {
    return utils.call(this.__token, { action: 'list_projects' }).then(function(response) {
        return response.list.map(function(projectData) {
            return new Project(this.__token, projectData);
        }.bind(this));
    }.bind(this));
};

Projects.prototype.add = function(project) {
    return utils.call(this.__token, { action: 'create_project', name: project.name, description: project.description }).then(function(response) {
        return this.get(response.response.item.id);
    }.bind(this));
};

Projects.prototype.get = function(id) {
    return utils.call(this.__token, { action: 'view_project', id: id }).then(function(response) {
        return new Project(this.__token, response.item);
    }.bind(this));
};

Projects.prototype.export = function(options) {
    var params = assign({}, options, { action: 'projects/export' });
    return utils.call(this.__token, params).then(function(response) {
        return response.result;
    });
};

module.exports = Projects;
