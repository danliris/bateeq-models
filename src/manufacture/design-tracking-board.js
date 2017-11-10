'use strict';

const BaseModel = require('model-toolkit').BaseModel;

module.exports = class DesignTrackingBoard extends BaseModel {
    constructor(source) {
        super('design-tracking-board', '1.0.0');

        this.code = '';
        this.name = '';

        this.copy(source);
    }
};