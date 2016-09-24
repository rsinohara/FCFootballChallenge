function Team(newName){
  this.name=newName;

  Team.prototype.toString=function(){
        return 'Team: ' + this.name + ', no coach, no players';
  }
}

module.exports=Team;