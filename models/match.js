var Team = require('./team.js');

function Match(matchDate){

    this.teams=Array();
    this.played=false;
    this.scores=Array();
    

    if(matchDate instanceof Date){
        this.date=matchDate;
    } else {
        throw(new Error('Invalid date.'))
    }
    
    Match.prototype.toString=function(){
        return this.name;
    }

    Match.prototype.setResult=function(scoreTeam0,scoreTeam1){
        this.played=true;
        this.result=scoreTeam0 > scoreTeam1? 0 : 1;
        this.scores[0]=scoreTeam0;
        this.scores[1]=scoreTeam1;
    };

    Match.prototype.play=function(){
        if(this.teams.length < 2){
            throw(new Error('Not enough teams to play.'));
        }

        if(!this.teams[0].isComplete() || !this.teams[0].isComplete()){
            throw(new Error('Cannot play with incomplete teams'));
        }
    };

    Match.prototype.addTeam=function(newTeam){
        
        if(this.teams.length>=2){
            throw(new Error('Cannot add more than 2 teams.'))
        }
        
        if(newTeam instanceof Team){
            this.teams.push(newTeam);
        } else {
            throw(new Error('Invalid team.'));
        }
    }

    Match.prototype.toString=function(){
        var teamText;
        if(this.teams.length==0){
            teamText= 'teams not yet defined';
        } else if(this.teams.length==1){
            teamText=this.teams[0].name + ' vs (not yet defined)';
        } else {
            teamText=this.teams[0].name +' vs ' + this.teams[1].name;
        }

        var resultText='';
        if(this.played){
            resultText=', ' + this.teams[this.result].name + ' won ';
            var winnerScore=Math.max(this.scores[0],this.scores[1]);
            var looserScore=Math.min(this.scores[0],this.scores[1])
            resultText+='(' + winnerScore + ' to ' + looserScore + ')';
        }

        return 'Match: ' + this.date.toDateString() + ', ' + teamText + resultText + '.'
    };

}

module.exports=Match;
