'use strict';

const BaseModel = require('model-toolkit').BaseModel;

module.exports = class DesignTrackingActivity extends BaseModel {
    constructor(source) {
        super('design-tracking-activity', '1.0.0');

        this.code = '';
        this.designId = {};
        this.type = '';
        this.field = {};

        this.copy(source);
    }
};