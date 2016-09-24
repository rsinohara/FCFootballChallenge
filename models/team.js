var Coach=require('./coach.js');
var Player=require('./player.js');

function Team(newName){
  this.name=newName;
  this.players=Array();

  Team.prototype.toString=function(){
      var coachText;
      if(this.coach instanceof Coach){
          coachText='Coach: ' + this.coach.name;
      } else {
          coachText='no coach';
      }
      
      var playersText;
      var isPlayersAnArray=(this.players && this.players.constructor === Array);

      //Players is empty or not an array
      if(!isPlayersAnArray || this.players.length==0){
          playersText='no players';
      } else {
          playersText="Players: ";
          for(var i=0;i<this.players.length;i++){
              playersText+= i==0?'':', ';
              playersText+=this.players[i].name;
          }
      }

      return 'Team: ' + this.name + ', ' + coachText + ', ' + playersText;
  };

  Team.prototype.addPlayer=function(player){
      if(player instanceof Player){
          this.players.push(player);
      } else {
          throw(new Error('Cannot add to team: invalid player.'));
      }
  }

  Team.prototype.isComplete=function(){
      //Checks that team is full
      if(!(this.coach instanceof Coach)){
          return false;
      }
      if(!((this.players && this.players.constructor === Array)))
      {
          return false;
      }
      if(this.players.length<11){
          return false;
      }

      //Also check that players are valid
      for(var i=0;i<this.players.length;i++){
          if(!(this.players[i] instanceof Player)){
              return false;
          }
      }

      return true;
  };

  Team.prototype.getPlayer=function(position){
      if(position>this.players.length){
          throw(new Error('There are not enough players on the team.'));
      }
  };

  Team.prototype.addCoach=function(coach){
      if(coach instanceof Coach){
          this.coach=coach;
      } else {
          throw(new Error('Cannot assign coach to team: invalid coach.'))
      }
  }
}

module.exports=Team;