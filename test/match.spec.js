var Match = require('../models/match.js');
var Team = require('../models/team.js');
var Coach = require('../models/coach.js');
var Player = require('../models/player.js');
var expect = require('chai').expect;

var match;
var date;

beforeEach(function(){
    date=new Date();
    match = new Match(date);
});

describe('Match',function(){

    describe('constructor',function(){

        it('saves the date',function(){
            expect(match.date).to.instanceOf(Date);
        });

        it('throws id invalid date is passed',function(){
            var call=function() { new Match('not a date'); };
            expect(call).to.throw();
        });

    });

    describe('set result', function(){

        it('sets correct team as winner',function(){
            var match1=new Match(date);
            var match2=new Match(date);
            
            match1.setResult(3,4);
            match2.setResult(7,0);

            expect(match1.result).to.equal(1);
            expect(match2.result).to.equal(0);           
        });

        it('sets match.played to true',function(){
            match.setResult(1,2);

            expect(match.played).to.equal(true);
        });
    });

    describe('addTeam()',function(){

        it('adds teams to list',function(){
            match.addTeam(new Team('team 1'));
            match.addTeam(new Team('team 2'));

            expect(match.teams[1].name).to.equal('team 2');
        });

        it('throws if invalid team is passed',function(){
            var call=function() { match.addTeam('not a team'); };

            expect(call).to.throw();
        });

        it('throws if more than 2 teams are added',function(){
            var call=function() { match.addTeam(new Team('new team')); };

            call();
            call();

            //Third call should throw
            expect(call).to.throw();
        });
    });

    describe('play()',function(){
        var call=function() { match.play(); };

        it('throws if tere are no teams',function(){
            expect(call).to.throw();
        });

        it('throws if tere is only one team',function(){
            match.addTeam(new Team('team 1'));
            expect(call).to.throw();
        });

        it('throws if teams are not complete',function(){
            match.addTeam(new Team('team 1'));
            match.addTeam(new Team('team 2'));
            expect(call).to.throw();
        });

        it('give correct results',function(){
            var team1=new Team('team 1');
            var team2=new Team('team 2');

            team1.addCoach(new Coach('coach 1'))
        });
    });

    describe('toString()',function(){

        it(', with empty teams, returns correct string',function(){
            expect(match.toString()).to.equal('Match: ' + date.toDateString() + ', teams not yet defined.');
        });

        it(',with one team, returns correct string',function(){
            match.teams.push(new Team('team 1'));
            expect(match.toString()).to.equal('Match: ' + date.toDateString() + ', team 1 vs (not yet defined).');
        });

        it(',with two teams, returns correct string',function(){
            match.teams.push(new Team('team 1'));
            match.teams.push(new Team('team 2'));
            expect(match.toString()).to.equal('Match: ' + date.toDateString() + ', team 1 vs team 2.');
        });

        it(',with two teams and results in, returns correct string',function(){
            match.teams.push(new Team('team 1'));
            match.teams.push(new Team('team 2'));
            match.setResult(7,1);
            expect(match.toString()).to.equal('Match: ' + date.toDateString() + ', team 1 vs team 2, team 1 won (7 to 1).');
        });

    });
});