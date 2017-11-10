'use strict';

const BaseModel = require('model-toolkit').BaseModel;

module.exports = class DesignTrackingReason extends BaseModel {
    constructor(source) {
        super('design-tracking-reason', '1.0.0');

        this.code = '';
        this.reason = '';

        this.copy(source);
    }
};