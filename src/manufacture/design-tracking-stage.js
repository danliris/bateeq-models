'use strict';

const BaseModel = require('model-toolkit').BaseModel;

module.exports = class DesignTrackingStage extends BaseModel {
    constructor(source) {
        super('design-tracking-stage', '1.0.0'); 

        this.code = '';
        this.name = '';
        this.boardId = {};
        this.designs = []; // for designs order on stage

        this.copy(source);
    }
};