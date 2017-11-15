"use strict";

var q = require("q");

var Languages = require("./Languages");
var Terms = require("./Terms");
var utils = require("./utils");

function Project(token, data) {
  Object.defineProperties(this, {
    __token: { value: token },
    languages: { value: new Languages(token, data.id) },
    terms: { value: new Terms(token, data.id) },

    id: { value: data.id, enumerable: true },
    name: { value: data.name, enumerable: true },
    public: { value: data.public === "1", enumerable: true },
    open: { value: data.open === "1", enumerable: true },
    created: { value: data.created, enumerable: true },
    reference_language: { value: data.reference_language, enumerable: true }
  });
}

module.exports = Project;
