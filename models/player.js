var BaseModel = require('./person.js'),
    util = require('util');

function Player(newName,newNumber,newSkill) {
    BaseModel.apply(this, [newName]);
    this.number=newNumber;
    this.skillLevel=newSkill;

    //Randomize skill if it's not provided or invalid
    if(!(newSkill>=1 && newSkill<=10)){
      this.skillLevel=Math.floor(Math.random()*10)+1;
    }

    //Throw if number is not provided or invalid
    if(!(newNumber>=1 && newNumber<=11)){
      throw(new Error('Invalid player number: ' + newNumber));
    }

    Player.prototype.toString=function(){
      return 'Player: ' + this.name + '(' + this.number + '), Skill: ' + this.skillLevel;
    }
}



util.inherits(Player, BaseModel);


module.exports = Player;
