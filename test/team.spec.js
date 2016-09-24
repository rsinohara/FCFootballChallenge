var Team=require('../models/team.js');
var expect = require('chai').expect;

describe("Team",function(){

    describe("to string",function(){

        it(", with no coach and no players, outputs correct string",function(){
            var team=new Team('name');
            expect(team.toString()).to.equal('Team: name' + ', no coach, no players');
        });
    });
});

