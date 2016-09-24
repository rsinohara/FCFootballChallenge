var BaseModel = require('./person.js'),
    util = require('util');

function Coach(newName,newNumber,newSkill) {
    BaseModel.apply(this, [newName]);

    Coach.prototype.toString=function(){
      return 'Coach: ' + this.name;
    }
}

util.inherits(Coach, BaseModel);
module.exports = Coach;
