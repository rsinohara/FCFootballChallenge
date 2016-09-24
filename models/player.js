var BaseModel = require('./person.js'),
    util = require('util');

function Player(newName) {
    BaseModel.apply(this, [newName]);
}

util.inherits(Player, BaseModel);


module.exports = Player;
