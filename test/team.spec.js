var Team=require('../models/team.js');
var Coach=require('../models/coach.js');
var Player=require('../models/player.js');
var expect = require('chai').expect;

var team;

beforeEach(function(){
    team=new Team('team-name');
});

describe("Team",function(){

    describe("to string",function(){

        it(", with no coach and no players, outputs correct string",function(){
            expect(team.toString()).to.equal('Team: team-name' + ', no coach, no players');
        });
    
        it(", a coach but no players, outputs correct string",function(){
            team.coach=new Coach('coach-name');
            expect(team.toString()).to.equal('Team: team-name' + ', Coach: coach-name, no players');
        });

        //No specific reason for 3 players
        it(", 3 players but no coach , outputs correct string",function(){
            team.players.push(new Player('p1',1));
            team.players.push(new Player('p2',2));
            team.players.push(new Player('p3',3));

            expect(team.toString()).to.equal('Team: team-name' + ', no coach, Players: p1, p2, p3');
        });

        it(", 3 players and a coach , outputs correct string",function(){
            team.coach=new Coach('coach-name');
            team.players.push(new Player('p1',1));
            team.players.push(new Player('p2',2));
            team.players.push(new Player('p3',3));

            expect(team.toString()).to.equal('Team: team-name' + ', Coach: coach-name, Players: p1, p2, p3');
        });
    });

    describe("add player",function(){

        it('adds player to list',function(){
            team.addPlayer(new Player('p1',1));
            team.addPlayer(new Player('p2',2));

            expect(team.players[0].name).to.equal('p1');
            expect(team.players[1].number).to.equal(2);
        });

        it('throws if invalid player is passed',function(){
            var call=function() { team.addPlayer('not a player'); };

            expect(call).to.throw();
        });
    });

    describe('isComplete',function(){
        it('returns false for empty team',function(){
            expect(team.isComplete()).to.equal(false);
        });

        it('returns true if team is full',function(){
            team.coach=new Coach('coach-name');
            for(var i=0;i<11;i++){
                team.players.push(new Player('p'+(i+1),i+1));
            }

            expect(team.isComplete()).to.equal(true);
        });

        it('returns true if team has extra players',function(){
            team.coach=new Coach('coach-name');
            for(var i=0;i<30;i++){
                team.players.push(new Player('p'+(i+1),i+1));
            }
            
            expect(team.isComplete()).to.equal(true);
        });

    });

    describe("add coach",function(){

        it('adds coach',function(){
            team.addCoach(new Coach('coach-name'));

            expect(team.coach.name).to.equal('coach-name');
        });

        it('throws when invalid coach is passed',function(){
            var call=function() { team.addCoach('not a coach'); };

            expect(call).to.throw();
        });
    });

});

