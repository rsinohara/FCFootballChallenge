var Player=require('../models/player.js');
var expect = require('chai').expect;

describe("Player",function(){

  describe("Constructor initialization",function(){

    it("outputs correct string",function(){
      var player=new Player('my-name',1,5);
      expect(player.toString()).to.equal('Player: my-name(1), Skill: 5');
    });

    it("assigns random skill level if none is provided",function(){
      var player=new Player('my-name',1);
      expect(player.skillLevel).to.within(1,10);
    });


    it("assigns random skill level if provided one is invalid",function(){
      var player1=new Player('my-name',1,0);
      var player2=new Player('my-name',1,11);
      expect(player1.skillLevel).to.within(1,10);
      expect(player2.skillLevel).to.within(1,10);
    });

    it("throws if no number is provided",function(){
      var call= function() { var t=new Player('name'); };
      expect(call).to.throw(/Invalid player number/);
    })

    it("throws if invalid number is provided",function(){
      var call1= function() { var t=new Player('name',12); };
      var call2= function() { var t=new Player('name',0); };

      expect(call1).to.throw(/Invalid player number/);
      expect(call2).to.throw(/Invalid player number/);
    })

    it("random skill level is (probably) always in the right range",function(){
      for(var i=0;i<=10000;i++){
        var player=new Player('random player',1);
        expect(player.skillLevel).to.within(1,10);
      }
    });

  });


});
