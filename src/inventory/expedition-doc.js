'use strict'

var BaseModel = require('model-toolkit').BaseModel; 
var SPKDoc = require('./expedition-spk');
var TransferOut = require('./transfer-out-doc');

module.exports = class Expeditions extends BaseModel {
    constructor(source) {
        super('expedition-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.expedition = {};
        this.weight = 0;
        this.remark = '';
        // this.transferOutDocumentId = {};
        // this.transferOutDocument = {};
        this.transferOutDocuments = [];
        
        // this.spkDocumentId = {};
        // this.spkDocuments = {};
        this.spkDocuments = [];
        
        this.copy(source);
        
        var _transferOutDocuments = [];
        for(var transferOutDocument of this.transferOutDocuments) {
            _transferOutDocuments.push(new TransferOut(transferOutDocument));
        }
        this.transferOutDocuments = _transferOutDocuments;
        
        var _spkDocuments = [];
        for(var spkDocument of this.spkDocuments) {
            _spkDocuments.push(new SPKDoc(spkDocument));
        }
        this.spkDocuments = _spkDocuments;
    }
}